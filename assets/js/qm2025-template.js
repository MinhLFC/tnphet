/**
 * QM2025 Template Generator & Coordinate Definition
 * Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)
 * Phiếu trả lời trắc nghiệm chuẩn Bộ GD&ĐT 2025: Môn Toán & Môn KHTN/KHXH
 * Chuẩn hóa 1200 x 600 px theo đúng mẫu phiếu Bộ GD&ĐT 2025 thực tế
 */

const QM2025_CONFIG = {
  WIDTH: 1200,
  HEIGHT: 600,
  CORNER_MARKER_SIZE: 26, // Kích thước ô vuông đen định vị góc
  CORNER_PADDING: 18,
};

// Định nghĩa mẫu phiếu và barem chuẩn Bộ GD&ĐT 2025
const QM2025_TEMPLATES = {
  TOAN: {
    id: 'toan',
    name: 'Toán (Phần I: 12 câu | Phần II: 4 câu Đ/S | Phần III: 6 câu trả lời ngắn)',
    subName: 'Phiếu: QM 2025 - Toán - ĐH Sư phạm TP.HCM',
    part1_count: 12,
    part2_count: 4,
    part3_count: 6,
    score_rules: {
      part1_per_question: 0.25, // 12 x 0.25 = 3.0đ
      part2_scale: [0, 0.1, 0.25, 0.5, 1.0], // 4 x 1.0 = 4.0đ
      part3_per_question: 0.5, // 6 x 0.5 = 3.0đ
    }
  },
  KHTN: {
    id: 'khtn',
    name: 'KHTN / KHXH (Phần I: 18 câu | Phần II: 4 câu Đ/S | Phần III: 6 câu trả lời ngắn)',
    subName: 'Phiếu: QM 2025 - Lý, Hóa, Sinh, Địa - ĐH Sư phạm TP.HCM',
    part1_count: 18,
    part2_count: 4,
    part3_count: 6,
    score_rules: {
      part1_per_question: 0.25, // 18 x 0.25 = 4.5đ
      part2_scale: [0, 0.1, 0.25, 0.5, 1.0], // 4 x 1.0 = 4.0đ
      part3_per_question: 0.25, // 6 x 0.25 = 1.5đ
    }
  }
};

class QM2025TemplateRenderer {
  constructor() {
    this.logoImg = null;
    this.logoLoaded = false;
    this.loadLogo();
  }

  loadLogo() {
    this.logoImg = new Image();
    this.logoImg.src = 'assets/images/logo-hcmue.png';
    this.logoImg.onload = () => {
      this.logoLoaded = true;
    };
  }

