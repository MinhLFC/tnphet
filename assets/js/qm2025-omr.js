/**
 * QM2025 OMR (Optical Mark Recognition) Engine
 * Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)
 * Thuật toán quang học offline on-device, nhận dạng 4 góc mốc định vị,
 * nắn phối cảnh và đo mật độ tô chì chính xác.
 */

class QM2025OMREngine {
  constructor() {
    this.templateType = 'TOAN'; // 'TOAN' hoặc 'KHTN'
    this.targetWidth = QM2025_CONFIG.WIDTH;
    this.targetHeight = QM2025_CONFIG.HEIGHT;
    this.minFillRatio = 0.38; // Ngưỡng tối thiểu xem là ô đã tô chì
    this.isOpenCvReady = false;
    this.initOpenCVCheck();
  }

  initOpenCVCheck() {
    const checkCV = () => {
      if (window.cv && window.cv.Mat) {
        this.isOpenCvReady = true;
        console.log('[OMR Engine] OpenCV.js đã sẵn sàng!');
      } else {
        setTimeout(checkCV, 300);
      }
    };
    checkCV();
  }

  setTemplateType(type) {
    if (QM2025_TEMPLATES[type]) {
      this.templateType = type;
    }
  }

  /**
   * Chấm điểm bài thi từ một Canvas hoặc Image Element
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} sourceMedia
   * @param {Object} answerKeys Danh sách đáp án các mã đề
   * @param {Object} options Cấu hình nâng cao
   * @returns {Object} Kết quả chấm chi tiết
   */
  async processSheet(sourceMedia, answerKeys = {}, options = {}) {
    const startTime = performance.now();

    // 1. Tạo Canvas làm việc và nắn phẳng phối cảnh (Perspective Warping)
    const warpedCanvas = document.createElement('canvas');
    warpedCanvas.width = this.targetWidth;
    warpedCanvas.height = this.targetHeight;
    const warpedCtx = warpedCanvas.getContext('2d');

    let transformSuccess = false;
    let detectedCorners = null;

    if (this.isOpenCvReady && options.autoWarp !== false) {
      try {
        const warpRes = this.warpWithOpenCV(sourceMedia, warpedCanvas);
        transformSuccess = warpRes.success;
        detectedCorners = warpRes.corners;
      } catch (err) {
        console.warn('[OMR Engine] Lỗi khi nắn phối cảnh bằng OpenCV, dùng fallback:', err);
      }
    }

    if (!transformSuccess) {
      // Fallback: scale trực tiếp ảnh vào canvas chuẩn
      warpedCtx.drawImage(sourceMedia, 0, 0, this.targetWidth, this.targetHeight);
    }

    // 2. Lấy Grid Coordinates chuẩn từ Template Renderer
    const tempCanvas = document.createElement('canvas');
    const gridMap = window.qm2025Renderer.renderToCanvas(tempCanvas, this.templateType);

    // 3. Phân tích Pixel của ảnh đã nắn
    const imgData = warpedCtx.getImageData(0, 0, this.targetWidth, this.targetHeight);
    const grayPixels = this.toGrayscaleArray(imgData);

    // 4. Đọc Mã Đề
    const madeResult = this.readMaDe(grayPixels, gridMap.made);

    // 5. Đọc Số Báo Danh (SBD)
    const sbdResult = this.readSBD(grayPixels, gridMap.sbd);

    // 6. Đọc Phần I
    const part1Result = this.readPart1(grayPixels, gridMap.part1);

    // 7. Đọc Phần II
    const part2Result = this.readPart2(grayPixels, gridMap.part2);

    // 8. Đọc Phần III
    const part3Result = this.readPart3(grayPixels, gridMap.part3);

    // 9. So khớp đáp án và tính điểm theo barem Bộ GD&ĐT 2025
    const scoreResult = this.calculateScore(
      madeResult.code, 
      part1Result, 
      part2Result, 
      part3Result, 
      answerKeys
    );

    // 10. Vẽ trực quan hóa bài chấm (Overlay đánh dấu xanh/đỏ)
    const annotatedCanvas = document.createElement('canvas');
    annotatedCanvas.width = this.targetWidth;
    annotatedCanvas.height = this.targetHeight;
    const annoCtx = annotatedCanvas.getContext('2d');
    annoCtx.drawImage(warpedCanvas, 0, 0);
    this.drawAnnotations(annoCtx, gridMap, scoreResult);

    const elapsedMs = Math.round(performance.now() - startTime);

    return {
      success: true,
      timeMs: elapsedMs,
      templateType: this.templateType,
      made: madeResult.code,
      madeConfident: madeResult.isConfident,
      sbd: sbdResult.code,
      sbdConfident: sbdResult.isConfident,
      part1: part1Result,
      part2: part2Result,
      part3: part3Result,
      score: scoreResult,
      annotatedImageDataUrl: annotatedCanvas.toDataURL('image/jpeg', 0.85),
      corners: detectedCorners
    };
  }

