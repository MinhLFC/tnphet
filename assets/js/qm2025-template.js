/**
 * QM2025 Template Generator & Coordinate Definition
 * Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)
 * Phiếu trả lời trắc nghiệm chuẩn Bộ GD&ĐT 2025: Môn Toán & Môn KHTN/KHXH
 * Sử dụng phôi gốc chính thức kèm Logo Đại học Sư phạm TP.HCM sắc nét, không bị lỗi đè chữ
 */

const QM2025_CONFIG = {
  WIDTH: 1024,
  HEIGHT: 550,
  CORNER_MARKER_SIZE: 22,
  CORNER_PADDING: 17,
};

const QM2025_TEMPLATES = {
  TOAN: {
    id: 'toan',
    name: 'Toán (Phần I: 12 câu | Phần II: 4 câu Đ/S | Phần III: 6 câu trả lời ngắn)',
    subName: 'Phiếu: QM 2025 - Toán - ĐH Sư phạm TP.HCM',
    imageSrc: 'assets/images/phieu-qm2025-toan-hcmue.png',
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
    imageSrc: 'assets/images/phieu-qm2025-khtn-hcmue.png',
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
    this.images = {};
    this.loaded = false;
    this.preloadTemplates();
  }

  preloadTemplates() {
    const toanImg = new Image();
    toanImg.src = QM2025_TEMPLATES.TOAN.imageSrc;
    toanImg.onload = () => {
      this.images.TOAN = toanImg;
      this.checkReady();
    };

    const khtnImg = new Image();
    khtnImg.src = QM2025_TEMPLATES.KHTN.imageSrc;
    khtnImg.onload = () => {
      this.images.KHTN = khtnImg;
      this.checkReady();
    };
  }

  checkReady() {
    if (this.images.TOAN && this.images.KHTN) {
      this.loaded = true;
      // Trigger update nếu preview đang chờ
      const canvas = document.getElementById('sheetPreviewCanvas');
      if (canvas && window.qm2025App) {
        this.renderToCanvas(canvas, window.qm2025App.currentTemplate);
      }
    }
  }

  /**
   * Trả về bản đồ tọa độ ô tô (Grid Map) chuẩn xác 100% theo phôi gốc 1024 x 550
   */
  generateGroundTruthGrid(type = 'TOAN') {
    const W = QM2025_CONFIG.WIDTH;
    const H = QM2025_CONFIG.HEIGHT;
    const isKHTN = (type === 'KHTN');
    const radius = 6.2;

    const gridMap = {
      type: type,
      width: W,
      height: H,
      corner_markers: [
        { x: 28, y: 40 },
        { x: W - 25, y: 40 },
        { x: W - 25, y: H - 41 },
        { x: 28, y: H - 41 },
      ],
      made: [],
      sbd: [],
      part1: [],
      part2: [],
      part3: []
    };

    // 1. Mã đề (3 cột, 10 hàng 0-9)
    const madeXCols = [53, 73, 93];
    const madeYRows = [282, 301, 320, 339, 358, 377, 396, 415, 434, 453];
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
    const sbdXCols = [148, 167, 187, 206, 226, 245];
    const sbdYRows = [282, 301, 320, 339, 358, 377, 396, 415, 434, 453];
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
    const p1XCols = [310, 330, 350, 369];

    if (!isKHTN) {
      // Toán: 12 câu
      const p1YRowsToan = [
        262, 281, 300, 319, 338, 357, 
        376, 395, 414, 433, 452, 471
      ];
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
      // KHTN: 18 câu chia làm 2 khối
      // Khối 1: Câu 1 đến 9
      const p1YRows1 = [89, 108, 127, 146, 165, 184, 203, 222, 241];
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
      const p1YRows2 = [319, 338, 357, 376, 395, 414, 433, 452, 471];
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

    // 4. Phần II (4 câu, mỗi câu 4 ý a,b,c,d)
    const p2Cols = [
      { d: 638, s: 660 },
      { d: 732, s: 755 },
      { d: 826, s: 848 },
      { d: 920, s: 942 }
    ];
    const p2SubItems = ['a', 'b', 'c', 'd'];
    const p2YRows = [105, 128, 151, 174];

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
    const p3StartX = 427;
    const p3StepQ = 101;
    const p3DigitStep = 20;
    const p3YRows = [
      262, // '-'
      282, // ','
      301, 320, 339, 358, 377, 396, 415, 434, 453, 472 // '0' -> '9'
    ];

    for (let q = 1; q <= 6; q++) {
      const qBaseX = p3StartX + (q - 1) * p3StepQ;
      const colDigits = [];

      for (let d = 0; d < 4; d++) {
        const digitX = qBaseX + d * p3DigitStep;
        const bubbles = [];

        // Hàng 0: Dấu '-' (chỉ ở cột 0)
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
   * Vẽ phiếu thi hoàn chỉnh lên Canvas
   */
  renderToCanvas(canvas, type = 'TOAN', customInfo = {}) {
    const W = QM2025_CONFIG.WIDTH;
    const H = QM2025_CONFIG.HEIGHT;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const templateImg = this.images[type];
    if (templateImg && templateImg.complete) {
      // Vẽ phôi ảnh gốc chính thức sắc nét
      ctx.drawImage(templateImg, 0, 0, W, H);
    } else {
      // Fallback nền trắng và vẽ tạm nếu ảnh đang tải
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#0054a6';
      ctx.font = 'bold 16px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Đang tải phôi phiếu thi chuẩn QM 2025...', W / 2, H / 2);
    }

    // Điền thêm thông tin lớp, môn nếu người dùng có cấu hình
    if (customInfo.className) {
      ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif';
      ctx.fillStyle = '#000000';
      ctx.fillText(customInfo.className, 130, 115);
    }
    if (customInfo.subjectName) {
      ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif';
      ctx.fillStyle = '#000000';
      ctx.fillText(customInfo.subjectName, 130, 150);
    }

    return this.generateGroundTruthGrid(type);
  }

  /**
   * Xuất file in PDF chất lượng cao (A4 chứa 2 phiếu hoặc A5 đơn)
   */
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
      const pH = 105;
      const marginX = (210 - pW) / 2;
      const marginY1 = 15;
      const marginY2 = 160;

      // Phiếu 1 (nửa trên)
      doc.addImage(imgData, 'PNG', marginX, marginY1, pW, pH);

      // Đường cắt nét đứt
      doc.setLineDashPattern([2, 2], 0);
      doc.setDrawColor(150, 150, 150);
      doc.line(10, 148.5, 200, 148.5);
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text('✂ Cắt theo đường nét đứt để chia thành 2 phiếu A5 (ĐH Sư phạm TP.HCM)', 105, 147, { align: 'center' });

      // Phiếu 2 (nửa dưới)
      doc.addImage(imgData, 'PNG', marginX, marginY2, pW, pH);
      doc.save(`Phieu_Thi_QM2025_${type}_A4_2Phieu_HCMUE.pdf`);
    } else {
      doc = new jsPDF({ orientation: 'landscape', format: 'a5', unit: 'mm' });
      const pW = 196;
      const pH = 105;
      const marginX = (210 - pW) / 2;
      const marginY = (148 - pH) / 2;

      doc.addImage(imgData, 'PNG', marginX, marginY, pW, pH);
      doc.save(`Phieu_Thi_QM2025_${type}_A5_HCMUE.pdf`);
    }
  }
}

window.qm2025Renderer = new QM2025TemplateRenderer();