  /**
   * Sinh bản đồ tọa độ hình học chuẩn xác 100% dựa theo mẫu phiếu QM2025 gốc
   */
  generateGroundTruthGrid(type = 'TOAN') {
    const W = QM2025_CONFIG.WIDTH;
    const H = QM2025_CONFIG.HEIGHT;
    const isKHTN = (type === 'KHTN');
    const radius = 6.8;

    const gridMap = {
      type: type,
      width: W,
      height: H,
      corner_markers: [
        { x: 31, y: 31 },
        { x: W - 31, y: 31 },
        { x: W - 31, y: H - 31 },
        { x: 31, y: H - 31 },
      ],
      made: [],
      sbd: [],
      part1: [],
      part2: [],
      part3: []
    };

    // 1. Mã đề (3 cột, 10 hàng 0-9)
    const madeXCols = [44, 67, 90];
    const madeYRows = [308, 331, 354, 376, 399, 422, 445, 468, 490, 513];
    for (let c = 0; c < 3; c++) {
      for (let r = 0; r <= 9; r++) {
        gridMap.made.push({
          col: c,
          value: r,
          x: madeXCols[c],
          y: madeYRows[r],
          radius: radius
        });
      }
    }

    // 2. SBD (6 cột, 10 hàng 0-9)
    const sbdXCols = [154, 177, 200, 222, 245, 268];
    const sbdYRows = [308, 331, 354, 376, 399, 422, 445, 468, 490, 513];
    for (let c = 0; c < 6; c++) {
      for (let r = 0; r <= 9; r++) {
        gridMap.sbd.push({
          col: c,
          value: r,
          x: sbdXCols[c],
          y: sbdYRows[r],
          radius: radius
        });
      }
    }

    // 3. Phần I
    const p1Opts = ['A', 'B', 'C', 'D'];
    const p1XCols = [344, 367, 390, 412];

    if (!isKHTN) {
      // Toán: 12 câu (286 đến 536, bước ~22.7)
      const p1YRowsToan = [286, 308, 331, 354, 376, 399, 422, 445, 468, 490, 513, 536];
      for (let q = 1; q <= 12; q++) {
        const y = p1YRowsToan[q - 1];
        const bubbles = p1Opts.map((opt, idx) => ({
          option: opt,
          x: p1XCols[idx],
          y: y,
          radius: radius
        }));
        gridMap.part1.push({ question: q, bubbles });
      }
    } else {
      // KHTN: 18 câu
      // Khối 1: Câu 1 đến 9
      const p1YRows1 = [98, 121, 144, 166, 189, 212, 235, 257, 280];
      for (let q = 1; q <= 9; q++) {
        const y = p1YRows1[q - 1];
        const bubbles = p1Opts.map((opt, idx) => ({
          option: opt,
          x: p1XCols[idx],
          y: y,
          radius: radius
        }));
        gridMap.part1.push({ question: q, bubbles });
      }
      // Khối 2: Câu 10 đến 18
      const p1YRows2 = [354, 376, 399, 422, 445, 467, 490, 513, 536];
      for (let q = 10; q <= 18; q++) {
        const y = p1YRows2[q - 10];
        const bubbles = p1Opts.map((opt, idx) => ({
          option: opt,
          x: p1XCols[idx],
          y: y,
          radius: radius
        }));
        gridMap.part1.push({ question: q, bubbles });
      }
    }

    // 4. Phần II (4 câu, mỗi câu 4 ý a,b,c,d, 2 cột Đ, S)
    const p2Cols = [
      { d: 718, s: 744 },
      { d: 824, s: 850 },
      { d: 930, s: 956 },
      { d: 1036, s: 1062 }
    ];
    const p2SubItems = ['a', 'b', 'c', 'd'];
    const p2YRows = [112, 138, 164, 190];

    for (let c = 1; c <= 4; c++) {
      const colX = p2Cols[c - 1];
      const items = [];
      p2SubItems.forEach((sub, sIdx) => {
        const y = p2YRows[sIdx];
        items.push({
          subItem: sub,
          d_bubble: { value: 'D', x: colX.d, y: y, radius: radius },
          s_bubble: { value: 'S', x: colX.s, y: y, radius: radius }
        });
      });
      gridMap.part2.push({ question: c, items });
    }

    // 5. Phần III (6 câu trả lời ngắn)
    const p3StartX = 480;
    const p3StepQ = 114;
    const p3DigitStep = 23;
    const p3YRows = [286, 308, 331, 354, 376, 399, 422, 445, 468, 490, 513, 536]; // - , 0 1 2 3 4 5 6 7 8 9

    for (let q = 1; q <= 6; q++) {
      const qBaseX = p3StartX + (q - 1) * p3StepQ;
      const colDigits = [];

      for (let d = 0; d < 4; d++) {
        const digitX = qBaseX + d * p3DigitStep;
        const bubbles = [];

        // Hàng 0: Dấu '-' (chỉ có ở cột 0)
        if (d === 0) {
          bubbles.push({ char: '-', x: digitX, y: p3YRows[0], radius: radius });
        }

        // Hàng 1: Dấu ','
        bubbles.push({ char: ',', x: digitX, y: p3YRows[1], radius: radius });

        // Hàng 2 đến 11: Số 0 đến 9
        for (let n = 0; n <= 9; n++) {
          bubbles.push({ char: n.toString(), x: digitX, y: p3YRows[n + 2], radius: radius });
        }

        colDigits.push({ digitIndex: d, bubbles });
      }

      gridMap.part3.push({ question: q, columns: colDigits });
    }

    return gridMap;
  }