  /**
   * Tự động dò 4 góc ô vuông định vị và nắn phối cảnh bằng OpenCV.js
   */
  warpWithOpenCV(sourceMedia, targetCanvas) {
    const cv = window.cv;
    // Đọc ảnh vào Mat
    let src = cv.imread(sourceMedia);
    let gray = new cv.Mat();
    let blur = new cv.Mat();
    let thresh = new cv.Mat();

    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    cv.GaussianBlur(gray, blur, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT);
    cv.adaptiveThreshold(blur, thresh, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 15, 4);

    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(thresh, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // Tìm các ứng viên là ô vuông định vị màu đen ở 4 góc
    let candidateBoxes = [];
    const minArea = 100;
    const maxArea = (src.cols * src.rows) * 0.05;

    for (let i = 0; i < contours.size(); ++i) {
      let cnt = contours.get(i);
      let area = cv.contourArea(cnt);
      if (area > minArea && area < maxArea) {
        let rect = cv.boundingRect(cnt);
        let aspect = rect.width / rect.height;
        // Ô vuông có tỉ lệ gần 1.0 (0.75 -> 1.3)
        if (aspect >= 0.75 && aspect <= 1.3) {
          candidateBoxes.push({
            cx: rect.x + rect.width / 2,
            cy: rect.y + rect.height / 2,
            area: area,
            rect: rect
          });
        }
      }
      cnt.delete();
    }

    // Nếu tìm thấy đủ mốc góc hoặc tìm khung bao lớn nhất của toàn tờ phiếu
    let corners = null;
    if (candidateBoxes.length >= 4) {
      // Phân bổ 4 góc: Top-Left, Top-Right, Bottom-Right, Bottom-Left
      corners = this.extractFourCorners(candidateBoxes, src.cols, src.rows);
    }

    let success = false;
    if (corners) {
      let srcCoords = cv.matFromArray(4, 1, cv.CV_32FC2, [
        corners.tl.x, corners.tl.y,
        corners.tr.x, corners.tr.y,
        corners.br.x, corners.br.y,
        corners.bl.x, corners.bl.y
      ]);

      let dstCoords = cv.matFromArray(4, 1, cv.CV_32FC2, [
        QM2025_CONFIG.CORNER_PADDING + QM2025_CONFIG.CORNER_MARKER_SIZE / 2, QM2025_CONFIG.CORNER_PADDING + QM2025_CONFIG.CORNER_MARKER_SIZE / 2,
        this.targetWidth - QM2025_CONFIG.CORNER_PADDING - QM2025_CONFIG.CORNER_MARKER_SIZE / 2, QM2025_CONFIG.CORNER_PADDING + QM2025_CONFIG.CORNER_MARKER_SIZE / 2,
        this.targetWidth - QM2025_CONFIG.CORNER_PADDING - QM2025_CONFIG.CORNER_MARKER_SIZE / 2, this.targetHeight - QM2025_CONFIG.CORNER_PADDING - QM2025_CONFIG.CORNER_MARKER_SIZE / 2,
        QM2025_CONFIG.CORNER_PADDING + QM2025_CONFIG.CORNER_MARKER_SIZE / 2, this.targetHeight - QM2025_CONFIG.CORNER_PADDING - QM2025_CONFIG.CORNER_MARKER_SIZE / 2
      ]);

      let M = cv.getPerspectiveTransform(srcCoords, dstCoords);
      let dsize = new cv.Size(this.targetWidth, this.targetHeight);
      let warpedMat = new cv.Mat();
      cv.warpPerspective(src, warpedMat, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());

      cv.imshow(targetCanvas, warpedMat);

      srcCoords.delete();
      dstCoords.delete();
      M.delete();
      warpedMat.delete();
      success = true;
    }

    // Dọn dẹp bộ nhớ OpenCV C++ Mat
    src.delete();
    gray.delete();
    blur.delete();
    thresh.delete();
    contours.delete();
    hierarchy.delete();

    return { success: success, corners: corners };
  }

  /**
   * Phân chia ứng viên vào 4 góc phần tư của ảnh
   */
  extractFourCorners(boxes, W, H) {
    let tl = null, tr = null, br = null, bl = null;
    let minTL = Infinity, minTR = Infinity, minBR = Infinity, minBL = Infinity;

    for (let b of boxes) {
      // Khoảng cách tới góc trên-trái (0, 0)
      let dTL = b.cx * b.cx + b.cy * b.cy;
      if (dTL < minTL) { minTL = dTL; tl = { x: b.cx, y: b.cy }; }

      // Góc trên-phải (W, 0)
      let dTR = (W - b.cx) * (W - b.cx) + b.cy * b.cy;
      if (dTR < minTR) { minTR = dTR; tr = { x: b.cx, y: b.cy }; }

      // Góc dưới-phải (W, H)
      let dBR = (W - b.cx) * (W - b.cx) + (H - b.cy) * (H - b.cy);
      if (dBR < minBR) { minBR = dBR; br = { x: b.cx, y: b.cy }; }

      // Góc dưới-trái (0, H)
      let dBL = b.cx * b.cx + (H - b.cy) * (H - b.cy);
      if (dBL < minBL) { minBL = dBL; bl = { x: b.cx, y: b.cy }; }
    }

    if (tl && tr && br && bl) {
      return { tl, tr, br, bl };
    }
    return null;
  }

  /**
   * Chuyển ImageData thành mảng Grayscale Uint8
   */
  toGrayscaleArray(imgData) {
    const data = imgData.data;
    const len = data.length / 4;
    const gray = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      const idx = i * 4;
      // Trọng số Rec. 601: 0.299 R + 0.587 G + 0.114 B
      gray[i] = (data[idx] * 299 + data[idx + 1] * 587 + data[idx + 2] * 114) / 1000;
    }
    return gray;
  }

