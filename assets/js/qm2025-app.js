/**
 * QM2025 Grading Application Controller
 * Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)
 * Điều khiển giao diện, Camera quét thời gian thực, Chấm hàng loạt,
 * Quản lý đáp án, Biểu đồ phổ điểm Chart.js và Xuất file Excel SheetJS đa sheet.
 */

class QM2025App {
  constructor() {
    this.currentTemplate = 'TOAN'; // 'TOAN' hoặc 'KHTN'
    this.answerKeys = this.loadAnswerKeysFromStorage();
    this.studentRoster = this.loadRosterFromStorage();
    this.examResults = this.loadResultsFromStorage();

    // Camera State
    this.cameraStream = null;
    this.isCameraScanning = false;
    this.isProcessingFrame = false;
    this.cameraFacingMode = 'environment'; // Ưu tiên camera sau của điện thoại
    this.audioCtx = null;

    // Charts
    this.scoreChartInstance = null;

    // DOM Ready
    document.addEventListener('DOMContentLoaded', () => {
      this.initUI();
      this.initEvents();
      this.renderAnswerKeyEditor();
      this.renderResultsTable();
      this.updateStatisticsDashboard();
    });
  }

  // --- Khởi tạo âm thanh "Bíp" bằng Web Audio API (Không phụ thuộc file mp3 ngoài) ---
  playBeep(success = true) {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (success) {
        // Âm bíp vui tươi báo điểm thành công
        osc.frequency.setValueAtTime(880, this.audioCtx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(1320, this.audioCtx.currentTime + 0.12); // E6
        gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.15);
      } else {
        // Âm cảnh báo lỗi
        osc.frequency.setValueAtTime(300, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.25);
      }
    } catch (e) {
      console.warn('Không thể phát âm thanh bíp:', e);
    }
  }

  // --- Khởi tạo UI ---
  initUI() {
    // Render preview phiếu thi ban đầu
    const previewCanvas = document.getElementById('sheetPreviewCanvas');
    if (previewCanvas && window.qm2025Renderer) {
      window.qm2025Renderer.renderToCanvas(previewCanvas, this.currentTemplate);
    }
  }

  // --- Gán sự kiện người dùng ---
  initEvents() {
    // 1. Chuyển đổi môn thi (Toán / KHTN)
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
      templateSelect.addEventListener('change', (e) => {
        this.currentTemplate = e.target.value;
        window.qm2025OMR.setTemplateType(this.currentTemplate);
        
        // Cập nhật lại UI preview và Editor đáp án
        const previewCanvas = document.getElementById('sheetPreviewCanvas');
        if (previewCanvas) {
          window.qm2025Renderer.renderToCanvas(previewCanvas, this.currentTemplate);
        }
        this.renderAnswerKeyEditor();
        this.showToast(`Đã chuyển sang cấu trúc đề: ${this.currentTemplate === 'TOAN' ? 'Toán (12 câu P1)' : 'KHTN/KHXH (18 câu P1)'}`, 'info');
      });
    }

    // 2. Chuyển các Tab chính
    document.querySelectorAll('.app-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });

    // 3. Camera Controls
    const startCamBtn = document.getElementById('startCameraBtn');
    if (startCamBtn) {
      startCamBtn.addEventListener('click', () => this.startCamera());
    }

    const stopCamBtn = document.getElementById('stopCameraBtn');
    if (stopCamBtn) {
      stopCamBtn.addEventListener('click', () => this.stopCamera());
    }

    const flipCamBtn = document.getElementById('flipCameraBtn');
    if (flipCamBtn) {
      flipCamBtn.addEventListener('click', () => this.flipCamera());
    }

    const manualCaptureBtn = document.getElementById('manualCaptureBtn');
    if (manualCaptureBtn) {
      manualCaptureBtn.addEventListener('click', () => this.captureAndProcessFrame());
    }

    // 4. Tải file ảnh / PDF chấm hàng loạt
    const batchFileInput = document.getElementById('batchFileInput');
    if (batchFileInput) {
      batchFileInput.addEventListener('change', (e) => this.handleBatchFiles(e.target.files));
    }

    // 5. Nút in và xuất PDF phiếu thi
    const printA4Btn = document.getElementById('printA4Btn');
    if (printA4Btn) {
      printA4Btn.addEventListener('click', () => {
        window.qm2025Renderer.exportPDF(this.currentTemplate, 'A4');
      });
    }

    const printA5Btn = document.getElementById('printA5Btn');
    if (printA5Btn) {
      printA5Btn.addEventListener('click', () => {
        window.qm2025Renderer.exportPDF(this.currentTemplate, 'A5');
      });
    }

    // 6. Xuất Excel
    const exportExcelBtn = document.getElementById('exportExcelBtn');
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener('click', () => this.exportExcelReport());
    }

    // 7. Xóa toàn bộ kết quả chấm để bắt đầu kỳ thi mới
    const clearResultsBtn = document.getElementById('clearResultsBtn');
    if (clearResultsBtn) {
      clearResultsBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách kết quả chấm của kỳ thi này để chấm mới không?')) {
          this.examResults = [];
          this.saveResultsToStorage();
          this.renderResultsTable();
          this.updateStatisticsDashboard();
          this.showToast('Đã xóa dữ liệu bài chấm cũ.', 'info');
        }
      });
    }
  }

  // --- Chuyển Tab ---
  switchTab(tabId) {
    document.querySelectorAll('.app-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.app-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === tabId);
    });

    if (tabId === 'tab-stats') {
      this.updateStatisticsDashboard();
    }
  }

  // =========================================================================
  // CAMERA STREAM & REAL-TIME SCANNING
  // =========================================================================
  async startCamera() {
    const video = document.getElementById('cameraVideo');
    if (!video) return;

    try {
      if (this.cameraStream) {
        this.stopCamera();
      }

      const constraints = {
        video: {
          facingMode: this.cameraFacingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      };

      this.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = this.cameraStream;
      await video.play();

      this.isCameraScanning = true;
      document.getElementById('cameraActiveControls').style.display = 'flex';
      document.getElementById('startCameraBtn').style.display = 'none';

      this.showToast('Đã bật camera. Hãy đưa phiếu thi vào khung hình căn 4 góc!', 'success');

      // Vòng lặp quét tự động
      this.runCameraLoop();
    } catch (err) {
      console.error('Lỗi truy cập camera:', err);
      this.showToast('Không thể mở camera. Vui lòng kiểm tra quyền truy cập camera trong trình duyệt!', 'error');
    }
  }

  stopCamera() {
    this.isCameraScanning = false;
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
    const video = document.getElementById('cameraVideo');
    if (video) video.srcObject = null;

    document.getElementById('cameraActiveControls').style.display = 'none';
    document.getElementById('startCameraBtn').style.display = 'inline-flex';
  }

  flipCamera() {
    this.cameraFacingMode = (this.cameraFacingMode === 'environment') ? 'user' : 'environment';
    this.startCamera();
  }

  async runCameraLoop() {
    if (!this.isCameraScanning) return;

    const video = document.getElementById('cameraVideo');
    if (video && video.readyState === video.HAVE_ENOUGH_DATA && !this.isProcessingFrame) {
      // Quét tự động mỗi 450ms
      await this.captureAndProcessFrame(true);
    }

    if (this.isCameraScanning) {
      setTimeout(() => this.runCameraLoop(), 400);
    }
  }

  async captureAndProcessFrame(isAutoLoop = false) {
    const video = document.getElementById('cameraVideo');
    if (!video || video.videoWidth === 0) return;

    this.isProcessingFrame = true;

    try {
      const snapCanvas = document.createElement('canvas');
      snapCanvas.width = video.videoWidth;
      snapCanvas.height = video.videoHeight;
      const snapCtx = snapCanvas.getContext('2d');
      snapCtx.drawImage(video, 0, 0, snapCanvas.width, snapCanvas.height);

      // Gọi OMR engine
      const result = await window.qm2025OMR.processSheet(snapCanvas, this.answerKeys, { autoWarp: true });

      // Nếu dò thấy phiếu hợp lệ
      if (result.success && result.sbd && result.sbd.length === 6) {
        // Kiểm tra xem bài này vừa mới chấm chưa (tránh quét lặp lại 1 bài trong 2 giây)
        const now = Date.now();
        if (this.lastScannedSBD === result.sbd && (now - (this.lastScannedTime || 0)) < 3000) {
          // Bỏ qua vì bài thi vẫn đang nằm trước ống kính
          this.isProcessingFrame = false;
          return;
        }

        this.lastScannedSBD = result.sbd;
        this.lastScannedTime = now;

        // Lưu và phát âm thanh
        this.saveExamResult(result);
        this.playBeep(true);
        this.showGradingToast(result);
        this.renderResultsTable();
      } else if (!isAutoLoop) {
        this.playBeep(false);
        this.showToast('Không nhận diện được phiếu hoặc chưa căn chuẩn 4 góc!', 'warning');
      }
    } catch (err) {
      console.warn('Lỗi khi chấm khung hình:', err);
    } finally {
      this.isProcessingFrame = false;
    }
  }

  // =========================================================================
  // CHẤM HÀNG LOẠT TỪ FILE ẢNH
  // =========================================================================
  async handleBatchFiles(files) {
    if (!files || files.length === 0) return;

    const progressBox = document.getElementById('batchProgressBox');
    const progressBar = document.getElementById('batchProgressBar');
    const progressText = document.getElementById('batchProgressText');

    progressBox.style.display = 'block';
    let processed = 0;
    const total = files.length;

    for (let i = 0; i < total; i++) {
      const file = files[i];
      progressText.innerText = `Đang chấm bài ${i + 1}/${total}: ${file.name}...`;
      progressBar.style.width = `${Math.round(((i + 1) / total) * 100)}%`;

      try {
        const img = await this.loadImageFromFile(file);
        const result = await window.qm2025OMR.processSheet(img, this.answerKeys, { autoWarp: true });
        
        result.fileName = file.name;
        this.saveExamResult(result);
        processed++;
      } catch (e) {
        console.error('Lỗi khi chấm file:', file.name, e);
      }
    }

    this.playBeep(true);
    progressText.innerText = `Hoàn thành! Đã chấm thành công ${processed}/${total} bài.`;
    this.showToast(`Đã chấm xong ${processed} bài thi từ tệp tải lên!`, 'success');
    this.renderResultsTable();
    this.updateStatisticsDashboard();

    setTimeout(() => {
      progressBox.style.display = 'none';
    }, 4000);
  }

  loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // =========================================================================
  // LƯU TRỮ VÀ XỬ LÝ KẾT QUẢ BÀI THI
  // =========================================================================
  saveExamResult(result) {
    // Khớp tên học sinh từ Roster nếu có
    const studentInfo = this.studentRoster[result.sbd] || {};
    const record = {
      id: 'EXAM_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      timestamp: new Date().toISOString(),
      sbd: result.sbd,
      name: studentInfo.name || `Thí sinh SBD ${result.sbd}`,
      className: studentInfo.className || '',
      made: result.made,
      templateType: result.templateType,
      part1Score: result.score.part1Score,
      part2Score: result.score.part2Score,
      part3Score: result.score.part3Score,
      totalScore: result.score.totalScore,
      scoreDetails: result.score,
      annotatedImage: result.annotatedImageDataUrl
    };

    // Kiểm tra xem đã có SBD này trong danh sách kết quả chưa
    const existingIdx = this.examResults.findIndex(r => r.sbd === record.sbd);
    if (existingIdx >= 0) {
      // Cập nhật kết quả chấm lại
      this.examResults[existingIdx] = record;
    } else {
      this.examResults.unshift(record);
    }

    this.saveResultsToStorage();
  }

  // --- Hiển thị thông báo nổi chấm bài ---
  showGradingToast(result) {
    const toast = document.getElementById('liveGradingToast');
    if (!toast) return;

    document.getElementById('toastSBD').innerText = result.sbd;
    document.getElementById('toastMaDe').innerText = result.made;
    document.getElementById('toastScore').innerText = result.score.totalScore.toFixed(2);
    document.getElementById('toastP1').innerText = result.score.part1Score.toFixed(2);
    document.getElementById('toastP2').innerText = result.score.part2Score.toFixed(2);
    document.getElementById('toastP3').innerText = result.score.part3Score.toFixed(2);

    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // =========================================================================
  // QUẢN LÝ ĐÁP ÁN (ANSWER KEYS)
  // =========================================================================
  renderAnswerKeyEditor() {
    const container = document.getElementById('answerKeyEditorContainer');
    if (!container) return;

    const currentMaDe = document.getElementById('activeMaDeSelect')?.value || '101';
    const key = this.answerKeys[currentMaDe] || this.initEmptyKey(this.currentTemplate);
    this.answerKeys[currentMaDe] = key;

    const tConfig = QM2025_TEMPLATES[this.currentTemplate] || QM2025_TEMPLATES.TOAN;
    const isKHTN = (this.currentTemplate === 'KHTN');
    const p1Count = tConfig.part1_count;

    let html = `
      <div class="key-editor-header flex justify-between items-center mb-4">
        <div class="flex items-center gap-2">
          <label class="font-bold text-sm">Chọn Mã đề:</label>
          <select id="activeMaDeSelect" class="form-select text-sm font-bold border rounded px-3 py-1">
            <option value="101" ${currentMaDe === '101' ? 'selected' : ''}>Mã đề 101</option>
            <option value="102" ${currentMaDe === '102' ? 'selected' : ''}>Mã đề 102</option>
            <option value="103" ${currentMaDe === '103' ? 'selected' : ''}>Mã đề 103</option>
            <option value="104" ${currentMaDe === '104' ? 'selected' : ''}>Mã đề 104</option>
            <option value="default" ${currentMaDe === 'default' ? 'selected' : ''}>Mã đề Mặc định (Tất cả)</option>
          </select>
        </div>
        <div class="flex gap-2">
          <button id="scanMasterKeyBtn" class="btn btn-sm btn-outline-primary">
            📷 Quét phiếu đáp án mẫu
          </button>
          <button id="saveKeyBtn" class="btn btn-sm btn-primary">
            💾 Lưu đáp án mã đề ${currentMaDe}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- PHẦN I -->
        <div class="card p-4 border rounded shadow-sm">
          <h4 class="font-bold text-primary mb-3 text-sm uppercase">Phần I: Nhiều lựa chọn (${p1Count} câu)</h4>
          <div class="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-1">
    `;

    for (let i = 1; i <= p1Count; i++) {
      const selectedOpt = key.part1[i] || '';
      html += `
        <div class="flex items-center justify-between p-1 border-b text-xs">
          <span class="font-bold w-6">C${i}:</span>
          <div class="flex gap-1">
            ${['A', 'B', 'C', 'D'].map(opt => `
              <button type="button" class="key-p1-btn rounded w-6 h-6 border font-bold text-xs ${selectedOpt === opt ? 'bg-primary text-white' : 'bg-gray-50'}"
                      data-q="${i}" data-opt="${opt}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += `
          </div>
        </div>

        <!-- PHẦN II -->
        <div class="card p-4 border rounded shadow-sm">
          <h4 class="font-bold text-primary mb-3 text-sm uppercase">Phần II: Đúng / Sai (4 câu)</h4>
          <div class="space-y-3">
    `;

    for (let c = 1; c <= 4; c++) {
      const subItems = key.part2[c] || { a: '', b: '', c: '', d: '' };
      html += `
        <div class="p-2 border rounded bg-slate-50">
          <div class="font-bold text-xs mb-1 text-slate-700">Câu ${c}:</div>
          <div class="grid grid-cols-2 gap-1 text-xs">
            ${['a', 'b', 'c', 'd'].map(sub => `
              <div class="flex items-center justify-between bg-white px-2 py-1 rounded border">
                <span class="font-semibold">${sub})</span>
                <div class="flex gap-1">
                  <button type="button" class="key-p2-btn px-2 py-0.5 rounded text-xs font-bold border ${subItems[sub] === 'D' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}"
                          data-c="${c}" data-sub="${sub}" data-val="D">Đ</button>
                  <button type="button" class="key-p2-btn px-2 py-0.5 rounded text-xs font-bold border ${subItems[sub] === 'S' ? 'bg-rose-600 text-white' : 'bg-gray-100'}"
                          data-c="${c}" data-sub="${sub}" data-val="S">S</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += `
          </div>
        </div>

        <!-- PHẦN III -->
        <div class="card p-4 border rounded shadow-sm">
          <h4 class="font-bold text-primary mb-3 text-sm uppercase">Phần III: Trả lời ngắn (6 câu)</h4>
          <div class="space-y-2">
    `;

    for (let q = 1; q <= 6; q++) {
      const val = key.part3[q] || '';
      html += `
        <div class="flex items-center justify-between p-2 border rounded bg-slate-50 text-xs">
          <span class="font-bold">Câu ${q}:</span>
          <input type="text" maxlength="6" 
                 class="key-p3-input form-input border rounded px-2 py-1 text-right font-mono font-bold w-28 text-sm"
                 data-q="${q}" placeholder="-12.5 / 100" value="${val}">
        </div>
      `;
    }

    html += `
          </div>
          <div class="text-xs text-gray-500 mt-3 italic">
            * Nhập số hoặc số thập phân (dấu phẩy hoặc dấu chấm đều được chấp nhận).
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Gắn sự kiện cho các nút chọn đáp án
    document.getElementById('activeMaDeSelect').addEventListener('change', (e) => {
      this.renderAnswerKeyEditor();
    });

    document.querySelectorAll('.key-p1-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const q = btn.getAttribute('data-q');
        const opt = btn.getAttribute('data-opt');
        key.part1[q] = opt;
        this.renderAnswerKeyEditor();
      });
    });

    document.querySelectorAll('.key-p2-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const c = btn.getAttribute('data-c');
        const sub = btn.getAttribute('data-sub');
        const val = btn.getAttribute('data-val');
        if (!key.part2[c]) key.part2[c] = {};
        key.part2[c][sub] = val;
        this.renderAnswerKeyEditor();
      });
    });

    document.querySelectorAll('.key-p3-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const q = input.getAttribute('data-q');
        key.part3[q] = input.value.trim();
      });
    });

    document.getElementById('saveKeyBtn').addEventListener('click', () => {
      this.saveAnswerKeysToStorage();
      this.showToast(`Đã lưu đáp án cho Mã đề ${currentMaDe}!`, 'success');
    });

    const scanMasterBtn = document.getElementById('scanMasterKeyBtn');
    if (scanMasterBtn) {
      scanMasterBtn.addEventListener('click', () => this.scanMasterAnswerSheet(currentMaDe));
    }
  }

  initEmptyKey(templateType) {
    const tConfig = QM2025_TEMPLATES[templateType] || QM2025_TEMPLATES.TOAN;
    const key = { part1: {}, part2: {}, part3: {} };
    for (let i = 1; i <= tConfig.part1_count; i++) key.part1[i] = 'A';
    for (let c = 1; c <= 4; c++) key.part2[c] = { a: 'D', b: 'S', c: 'D', d: 'S' };
    for (let q = 1; q <= 6; q++) key.part3[q] = '1';
    return key;
  }

  // Quét trực tiếp bài thi của giáo viên làm đáp án
  async scanMasterAnswerSheet(madeCode) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        this.showToast('Đang đọc phiếu đáp án mẫu...', 'info');
        const img = await this.loadImageFromFile(file);
        const res = await window.qm2025OMR.processSheet(img, {}, { autoWarp: true });

        const newKey = { part1: {}, part2: {}, part3: {} };
        // Phần 1
        Object.keys(res.part1).forEach(q => {
          if (res.part1[q].selected) newKey.part1[q] = res.part1[q].selected;
        });
        // Phần 2
        Object.keys(res.part2).forEach(c => {
          newKey.part2[c] = {};
          ['a', 'b', 'c', 'd'].forEach(sub => {
            newKey.part2[c][sub] = res.part2[c][sub].choice === 'D' ? 'D' : 'S';
          });
        });
        // Phần 3
        Object.keys(res.part3).forEach(q => {
          newKey.part3[q] = res.part3[q].normalized || '';
        });

        this.answerKeys[madeCode] = newKey;
        this.saveAnswerKeysToStorage();
        this.renderAnswerKeyEditor();
        this.playBeep(true);
        this.showToast(`Đã nhận diện thành công phiếu đáp án cho Mã đề ${madeCode}!`, 'success');
      } catch (err) {
        this.showToast('Không thể quét phiếu đáp án: ' + err.message, 'error');
      }
    };
    input.click();
  }

  // =========================================================================
  // BẢNG KẾT QUẢ & XEM LẠI BÀI CHẤM
  // =========================================================================
  renderResultsTable() {
    const tbody = document.getElementById('resultsTableBody');
    const countBadge = document.getElementById('resultCountBadge');
    if (countBadge) countBadge.innerText = this.examResults.length;

    if (!tbody) return;

    if (this.examResults.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" class="text-center py-8 text-gray-400 italic">
            Chưa có bài thi nào được chấm. Hãy bật camera hoặc tải ảnh lên để bắt đầu!
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = this.examResults.map((r, idx) => `
      <tr class="hover:bg-slate-50 border-b text-xs">
        <td class="text-center font-bold py-2 px-3">${idx + 1}</td>
        <td class="font-mono font-bold text-primary py-2 px-3">${r.sbd}</td>
        <td class="font-semibold py-2 px-3">${r.name}</td>
        <td class="text-center font-mono py-2 px-3">${r.made}</td>
        <td class="text-center py-2 px-3 text-slate-600">${r.part1Score.toFixed(2)}</td>
        <td class="text-center py-2 px-3 text-slate-600">${r.part2Score.toFixed(2)}</td>
        <td class="text-center py-2 px-3 text-slate-600">${r.part3Score.toFixed(2)}</td>
        <td class="text-center font-bold text-sm py-2 px-3 ${r.totalScore >= 8 ? 'text-emerald-600' : (r.totalScore < 5 ? 'text-rose-600' : 'text-blue-600')}">
          ${r.totalScore.toFixed(2)}
        </td>
        <td class="text-center py-2 px-3">
          <button class="btn btn-xs btn-outline-info text-xs px-2 py-1 rounded border" onclick="window.qm2025App.viewPaperModal('${r.id}')">
            🔍 Xem bài
          </button>
        </td>
      </tr>
    `).join('');
  }

  viewPaperModal(recordId) {
    const record = this.examResults.find(r => r.id === recordId);
    if (!record) return;

    const modal = document.getElementById('paperPreviewModal');
    const modalImg = document.getElementById('modalPaperImage');
    const modalInfo = document.getElementById('modalPaperInfo');

    if (modal && modalImg) {
      modalImg.src = record.annotatedImage;
      modalInfo.innerHTML = `
        <strong>SBD:</strong> ${record.sbd} | 
        <strong>Mã đề:</strong> ${record.made} | 
        <strong>Phần I:</strong> ${record.part1Score}đ | 
        <strong>Phần II:</strong> ${record.part2Score}đ | 
        <strong>Phần III:</strong> ${record.part3Score}đ | 
        <strong class="text-rose-600 text-lg">TỔNG ĐIỂM: ${record.totalScore.toFixed(2)}đ</strong>
      `;
      modal.classList.add('show');
    }
  }

  closePaperModal() {
    const modal = document.getElementById('paperPreviewModal');
    if (modal) modal.classList.remove('show');
  }

  // =========================================================================
  // THỐNG KÊ, PHỔ ĐIỂM & PHÂN TÍCH CÂU HỎI
  // =========================================================================
  updateStatisticsDashboard() {
    const total = this.examResults.length;
    if (total === 0) {
      document.getElementById('statTotalPapers').innerText = '0';
      document.getElementById('statMeanScore').innerText = '0.00';
      document.getElementById('statMedianScore').innerText = '0.00';
      document.getElementById('statMaxScore').innerText = '0.00';
      document.getElementById('statMinScore').innerText = '0.00';
      document.getElementById('statStdDev').innerText = '0.00';
      return;
    }

    const scores = this.examResults.map(r => r.totalScore).sort((a, b) => a - b);
    const sum = scores.reduce((acc, v) => acc + v, 0);
    const mean = sum / total;
    const median = total % 2 !== 0 
      ? scores[Math.floor(total / 2)] 
      : ((scores[total / 2 - 1] + scores[total / 2]) / 2);
    const min = scores[0];
    const max = scores[total - 1];

    // Độ lệch chuẩn
    const variance = scores.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / total;
    const stdDev = Math.sqrt(variance);

    document.getElementById('statTotalPapers').innerText = total;
    document.getElementById('statMeanScore').innerText = mean.toFixed(2);
    document.getElementById('statMedianScore').innerText = median.toFixed(2);
    document.getElementById('statMaxScore').innerText = max.toFixed(2);
    document.getElementById('statMinScore').innerText = min.toFixed(2);
    document.getElementById('statStdDev').innerText = stdDev.toFixed(2);

    // Vẽ biểu đồ Chart.js
    this.renderScoreChart(scores);

    // Bảng phân tích câu hỏi
    this.renderItemAnalysis();
  }

  renderScoreChart(scores) {
    const ctx = document.getElementById('scoreDistributionChart');
    if (!ctx || !window.Chart) return;

    // Tạo các bins phân phối điểm: 0-1, 1-2, 2-3, 3-4, 4-5, 5-6, 6-7, 7-8, 8-9, 9-10
    const bins = Array(11).fill(0);
    const labels = [
      '0.0 - 0.9', '1.0 - 1.9', '2.0 - 2.9', '3.0 - 3.9', '4.0 - 4.9',
      '5.0 - 5.9', '6.0 - 6.9', '7.0 - 7.9', '8.0 - 8.9', '9.0 - 9.9', '10.0'
    ];

    scores.forEach(s => {
      const idx = Math.min(10, Math.floor(s));
      bins[idx]++;
    });

    if (this.scoreChartInstance) {
      this.scoreChartInstance.destroy();
    }

    this.scoreChartInstance = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Số lượng học sinh',
          data: bins,
          backgroundColor: 'rgba(0, 84, 166, 0.75)', // Màu xanh HCMUE
          borderColor: '#0054a6',
          borderWidth: 1.5,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (item) => `${item.raw} bài thi`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }

  renderItemAnalysis() {
    const tbody = document.getElementById('itemAnalysisTableBody');
    if (!tbody) return;

    const tConfig = QM2025_TEMPLATES[this.currentTemplate] || QM2025_TEMPLATES.TOAN;
    const p1Count = tConfig.part1_count;
    const total = this.examResults.length;

    let rowsHtml = '';
    for (let q = 1; q <= p1Count; q++) {
      let correct = 0;
      let countA = 0, countB = 0, countC = 0, countD = 0;

      this.examResults.forEach(r => {
        const d = r.scoreDetails?.part1Details?.[q];
        if (d) {
          if (d.isCorrect) correct++;
          if (d.student === 'A') countA++;
          if (d.student === 'B') countB++;
          if (d.student === 'C') countC++;
          if (d.student === 'D') countD++;
        }
      });

      const correctRate = total > 0 ? (correct / total) * 100 : 0;
      let diffBadge = '<span class="badge bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Dễ</span>';
      if (correctRate < 40) {
        diffBadge = '<span class="badge bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">Khó / Bẫy</span>';
      } else if (correctRate < 70) {
        diffBadge = '<span class="badge bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">Vừa phải</span>';
      }

      rowsHtml += `
        <tr class="border-b text-xs text-center">
          <td class="font-bold py-1.5 px-2">Câu ${q}</td>
          <td class="py-1.5 px-2">${countA}</td>
          <td class="py-1.5 px-2">${countB}</td>
          <td class="py-1.5 px-2">${countC}</td>
          <td class="py-1.5 px-2">${countD}</td>
          <td class="font-bold py-1.5 px-2 text-primary">${correctRate.toFixed(1)}%</td>
          <td class="py-1.5 px-2">${diffBadge}</td>
        </tr>
      `;
    }

    tbody.innerHTML = rowsHtml;
  }

  // =========================================================================
  // XUẤT BÁO CÁO EXCEL ĐA SHEET (.XLSX) BẰNG SHEETJS
  // =========================================================================
  exportExcelReport() {
    if (!window.XLSX) {
      this.showToast('Thư viện Excel (SheetJS) chưa tải xong!', 'error');
      return;
    }

    if (this.examResults.length === 0) {
      this.showToast('Chưa có dữ liệu bài chấm nào để xuất Excel!', 'warning');
      return;
    }

    const wb = window.XLSX.utils.book_new();

    // 1. Sheet 1: Bảng Điểm
    const sheet1Data = [
      ['TRƯỜNG ĐẠI HỌC SƯ PHẠM TP. HỒ CHÍ MINH'],
      ['BẢNG ĐIỂM CHẤM THI TRẮC NGHIỆM CHUẨN QM 2025'],
      ['Môn thi: ' + (this.currentTemplate === 'TOAN' ? 'Toán' : 'KHTN / KHXH')],
      ['Ngày xuất: ' + new Date().toLocaleDateString('vi-VN')],
      [],
      ['STT', 'Số Báo Danh', 'Họ và Tên', 'Lớp', 'Mã Đề', 'Điểm Phần I', 'Điểm Phần II', 'Điểm Phần III', 'TỔNG ĐIỂM', 'Xếp Loại']
    ];

    this.examResults.forEach((r, idx) => {
      let grade = 'Yếu';
      if (r.totalScore >= 8.5) grade = 'Giỏi / Xuất sắc';
      else if (r.totalScore >= 7.0) grade = 'Khá';
      else if (r.totalScore >= 5.0) grade = 'Trung bình';

      sheet1Data.push([
        idx + 1,
        r.sbd,
        r.name,
        r.className,
        r.made,
        r.part1Score,
        r.part2Score,
        r.part3Score,
        r.totalScore,
        grade
      ]);
    });

    const ws1 = window.XLSX.utils.aoa_to_sheet(sheet1Data);
    window.XLSX.utils.book_append_sheet(wb, ws1, 'Bang_Diem');

    // 2. Sheet 2: Chi Tiết Câu Trả Lời
    const tConfig = QM2025_TEMPLATES[this.currentTemplate] || QM2025_TEMPLATES.TOAN;
    const p1Count = tConfig.part1_count;

    const sheet2Header = ['STT', 'SBD', 'Mã Đề'];
    for (let i = 1; i <= p1Count; i++) sheet2Header.push(`P1_C${i}`);
    for (let c = 1; c <= 4; c++) {
      ['a', 'b', 'c', 'd'].forEach(sub => sheet2Header.push(`P2_C${c}_${sub}`));
    }
    for (let q = 1; q <= 6; q++) sheet2Header.push(`P3_C${q}`);

    const sheet2Data = [sheet2Header];
    this.examResults.forEach((r, idx) => {
      const row = [idx + 1, r.sbd, r.made];
      // P1
      for (let i = 1; i <= p1Count; i++) {
        row.push(r.scoreDetails?.part1Details?.[i]?.student || '');
      }
      // P2
      for (let c = 1; c <= 4; c++) {
        ['a', 'b', 'c', 'd'].forEach(sub => {
          row.push(r.scoreDetails?.part2Details?.[c]?.subItems?.[sub]?.student || '');
        });
      }
      // P3
      for (let q = 1; q <= 6; q++) {
        row.push(r.scoreDetails?.part3Details?.[q]?.student || '');
      }
      sheet2Data.push(row);
    });

    const ws2 = window.XLSX.utils.aoa_to_sheet(sheet2Data);
    window.XLSX.utils.book_append_sheet(wb, ws2, 'Chi_Tiet_Cau_Tra_Loi');

    // 3. Sheet 3: Phổ Điểm & Thống Kê
    const total = this.examResults.length;
    const scores = this.examResults.map(r => r.totalScore);
    const sum = scores.reduce((a, b) => a + b, 0);
    const mean = sum / total;

    const sheet3Data = [
      ['THỐNG KÊ KẾT QUẢ THI TRẮC NGHIỆM'],
      ['Tổng số bài chấm:', total],
      ['Điểm trung bình:', mean.toFixed(2)],
      ['Điểm cao nhất:', Math.max(...scores).toFixed(2)],
      ['Điểm thấp nhất:', Math.min(...scores).toFixed(2)],
      []
    ];
    const ws3 = window.XLSX.utils.aoa_to_sheet(sheet3Data);
    window.XLSX.utils.book_append_sheet(wb, ws3, 'Pho_Diem_Thong_Ke');

    // Lưu tệp Excel
    const dateStr = new Date().toISOString().slice(0, 10);
    window.XLSX.writeFile(wb, `Bang_Diem_QM2025_HCMUE_${dateStr}.xlsx`);
    this.showToast('Đã xuất file Excel thành công!', 'success');
  }

  // --- Toast thông báo ---
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `app-toast toast-${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // =========================================================================
  // LOCAL STORAGE PERSISTENCE
  // =========================================================================
  loadAnswerKeysFromStorage() {
    try {
      const data = localStorage.getItem('QM2025_KEYS');
      return data ? JSON.parse(data) : {
        '101': this.initEmptyKey('TOAN'),
        'default': this.initEmptyKey('TOAN')
      };
    } catch (e) {
      return {};
    }
  }

  saveAnswerKeysToStorage() {
    localStorage.setItem('QM2025_KEYS', JSON.stringify(this.answerKeys));
  }

  loadResultsFromStorage() {
    try {
      const data = localStorage.getItem('QM2025_RESULTS');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveResultsToStorage() {
    // Để tránh quá tải LocalStorage với base64, chỉ giữ 200 bài mới nhất
    const trimmed = this.examResults.slice(0, 200);
    try {
      localStorage.setItem('QM2025_RESULTS', JSON.stringify(trimmed));
    } catch (e) {
      console.warn('LocalStorage đầy, lưu không kèm ảnh');
      const noImages = trimmed.map(r => ({ ...r, annotatedImage: null }));
      localStorage.setItem('QM2025_RESULTS', JSON.stringify(noImages));
    }
  }

  loadRosterFromStorage() {
    try {
      const data = localStorage.getItem('QM2025_ROSTER');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }
}

// Khởi tạo app
window.qm2025App = new QM2025App();