  /**
   * Vẽ phiếu thi hoàn chỉnh lên một HTML5 Canvas
   */
  renderToCanvas(canvas, type = 'TOAN', customInfo = {}) {
    const W = QM2025_CONFIG.WIDTH;
    const H = QM2025_CONFIG.HEIGHT;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const gridMap = this.generateGroundTruthGrid(type);
    const isKHTN = (type === 'KHTN');
    const tConfig = QM2025_TEMPLATES[type] || QM2025_TEMPLATES.TOAN;

    // Nền trắng
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);

    // Khung viền ngoài
    const p = QM2025_CONFIG.CORNER_PADDING;
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(p, p, W - 2 * p, H - 2 * p);

    // 4 ô vuông định vị góc đen
    const mSize = QM2025_CONFIG.CORNER_MARKER_SIZE;
    ctx.fillStyle = '#000000';
    ctx.fillRect(p, p, mSize, mSize); // TL
    ctx.fillRect(W - p - mSize, p, mSize, mSize); // TR
    ctx.fillRect(p, H - p - mSize, mSize, mSize); // BL
    ctx.fillRect(W - p - mSize, H - p - mSize, mSize, mSize); // BR

    // Đường kẻ phân khối lớn
    ctx.beginPath();
    ctx.lineWidth = 1.2;
    // Đường ngang chính: y = 250
    ctx.moveTo(p, 250);
    ctx.lineTo(W - p, 250);

    // Đường dọc ngăn Header và Phần II: x = 650
    ctx.moveTo(650, p);
    ctx.lineTo(650, 250);

    // Đường dọc ngăn Mã Đề và SBD: x = 125
    ctx.moveTo(125, 250);
    ctx.lineTo(125, H - p);

    // Đường dọc ngăn SBD và Phần I: x = 300
    ctx.moveTo(300, 250);
    ctx.lineTo(300, H - p);

    if (!isKHTN) {
      // Đường dọc ngăn Phần I và Phần III (Toán): x = 445
      ctx.moveTo(445, 250);
      ctx.lineTo(445, H - p);
    } else {
      // Môn KHTN: Phần I nhô lên Header từ y = 65
      ctx.moveTo(300, 65);
      ctx.lineTo(445, 65);
      ctx.moveTo(445, 65);
      ctx.lineTo(445, H - p);
    }
    ctx.stroke();

    // ==========================================
    // 1. HEADER & LOGO HCMUE
    // ==========================================
    const logoX = 60;
    const logoY = 32;
    const logoSize = 56;
    if (this.logoLoaded && this.logoImg) {
      try {
        ctx.drawImage(this.logoImg, logoX, logoY, logoSize, logoSize);
      } catch (e) {}
    }

    ctx.fillStyle = '#0054a6';
    ctx.font = 'bold 14px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('TRƯỜNG ĐẠI HỌC SƯ PHẠM TP. HỒ CHÍ MINH', logoX + logoSize + 12, logoY + 4);

    ctx.fillStyle = '#475569';
    ctx.font = '600 11px "Be Vietnam Pro", Arial, sans-serif';
    ctx.fillText('TRUNG TÂM KHẢO THÍ & ĐÁNH GIÁ CHẤT LƯỢNG GIÁO DỤC', logoX + logoSize + 12, logoY + 24);

    // Các dòng điền thông tin học sinh
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 13px "Be Vietnam Pro", Arial, sans-serif';
    const textStartX = 60;
    const lineEnd = isKHTN ? 290 : 435;

    // Họ tên
    ctx.fillText('HỌ TÊN:', textStartX, 108);
    this.drawDottedLine(ctx, textStartX + 60, 118, lineEnd, 118);

    // Lớp
    ctx.fillText('LỚP:', textStartX, 148);
    this.drawDottedLine(ctx, textStartX + 42, 158, textStartX + 200, 158);

    // Môn
    ctx.fillText('MÔN:', textStartX, 188);
    this.drawDottedLine(ctx, textStartX + 48, 198, textStartX + 200, 198);

    // Ô Điểm
    const boxX = isKHTN ? 340 : 460;
    const boxY = isKHTN ? 140 : 130;
    const boxW = 85;
    const boxH = 68;
    ctx.strokeRect(boxX, boxY, boxW, boxH);
    ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ĐIỂM:', boxX + boxW / 2, boxY + 16);