  /**
   * Đo tỉ lệ độ đậm (Fill Ratio) của vùng trong ô tròn
   * Chỉ quét vùng bán kính bên trong (0.7 * radius) để không bị dính nét in viền tròn
   */
  calculateBubbleFill(grayPixels, cx, cy, radius) {
    const W = this.targetWidth;
    const H = this.targetHeight;
    const innerR = radius * 0.72;
    const rSq = innerR * innerR;

    let darkPixels = 0;
    let totalSampled = 0;
    let sumIntensity = 0;

    const startX = Math.max(0, Math.floor(cx - innerR));
    const endX = Math.min(W - 1, Math.ceil(cx + innerR));
    const startY = Math.max(0, Math.floor(cy - innerR));
    const endY = Math.min(H - 1, Math.ceil(cy + innerR));

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const dx = x - cx;
        const dy = y - cy;
        if (dx * dx + dy * dy <= rSq) {
          const val = grayPixels[y * W + x];
          sumIntensity += val;
          // Ngưỡng tối coi là nét chì đậm: val < 135
          if (val < 135) {
            darkPixels++;
          }
          totalSampled++;
        }
      }
    }

    if (totalSampled === 0) return { fillRatio: 0, avgIntensity: 255 };
    return {
      fillRatio: darkPixels / totalSampled,
      avgIntensity: sumIntensity / totalSampled
    };
  }

  // --- Đọc Mã Đề (3 cột) ---
  readMaDe(grayPixels, madeGrid) {
    const cols = [[], [], []];
    madeGrid.forEach(item => {
      const fill = this.calculateBubbleFill(grayPixels, item.x, item.y, item.radius);
      cols[item.col].push({
        value: item.value,
        fillRatio: fill.fillRatio,
        avgIntensity: fill.avgIntensity,
        x: item.x,
        y: item.y
      });
    });

    let code = '';
    let isConfident = true;

    for (let c = 0; c < 3; c++) {
      // Sắp xếp theo fillRatio giảm dần
      cols[c].sort((a, b) => b.fillRatio - a.fillRatio);
      const best = cols[c][0];
      const second = cols[c][1];

      // Nếu ô cao nhất có fillRatio > ngưỡng và cách biệt rõ với ô thứ 2
      if (best.fillRatio >= this.minFillRatio && (best.fillRatio - second.fillRatio > 0.15)) {
        code += best.value.toString();
      } else if (best.fillRatio >= 0.3) {
        code += best.value.toString();
        isConfident = false;
      } else {
        code += '?';
        isConfident = false;
      }
    }

    return { code, isConfident, details: cols };
  }

  // --- Đọc Số Báo Danh (6 cột) ---
  readSBD(grayPixels, sbdGrid) {
    const cols = [[], [], [], [], [], []];
    sbdGrid.forEach(item => {
      const fill = this.calculateBubbleFill(grayPixels, item.x, item.y, item.radius);
      cols[item.col].push({
        value: item.value,
        fillRatio: fill.fillRatio,
        avgIntensity: fill.avgIntensity,
        x: item.x,
        y: item.y
      });
    });

    let code = '';
    let isConfident = true;

    for (let c = 0; c < 6; c++) {
      cols[c].sort((a, b) => b.fillRatio - a.fillRatio);
      const best = cols[c][0];
      const second = cols[c][1];

      if (best.fillRatio >= this.minFillRatio && (best.fillRatio - second.fillRatio > 0.15)) {
        code += best.value.toString();
      } else if (best.fillRatio >= 0.28) {
        code += best.value.toString();
        isConfident = false;
      } else {
        code += '0'; // Mặc định nếu để trống
      }
    }

    return { code, isConfident, details: cols };
  }

  // --- Đọc Phần I (Nhiều lựa chọn) ---
  readPart1(grayPixels, part1Grid) {
    const results = {};

    part1Grid.forEach(q => {
      const opts = [];
      q.bubbles.forEach(b => {
        const fill = this.calculateBubbleFill(grayPixels, b.x, b.y, b.radius);
        opts.push({
          option: b.option,
          fillRatio: fill.fillRatio,
          avgIntensity: fill.avgIntensity,
          x: b.x,
          y: b.y
        });
      });

      // Sắp xếp tìm ô tô đậm nhất
      opts.sort((a, b) => b.fillRatio - a.fillRatio);
      const best = opts[0];
      const second = opts[1];

      let selected = null;
      let status = 'BLANK';

      if (best.fillRatio >= this.minFillRatio) {
        if (second.fillRatio >= this.minFillRatio * 0.85) {
          // Tô 2 ô cùng lúc
          status = 'MULTIPLE';
          selected = best.option;
        } else {
          status = 'FILLED';
          selected = best.option;
        }
      }

      results[q.question] = {
        selected: selected,
        status: status,
        bestFill: best.fillRatio,
        options: opts
      };
    });

    return results;
  }

  // --- Đọc Phần II (Đúng / Sai) ---
  readPart2(grayPixels, part2Grid) {
    const results = {};

    part2Grid.forEach(q => {
      const subResults = {};
      q.items.forEach(item => {
        const dFill = this.calculateBubbleFill(grayPixels, item.d_bubble.x, item.d_bubble.y, item.d_bubble.radius);
        const sFill = this.calculateBubbleFill(grayPixels, item.s_bubble.x, item.s_bubble.y, item.s_bubble.radius);

        let choice = null;
        if (dFill.fillRatio >= this.minFillRatio && sFill.fillRatio >= this.minFillRatio) {
          choice = 'MULTIPLE';
        } else if (dFill.fillRatio >= this.minFillRatio && dFill.fillRatio > sFill.fillRatio + 0.12) {
          choice = 'D'; // Đúng
        } else if (sFill.fillRatio >= this.minFillRatio && sFill.fillRatio > dFill.fillRatio + 0.12) {
          choice = 'S'; // Sai
        } else {
          choice = 'BLANK';
        }

        subResults[item.subItem] = {
          choice: choice,
          dFill: dFill.fillRatio,
          sFill: sFill.fillRatio,
          dCoord: { x: item.d_bubble.x, y: item.d_bubble.y },
          sCoord: { x: item.s_bubble.x, y: item.s_bubble.y }
        };
      });

      results[q.question] = subResults;
    });

    return results;
  }

  // --- Đọc Phần III (Trả lời ngắn 6 câu) ---
  readPart3(grayPixels, part3Grid) {
    const results = {};

    part3Grid.forEach(q => {
      let rawString = '';
      const colDetails = [];

      q.columns.forEach(col => {
        const scoredBubbles = [];
        col.bubbles.forEach(b => {
          const fill = this.calculateBubbleFill(grayPixels, b.x, b.y, b.radius);
          scoredBubbles.push({
            char: b.char,
            fillRatio: fill.fillRatio,
            avgIntensity: fill.avgIntensity,
            x: b.x,
            y: b.y
          });
        });

        scoredBubbles.sort((a, b) => b.fillRatio - a.fillRatio);
        const best = scoredBubbles[0];

        let chosenChar = '';
        if (best.fillRatio >= this.minFillRatio) {
          chosenChar = best.char;
        }

        rawString += chosenChar;
        colDetails.push({ chosen: chosenChar, bubbles: scoredBubbles });
      });

      // Chuẩn hóa chuỗi số: thay dấu phẩy bằng dấu chấm
      const normalizedString = rawString.replace(',', '.').trim();

      results[q.question] = {
        raw: rawString,
        normalized: normalizedString,
        columns: colDetails
      };
    });

    return results;
  }

  /**
   * Tính điểm theo Quy chế Bộ GD&ĐT 2025
   */
  calculateScore(made, part1Data, part2Data, part3Data, answerKeys = {}) {
    const key = answerKeys[made] || answerKeys['default'] || null;
    const tConfig = QM2025_TEMPLATES[this.templateType] || QM2025_TEMPLATES.TOAN;
    const rules = tConfig.score_rules;

    let part1Score = 0;
    let part2Score = 0;
    let part3Score = 0;

    const part1Details = {};
    const part2Details = {};
    const part3Details = {};

    if (!key) {
      return {
        hasKey: false,
        totalScore: 0,
        part1Score: 0,
        part2Score: 0,
        part3Score: 0,
        note: `Chưa có đáp án cho mã đề ${made}`
      };
    }

    // 1. Chấm Phần I (Mỗi câu đúng cộng rules.part1_per_question)
    const p1Count = tConfig.part1_count;
    let p1CorrectCount = 0;
    for (let i = 1; i <= p1Count; i++) {
      const studentAns = part1Data[i] ? part1Data[i].selected : null;
      const keyAns = key.part1 ? key.part1[i] : null;
      const isCorrect = (studentAns && keyAns && studentAns === keyAns);

      if (isCorrect) {
        part1Score += rules.part1_per_question;
        p1CorrectCount++;
      }

      part1Details[i] = {
        student: studentAns,
        key: keyAns,
        isCorrect: isCorrect,
        points: isCorrect ? rules.part1_per_question : 0
      };
    }

    // 2. Chấm Phần II (4 câu Đúng/Sai tính theo barem bậc thang: 0.1, 0.25, 0.5, 1.0)
    for (let c = 1; c <= 4; c++) {
      const qStudent = part2Data[c] || {};
      const qKey = key.part2 ? key.part2[c] : {};

      let correctSubCount = 0;
      const subDetails = {};

      ['a', 'b', 'c', 'd'].forEach(sub => {
        const studentChoice = qStudent[sub] ? qStudent[sub].choice : null;
        const keyChoice = qKey ? qKey[sub] : null;
        const isSubCorrect = (studentChoice && keyChoice && studentChoice === keyChoice);

        if (isSubCorrect) correctSubCount++;
        subDetails[sub] = {
          student: studentChoice,
          key: keyChoice,
          isCorrect: isSubCorrect
        };
      });

      // Áp dụng thang điểm Bộ GD&ĐT 2025
      const qPoints = rules.part2_scale[correctSubCount] || 0;
      part2Score += qPoints;

      part2Details[c] = {
        correctSubCount: correctSubCount,
        points: qPoints,
        subItems: subDetails
      };
    }

    // 3. Chấm Phần III (6 câu trả lời ngắn)
    for (let q = 1; q <= 6; q++) {
      const studentAnsObj = part3Data[q] || {};
      const studentVal = studentAnsObj.normalized || '';
      const keyVal = key.part3 ? key.part3[q] : '';

      // So sánh số học chính xác (ví dụ "0.5" bằng "0.50" hoặc "1/2")
      let isCorrect = false;
      if (studentVal && keyVal) {
        if (studentVal.toLowerCase() === keyVal.toString().toLowerCase()) {
          isCorrect = true;
        } else {
          const numS = parseFloat(studentVal);
          const numK = parseFloat(keyVal);
          if (!isNaN(numS) && !isNaN(numK) && Math.abs(numS - numK) < 0.0001) {
            isCorrect = true;
          }
        }
      }

      if (isCorrect) {
        part3Score += rules.part3_per_question;
      }

      part3Details[q] = {
        student: studentVal,
        key: keyVal,
        isCorrect: isCorrect,
        points: isCorrect ? rules.part3_per_question : 0
      };
    }

    // Tổng điểm làm tròn 2 chữ số thập phân
    const totalScore = Math.round((part1Score + part2Score + part3Score) * 100) / 100;

    return {
      hasKey: true,
      totalScore: totalScore,
      part1Score: Math.round(part1Score * 100) / 100,
      part2Score: Math.round(part2Score * 100) / 100,
      part3Score: Math.round(part3Score * 100) / 100,
      p1CorrectCount: p1CorrectCount,
      part1Details: part1Details,
      part2Details: part2Details,
      part3Details: part3Details
    };
  }

  /**
   * Vẽ lớp phủ trực quan hóa các câu đúng/sai lên ảnh bài thi
   */
  drawAnnotations(ctx, gridMap, scoreResult) {
    if (!scoreResult || !scoreResult.hasKey) return;

    ctx.save();

    // 1. Vẽ Phần I
    gridMap.part1.forEach(q => {
      const qDetail = scoreResult.part1Details[q.question];
      if (!qDetail) return;

      q.bubbles.forEach(b => {
        // Nếu học sinh chọn ô này
        if (b.option === qDetail.student) {
          if (qDetail.isCorrect) {
            // Đúng: viền xanh lá đậm
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.radius + 3, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Sai: gạch chéo đỏ
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.radius + 3, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Vẽ đáp án đúng (nếu học sinh làm sai)
        if (!qDetail.isCorrect && b.option === qDetail.key) {
          ctx.strokeStyle = '#2563eb'; // Xanh dương chỉ đáp án chuẩn
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius + 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    });

    // 2. Vẽ Điểm số lớn vào ô ĐIỂM
    const isKHTN = (this.templateType === 'KHTN');
    const boxX = isKHTN ? 380 : 515;
    const boxY = isKHTN ? 140 : 130;
    const boxW = 105;
    const boxH = 75;

    ctx.fillStyle = '#dc2626'; // Đỏ chấm thi
    ctx.font = 'bold 36px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(scoreResult.totalScore.toFixed(2), boxX + boxW / 2, boxY + boxH / 2 + 10);

    ctx.restore();
  }
}

// Khởi tạo đối tượng toàn cục
window.qm2025OMR = new QM2025OMREngine();
