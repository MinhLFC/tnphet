/**
 * MODULE TRÌNH CHIẾU & SỬA BÀI BỘ 7 ĐỀ KIỂM TRA & ÔN TẬP HÓA HỌC 12
 * Gồm: Đề 1 -> Đề 7 (Chuẩn cấu trúc đề mới của Bộ Giáo dục & Đào tạo)
 * - PHẦN 1: 18 Câu trắc nghiệm nhiều phương án lựa chọn (A, B, C, D)
 * - PHẦN 2: 4 Câu trắc nghiệm Đúng / Sai (mỗi câu 4 ý a, b, c, d)
 * - PHẦN 3: 6 Câu trắc nghiệm trả lời ngắn (điền kết quả tối đa 4 kí tự)
 * 
 * Sử dụng chung toàn bộ hệ thống CSS & giao diện của lab-quiz.css:
 * - Chế độ Trình chiếu (Slide) & Danh sách (List)
 * - Tăng giảm cỡ chữ trình chiếu máy chiếu (Font zoom 80% - 150%)
 * - Bảng đáp án nhanh toàn bộ 28 câu của đề
 * - Chấm điểm trực tiếp chuẩn thang điểm Bộ GD&ĐT (Điểm tối đa 10.0)
 * - Lưới chuyển nhanh câu hỏi bên phải (Navigator Card)
 * - Đánh dấu câu hỏi cần lưu ý (Bookmark / Star)
 * - Phóng to ảnh CTCT, đồ thị, thí nghiệm HD toàn màn hình
 * - Phím tắt máy tính: ⬅️ ➡️ chuyển câu, S đánh dấu, Space/Enter hiện lời giải
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'chem_quiz_state_v3';

  const state = {
    category: 'de_on', // 'de_on' | 'chuyende'
    currentExamId: 'hoa_de1',
    currentIndex: 0,
    mode: 'slide', // 'slide' | 'list'
    filterPart: 'ALL', // 'ALL' | 1 | 2 | 3
    filterSection: 'ALL',
    filterStarred: false,
    fontScale: 1.0,
    sidebarOpen: true,
    isFullscreen: false,
    revealedQuestions: {}, // { [key]: boolean }
    revealedEssays: {},    // { [key]: boolean }
    starredQuestions: {},  // { [key]: boolean }
    mcqAnswers: {},        // { [key]: 'A'|'B'|'C'|'D' }
    tfAnswers: {},         // { [key]: { a: bool, b: bool, c: bool, d: bool } }
    shortAnswers: {},      // { [key]: string }
    answerKeyModalOpen: false,
    zoomModal: {
      open: false,
      src: '',
      caption: ''
    }
  };

  // Chuẩn hóa chuỗi số cho Phần III
  function normalizeNumberStr(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .trim()
      .replace(/\s+/g, '')
      .replace(',', '.')
      .replace(/^0+(?=\d)/, '');
  }

  // Load state từ localStorage
  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const p = JSON.parse(saved);
        if (p.category) state.category = p.category;
        if (p.currentExamId) state.currentExamId = p.currentExamId;
        if (p.starredQuestions) state.starredQuestions = p.starredQuestions;
        if (p.mcqAnswers) state.mcqAnswers = p.mcqAnswers;
        if (p.tfAnswers) state.tfAnswers = p.tfAnswers;
        if (p.shortAnswers) state.shortAnswers = p.shortAnswers;
        if (typeof p.fontScale === 'number') state.fontScale = p.fontScale;
      }
    } catch (e) {
      console.warn('Cannot load chem quiz state:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        category: state.category,
        currentExamId: state.currentExamId,
        starredQuestions: state.starredQuestions,
        mcqAnswers: state.mcqAnswers,
        tfAnswers: state.tfAnswers,
        shortAnswers: state.shortAnswers,
        fontScale: state.fontScale
      }));
    } catch (e) {}
  }

  function getCurrentExam() {
    if (!window.CHEM_ALL_EXAMS_DATA) return null;
    return window.CHEM_ALL_EXAMS_DATA[state.currentExamId] || Object.values(window.CHEM_ALL_EXAMS_DATA)[0];
  }

  function getQKey(qId) {
    const exam = getCurrentExam();
    return `${exam ? exam.code : 'hoa'}_q${qId}`;
  }

  function hasExamProgress(code) {
    return Object.keys(state.mcqAnswers).some(k => k.startsWith(code + '_')) ||
           Object.keys(state.tfAnswers).some(k => k.startsWith(code + '_')) ||
           Object.keys(state.shortAnswers).some(k => k.startsWith(code + '_'));
  }

  function getFilteredQuestions() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return [];
    return exam.questions.filter(q => {
      if (state.filterPart !== 'ALL' && q.part !== Number(state.filterPart)) return false;
      if (state.filterStarred && !state.starredQuestions[getQKey(q.id)]) return false;
      return true;
    });
  }

  // Đánh giá trạng thái làm bài của 1 câu
  function evaluateQuestionStatus(q) {
    const key = getQKey(q.id);

    if (q.type === 'mcq') {
      const u = state.mcqAnswers[key];
      if (!u) return 'UNANSWERED';
      return u === q.answer ? 'CORRECT' : 'WRONG';
    }

    if (q.type === 'tf') {
      const u = state.tfAnswers[key];
      if (!u || Object.keys(u).length === 0) return 'UNANSWERED';
      const c = q.answer || {};
      let correctCount = 0;
      let totalAnswered = 0;
      for (const k of ['a', 'b', 'c', 'd']) {
        if (typeof u[k] === 'boolean') {
          totalAnswered++;
          const cBool = c[k] === 'Đ' || c[k] === 'D' || c[k] === true;
          if (u[k] === cBool) correctCount++;
        }
      }
      if (totalAnswered === 0) return 'UNANSWERED';
      if (correctCount === 4) return 'CORRECT';
      if (totalAnswered === 4 && correctCount === 0) return 'WRONG';
      return 'PARTIAL';
    }

    if (q.type === 'sa' || q.type === 'short') {
      const u = state.shortAnswers[key];
      if (u === undefined || u === null || u.trim() === '') return 'UNANSWERED';
      const normU = normalizeNumberStr(u);
      const normC = normalizeNumberStr(q.answer);
      if (normU === normC) return 'CORRECT';
      if (q.acceptedAnswers && q.acceptedAnswers.map(normalizeNumberStr).includes(normU)) {
        return 'CORRECT';
      }
      return 'WRONG';
    }

    return 'UNANSWERED';
  }

  // Thống kê điểm số cả đề (Thang điểm 10.0 chuẩn Bộ GD&ĐT)
  function getExamStats() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return { totalScore: 0, maxScore: 10, answered: 0, total: 28 };

    let totalScore = 0.0;
    let answered = 0;

    exam.questions.forEach(q => {
      const key = getQKey(q.id);
      if (q.type === 'mcq') {
        const u = state.mcqAnswers[key];
        if (u) {
          answered++;
          if (u === q.answer) totalScore += 0.25;
        }
      } else if (q.type === 'tf') {
        const u = state.tfAnswers[key];
        if (u && Object.keys(u).length > 0) {
          answered++;
          let subCount = 0;
          const c = q.answer || {};
          for (const k of ['a', 'b', 'c', 'd']) {
            if (typeof u[k] === 'boolean') {
              const cBool = c[k] === 'Đ' || c[k] === 'D' || c[k] === true;
              if (u[k] === cBool) subCount++;
            }
          }
          if (subCount === 1) totalScore += 0.1;
          else if (subCount === 2) totalScore += 0.25;
          else if (subCount === 3) totalScore += 0.5;
          else if (subCount === 4) totalScore += 1.0;
        }
      } else if (q.type === 'sa' || q.type === 'short') {
        const u = state.shortAnswers[key];
        if (u !== undefined && u !== null && u.trim() !== '') {
          answered++;
          const normU = normalizeNumberStr(u);
          const normC = normalizeNumberStr(q.answer);
          if (normU === normC || (q.acceptedAnswers && q.acceptedAnswers.map(normalizeNumberStr).includes(normU))) {
            totalScore += 0.25;
          }
        }
      }
    });

    return {
      totalScore: Number(totalScore.toFixed(2)),
      maxScore: 10.0,
      answered,
      total: exam.questions.length
    };
  }

  // ==================== RENDERING CHÍNH ====================
  function renderChemApp() {
    const root = document.getElementById('experiment-hoa12');
    if (!root) return;

    const exam = getCurrentExam();
    if (!exam) {
      root.innerHTML = `
        <div class="quiz-empty-box" style="padding: 40px; text-align: center;">
          <div style="font-size: 2.4rem;">⚗️</div>
          <p style="margin-top: 10px; font-weight: 600;">Đang chuẩn bị dữ liệu đề Hóa 12...</p>
        </div>
      `;
      return;
    }

    const filtered = getFilteredQuestions();
    if (state.currentIndex >= filtered.length) {
      state.currentIndex = Math.max(0, filtered.length - 1);
    }
    const stats = getExamStats();
    const exams = window.CHEM_ALL_EXAMS_DATA || {};
    const allExams = Object.values(exams);
    const ch5Exams = allExams.filter(e => e.group === 'ch5' || (e.code && e.code.startsWith('chem_ch5_')));
    const chuyenDeExams = allExams.filter(e => e.group === 'chuyende');
    const deOnExams = allExams.filter(e => e.group !== 'chuyende' && e.group !== 'ch5' && (!e.code || !e.code.startsWith('chem_ch5_')));

    // Đồng bộ category với đề hiện tại
    if (exam && (exam.group === 'ch5' || exam.code.startsWith('chem_ch5_'))) {
      state.category = 'ch5';
    } else if (exam && exam.group === 'chuyende') {
      state.category = 'chuyende';
    } else if (exam && !state.category) {
      state.category = 'de_on';
    }
    const curCat = state.category || 'de_on';
    let activeExamList = deOnExams;
    if (curCat === 'ch5') {
      activeExamList = ch5Exams.length ? ch5Exams : allExams;
    } else if (curCat === 'chuyende') {
      activeExamList = chuyenDeExams.length ? chuyenDeExams : allExams;
    }

    const p1Count = exam.questions.filter(q => q.part === 1).length;
    const p2Count = exam.questions.filter(q => q.part === 2).length;
    const p3Count = exam.questions.filter(q => q.part === 3).length;
    const totalCount = exam.questions.length;

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="chemWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- THANH CÔNG CỤ TRÌNH CHIẾU TRÊN CÙNG (Dùng chuẩn lab-quiz.css) -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">⚗️</div>
            <div class="quiz-title-text">
              <h3>${exam.title}: ${exam.subtitle || exam.title} (${exam.shortTitle || exam.title})</h3>
              <p>${exam.group === 'chuyende' ? `Chuyên đề tự luyện ${totalCount} câu: Trắc nghiệm ABCD (${p1Count}c) • Đúng/Sai (${p2Count}c) • Trả lời ngắn (${p3Count}c)` : `Trọn bộ 28 câu chuẩn cấu trúc mới Bộ GD&ĐT: Trắc nghiệm ABCD (${p1Count}c) • Đúng/Sai (${p2Count}c) • Trả lời ngắn (${p3Count}c)`}</p>
            </div>
          </div>

          <div class="quiz-controls-group">
            <!-- Chuyển chế độ Trình chiếu / Danh sách / Lý thuyết -->
            <div class="quiz-mode-switch">
              ${(exam.essayQuestions || []).length > 0 ? `
                <button class="quiz-mode-btn ${state.mode === 'theory' ? 'active' : ''}" onclick="window.ChemQuizApp.setMode('theory')">
                  📖 Lý thuyết &amp; Ví dụ (${(exam.essayQuestions || []).length})
                </button>
              ` : ''}
              <button class="quiz-mode-btn ${state.mode === 'slide' ? 'active' : ''}" onclick="window.ChemQuizApp.setMode('slide')">
                🖥️ Trình chiếu (Slide)
              </button>
              <button class="quiz-mode-btn ${state.mode === 'list' ? 'active' : ''}" onclick="window.ChemQuizApp.setMode('list')">
                📋 Danh sách (${filtered.length})
              </button>
            </div>

            <!-- Phóng to / Thu nhỏ cỡ chữ khi chiếu -->
            <div class="font-zoom-group" title="Tăng/giảm cỡ chữ khi chiếu máy chiếu">
              <button class="font-zoom-btn" onclick="window.ChemQuizApp.changeZoom(-0.1)">A−</button>
              <span class="font-zoom-label">${Math.round(state.fontScale * 100)}%</span>
              <button class="font-zoom-btn" onclick="window.ChemQuizApp.changeZoom(0.1)">A+</button>
            </div>

            <!-- Nút mở Bảng đáp án -->
            <button class="quiz-tool-btn" onclick="window.ChemQuizApp.openAnswerKeyModal()">
              🔑 Bảng đáp án ${exam.shortTitle || exam.title}
            </button>

            ${state.mode === 'slide' ? `
              <button class="quiz-tool-btn" onclick="window.ChemQuizApp.toggleSidebar()">
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : `▶ Hiện lưới ${totalCount} câu`}
              </button>
            ` : `
              <button class="quiz-tool-btn" onclick="window.ChemQuizApp.revealAllInFilter()">
                👁️ Hiện tất cả lời giải
              </button>
            `}

            <button class="quiz-tool-btn" onclick="window.ChemQuizApp.toggleFullscreen()">
              ${state.isFullscreen ? '🗗 Thoát toàn màn hình' : '⛶ Toàn màn hình'}
            </button>

            <button class="quiz-tool-btn btn-accent" onclick="window.ChemQuizApp.resetCurrentExamAnswers()">
              🔄 Làm mới đề này
            </button>
          </div>
        </div>

        <!-- THANH CHỌN ĐỀ & BỘ LỌC PHẦN (Dùng class chuẩn .math-exam-selector-bar) -->
        <div class="math-exam-selector-bar selector-40-exams">
          <div class="math-exam-top-row">
            <div class="math-category-tabs">
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'de_on' ? 'active' : ''}"
                onclick="window.ChemQuizApp.selectCategory('de_on')"
              >
                ⚗️ 7 Đề Kiểm Tra &amp; Ôn Tập (Bộ GD&amp;ĐT)
              </button>
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'chuyende' ? 'active' : ''}"
                onclick="window.ChemQuizApp.selectCategory('chuyende')"
              >
                🧪 Chuyên Đề Bài 9: Amino Acid &amp; Peptide
              </button>
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'ch5' ? 'active' : ''}"
                onclick="window.ChemQuizApp.selectCategory('ch5')"
              >
                ⚡ Chương 5: Pin Điện &amp; Điện Phân (70 trang • 385 câu)
              </button>
            </div>

            <div class="math-part-pills">
              <button class="math-part-pill ${state.filterPart === 'ALL' ? 'active' : ''}" onclick="window.ChemQuizApp.setPartFilter('ALL')">
                Tất cả (${totalCount} câu)
              </button>
              <button class="math-part-pill ${state.filterPart === 1 ? 'active' : ''}" onclick="window.ChemQuizApp.setPartFilter(1)">
                Phần 1: ABCD (${p1Count})
              </button>
              <button class="math-part-pill ${state.filterPart === 2 ? 'active' : ''}" onclick="window.ChemQuizApp.setPartFilter(2)">
                Phần 2: Đúng - Sai (${p2Count})
              </button>
              <button class="math-part-pill ${state.filterPart === 3 ? 'active' : ''}" onclick="window.ChemQuizApp.setPartFilter(3)">
                Phần 3: Trả lời ngắn (${p3Count})
              </button>
              <button class="math-part-pill ${state.filterStarred ? 'active' : ''}" onclick="window.ChemQuizApp.toggleStarFilter()">
                ★ Đã lưu ý (${countStarred()})
              </button>
            </div>
          </div>

          <div class="math-exam-grid-20" style="${(curCat === 'ch5' || curCat === 'chuyende') ? 'display: flex; gap: 10px; flex-wrap: wrap;' : 'grid-template-columns: repeat(7, minmax(0, 1fr));'}">
            ${activeExamList.map((ex, i) => {
              const num = i + 1;
              const isAct = state.currentExamId === ex.code;
              const hasProg = hasExamProgress(ex.code);
              return `
                <button
                  type="button"
                  class="math-exam-num-btn ${isAct ? 'active' : ''} ${hasProg ? 'has-progress' : ''}"
                  style="${(curCat === 'ch5' || curCat === 'chuyende') ? 'flex: 1 1 200px; min-width: 170px; padding: 10px 18px; font-weight: 700; font-size: 0.92rem; white-space: normal; line-height: 1.35; border-radius: 10px;' : ''}"
                  onclick="window.ChemQuizApp.selectExam('${ex.code}')"
                  title="Chuyển sang ${ex.title || ex.shortTitle}"
                >
                  ${ex.shortTitle || ('Đề ' + num)}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- KHU VỰC THỐNG KÊ TIẾN ĐỘ -->
        <div class="quiz-stats-bar">
          <div class="quiz-stats-left">
            <span>Tiến độ làm bài: <b>${stats.answered}/${stats.total}</b> câu</span>
            <span class="stats-divider">•</span>
            <span>Điểm hiện tại: <b style="color: #0284c7; font-size: 1.05rem;">${stats.totalScore}</b> / 10.0 điểm</span>
          </div>
          <div class="quiz-stats-right">
            <button class="quiz-mini-btn" onclick="window.ChemQuizApp.resetCurrentExamAnswers()" title="Xóa toàn bộ câu trả lời của đề này để làm lại từ đầu">
              ↺ Làm lại đề này
            </button>
          </div>
        </div>

        <!-- THÂN NỘI DUNG: SLIDE HOẶC LIST -->
        ${state.mode === 'theory' ? renderTheoryView(exam) : (state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered))}

        <!-- MODAL BẢNG ĐÁP ÁN -->
        ${state.answerKeyModalOpen ? renderAnswerKeyModal(exam) : ''}

        <!-- MODAL PHÓNG TO HÌNH ẢNH CTCT / THÍ NGHIỆM -->
        ${state.zoomModal.open ? `
          <div class="quiz-modal-backdrop open" onclick="window.ChemQuizApp.closeZoomModal()">
            <div class="quiz-modal-card zoom-card" onclick="event.stopPropagation()">
              <div class="quiz-modal-header">
                <h4>🔍 ${state.zoomModal.caption || 'Hình ảnh cấu trúc / Thí nghiệm phóng to'}</h4>
                <button class="modal-close-btn quiz-modal-close" onclick="window.ChemQuizApp.closeZoomModal()">&times;</button>
              </div>
              <div class="quiz-modal-body zoom-body">
                <img src="${state.zoomModal.src}" alt="Zoom" class="zoomed-figure-img" />
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  function countStarred() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return 0;
    return exam.questions.filter(q => !!state.starredQuestions[getQKey(q.id)]).length;
  }

  // ==================== SLIDE VIEW (Dùng chuẩn .quiz-presentation-layout) ====================
  
  // ==================== PDF SECTION MAPPING HELPER ====================
  function getQuestionSection(q, exam) {
    if (!exam) return { key: 'sec_all', code: 'All', title: 'Toàn bộ câu hỏi' };
    
    // Bài 15 (Chương 5)
    if (exam.id === 'chem_ch5_cd1') {
      if (q.id <= 20) return { key: 'cd1_s1', code: 'Mục 2.1', title: '2.1. Cặp oxi hóa – khử & Thế điện cực (Câu 1 - 20)' };
      if (q.id <= 60) return { key: 'cd1_s2', code: 'Mục 2.2', title: '2.2. Ý nghĩa thế điện cực chuẩn (Câu 1 - 40)' };
      if (q.id <= 90) return { key: 'cd1_s3', code: 'Mục 2.3', title: '2.3. Pin điện hóa & Sức điện động (Câu 1 - 30)' };
      if (q.id <= 105) return { key: 'cd1_s4', code: 'Mục 2.4', title: '2.4. Đúng/Sai: Cặp oxi hóa – khử & Thế điện cực (Câu 1 - 15)' };
      if (q.id <= 130) return { key: 'cd1_s5', code: 'Mục 2.5', title: '2.5. Đúng/Sai: Pin điện hóa & Cơ chế (Câu 1 - 25)' };
      return { key: 'cd1_s6', code: 'Mục 2.6', title: '2.6. Trả lời ngắn: Thế điện cực & Dãy điện hóa (Câu 1 - 15)' };
    }
    
    // Bài 16 (Chương 5)
    if (exam.id === 'chem_ch5_cd2') {
      if (q.id <= 100) return { key: 'cd2_s1', code: 'Phần I', title: 'Phần I: Trắc nghiệm nhiều lựa chọn (Câu 1 - 100)' };
      if (q.id <= 127) return { key: 'cd2_s2', code: 'Phần II', title: 'Phần II: Trắc nghiệm Đúng/Sai (Câu 1 - 27)' };
      return { key: 'cd2_s3', code: 'Phần III', title: 'Phần III: Trắc nghiệm Trả lời ngắn (Câu 1 - 30)' };
    }
    
    // Bài tập phân dạng (chem_ch5_dang)
    if (exam.id === 'chem_ch5_dang') {
      if (q.id <= 24) return { key: 'dang_1', code: 'Dạng 1', title: 'Dạng 1: Sức điện động chuẩn pin điện hóa (Câu 1 - 24)' };
      if (q.id <= 34) return { key: 'dang_2', code: 'Dạng 2', title: 'Dạng 2: Tính thế điện cực chuẩn (Câu 1 - 10)' };
      if (q.id <= 49) return { key: 'dang_3', code: 'Dạng 3', title: 'Dạng 3: 1 kim loại + 1 dung dịch muối (Câu 1 - 15)' };
      if (q.id <= 61) return { key: 'dang_4', code: 'Dạng 4', title: 'Dạng 4: 2 kim loại + 1 dung dịch muối (Câu 1 - 12)' };
      if (q.id <= 72) return { key: 'dang_5', code: 'Dạng 5', title: 'Dạng 5: 1 kim loại + 2 dung dịch muối (Câu 1 - 11)' };
      if (q.id <= 92) return { key: 'dang_6', code: 'Dạng 6', title: 'Dạng 6: Điện phân 1 chất nóng chảy & dd (Câu 1 - 20)' };
      return { key: 'dang_7', code: 'Dạng 7', title: 'Dạng 7: Điện phân hỗn hợp 2 chất (Câu 1 - 10)' };
    }
    
    // Đề ôn tập 01 & 02
    if (exam.id === 'chem_ch5_de01' || exam.id === 'chem_ch5_de02') {
      if (q.id <= 18) return { key: 'de_p1', code: 'Phần 1', title: 'Phần 1: Trắc nghiệm khách quan (Câu 1 - 18)' };
      if (q.id <= 22) return { key: 'de_p2', code: 'Phần 2', title: 'Phần 2: Đúng / Sai (Câu 19 - 22)' };
      return { key: 'de_p3', code: 'Phần 3', title: 'Phần 3: Trả lời ngắn (Câu 23 - 28)' };
    }
    
    return {
      key: `p_${q.part}`,
      code: `Phần ${q.part}`,
      title: q.topic ? `Phần ${q.part}: ${q.topic}` : `Phần ${q.part}`
    };
  }

function renderSlideView(filtered) {
    const exam = getCurrentExam();
    if (!filtered || filtered.length === 0) {
      return `
        <div class="quiz-empty-box">
          <p>Không có câu hỏi nào khớp với bộ lọc hiện tại.</p>
          <button class="quiz-tool-btn" onclick="window.ChemQuizApp.resetFilters()">Xóa bộ lọc</button>
        </div>
      `;
    }

    const currentQ = filtered[state.currentIndex];
    const key = getQKey(currentQ.id);
    const isRevealed = !!state.revealedQuestions[key];
    const hasPrev = state.currentIndex > 0;
    const hasNext = state.currentIndex < filtered.length - 1;
    const status = evaluateQuestionStatus(currentQ);

    return `
      <div class="quiz-presentation-layout ${state.sidebarOpen ? '' : 'sidebar-collapsed'}">
        <div class="quiz-slide-card">
          ${renderQuestionCardContent(currentQ, true)}

          <div class="slide-footer-bar">
            <button class="slide-nav-btn" onclick="window.ChemQuizApp.prevSlide()" ${!hasPrev ? 'disabled' : ''}>
              ⬅ Câu trước
            </button>

            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <button
                class="slide-reveal-btn ${isRevealed ? 'revealed' : ''}"
                onclick="window.ChemQuizApp.toggleReveal(${currentQ.id})"
              >
                ${isRevealed ? '🙈 Ẩn đáp án & lời giải' : '👁️ Hiện đáp án & Lời giải chi tiết'}
              </button>
              ${(status !== 'UNANSWERED' || isRevealed) ? `
                <button class="quiz-tool-btn" onclick="window.ChemQuizApp.clearQuestion(${currentQ.id})">
                  ↺ Làm lại câu này
                </button>
              ` : ''}
            </div>

            <button class="slide-nav-btn" onclick="window.ChemQuizApp.nextSlide()" ${!hasNext ? 'disabled' : ''}>
              Câu tiếp theo ➡
            </button>
          </div>

          <div class="keyboard-hint-bar">
            <span><kbd class="kbd-tag">←</kbd> <kbd class="kbd-tag">→</kbd> Chuyển câu</span>
            <span><kbd class="kbd-tag">A</kbd>-<kbd class="kbd-tag">D</kbd> Chọn đáp án Phần 1</span>
            <span><kbd class="kbd-tag">Space</kbd> Hiện/Ẩn lời giải</span>
            <span><kbd class="kbd-tag">S</kbd> Đánh dấu ★</span>
          </div>
        </div>

        ${state.sidebarOpen ? `
          <aside class="quiz-navigator-card">
            <div class="navigator-header">
              <h4>🧭 Bố cục câu hỏi (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            ${(() => {
              // Collect sections
              const sectionMap = new Map();
              filtered.forEach((q, idx) => {
                const sec = getQuestionSection(q, exam);
                if (!sectionMap.has(sec.key)) {
                  sectionMap.set(sec.key, { ...sec, items: [] });
                }
                sectionMap.get(sec.key).items.push({ q, idx });
              });
              const sections = Array.from(sectionMap.values());
              const activeSection = state.filterSection || 'ALL';
              const displayedSections = activeSection === 'ALL'
                ? sections
                : sections.filter(s => s.key === activeSection);

              let tabsHtml = '';
              if (sections.length > 1) {
                tabsHtml = `
                  <div class="nav-filter-tabs">
                    <button
                      type="button"
                      class="nav-filter-tab ${activeSection === 'ALL' ? 'active' : ''}"
                      onclick="window.ChemQuizApp.setSectionFilter('ALL')"
                    >
                      Tất cả (${filtered.length})
                    </button>
                    ${sections.map(s => `
                      <button
                        type="button"
                        class="nav-filter-tab ${activeSection === s.key ? 'active' : ''}"
                        onclick="window.ChemQuizApp.setSectionFilter('${s.key}')"
                        title="${escapeAttr(s.title)}"
                      >
                        ${s.code} (${s.items.length})
                      </button>
                    `).join('')}
                  </div>
                `;
              }

              const sectionsHtml = displayedSections.map(sec => {
                const buttonsHtml = sec.items.map(({ q, idx }) => {
                  const qKey = getQKey(q.id);
                  const st = evaluateQuestionStatus(q);
                  const rev = state.revealedQuestions[qKey];
                  const star = state.starredQuestions[qKey];
                  let cellClass = '';
                  if (idx === state.currentIndex) cellClass += ' current';
                  if (st === 'CORRECT') cellClass += ' answered-correct';
                  else if (st === 'WRONG') cellClass += ' answered-wrong';
                  else if (st === 'PARTIAL') cellClass += ' answered-partial';
                  else if (rev) cellClass += ' revealed-only';
                  if (star) cellClass += ' is-starred';

                  let shortTag = '';
                  const num = q.orig_qnum || q.qnum || q.id;
                  if (exam.id === 'chem_ch5_dang') {
                    const sec = getQuestionSection(q, exam);
                    shortTag = `${sec.code.replace('Dạng ', 'D')}.C${num}`;
                  } else if (exam.id === 'chem_ch5_de01' || exam.id === 'chem_ch5_de02') {
                    shortTag = `C.${num}`;
                  } else if (q.part === 1) {
                    shortTag = `C.${num}`;
                  } else if (q.part === 2) {
                    shortTag = `ĐS.${num}`;
                  } else {
                    shortTag = `TL.${num}`;
                  }

                  return `
                    <button
                      type="button"
                      class="nav-q-cell ${cellClass}"
                      style="aspect-ratio: auto; padding: 0.42rem 0.2rem; font-size: 0.72rem; font-weight: 600;"
                      onclick="window.ChemQuizApp.goToSlide(${idx})"
                      title="${escapeAttr((q.label || ('Câu ' + q.qnum)) + ' • ' + (q.topic || ''))}"
                    >
                      ${shortTag}
                    </button>
                  `;
                }).join('');

                return `
                  <div class="nav-section-group">
                    <div class="nav-section-header">
                      <span><span class="nav-section-badge">${sec.code}</span> <span class="nav-section-title">${sec.title}</span></span>
                      <span class="nav-section-count">${sec.items.length}c</span>
                    </div>
                    <div class="navigator-grid" style="grid-template-columns: repeat(4, 1fr); gap: 0.35rem; margin-bottom: 0.5rem;">
                      ${buttonsHtml}
                    </div>
                  </div>
                `;
              }).join('');

              return tabsHtml + sectionsHtml;
            })()}

            <div class="navigator-legend">
              <div class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Làm đúng</div>
              <div class="legend-item"><span class="legend-dot" style="background:#dc2626;"></span> Làm sai</div>
              <div class="legend-item"><span class="legend-dot" style="background:#0284c7;"></span> Đã mở lời giải</div>
            </div>
          </aside>
        ` : ''}
      </div>
    `;
  }

  // ==================== LIST VIEW ====================
  function renderListView(filtered) {
    if (!filtered || filtered.length === 0) {
      return `
        <div class="quiz-empty-box">
          <p>Không có câu hỏi nào khớp với bộ lọc.</p>
          <button class="quiz-tool-btn" onclick="window.ChemQuizApp.resetFilters()">Xóa bộ lọc</button>
        </div>
      `;
    }

    return `
      <div class="quiz-list-layout">
        ${filtered.map(q => `
          <div class="quiz-list-card" id="card-${q.id}">
            ${renderQuestionCardContent(q, false)}
          </div>
        `).join('')}
      </div>
    `;
  }

  // ==================== NỘI DUNG THẺ CÂU HỎI ====================
  function renderQuestionCardContent(q, isSlideMode) {
    const exam = getCurrentExam();
    const key = getQKey(q.id);
    const isRevealed = !!state.revealedQuestions[key];
    const isStarred = !!state.starredQuestions[key];
    const status = evaluateQuestionStatus(q);

    return `
      <div class="slide-card-header">
        <div class="slide-q-meta">
          ${(() => {
            const sec = getQuestionSection(q, exam);
            const pdfNum = q.orig_qnum || q.qnum || q.id;
            return `
              <span class="slide-q-topic" style="background:#e0f2fe; color:#0369a1; font-weight:700; border-radius: 6px; padding: 0.2rem 0.5rem;">📂 ${sec.code} • Câu ${pdfNum} (PDF)</span>
              <span class="slide-q-number" style="color: #ffffff; font-weight: 700;">${exam.shortTitle || "Hóa học 12"} • ${q.id}/${exam.questions ? exam.questions.length : 145}</span>
            `;
          })()}
          ${q.topic ? `<span class="slide-q-topic">📌 ${q.topic}</span>` : ''}
          <span class="slide-q-topic" style="background: rgba(2, 132, 199, 0.1); color: #0284c7;">
            ${q.type === 'mcq' ? 'Nhiều lựa chọn (0.25đ)' : (q.type === 'tf' ? 'Đúng/Sai (Tối đa 1.0đ)' : 'Trả lời ngắn (0.25đ)')}
          </span>
        </div>
        <div class="slide-q-actions">
          <button class="btn-star-q ${isStarred ? 'starred' : ''}" onclick="window.ChemQuizApp.toggleStar(${q.id})" title="Đánh dấu câu hỏi cần lưu ý (Phím S)">
            ${isStarred ? '★ Đã lưu ý' : '☆ Đánh dấu lưu ý'}
          </button>
          ${!isSlideMode ? `
            <button class="quiz-tool-btn" onclick="window.ChemQuizApp.toggleReveal(${q.id})">
              ${isRevealed ? '🙈 Ẩn lời giải' : '👁️ Xem lời giải'}
            </button>
          ` : ''}
        </div>
      </div>

      <div class="slide-q-body ${q.figure ? 'has-figure' : ''}">
        <div class="slide-q-text">${q.prompt || q.question || ''}</div>

        ${q.figure ? `
          <div class="slide-q-figure" onclick="window.ChemQuizApp.zoomImage('${q.figure}?v=20261030_v3', '${escapeAttr(exam.title + ' • ' + q.label)}')" title="Nhấn vào hình để phóng to toàn màn hình">
            <img src="${q.figure}?v=20261030_v3" alt="${q.label}" class="slide-q-figure-img" onerror="this.onerror=null;this.src='${q.figure}'" />
            <div class="slide-q-figure-caption">🔍 Nhấn để phóng to hình ảnh chi tiết</div>
          </div>
        ` : ''}
      </div>

      ${renderPartInteraction(q, key, isRevealed)}

      ${(isRevealed || status !== 'UNANSWERED') ? `
        <div class="slide-explanation-box">
          <div class="explanation-header">
            <span>💡 ĐÁP ÁN & LỜI GIẢI CHI TIẾT:</span>
            <span class="explanation-ans-badge">${getAnswerBadgeText(q)}</span>
          </div>
          <div class="explanation-content">
            ${q.explanation || 'Đang cập nhật hướng dẫn giải chi tiết.'}
          </div>
        </div>
      ` : ''}
    `;
  }

  // ==================== TƯƠNG TÁC LÀM BÀI TỪNG PHẦN ====================
  function renderPartInteraction(q, key, isRevealed) {
    // 1. PHẦN 1: Nhiều lựa chọn
    if (q.type === 'mcq') {
      const userAns = state.mcqAnswers[key];
      const options = q.options || {};
      const maxOptLen = Math.max(...Object.values(options).map(s => (s || '').length));
      const gridClass = maxOptLen > 56 ? 'single-col' : '';

      return `
        <div class="slide-options-grid ${gridClass}">
          ${['A', 'B', 'C', 'D'].map(letter => {
            let stateClass = '';
            let statusIcon = '';

            if (isRevealed) {
              if (letter === q.answer) {
                stateClass = 'is-correct';
                statusIcon = '✔';
              } else if (userAns === letter && userAns !== q.answer) {
                stateClass = 'is-wrong';
                statusIcon = '✖';
              }
            } else if (userAns) {
              if (letter === userAns) {
                if (userAns === q.answer) {
                  stateClass = 'is-correct';
                  statusIcon = '✔';
                } else {
                  stateClass = 'is-wrong';
                  statusIcon = '✖';
                }
              } else if (letter === q.answer && userAns !== q.answer) {
                stateClass = 'is-correct';
                statusIcon = '✔';
              }
            }

            return `
              <button
                type="button"
                class="quiz-option-btn ${stateClass}"
                onclick="window.ChemQuizApp.selectMcq(${q.id}, '${letter}')"
              >
                <span class="option-letter">${letter}</span>
                <span class="option-content">${options[letter] || ''}</span>
                ${statusIcon ? `<span class="option-status-icon">${statusIcon}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // 2. PHẦN 2: Đúng / Sai (4 ý a, b, c, d)
    if (q.type === 'tf') {
      const tfUser = state.tfAnswers[key] || {};
      const items = q.items || q.statements || {};
      const correctAns = q.answer || q.answers || {};

      return `
        <div class="math-tf-container">
          ${['a', 'b', 'c', 'd'].map(subKey => {
            const rawCorrect = correctAns[subKey];
            const correctBool = rawCorrect === 'Đ' || rawCorrect === 'D' || rawCorrect === true;
            const userBool = tfUser[subKey];
            const hasAnswered = typeof userBool === 'boolean';
            let rowClass = '';
            if (hasAnswered) {
              rowClass = userBool === correctBool ? 'row-correct' : 'row-wrong';
            } else if (isRevealed) {
              rowClass = 'row-correct';
            }

            let btnTrueClass = '';
            let btnFalseClass = '';

            if (hasAnswered) {
              if (userBool === true) {
                btnTrueClass = correctBool === true ? 'selected-correct' : 'selected-wrong';
                if (!correctBool) btnFalseClass = 'ans-hint';
              } else {
                btnFalseClass = correctBool === false ? 'selected-correct' : 'selected-wrong';
                if (correctBool) btnTrueClass = 'ans-hint';
              }
            } else if (isRevealed) {
              if (correctBool) btnTrueClass = 'ans-hint';
              else btnFalseClass = 'ans-hint';
            }

            return `
              <div class="math-tf-row ${rowClass}">
                <div class="math-tf-statement">
                  <span class="math-tf-key">${subKey.toUpperCase()}</span>
                  <span>${items[subKey] || ''}</span>
                </div>
                <div class="math-tf-actions">
                  <button
                    type="button"
                    class="tf-choice-btn ${btnTrueClass}"
                    onclick="window.ChemQuizApp.selectTf(${q.id}, '${subKey}', true)"
                  >
                    Đúng (Đ)
                  </button>
                  <button
                    type="button"
                    class="tf-choice-btn ${btnFalseClass}"
                    onclick="window.ChemQuizApp.selectTf(${q.id}, '${subKey}', false)"
                  >
                    Sai (S)
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 3. PHẦN 3: Trả lời ngắn (KQ tối đa 4 kí tự)
    if (q.type === 'sa' || q.type === 'short') {
      const userVal = state.shortAnswers[key] || '';
      const hasVal = userVal.trim() !== '';
      const normU = normalizeNumberStr(userVal);
      const normC = normalizeNumberStr(q.answer);
      const isCorrect = hasVal && (normU === normC || (q.acceptedAnswers && q.acceptedAnswers.map(normalizeNumberStr).includes(normU)));
      const inputClass = hasVal ? (isCorrect ? 'is-correct' : 'is-wrong') : '';
      const showKq = isRevealed || isCorrect;

      const kqCells = (q.kqCells && q.kqCells.length === 4) 
        ? q.kqCells 
        : String(q.answer).padEnd(4, ' ').slice(0, 4).split('');

      return `
        <div class="math-sa-wrapper">
          <div class="math-sa-input-group">
            <span class="math-sa-label">✍️ Nhập đáp số học sinh:</span>
            <input
              type="text"
              class="math-sa-input ${inputClass}"
              placeholder="Nhập số..."
              value="${escapeAttr(userVal)}"
              onchange="window.ChemQuizApp.setShortAnswer(${q.id}, this.value)"
            />
            <button type="button" class="quiz-tool-btn" onclick="const inp=this.previousElementSibling; window.ChemQuizApp.setShortAnswer(${q.id}, inp.value)">
              ✔ Kiểm tra
            </button>
            ${hasVal ? `
              <span style="font-weight: 800; font-size: 0.92rem; color: ${isCorrect ? '#16a34a' : '#dc2626'};">
                ${isCorrect ? '🎉 Chính xác!' : `✖ Chưa đúng (Đáp số chuẩn: ${q.answer})`}
              </span>
            ` : ''}
          </div>

          <div class="math-kq-box-group" title="Ô điền kết quả chuẩn trên phiếu trả lời trắc nghiệm (Tối đa 4 ký tự)">
            <span class="math-kq-title">KQ:</span>
            <div class="math-kq-cells ${showKq ? 'revealed' : ''}">
              ${kqCells.map(ch => `
                <div class="math-kq-cell">${showKq ? ch.trim() : ''}</div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    return '';
  }

  function getAnswerBadgeText(q) {
    if (q.type === 'mcq') return `Chọn <b>${q.answer}</b>`;
    if (q.type === 'tf') {
      const a = q.answer || q.answers || {};
      const fa = a.a === true || a.a === 'Đ' || a.a === 'D' ? 'Đ' : 'S';
      const fb = a.b === true || a.b === 'Đ' || a.b === 'D' ? 'Đ' : 'S';
      const fc = a.c === true || a.c === 'Đ' || a.c === 'D' ? 'Đ' : 'S';
      const fd = a.d === true || a.d === 'Đ' || a.d === 'D' ? 'Đ' : 'S';
      return `a) <b>${fa}</b> • b) <b>${fb}</b> • c) <b>${fc}</b> • d) <b>${fd}</b>`;
    }
    if (q.type === 'sa' || q.type === 'short') {
      return `Đáp số: <b>${q.answer}</b>`;
    }
    return '';
  }

  // ==================== BẢNG ĐÁP ÁN NHANH ====================
  function renderAnswerKeyModal(exam) {
    const questions = exam.questions || [];
    
    // Group questions by section using getQuestionSection
    const sectionMap = new Map();
    questions.forEach((q) => {
      const sec = getQuestionSection(q, exam);
      if (!sectionMap.has(sec.key)) {
        sectionMap.set(sec.key, { ...sec, items: [] });
      }
      sectionMap.get(sec.key).items.push(q);
    });
    const sections = Array.from(sectionMap.values());

    return `
      <div class="quiz-modal-backdrop open" onclick="window.ChemQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-card quiz-modal-box modal-box-wide" onclick="event.stopPropagation()">
          <div class="quiz-modal-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%); color: #ffffff; padding: 14px 20px; border-radius: 12px 12px 0 0;">
            <h4 style="color: #ffffff; font-weight: 700; display: flex; align-items: center; gap: 8px; margin: 0;">
              🔑 BẢNG ĐÁP ÁN TOÀN BỘ ${questions.length} CÂU — ${escapeHtml(exam.title)}
            </h4>
            <button class="modal-close-btn quiz-modal-close" style="color: #ffffff;" onclick="window.ChemQuizApp.closeAnswerKeyModal()">&times;</button>
          </div>
          <div class="quiz-modal-body" style="max-height: 75vh; overflow-y: auto; padding: 20px;">
            <p style="margin-top: 0; margin-bottom: 16px; font-size: 0.9rem; color: #64748b;">
              💡 <i>Số thứ tự các câu được sắp xếp và hiển thị chính xác theo từng mục tương ứng trong tài liệu PDF. Nhấn vào bất kỳ câu nào để chuyển nhanh đến câu đó.</i>
            </p>
            ${sections.map((sec) => {
              const mcqs = sec.items.filter(q => q.type === 'mcq');
              const tfs = sec.items.filter(q => q.type === 'tf');
              const sas = sec.items.filter(q => q.type === 'sa');

              return `
                <div class="key-section-block" style="margin-bottom: 22px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                  <div class="key-section-title" style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; color: #0f172a; padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; font-size: 0.95rem;">
                    <span>📂 ${escapeHtml(sec.title || sec.code)}</span>
                    <span style="font-size: 0.8rem; font-weight: 600; color: #475569; background: #e2e8f0; padding: 2px 8px; border-radius: 10px;">${sec.items.length} câu</span>
                  </div>
                  <div style="padding: 14px 16px;">
                    ${mcqs.length > 0 ? `
                      <div class="key-table-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(68px, 1fr)); gap: 8px; margin-bottom: ${tfs.length > 0 || sas.length > 0 ? '14px' : '0'};">
                        ${mcqs.map(q => {
                          const num = q.orig_qnum || q.qnum || q.id;
                          return `
                            <div class="key-item" style="cursor: pointer;" onclick="window.ChemQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <span class="key-qnum">C${num}</span>
                              <span class="key-ans-letter">${q.answer || '—'}</span>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : ''}

                    ${tfs.length > 0 ? `
                      <div class="key-tf-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; margin-bottom: ${sas.length > 0 ? '14px' : '0'};">
                        ${tfs.map(q => {
                          const num = q.orig_qnum || q.qnum || q.id;
                          const a = q.answer || q.answers || {};
                          const fa = a.a === true || a.a === 'Đ' || a.a === 'D' ? 'Đ' : 'S';
                          const fb = a.b === true || a.b === 'Đ' || a.b === 'D' ? 'Đ' : 'S';
                          const fc = a.c === true || a.c === 'Đ' || a.c === 'D' ? 'Đ' : 'S';
                          const fd = a.d === true || a.d === 'Đ' || a.d === 'D' ? 'Đ' : 'S';
                          return `
                            <div class="key-tf-card" style="cursor: pointer;" onclick="window.ChemQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <div class="key-tf-num">Câu ${num}</div>
                              <div class="key-tf-sub">a) <b class="${fa === 'Đ' ? 'd' : 's'}">${fa}</b></div>
                              <div class="key-tf-sub">b) <b class="${fb === 'Đ' ? 'd' : 's'}">${fb}</b></div>
                              <div class="key-tf-sub">c) <b class="${fc === 'Đ' ? 'd' : 's'}">${fc}</b></div>
                              <div class="key-tf-sub">d) <b class="${fd === 'Đ' ? 'd' : 's'}">${fd}</b></div>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : ''}

                    ${sas.length > 0 ? `
                      <div class="key-table-grid short-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(88px, 1fr)); gap: 8px;">
                        ${sas.map(q => {
                          const num = q.orig_qnum || q.qnum || q.id;
                          return `
                            <div class="key-item short" style="cursor: pointer;" onclick="window.ChemQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <span class="key-qnum">C${num}</span>
                              <span class="key-ans-val" style="font-size: 0.82rem; font-weight: 700;">${q.answer || '—'}</span>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==================== KEYBOARD NAVIGATION ====================
  function setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      const panel = document.getElementById('panel-hoa12');
      if (!panel || !panel.classList.contains('active')) return;

      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        return;
      }

      if (state.answerKeyModalOpen || state.zoomModal.open) {
        if (e.key === 'Escape') {
          state.answerKeyModalOpen = false;
          state.zoomModal.open = false;
          renderChemApp();
        }
        return;
      }

      const filtered = getFilteredQuestions();
      if (!filtered.length) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        window.ChemQuizApp.prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        window.ChemQuizApp.nextSlide();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        const currentQ = filtered[state.currentIndex];
        if (currentQ) window.ChemQuizApp.toggleStar(currentQ.id);
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const currentQ = filtered[state.currentIndex];
        if (currentQ) window.ChemQuizApp.toggleReveal(currentQ.id);
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ==================== PUBLIC API ====================
  
  function renderTheoryView(exam) {
    const essays = exam.essayQuestions || [];
    const allOpen = essays.length > 0 && essays.every(eq => state.revealedEssays[`${state.currentExamId}_tl_${eq.id}`]);
    return `
      <div class="oxyz-theory-view-wrapper">
        ${exam.theoryHtml || ''}

        <div class="oxyz-essay-section">
          <div class="oxyz-essay-section-header">
            <div>
              <h4>📖 VÍ DỤ MẪU & BÀI TẬP ÁP DỤNG (${essays.length} BÀI)</h4>
              <p>Bấm vào từng bài để hiện/ẩn lời giải chi tiết, hoặc chuyển sang tab Trình chiếu để làm ${exam.questions.length} câu trắc nghiệm.</p>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
              <button type="button" class="quiz-tool-btn" onclick="window.ChemQuizApp.toggleAllEssays()">
                ${allOpen ? '🙈 Ẩn tất cả lời giải' : '👁️ Hiện tất cả lời giải'}
              </button>
              <button type="button" class="slide-reveal-btn" onclick="window.ChemQuizApp.setMode('slide')">
                🖥️ Chuyển sang Trắc nghiệm (${exam.questions.length} câu) ➔
              </button>
            </div>
          </div>

          <div class="oxyz-essay-list">
            ${essays.map(eq => {
              const eKey = `${state.currentExamId}_tl_${eq.id}`;
              const isOpen = !!state.revealedEssays[eKey];
              return `
                <div class="oxyz-essay-card">
                  <div class="oxyz-essay-card-head">
                    <span class="oxyz-essay-badge">💡 ${eq.label}</span>
                    <button type="button" class="quiz-tool-btn" onclick="window.ChemQuizApp.toggleEssay(${eq.id})">
                      ${isOpen ? '🙈 Ẩn lời giải' : '👁️ Xem lời giải chi tiết'}
                    </button>
                  </div>
                  <div class="slide-q-body ${eq.figure ? 'has-figure' : ''}" style="margin-top:0.5rem;">
                    <div class="slide-q-text">${eq.question}</div>
                    ${eq.figure ? `
                      <div class="slide-q-figure" onclick="window.ChemQuizApp.zoomImage('${eq.figure}', '${exam.shortTitle} • ${eq.label}')">
                        <img src="${eq.figure}" alt="${eq.label}" class="slide-q-figure-img" loading="lazy" />
                        <div class="slide-q-figure-caption">Hình minh họa (${eq.label}) <span class="zoom-hint-badge">🔍 Phóng to</span></div>
                      </div>
                    ` : ''}
                  </div>
                  ${isOpen ? `
                    <div class="slide-explanation-box" style="margin-top:0.75rem;">
                      <div class="explanation-header">
                        <span>💡 HƯỚNG DẪN GIẢI CHI TIẾT:</span>
                      </div>
                      <div class="explanation-content">${eq.explanation}</div>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  window.ChemQuizApp = {
    init: function () {
      loadSavedState();
      renderChemApp();
    },

    selectCategory: function (cat) {
      state.category = cat;
      if (cat === 'ch5') {
        state.currentExamId = 'chem_ch5_cd1';
      } else if (cat === 'chuyende') {
        state.currentExamId = 'hoa_chuyende_amino_acid';
      } else {
        state.currentExamId = 'hoa_de1';
      }
      state.currentIndex = 0;
      state.filterPart = 'ALL';
      state.filterSection = 'ALL';
      state.filterStarred = false;
      saveState();
      renderChemApp();
    },

    toggleEssay: function (id) {
      const key = `${state.currentExamId}_tl_${id}`;
      state.revealedEssays[key] = !state.revealedEssays[key];
      saveState();
      renderChemApp();
    },

    toggleAllEssays: function () {
      const exam = getCurrentExam();
      const essays = (exam && exam.essayQuestions) || [];
      const allOpen = essays.length > 0 && essays.every(eq => state.revealedEssays[`${state.currentExamId}_tl_${eq.id}`]);
      essays.forEach(eq => {
        state.revealedEssays[`${state.currentExamId}_tl_${eq.id}`] = !allOpen;
      });
      saveState();
      renderChemApp();
    },

    selectExam: function (examCode) {
      state.currentExamId = examCode;
      const exam = window.CHEM_ALL_EXAMS_DATA && window.CHEM_ALL_EXAMS_DATA[examCode];
      if (exam && (exam.group === 'ch5' || examCode.startsWith('chem_ch5_'))) {
        state.category = 'ch5';
      } else if (exam && exam.group === 'chuyende') {
        state.category = 'chuyende';
      } else if (exam) {
        state.category = 'de_on';
      }
      state.currentIndex = 0;
      state.filterSection = 'ALL';
      saveState();
      renderChemApp();
    },

    setSectionFilter: function (secKey) {
      state.filterSection = secKey;
      renderChemApp();
    },

    setMode: function (mode) {
      state.mode = mode;
      renderChemApp();
    },

    setPartFilter: function (part) {
      state.filterPart = part;
      state.currentIndex = 0;
      renderChemApp();
    },

    toggleStarFilter: function () {
      state.filterStarred = !state.filterStarred;
      state.currentIndex = 0;
      renderChemApp();
    },

    resetFilters: function () {
      state.filterPart = 'ALL';
      state.filterSection = 'ALL';
      state.filterStarred = false;
      state.currentIndex = 0;
      renderChemApp();
    },

    goToQuestionById: function (qid) {
      state.partFilter = 'all';
      state.sectionFilter = 'all';
      const exam = getCurrentExam();
      const filtered = getFilteredQuestions(exam);
      const idx = filtered.findIndex(q => q.id === qid);
      if (idx !== -1) {
        state.currentIndex = idx;
      }
      state.answerKeyModalOpen = false;
      renderChemApp();
    },

    goToSlide: function (idx) {
      state.currentIndex = idx;
      renderChemApp();
    },

    prevSlide: function () {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderChemApp();
      }
    },

    nextSlide: function () {
      const filtered = getFilteredQuestions();
      if (state.currentIndex < filtered.length - 1) {
        state.currentIndex++;
        renderChemApp();
      }
    },

    toggleSidebar: function () {
      state.sidebarOpen = !state.sidebarOpen;
      renderChemApp();
    },

    toggleFullscreen: function () {
      state.isFullscreen = !state.isFullscreen;
      renderChemApp();
    },

    changeZoom: function (delta) {
      state.fontScale = Math.max(0.8, Math.min(1.5, Number((state.fontScale + delta).toFixed(1))));
      saveState();
      renderChemApp();
    },

    toggleStar: function (qId) {
      const key = getQKey(qId);
      state.starredQuestions[key] = !state.starredQuestions[key];
      saveState();
      renderChemApp();
    },

    toggleReveal: function (qId) {
      const key = getQKey(qId);
      state.revealedQuestions[key] = !state.revealedQuestions[key];
      renderChemApp();
    },

    clearQuestion: function (qId) {
      const key = getQKey(qId);
      delete state.mcqAnswers[key];
      delete state.tfAnswers[key];
      delete state.shortAnswers[key];
      delete state.revealedQuestions[key];
      saveState();
      renderChemApp();
    },

    revealAllInFilter: function () {
      const filtered = getFilteredQuestions();
      const allRevealed = filtered.every(q => !!state.revealedQuestions[getQKey(q.id)]);
      filtered.forEach(q => {
        state.revealedQuestions[getQKey(q.id)] = !allRevealed;
      });
      renderChemApp();
    },

    selectMcq: function (qId, letter) {
      const key = getQKey(qId);
      state.mcqAnswers[key] = letter;
      saveState();
      renderChemApp();
    },

    selectTf: function (qId, subKey, val) {
      const key = getQKey(qId);
      if (!state.tfAnswers[key]) state.tfAnswers[key] = {};
      state.tfAnswers[key][subKey] = val;
      saveState();
      renderChemApp();
    },

    setShortAnswer: function (qId, val) {
      const key = getQKey(qId);
      state.shortAnswers[key] = val;
      saveState();
      renderChemApp();
    },

    openAnswerKeyModal: function () {
      state.answerKeyModalOpen = true;
      renderChemApp();
    },

    closeAnswerKeyModal: function () {
      state.answerKeyModalOpen = false;
      renderChemApp();
    },

    zoomImage: function (src, caption) {
      state.zoomModal = {
        open: true,
        src,
        caption: caption || 'Hình ảnh cấu trúc / Thí nghiệm'
      };
      renderChemApp();
    },

    closeZoomModal: function () {
      state.zoomModal.open = false;
      renderChemApp();
    },

    resetCurrentExamAnswers: function () {
      const exam = getCurrentExam();
      if (!exam || !exam.questions) return;
      if (confirm(`Bạn có chắc chắn muốn xóa bài làm của ${exam.shortTitle || exam.title} để làm lại không?`)) {
        exam.questions.forEach(q => {
          const k = getQKey(q.id);
          delete state.mcqAnswers[k];
          delete state.tfAnswers[k];
          delete state.shortAnswers[k];
          delete state.revealedQuestions[k];
        });
        saveState();
        renderChemApp();
      }
    }
  };

  // Khởi tạo
  setupKeyboard();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadSavedState();
      renderChemApp();
    });
  } else {
    loadSavedState();
    renderChemApp();
  }
})();