    // ==========================================
    // 2. MÃ ĐỀ
    // ==========================================
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MÃ ĐỀ', 72, 268);

    // 3 ô vuông viết số mã đề
    for (let c = 0; c < 3; c++) {
      ctx.strokeRect(34 + c * 23, 276, 20, 24);
    }
    // Vẽ bóng và nhãn số hàng 0-9
    for (let r = 0; r <= 9; r++) {
      const by = gridMap.made[r].y;
      ctx.textAlign = 'right';
      ctx.font = 'bold 11px Arial, sans-serif';
      ctx.fillText(r.toString(), 28, by + 4);
    }
    gridMap.made.forEach(b => this.drawBubble(ctx, b.x, b.y, b.radius));

    // ==========================================
    // 3. SỐ BÁO DANH (6 CỘT)
    // ==========================================
    ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SỐ BÁO DANH', 211, 268);

    // Mốc vuông đen cạnh SBD
    ctx.fillRect(135, 276, 12, 12);
    ctx.fillRect(135, 526, 12, 12);

    for (let c = 0; c < 6; c++) {
      ctx.strokeRect(144 + c * 23, 276, 20, 24);
    }
    for (let r = 0; r <= 9; r++) {
      const by = gridMap.sbd[r].y;
      ctx.textAlign = 'right';
      ctx.font = 'bold 11px Arial, sans-serif';
      ctx.fillText(r.toString(), 148, by + 4);
    }
    gridMap.sbd.forEach(b => this.drawBubble(ctx, b.x, b.y, b.radius));

    // ==========================================
    // 4. PHẦN I
    // ==========================================
    ctx.font = 'bold 13px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'center';
    if (!isKHTN) {
      ctx.fillText('PHẦN I', 378, 268);
      ctx.fillRect(310, 276, 11, 11);
      ctx.fillRect(310, 526, 11, 11);

      ['A', 'B', 'C', 'D'].forEach((opt, idx) => {
        ctx.font = 'bold 11px Arial, sans-serif';
        ctx.fillText(opt, 344 + idx * 23, 280);
      });
      for (let q = 1; q <= 12; q++) {
        const y = gridMap.part1[q - 1].bubbles[0].y;
        ctx.textAlign = 'right';
        ctx.font = 'bold 10px Arial, sans-serif';
        ctx.fillText(q.toString(), 332, y + 3);
      }
    } else {
      ctx.fillText('PHẦN I', 378, 80);
      ctx.fillRect(310, 92, 10, 10);
      ctx.fillRect(310, 348, 10, 10);

      ['A', 'B', 'C', 'D'].forEach((opt, idx) => {
        ctx.font = 'bold 11px Arial, sans-serif';
        ctx.fillText(opt, 344 + idx * 23, 92);
        ctx.fillText(opt, 344 + idx * 23, 348);
      });
      for (let q = 1; q <= 18; q++) {
        const y = gridMap.part1[q - 1].bubbles[0].y;
        ctx.textAlign = 'right';
        ctx.font = 'bold 10px Arial, sans-serif';
        ctx.fillText(q.toString(), 332, y + 3);
      }
    }
    gridMap.part1.forEach(q => q.bubbles.forEach(b => this.drawBubble(ctx, b.x, b.y, b.radius)));

    // ==========================================
    // 5. PHẦN II (ĐÚNG / SAI 4 Ý)
    // ==========================================
    ctx.font = 'bold 13px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('PHẦN II', 665, 45);

