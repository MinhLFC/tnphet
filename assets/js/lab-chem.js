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
    filterStarred: false,
    fontScale: 1.0,
    sidebarOpen: true,
    isFullscreen: false,
    revealedQuestions: {}, // { [key]: boolean }
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
    const chuyenDeExams = allExams.filter(e => e.group === 'chuyende');
    const deOnExams = allExams.filter(e => e.group !== 'chuyende');

    // Đồng bộ category với đề hiện tại
    if (exam && exam.group === 'chuyende') {
      state.category = 'chuyende';
    } else if (exam && (!state.category || state.category === 'chuyende')) {
      state.category = 'de_on';
    }
    const curCat = state.category || 'de_on';
    const activeExamList = curCat === 'chuyende' ? (chuyenDeExams.length ? chuyenDeExams : allExams) : deOnExams;

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
            <!-- Chuyển chế độ Trình chiếu / Danh sách -->
            <div class="quiz-mode-switch">
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

          <div class="math-exam-grid-20" style="${curCat === 'chuyende' ? 'display: flex; gap: 10px;' : 'grid-template-columns: repeat(7, minmax(0, 1fr));'}">
            ${activeExamList.map((ex, i) => {
              const num = i + 1;
              const isAct = state.currentExamId === ex.code;
              const hasProg = hasExamProgress(ex.code);
              return `
                <button
                  type="button"
                  class="math-exam-num-btn ${isAct ? 'active' : ''} ${hasProg ? 'has-progress' : ''}"
                  style="${curCat === 'chuyende' ? 'flex: 1; padding: 10px 18px; font-weight: 600; font-size: 0.95rem; white-space: normal; line-height: 1.3;' : ''}"
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
        ${state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered)}

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
  function renderSlideView(filtered) {
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
              <h4>🧭 Chuyển nhanh (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            <div class="navigator-grid" style="grid-template-columns: repeat(4, 1fr);">
              ${filtered.map((q, idx) => {
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

                const shortTag = q.part === 1
                  ? `P1.${q.qnum}`
                  : (q.part === 2 ? `P2.${q.qnum}` : `P3.${q.qnum}`);

                return `
                  <button
                    type="button"
                    class="nav-q-cell ${cellClass}"
                    style="aspect-ratio: auto; padding: 0.45rem 0.25rem; font-size: 0.75rem;"
                    onclick="window.ChemQuizApp.goToSlide(${idx})"
                    title="${q.label} (${q.topic || ''})"
                  >
                    ${shortTag}
                  </button>
                `;
              }).join('')}
            </div>

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
          <span class="slide-q-number">${exam.title} • ${q.label}</span>
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
          <div class="slide-q-figure" onclick="window.ChemQuizApp.zoomImage('${q.figure}', '${escapeAttr(exam.title + ' • ' + q.label)}')" title="Nhấn vào hình để phóng to toàn màn hình">
            <img src="${q.figure}?v=20261023" alt="${q.label}" class="slide-q-figure-img" onerror="this.onerror=null;this.src='${q.figure}'" />
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
    const p1 = questions.filter(q => q.part === 1);
    const p2 = questions.filter(q => q.part === 2);
    const p3 = questions.filter(q => q.part === 3);

    return `
      <div class="quiz-modal-backdrop open" onclick="window.ChemQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-card quiz-modal-box modal-box-wide" onclick="event.stopPropagation()">
          <div class="quiz-modal-header">
            <h4>🔑 BẢNG ĐÁP ÁN TOÀN BỘ ${questions.length} CÂU — ${exam.title}</h4>
            <button class="modal-close-btn quiz-modal-close" onclick="window.ChemQuizApp.closeAnswerKeyModal()">&times;</button>
          </div>
          <div class="quiz-modal-body" style="max-height: 75vh; overflow-y: auto;">
            <!-- PHẦN 1 -->
            <div class="key-section-title">PHẦN 1: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (${p1.length} CÂU)</div>
            <div class="key-table-grid">
              ${p1.map(q => `
                <div class="key-item">
                  <span class="key-qnum">C${q.qnum}</span>
                  <span class="key-ans-letter">${q.answer}</span>
                </div>
              `).join('')}
            </div>

            <!-- PHẦN 2 -->
            <div class="key-section-title" style="margin-top: 18px;">PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (${p2.length} CÂU)</div>
            <div class="key-tf-grid">
              ${p2.map(q => {
                const a = q.answer || q.answers || {};
                const fa = a.a === true || a.a === 'Đ' || a.a === 'D' ? 'Đ' : 'S';
                const fb = a.b === true || a.b === 'Đ' || a.b === 'D' ? 'Đ' : 'S';
                const fc = a.c === true || a.c === 'Đ' || a.c === 'D' ? 'Đ' : 'S';
                const fd = a.d === true || a.d === 'Đ' || a.d === 'D' ? 'Đ' : 'S';
                return `
                  <div class="key-tf-card">
                    <div class="key-tf-num">Câu ${q.qnum}</div>
                    <div class="key-tf-sub">a) <b class="${fa === 'Đ' ? 'd' : 's'}">${fa}</b></div>
                    <div class="key-tf-sub">b) <b class="${fb === 'Đ' ? 'd' : 's'}">${fb}</b></div>
                    <div class="key-tf-sub">c) <b class="${fc === 'Đ' ? 'd' : 's'}">${fc}</b></div>
                    <div class="key-tf-sub">d) <b class="${fd === 'Đ' ? 'd' : 's'}">${fd}</b></div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- PHẦN 3 -->
            <div class="key-section-title" style="margin-top: 18px;">PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3.length} CÂU)</div>
            <div class="key-table-grid short-grid">
              ${p3.map(q => `
                <div class="key-item short">
                  <span class="key-qnum">C${q.qnum}</span>
                  <span class="key-ans-val">${q.answer}</span>
                </div>
              `).join('')}
            </div>
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

  function escapeAttr(str) {
    if (!str) return '';
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ==================== PUBLIC API ====================
  window.ChemQuizApp = {
    init: function () {
      loadSavedState();
      renderChemApp();
    },

    selectCategory: function (cat) {
      state.category = cat;
      if (cat === 'chuyende') {
        state.currentExamId = 'hoa_chuyende_amino_acid';
      } else {
        state.currentExamId = 'hoa_de1';
      }
      state.currentIndex = 0;
      state.filterPart = 'ALL';
      state.filterStarred = false;
      saveState();
      renderChemApp();
    },

    selectExam: function (examCode) {
      state.currentExamId = examCode;
      const exam = window.CHEM_ALL_EXAMS_DATA && window.CHEM_ALL_EXAMS_DATA[examCode];
      if (exam && exam.group === 'chuyende') {
        state.category = 'chuyende';
      } else if (exam) {
        state.category = 'de_on';
      }
      state.currentIndex = 0;
      saveState();
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
      state.filterStarred = false;
      state.currentIndex = 0;
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