    const subItemLabels = ['a)', 'b)', 'c)', 'd)'];
    gridMap.part2.forEach((q, cIdx) => {
      const qNum = q.question;
      const refItem = q.items[0];
      const mX = refItem.d_bubble.x - 38;

      ctx.fillRect(mX, 68, 11, 11);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Câu ${qNum}`, mX + 18, 77);

      ctx.font = 'bold 11px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Đ', refItem.d_bubble.x, 96);
      ctx.fillText('S', refItem.s_bubble.x, 96);

      q.items.forEach((item, sIdx) => {
        ctx.textAlign = 'right';
        ctx.font = '11px Arial, sans-serif';
        ctx.fillText(subItemLabels[sIdx], refItem.d_bubble.x - 14, item.d_bubble.y + 3);

        this.drawBubble(ctx, item.d_bubble.x, item.d_bubble.y, item.d_bubble.radius);
        this.drawBubble(ctx, item.s_bubble.x, item.s_bubble.y, item.s_bubble.radius);
      });
    });

    // ==========================================
    // 6. PHẦN III (TRẢ LỜI NGẮN 6 CÂU)
    // ==========================================
    ctx.font = 'bold 13px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('PHẦN III', 455, 268);

    gridMap.part3.forEach(q => {
      const qNum = q.question;
      const qBaseX = q.columns[0].bubbles[0].x - 10;

      ctx.fillRect(qBaseX - 16, 276, 11, 11);
      ctx.fillRect(qBaseX - 16, 526, 11, 11);

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Câu ${qNum}`, qBaseX + 42, 268);

      // 4 ô vuông viết số
      for (let d = 0; d < 4; d++) {
        ctx.strokeRect(qBaseX + d * 23, 276, 20, 24);
      }

      // Nhãn các hàng: -, ,, 0-9
      ctx.textAlign = 'right';
      ctx.font = 'bold 11px Arial, sans-serif';
      ctx.fillText('-', qBaseX - 4, 290);
      ctx.fillText(',', qBaseX - 4, 312);
      for (let n = 0; n <= 9; n++) {
        ctx.fillText(n.toString(), qBaseX - 4, 335 + n * 22.8);
      }

      q.columns.forEach(col => {
        col.bubbles.forEach(b => this.drawBubble(ctx, b.x, b.y, b.radius));
      });
    });

    // Footer
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px "Be Vietnam Pro", Arial, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(tConfig.subName, W - p - mSize - 20, H - p - 16);
    ctx.strokeRect(W - p - mSize - 310, H - p - 28, 295, 24);

    return gridMap;
  }

  drawDottedLine(ctx, x1, y1, x2, y2) {
    ctx.save();
    ctx.setLineDash([2, 4]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#333333';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  drawBubble(ctx, x, y, r) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.lineWidth = 1.1;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.restore();
  }

  async exportPDF(type = 'TOAN', paperSize = 'A4', customInfo = {}) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert('Thư viện jsPDF chưa sẵn sàng.');
      return;
    }
    const { jsPDF } = window.jspdf;

    const tempCanvas = document.createElement('canvas');
    this.renderToCanvas(tempCanvas, type, customInfo);
    const imgData = tempCanvas.toDataURL('image/png', 1.0);

    let doc;
    if (paperSize === 'A4') {
      doc = new jsPDF({ orientation: 'portrait', format: 'a4', unit: 'mm' });
      const pW = 196;
      const pH = 98;
      const marginX = (210 - pW) / 2;
      const marginY1 = 18;
      const marginY2 = 160;

      // Phiếu 1
      doc.addImage(imgData, 'PNG', marginX, marginY1, pW, pH);

      // Đường cắt nét đứt
      doc.setLineDashPattern([2, 2], 0);
      doc.setDrawColor(150, 150, 150);
      doc.line(10, 148.5, 200, 148.5);
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text('✂ Cắt theo đường nét đứt để chia thành 2 phiếu A5', 105, 147, { align: 'center' });

      // Phiếu 2
      doc.addImage(imgData, 'PNG', marginX, marginY2, pW, pH);
      doc.save(`Phieu_Thi_QM2025_${type}_A4_2Phieu_HCMUE.pdf`);
    } else {
      doc = new jsPDF({ orientation: 'landscape', format: 'a5', unit: 'mm' });
      const pW = 196;
      const pH = 98;
      const marginX = (210 - pW) / 2;
      const marginY = (148 - pH) / 2;

      doc.addImage(imgData, 'PNG', marginX, marginY, pW, pH);
      doc.save(`Phieu_Thi_QM2025_${type}_A5_HCMUE.pdf`);
    }
  }
}

window.qm2025Renderer = new QM2025TemplateRenderer();
