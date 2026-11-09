/**
 * ============================================================================
 * MODULE TRÌNH CHIẾU & SỬA BÀI VẬT LÍ 12 — CHUYÊN ĐỀ & BỘ ĐỀ ÔN TẬP
 * Cập nhật trọn bộ:
 *   🔬 CHỦ ĐỀ 2: ĐỊNH LUẬT BOYLE (239 câu hỏi chia theo dạng & bài tập mức độ)
 *      - Dạng 1: Xác định áp suất và thể tích (56 câu: 28 LT + 28 TL)
 *      - Dạng 2: Xác định số lần bơm (56 câu: 28 LT + 28 TL)
 *      - Dạng 3: Quá trình đẳng nhiệt trong ống thủy tinh (56 câu: 28 LT + 28 TL)
 *      - Bài tập theo mức độ: 71 câu (56 ABCD + 6 Đúng/Sai + 9 TLN)
 *   🎈 CĐ2 - BÀI 1: MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ (101 câu: 3 bộ đề)
 *   ⚡ ÔN TẬP GIỮA KÌ 1 & VẬT LÍ NHIỆT (4 đề ôn tập tổng hợp)
 *
 * Tính năng nâng cấp:
 * - Lưới câu hỏi phân chia mục (Mục / Dạng) khớp 100% tài liệu PDF
 * - Bảng đáp án toàn bộ chia theo mục chuẩn xác, nhấp vào chuyển ngay đến câu
 * - Phóng to hình vẽ thí nghiệm / đồ thị thực tế cắt trực tiếp từ tài liệu
 * - Trình chiếu Slide & Danh sách, phóng to chữ máy chiếu (A- / A+)
 * - Sửa lỗi tương phản (chữ trắng sắc nét trên badge xanh), không lỗi undefined
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'tnphet_phys_quiz_state_v4';

  const state = {
    category: 'boyle', // 'boyle' | 'dhpt' | 'nhiet'
    currentExamId: 'ly_boyle_d1',
    mode: 'slide', // 'slide' | 'list'
    currentIndex: 0,
    filterPart: 'ALL', // 'ALL' | 1 | 2 | 3
    filterStarred: false,
    selectedSection: 'ALL',
    sidebarOpen: true,
    fontScale: 1.0,
    isFullscreen: false,
    answerKeyModalOpen: false,
    zoomModal: {
      open: false,
      src: '',
      caption: ''
    },

    // Dữ liệu người dùng
    starredQuestions: {},
    mcqAnswers: {},
    tfAnswers: {},
    shortAnswers: {},
    revealedQuestions: {}
  };

  function normalizeNumberStr(s) {
    if (s === undefined || s === null) return '';
    return String(s)
      .trim()
      .replace(/\s+/g, '')
      .replace(/,/g, '.')
      .replace(/^0+(?=\d)/, '');
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function getQuestionSection(q, exam) {
    if (q.section && q.sectionTitle) {
      return {
        key: q.section,
        title: q.sectionTitle,
        short: q.sectionShort || q.section,
        code: q.d_label ? q.d_label.split('•')[0].trim() : (q.sectionShort || '')
      };
    }
    const pName = q.part === 1 ? 'Phần 1: Nhiều lựa chọn' : (q.part === 2 ? 'Phần 2: Đúng / Sai' : 'Phần 3: Trả lời ngắn');
    return {
      key: `part_${q.part}`,
      title: pName,
      short: `P${q.part}`,
      code: `Phần ${q.part}`
    };
  }

  function getCurrentExam() {
    const data = window.PHYS_EXAMS_DATA || {};
    if (!data[state.currentExamId]) {
      const keys = Object.keys(data);
      if (keys.length > 0) {
        state.currentExamId = keys[0];
      }
    }
    return data[state.currentExamId] || null;
  }

  function getQKey(qId) {
    return `${state.currentExamId}_q${qId}`;
  }

  function hasExamProgress(examCode) {
    const prefix = `${examCode}_`;
    for (const k in state.mcqAnswers) if (k.startsWith(prefix)) return true;
    for (const k in state.tfAnswers) if (k.startsWith(prefix)) return true;
    for (const k in state.shortAnswers) if (k.startsWith(prefix)) return true;
    return false;
  }

  function isMcqOptionCorrect(q, optKey) {
    if (!q || !q.answer) return false;
    return String(q.answer).trim().toUpperCase() === String(optKey).trim().toUpperCase();
  }

  function getFilteredQuestions() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return [];
    return exam.questions.filter((q) => {
      if (state.filterPart !== 'ALL' && q.part !== state.filterPart) {
        return false;
      }
      if (state.filterStarred) {
        const key = getQKey(q.id);
        if (!state.starredQuestions[key]) return false;
      }
      return true;
    });
  }

  function evaluateQuestionStatus(q) {
    const key = getQKey(q.id);
    if (q.type === 'mcq') {
      const user = state.mcqAnswers[key];
      if (!user) return 'UNANSWERED';
      return isMcqOptionCorrect(q, user) ? 'CORRECT' : 'WRONG';
    }

    if (q.type === 'tf') {
      const user = state.tfAnswers[key];
      if (!user) return 'UNANSWERED';
      const answeredKeys = Object.keys(user).filter(k => typeof user[k] === 'boolean');
      if (answeredKeys.length === 0) return 'UNANSWERED';

      const correctAns = q.answer || q.answers || {};
      let correctCount = 0;
      for (const k of ['a', 'b', 'c', 'd']) {
        if (typeof user[k] === 'boolean') {
          const isTrue = correctAns[k] === true || correctAns[k] === 'Đ' || correctAns[k] === 'D';
          if (user[k] === isTrue) correctCount++;
        }
      }
      if (answeredKeys.length === 4) {
        if (correctCount === 4) return 'CORRECT';
        if (correctCount === 0) return 'WRONG';
        return 'PARTIAL';
      }
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

  // ==========================================
  // HELPER: FORMAT LATEX / MATH TO CLEAN HTML
  // ==========================================
  function formatMathHtml(str) {
    if (!str || typeof str !== 'string') return str || '';
    if (!str.includes('$') && !str.includes('\\')) return str;

    // Convert display math $$...$$
    str = str.replace(/\$\$(.*?)\$\$/gs, function(_, expr) {
      return '<div style="margin: 0.35rem 0; font-style: italic; font-weight: 500;">' + cleanMathExpr(expr) + '</div>';
    });

    // Convert inline math $...$
    str = str.replace(/\$(.*?)\$/gs, function(_, expr) {
      return cleanMathExpr(expr);
    });

    return str;
  }

  function cleanMathExpr(expr) {
    if (!expr) return '';
    expr = expr.trim();
    while (expr.includes('\\\\')) expr = expr.replace(/\\\\/g, '\\');

    // Units
    expr = expr.replace(/\\text\{dm\}\^3/g, 'dm<sup>3</sup>')
               .replace(/\\text\{m\}\^3/g, 'm<sup>3</sup>')
               .replace(/\\text\{cm\}\^3/g, 'cm<sup>3</sup>')
               .replace(/\\text\{mol\}\^\{-1\}/g, 'mol<sup>-1</sup>')
               .replace(/\\text\{K\}\^\{-1\}/g, 'K<sup>-1</sup>');

    // Text tags
    expr = expr.replace(/\\text\{([^}]+)\}/g, '$1')
               .replace(/\\mathrm\{([^}]+)\}/g, '$1')
               .replace(/\\mathbf\{([^}]+)\}/g, '<b>$1</b>')
               .replace(/\\mathit\{([^}]+)\}/g, '<i>$1</i>');

    // Symbols
    expr = expr.replace(/\\cdot/g, ' · ')
               .replace(/\\times/g, ' × ')
               .replace(/\\approx/g, ' ≈ ')
               .replace(/\\le(q)?/g, ' ≤ ')
               .replace(/\\ge(q)?/g, ' ≥ ')
               .replace(/\\ne(q)?/g, ' ≠ ')
               .replace(/\\pm/g, ' ± ')
               .replace(/\\mp/g, ' ∓ ')
               .replace(/\\infty/g, '∞')
               .replace(/\\alpha/g, 'α')
               .replace(/\\beta/g, 'β')
               .replace(/\\gamma/g, 'γ')
               .replace(/\\Delta/g, 'Δ')
               .replace(/\\delta/g, 'δ')
               .replace(/\\rho/g, 'ρ')
               .replace(/\\mu/g, 'μ')
               .replace(/\\pi/g, 'π')
               .replace(/\\sim/g, ' ~ ')
               .replace(/\\propto/g, ' ∝ ')
               .replace(/\\implies/g, ' ⟹ ')
               .replace(/\\iff/g, ' ⟺ ')
               .replace(/\\rightarrow|\\to/g, ' → ')
               .replace(/\^\\circ|\^\{\\circ\}|\\degree/g, '°');

    expr = expr.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')')
               .replace(/\\left\[/g, '[').replace(/\\right\]/g, ']')
               .replace(/\\left\\\{/g, '{').replace(/\\right\\\}/g, '}');

    // Fractions
    while (expr.includes('\\frac')) {
      var match = expr.match(/\\frac\{([^{}]+)\}\{([^{}]+)\}/);
      if (!match) break;
      var num = match[1].trim();
      var den = match[2].trim();
      var repl = (/[+·×=-]/.test(num) || /[+·×=-]/.test(den)) ? '(' + num + ')/(' + den + ')' : num + '/' + den;
      expr = expr.slice(0, match.index) + repl + expr.slice(match.index + match[0].length);
    }

    // Sub & sup
    expr = expr.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
               .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
               .replace(/_([0-9]+)/g, '<sub>$1</sub>')
               .replace(/_([A-Za-z])(?![a-zA-Z0-9])/g, '<sub>$1</sub>')
               .replace(/\^([+-]?[0-9]+)/g, '<sup>$1</sup>')
               .replace(/\^([A-Za-z])(?![a-zA-Z0-9])/g, '<sup>$1</sup>');

    expr = expr.replace(/\\[a-zA-Z]+/g, '').replace(/\\/g, '');
    return expr.replace(/\s+/g, ' ').trim();
  }

  function getExamStats() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return { total: 0, answered: 0, correct: 0, totalScore: '0.00' };

    let answered = 0;
    let earnedUnits = 0;
    let maxUnits = 0;
    const questions = exam.questions;

    questions.forEach((q) => {
      const key = getQKey(q.id);
      if (q.type === 'mcq') {
        maxUnits += 0.25;
        const u = state.mcqAnswers[key];
        if (u) {
          answered++;
          if (isMcqOptionCorrect(q, u)) earnedUnits += 0.25;
        }
      } else if (q.type === 'tf') {
        maxUnits += 1.0;
        const u = state.tfAnswers[key];
        if (u && Object.keys(u).length > 0) {
          answered++;
          let subCount = 0;
          const c = q.answer || q.answers || {};
          for (const k of ['a', 'b', 'c', 'd']) {
            if (typeof u[k] === 'boolean') {
              const cBool = c[k] === 'Đ' || c[k] === 'D' || c[k] === true;
              if (u[k] === cBool) subCount++;
            }
          }
          if (subCount === 1) earnedUnits += 0.1;
          else if (subCount === 2) earnedUnits += 0.25;
          else if (subCount === 3) earnedUnits += 0.5;
          else if (subCount === 4) earnedUnits += 1.0;
        }
      } else if (q.type === 'sa' || q.type === 'short') {
        maxUnits += 0.25;
        const u = state.shortAnswers[key];
        if (u !== undefined && u !== null && u.trim() !== '') {
          answered++;
          const normU = normalizeNumberStr(u);
          const normC = normalizeNumberStr(q.answer);
          if (normU === normC || (q.acceptedAnswers && q.acceptedAnswers.map(normalizeNumberStr).includes(normU))) {
            earnedUnits += 0.25;
          }
        }
      }
    });

    const normalizedScore = maxUnits > 0
      ? (Math.abs(maxUnits - 10) < 0.01 ? earnedUnits : (earnedUnits / maxUnits) * 10)
      : 0;

    return {
      total: questions.length,
      answered,
      totalScore: Math.min(10, normalizedScore).toFixed(2)
    };
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const p = JSON.parse(saved);
        if (p.category) state.category = p.category;
        if (p.currentExamId && window.PHYS_EXAMS_DATA && window.PHYS_EXAMS_DATA[p.currentExamId]) {
          state.currentExamId = p.currentExamId;
          if (p.currentExamId.startsWith('ly_boyle_')) {
            state.category = 'boyle';
          } else if (p.currentExamId.startsWith('ly_cd2_')) {
            state.category = 'dhpt';
          }
        }
        if (p.starredQuestions) state.starredQuestions = p.starredQuestions;
        if (p.mcqAnswers) state.mcqAnswers = p.mcqAnswers;
        if (p.tfAnswers) state.tfAnswers = p.tfAnswers;
        if (p.shortAnswers) state.shortAnswers = p.shortAnswers;
        if (typeof p.fontScale === 'number') state.fontScale = p.fontScale;
      }
    } catch (e) {
      console.warn('Cannot load phys quiz state:', e);
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
    } catch (e) {
      console.warn('Cannot save phys quiz state:', e);
    }
  }

  function countStarred() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return 0;
    return exam.questions.filter(q => !!state.starredQuestions[getQKey(q.id)]).length;
  }

  // ==================== RENDER TOÀN BỘ ỨNG DỤNG ====================
  function renderPhysApp() {
    const root = document.getElementById('experiment-ly12');
    if (!root) return;

    const exam = getCurrentExam();
    if (!exam) {
      root.innerHTML = `
        <div class="quiz-empty-box" style="padding: 40px; text-align: center;">
          <div style="font-size: 2.4rem;">⚡</div>
          <p style="margin-top: 10px; font-weight: 600;">Đang chuẩn bị dữ liệu đề Vật lí 12...</p>
        </div>
      `;
      return;
    }

    const allQ = exam.questions || [];
    const p1Count = allQ.filter(q => q.part === 1).length;
    const p2Count = allQ.filter(q => q.part === 2).length;
    const p3Count = allQ.filter(q => q.part === 3).length;

    if (state.filterPart === 3 && p3Count === 0) {
      state.filterPart = 'ALL';
    }

    const filtered = getFilteredQuestions();
    if (state.currentIndex >= filtered.length) {
      state.currentIndex = Math.max(0, filtered.length - 1);
    }
    const stats = getExamStats();
    const exams = window.PHYS_EXAMS_DATA || {};
    const allExams = Object.values(exams);

    let curCat = state.category;
    if (!curCat) {
      if (state.currentExamId.startsWith('ly_boyle_')) curCat = 'boyle';
      else if (state.currentExamId.startsWith('ly_cd2_')) curCat = 'dhpt';
      else curCat = 'nhiet';
    }
    state.category = curCat;

    const boyleExams = allExams.filter(e => e.group === 'boyle' || e.code.startsWith('ly_boyle_'));
    const dhptExams = allExams.filter(e => e.group === 'dhpt' || (e.code.startsWith('ly_cd2_') && !e.code.startsWith('ly_boyle_')));
    const nhietExams = allExams.filter(e => e.group !== 'boyle' && e.group !== 'dhpt' && !e.code.startsWith('ly_boyle_') && !e.code.startsWith('ly_cd2_'));

    let activeExamList = boyleExams;
    if (curCat === 'dhpt') activeExamList = dhptExams.length ? dhptExams : allExams;
    else if (curCat === 'nhiet') activeExamList = nhietExams.length ? nhietExams : allExams;

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="physWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- THANH CÔNG CỤ TRÌNH CHIẾU TRÊN CÙNG -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">⚡</div>
            <div class="quiz-title-text">
              <h3>${exam.title}</h3>
              <p>${exam.subtitle || `Trọn bộ ${allQ.length} câu: Phần 1 ABCD (${p1Count}c) • Phần 2 Đúng/Sai (${p2Count}c)${p3Count > 0 ? ` • Phần 3 Trả lời ngắn (${p3Count}c)` : ''}`}</p>
            </div>
          </div>

          <div class="quiz-controls-group">
            <!-- Chuyển chế độ Trình chiếu / Danh sách -->
            <div class="quiz-mode-switch">
              <button class="quiz-mode-btn ${state.mode === 'slide' ? 'active' : ''}" onclick="window.PhysQuizApp.setMode('slide')">
                🖥️ Trình chiếu (Slide)
              </button>
              <button class="quiz-mode-btn ${state.mode === 'list' ? 'active' : ''}" onclick="window.PhysQuizApp.setMode('list')">
                📋 Danh sách (${filtered.length})
              </button>
            </div>

            <!-- Phóng to / Thu nhỏ cỡ chữ khi chiếu -->
            <div class="font-zoom-group" title="Tăng/giảm cỡ chữ khi chiếu máy chiếu">
              <button class="font-zoom-btn" onclick="window.PhysQuizApp.changeZoom(-0.1)">A−</button>
              <span class="font-zoom-label">${Math.round(state.fontScale * 100)}%</span>
              <button class="font-zoom-btn" onclick="window.PhysQuizApp.changeZoom(0.1)">A+</button>
            </div>

            <!-- Nút mở Bảng đáp án -->
            <button class="quiz-tool-btn" onclick="window.PhysQuizApp.openAnswerKeyModal()">
              🔑 Bảng đáp án
            </button>

            ${state.mode === 'slide' ? `
              <button class="quiz-tool-btn" onclick="window.PhysQuizApp.toggleSidebar()">
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : `▶ Hiện lưới ${filtered.length} câu`}
              </button>
            ` : `
              <button class="quiz-tool-btn" onclick="window.PhysQuizApp.revealAllInFilter()">
                👁️ Hiện tất cả lời giải
              </button>
            `}

            <button class="quiz-tool-btn" onclick="window.PhysQuizApp.toggleFullscreen()">
              ${state.isFullscreen ? '🗗 Thoát toàn màn hình' : '⛶ Toàn màn hình'}
            </button>

            <button class="quiz-tool-btn btn-accent" onclick="window.PhysQuizApp.resetCurrentExamAnswers()">
              🔄 Làm mới đề này
            </button>
          </div>
        </div>

        <!-- THANH CHỌN CHUYÊN ĐỀ & BỘ LỌC PHẦN -->
        <div class="math-exam-selector-bar selector-40-exams">
          <div class="math-exam-top-row">
            <div class="math-category-tabs">
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'boyle' ? 'active' : ''}"
                onclick="window.PhysQuizApp.selectCategory('boyle')"
              >
                🔬 CĐ2: Định Luật Boyle (239 câu)
              </button>
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'dhpt' ? 'active' : ''}"
                onclick="window.PhysQuizApp.selectCategory('dhpt')"
              >
                🎈 CĐ2: Mô Hình ĐHPT (101 câu)
              </button>
              <button
                type="button"
                class="math-category-tab-btn ${curCat === 'nhiet' ? 'active' : ''}"
                onclick="window.PhysQuizApp.selectCategory('nhiet')"
              >
                ⚡ Ôn Tập Giữa Kì 1 (Vật Lí Nhiệt)
              </button>
            </div>

            <div class="math-part-pills">
              <button class="math-part-pill ${state.filterPart === 'ALL' ? 'active' : ''}" onclick="window.PhysQuizApp.setPartFilter('ALL')">
                Tất cả (${allQ.length} câu)
              </button>
              <button class="math-part-pill ${state.filterPart === 1 ? 'active' : ''}" onclick="window.PhysQuizApp.setPartFilter(1)">
                Phần 1: ABCD (${p1Count})
              </button>
              <button class="math-part-pill ${state.filterPart === 2 ? 'active' : ''}" onclick="window.PhysQuizApp.setPartFilter(2)">
                Phần 2: Đúng - Sai (${p2Count})
              </button>
              ${p3Count > 0 ? `
                <button class="math-part-pill ${state.filterPart === 3 ? 'active' : ''}" onclick="window.PhysQuizApp.setPartFilter(3)">
                  Phần 3: Trả lời ngắn (${p3Count})
                </button>
              ` : ''}
              <button class="math-part-pill ${state.filterStarred ? 'active' : ''}" onclick="window.PhysQuizApp.toggleStarFilter()">
                ★ Đã lưu ý (${countStarred()})
              </button>
            </div>
          </div>

          <div class="phys-exam-pill-row" style="display: flex; flex-wrap: wrap; gap: 10px; padding-top: 0.65rem; border-top: 1px dashed var(--border-color);">
            ${activeExamList.map((ex) => {
              const isAct = state.currentExamId === ex.code;
              const hasProg = hasExamProgress(ex.code);
              return `
                <button
                  type="button"
                  class="math-exam-num-btn ${isAct ? 'active' : ''} ${hasProg ? 'has-progress' : ''}"
                  style="flex: 1 1 180px; min-width: 150px; padding: 10px 18px; font-weight: 700; font-size: 0.88rem; white-space: normal; line-height: 1.35; border-radius: 10px;"
                  onclick="window.PhysQuizApp.selectExam('${ex.code}')"
                  title="Chuyển sang ${ex.title}"
                >
                  ${ex.shortTitle || ex.title}
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
            <button class="quiz-mini-btn" onclick="window.PhysQuizApp.resetCurrentExamAnswers()" title="Xóa toàn bộ câu trả lời của đề này để làm lại từ đầu">
              ↺ Làm lại đề này
            </button>
          </div>
        </div>

        <!-- THÂN NỘI DUNG: SLIDE HOẶC LIST -->
        ${state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered)}

        <!-- MODAL BẢNG ĐÁP ÁN -->
        ${state.answerKeyModalOpen ? renderAnswerKeyModal(exam) : ''}

        <!-- MODAL PHÓNG TO HÌNH ẢNH THÍ NGHIỆM / ĐỒ THỊ -->
        ${state.zoomModal.open ? `
          <div class="quiz-modal-backdrop open" onclick="window.PhysQuizApp.closeZoomModal()">
            <div class="quiz-modal-card zoom-card" onclick="event.stopPropagation()">
              <div class="quiz-modal-header">
                <h4>🔍 ${state.zoomModal.caption || 'Hình ảnh thí nghiệm / Đồ thị phóng to'}</h4>
                <button class="modal-close-btn quiz-modal-close" onclick="window.PhysQuizApp.closeZoomModal()">&times;</button>
              </div>
              <div class="quiz-modal-body zoom-body" style="padding: 16px; text-align: center; background: #fff;">
                <img src="${state.zoomModal.src}" alt="Zoom" class="zoomed-figure-img" style="max-width: 100%; max-height: 75vh; border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.15);" />
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ==================== SLIDE VIEW ====================
  function renderSlideView(filtered) {
    if (!filtered || filtered.length === 0) {
      return `
        <div class="quiz-empty-box">
          <p>Không có câu hỏi nào khớp với bộ lọc hiện tại.</p>
          <button class="quiz-tool-btn" onclick="window.PhysQuizApp.resetFilters()">Xóa bộ lọc</button>
        </div>
      `;
    }

    const currentQ = filtered[state.currentIndex];
    const key = getQKey(currentQ.id);
    const isRevealed = !!state.revealedQuestions[key];
    const hasPrev = state.currentIndex > 0;
    const hasNext = state.currentIndex < filtered.length - 1;
    const status = evaluateQuestionStatus(currentQ);
    const exam = getCurrentExam();

    // Group filtered questions by section for navigator
    const sectionMap = new Map();
    filtered.forEach((q, idx) => {
      const sec = getQuestionSection(q, exam);
      if (!sectionMap.has(sec.key)) {
        sectionMap.set(sec.key, {
          key: sec.key,
          title: sec.title,
          short: sec.short,
          code: sec.code,
          items: []
        });
      }
      sectionMap.get(sec.key).items.push({ q, idx });
    });
    const sections = Array.from(sectionMap.values());
    const hasMultipleSections = sections.length > 1;

    let displayedSections = sections;
    if (state.selectedSection && state.selectedSection !== 'ALL') {
      displayedSections = sections.filter(s => s.key === state.selectedSection);
      if (displayedSections.length === 0) displayedSections = sections;
    }

    return `
      <div class="quiz-presentation-layout ${state.sidebarOpen ? '' : 'sidebar-collapsed'}">
        <div class="quiz-slide-card">
          ${renderQuestionCardContent(currentQ, true)}

          <div class="slide-footer-bar">
            <button class="slide-nav-btn" onclick="window.PhysQuizApp.prevSlide()" ${!hasPrev ? 'disabled' : ''}>
              ⬅ Câu trước
            </button>

            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <button
                class="slide-reveal-btn ${isRevealed ? 'revealed' : ''}"
                onclick="window.PhysQuizApp.toggleReveal(${currentQ.id})"
              >
                ${isRevealed ? '🙈 Ẩn đáp án & lời giải' : '👁️ Hiện đáp án & Lời giải chi tiết'}
              </button>
              ${(status !== 'UNANSWERED' || isRevealed) ? `
                <button class="quiz-tool-btn" onclick="window.PhysQuizApp.clearQuestion(${currentQ.id})">
                  ↺ Làm lại câu này
                </button>
              ` : ''}
            </div>

            <button class="slide-nav-btn" onclick="window.PhysQuizApp.nextSlide()" ${!hasNext ? 'disabled' : ''}>
              Câu tiếp theo ➡
            </button>
          </div>

          <div class="keyboard-hint-bar">
            <span><kbd class="kbd-tag">←</kbd> <kbd class="kbd-tag">→</kbd> Chuyển câu</span>
            <span><kbd class="kbd-tag">1</kbd>-<kbd class="kbd-tag">4</kbd> / <kbd class="kbd-tag">A</kbd>-<kbd class="kbd-tag">D</kbd> Chọn đáp án</span>
            <span><kbd class="kbd-tag">Space</kbd> Hiện/Ẩn lời giải</span>
            <span><kbd class="kbd-tag">S</kbd> Đánh dấu ★</span>
          </div>
        </div>

        <!-- CỘT ĐIỀU HƯỚNG CÂU HỎI BÊN CẠNH -->
        ${state.sidebarOpen ? `
          <aside class="quiz-navigator-card">
            <div class="navigator-header">
              <h4>🧭 Bố cục câu hỏi (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            ${hasMultipleSections ? `
              <div class="navigator-section-tabs" style="display: flex; gap: 4px; overflow-x: auto; padding: 6px 4px 8px; border-bottom: 1px solid var(--border-color, #e2e8f0); margin-bottom: 8px;">
                <button
                  type="button"
                  class="nav-sec-pill ${state.selectedSection === 'ALL' ? 'active' : ''}"
                  style="padding: 4px 8px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid ${state.selectedSection === 'ALL' ? '#0284c7' : '#cbd5e1'}; background: ${state.selectedSection === 'ALL' ? '#0284c7' : '#f8fafc'}; color: ${state.selectedSection === 'ALL' ? '#ffffff' : '#334155'}; cursor: pointer; white-space: nowrap;"
                  onclick="window.PhysQuizApp.selectSection('ALL')"
                >
                  Tất cả (${filtered.length})
                </button>
                ${sections.map(sec => `
                  <button
                    type="button"
                    class="nav-sec-pill ${state.selectedSection === sec.key ? 'active' : ''}"
                    style="padding: 4px 8px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid ${state.selectedSection === sec.key ? '#0284c7' : '#cbd5e1'}; background: ${state.selectedSection === sec.key ? '#0284c7' : '#f8fafc'}; color: ${state.selectedSection === sec.key ? '#ffffff' : '#334155'}; cursor: pointer; white-space: nowrap;"
                    onclick="window.PhysQuizApp.selectSection('${sec.key}')"
                  >
                    ${sec.short}
                  </button>
                `).join('')}
              </div>
            ` : ''}

            <div class="navigator-sections-scroll" style="max-height: 58vh; overflow-y: auto; padding-right: 4px;">
              ${displayedSections.map(sec => `
                <div class="nav-section-group" style="margin-bottom: 10px;">
                  <div class="nav-section-header" style="font-size: 0.76rem; font-weight: 700; color: #0284c7; padding: 4px 8px; background: rgba(2, 132, 199, 0.08); border-radius: 6px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">${sec.title}</span>
                    <span style="font-size: 0.7rem; background: #e0f2fe; padding: 2px 6px; border-radius: 8px;">${sec.items.length}c</span>
                  </div>
                  <div class="navigator-grid" style="grid-template-columns: repeat(4, 1fr); gap: 4px;">
                    ${sec.items.map(({ q, idx }) => {
                      const qKey = getQKey(q.id);
                      const qStatus = evaluateQuestionStatus(q);
                      const rev = !!state.revealedQuestions[qKey];
                      const isAct = idx === state.currentIndex;
                      const isStar = !!state.starredQuestions[qKey];
                      let cellClass = '';
                      if (isAct) cellClass += ' current';
                      if (qStatus === 'CORRECT') cellClass += ' answered-correct';
                      else if (qStatus === 'WRONG') cellClass += ' answered-wrong';
                      else if (qStatus === 'PARTIAL') cellClass += ' answered-partial';
                      else if (rev) cellClass += ' revealed-only';
                      if (isStar) cellClass += ' is-starred';

                      const shortTag = `C.${q.origQNum || q.qnum}`;

                      return `
                        <button
                          type="button"
                          class="nav-q-cell ${cellClass}"
                          style="aspect-ratio: auto; padding: 0.42rem 0.2rem; font-size: 0.72rem; font-weight: 600;"
                          onclick="window.PhysQuizApp.goToSlide(${idx})"
                          title="${escapeAttr((q.d_label || q.label) + ' • ' + (q.topic || ''))}"
                        >
                          ${shortTag}
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `).join('')}
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
          <button class="quiz-tool-btn" onclick="window.PhysQuizApp.resetFilters()">Xóa bộ lọc</button>
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
    const typeLabel = q.type === 'mcq'
      ? 'Nhiều lựa chọn (0.25đ)'
      : (q.type === 'tf' ? 'Đúng/Sai (Tối đa 1.0đ)' : 'Trả lời ngắn (0.25đ)');

    return `
      <div class="slide-card-header">
        <div class="slide-q-badges" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          ${q.d_label ? `
            <span class="slide-q-badge pdf-match" style="background: #e0f2fe; color: #0369a1; font-weight: 700; border: 1px solid #bae6fd; padding: 4px 10px; border-radius: 12px; font-size: 0.82rem;">
              📁 ${q.d_label}
            </span>
          ` : ''}
          <span class="slide-q-badge slide-q-number" style="background: #1e3a8a; color: #ffffff !important; font-weight: 700; padding: 4px 12px; border-radius: 12px; font-size: 0.82rem;">
            ${exam.shortTitle || exam.title} • Câu ${q.origQNum || q.qnum}
          </span>
          <span class="slide-q-badge" style="background: #f1f5f9; color: #475569; font-weight: 600; padding: 4px 10px; border-radius: 12px; font-size: 0.82rem;">
            ${typeLabel}
          </span>
          ${q.topic ? `
            <span class="slide-q-badge" style="background: #fdf2f8; color: #be185d; font-weight: 600; padding: 4px 10px; border-radius: 12px; font-size: 0.82rem;">
              📌 ${q.topic}
            </span>
          ` : ''}
        </div>

        <button
          type="button"
          class="slide-star-btn ${isStarred ? 'starred' : ''}"
          onclick="window.PhysQuizApp.toggleStar(${q.id})"
          title="${isStarred ? 'Bỏ lưu ý' : 'Đánh dấu lưu ý câu này'}"
        >
          ${isStarred ? '★ Đã lưu ý' : '☆ Đánh dấu lưu ý'}
        </button>
      </div>

      <div class="slide-question-body">
        <div class="slide-prompt-text">
          ${formatMathHtml(q.question || q.prompt)}
        </div>

        ${q.figure ? `
          <div class="slide-figure-container" style="text-align: center; margin: 12px 0;">
            <img
              src="${q.figure}"
              alt="Hình vẽ minh họa Câu ${q.origQNum || q.qnum}"
              class="slide-figure-img"
              style="max-width: 100%; max-height: 280px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px; background: #ffffff; cursor: pointer;"
              onclick="window.PhysQuizApp.zoomImage('${q.figure}', 'Hình vẽ Câu ${q.origQNum || q.qnum}')"
              title="Nhấp để phóng to toàn màn hình"
            />
            <div style="font-size: 0.78rem; color: #64748b; margin-top: 4px;">
              Hình vẽ minh họa (Câu ${q.origQNum || q.qnum}) <a href="javascript:void(0)" onclick="window.PhysQuizApp.zoomImage('${q.figure}', 'Hình vẽ Câu ${q.origQNum || q.qnum}')">🔍 Phóng to</a>
            </div>
          </div>
        ` : ''}

        <!-- PHẦN TƯƠNG TÁC LÀM BÀI -->
        <div class="slide-interaction-area">
          ${renderPartInteraction(q, isSlideMode)}
        </div>

        <!-- PHẦN LỜI GIẢI CHI TIẾT KHI MỞ -->
        ${isRevealed ? `
          <div class="slide-explanation-card">
            <div class="explanation-badge">
              <span>💡 ĐÁP ÁN &amp; LỜI GIẢI CHI TIẾT</span>
            </div>
            <div class="explanation-content">
              <div class="correct-answer-banner">
                ${getAnswerBadgeText(q)}
              </div>
              <div class="explanation-text-body">
                ${formatMathHtml(q.explanation || 'Đang cập nhật lời giải chi tiết...')}
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ==================== TƯƠNG TÁC LÀM BÀI ====================
  function renderPartInteraction(q, isSlideMode) {
    const key = getQKey(q.id);
    const isRevealed = !!state.revealedQuestions[key];

    // PHẦN 1: MCQ (4 phương án A, B, C, D)
    if (q.type === 'mcq') {
      const userChoice = state.mcqAnswers[key];
      const opts = q.options || {};
      const letters = ['A', 'B', 'C', 'D'];

      return `
        <div class="mcq-options-grid">
          ${letters.map((L) => {
            if (!opts[L]) return '';
            const isUserSelected = userChoice === L;
            const isCorrect = isMcqOptionCorrect(q, L);
            let btnClass = 'mcq-opt-btn';

            if (isUserSelected) btnClass += ' user-selected';
            if (isRevealed) {
              if (isCorrect) btnClass += ' correct-reveal';
              else if (isUserSelected && !isCorrect) btnClass += ' wrong-reveal';
            }

            return `
              <button
                type="button"
                class="${btnClass}"
                onclick="window.PhysQuizApp.selectMcq(${q.id}, '${L}')"
              >
                <span class="opt-letter">${L}</span>
                <span class="opt-text">${formatMathHtml(opts[L])}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // PHẦN 2: ĐÚNG / SAI (4 ý a, b, c, d)
    if (q.type === 'tf') {
      const userObj = state.tfAnswers[key] || {};
      const correctObj = q.answer || q.answers || {};
      const stmts = q.statements || {};
      const subKeys = ['a', 'b', 'c', 'd'];

      return `
        <div class="tf-statements-list">
          ${subKeys.map((sub) => {
            const text = stmts[sub];
            if (!text) return '';
            const userVal = userObj[sub];
            const hasUserAnswer = typeof userVal === 'boolean';
            const cVal = correctObj[sub] === true || correctObj[sub] === 'Đ' || correctObj[sub] === 'D';

            return `
              <div class="tf-item-row">
                <div class="tf-item-text">
                  <span class="tf-item-tag">${sub})</span>
                  <span>${formatMathHtml(text)}</span>
                </div>
                <div class="tf-btn-group">
                  <button
                    type="button"
                    class="tf-choice-btn btn-true ${userVal === true ? 'active-true' : ''} ${isRevealed && cVal === true ? 'revealed-correct' : ''}"
                    onclick="window.PhysQuizApp.selectTf(${q.id}, '${sub}', true)"
                  >
                    Đúng
                  </button>
                  <button
                    type="button"
                    class="tf-choice-btn btn-false ${userVal === false ? 'active-false' : ''} ${isRevealed && cVal === false ? 'revealed-correct' : ''}"
                    onclick="window.PhysQuizApp.selectTf(${q.id}, '${sub}', false)"
                  >
                    Sai
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // PHẦN 3: TRẢ LỜI NGẮN (Điền số)
    if (q.type === 'sa' || q.type === 'short') {
      const val = state.shortAnswers[key] || '';
      const st = evaluateQuestionStatus(q);

      return `
        <div class="short-answer-box">
          <label class="short-input-label">✍️ Nhập đáp số học sinh:</label>
          <div class="short-input-row">
            <input
              type="text"
              class="short-text-input ${st === 'CORRECT' ? 'input-correct' : (st === 'WRONG' ? 'input-wrong' : '')}"
              placeholder="Nhập số..."
              value="${escapeAttr(val)}"
              onchange="window.PhysQuizApp.setShortAnswer(${q.id}, this.value)"
              onkeydown="if(event.key === 'Enter') window.PhysQuizApp.setShortAnswer(${q.id}, this.value)"
            />
            <button
              type="button"
              class="quiz-tool-btn"
              onclick="window.PhysQuizApp.setShortAnswer(${q.id}, this.previousElementSibling.value)"
            >
              ✓ Kiểm tra
            </button>
          </div>
          ${(isRevealed || st !== 'UNANSWERED') ? `
            <div class="short-feedback-badge ${st === 'CORRECT' ? 'correct' : 'wrong'}">
              ${st === 'CORRECT' ? '🎉 Bạn đã trả lời CHÍNH XÁC!' : (st === 'WRONG' ? `❌ Chưa đúng. Đáp án chuẩn: <b>${escapeHtml(q.answer)}</b>` : '')}
            </div>
          ` : ''}
        </div>
      `;
    }

    return '';
  }

  function getAnswerBadgeText(q) {
    if (q.type === 'mcq') {
      return `Đáp án đúng: <b class="badge-letter">${q.answer}</b>`;
    }
    if (q.type === 'tf') {
      const a = q.answer || q.answers || {};
      const fa = a.a === true || a.a === 'Đ' || a.a === 'D' ? 'Đúng' : 'Sai';
      const fb = a.b === true || a.b === 'Đ' || a.b === 'D' ? 'Đúng' : 'Sai';
      const fc = a.c === true || a.c === 'Đ' || a.c === 'D' ? 'Đúng' : 'Sai';
      const fd = a.d === true || a.d === 'Đ' || a.d === 'D' ? 'Đúng' : 'Sai';
      return `Đáp án chuẩn: a) <b>${fa}</b> • b) <b>${fb}</b> • c) <b>${fc}</b> • d) <b>${fd}</b>`;
    }
    if (q.type === 'sa' || q.type === 'short') {
      return `Đáp án số chuẩn: <b class="badge-val">${q.answer}</b>`;
    }
    return '';
  }

  // ==================== BẢNG ĐÁP ÁN NHANH ====================
  function renderAnswerKeyModal(exam) {
    const questions = exam.questions || [];

    // Group questions by section
    const sectionMap = new Map();
    questions.forEach((q) => {
      const sec = getQuestionSection(q, exam);
      if (!sectionMap.has(sec.key)) {
        sectionMap.set(sec.key, {
          key: sec.key,
          title: sec.title,
          short: sec.short,
          items: []
        });
      }
      sectionMap.get(sec.key).items.push(q);
    });
    const sections = Array.from(sectionMap.values());

    return `
      <div class="quiz-modal-backdrop open" onclick="window.PhysQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-card quiz-modal-box modal-box-wide" onclick="event.stopPropagation()" style="max-width: 900px; width: 95%;">
          <div class="quiz-modal-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%); color: #ffffff; padding: 14px 20px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 1.3rem;">🔑</span>
              <div>
                <h4 style="margin: 0; color: #ffffff; font-size: 1.05rem;">BẢNG ĐÁP ÁN TOÀN BỘ ${questions.length} CÂU — ${escapeHtml(exam.title)}</h4>
                <p style="margin: 2px 0 0; font-size: 0.8rem; color: #e0f2fe;">Nhấp vào ô câu hỏi bất kỳ để chuyển thẳng đến câu đó</p>
              </div>
            </div>
            <button class="modal-close-btn quiz-modal-close" style="color: #ffffff;" onclick="window.PhysQuizApp.closeAnswerKeyModal()">&times;</button>
          </div>

          <div class="quiz-modal-body" style="padding: 16px; max-height: 72vh; overflow-y: auto;">
            ${sections.map((sec) => {
              const mcqs = sec.items.filter(q => q.type === 'mcq');
              const tfs = sec.items.filter(q => q.type === 'tf');
              const sas = sec.items.filter(q => q.type === 'sa' || q.type === 'short');

              return `
                <div class="key-section-block" style="margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
                  <div class="key-section-header" style="background: #f8fafc; padding: 10px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 700; color: #1e3a8a; font-size: 0.92rem;">${sec.title}</span>
                    <span style="font-size: 0.8rem; font-weight: 600; color: #475569; background: #e2e8f0; padding: 2px 8px; border-radius: 10px;">${sec.items.length} câu</span>
                  </div>
                  <div style="padding: 14px 16px;">
                    ${mcqs.length > 0 ? `
                      <div class="key-table-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(68px, 1fr)); gap: 8px; margin-bottom: ${tfs.length > 0 || sas.length > 0 ? '14px' : '0'};">
                        ${mcqs.map(q => {
                          const num = q.origQNum || q.qnum || q.id;
                          return `
                            <div class="key-item" style="cursor: pointer; padding: 6px 4px; text-align: center; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc;" onclick="window.PhysQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <div class="key-qnum" style="font-size: 0.72rem; color: #64748b;">C${num}</div>
                              <div class="key-ans-letter" style="font-size: 1.05rem; font-weight: 800; color: #16a34a;">${q.answer || '—'}</div>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : ''}

                    ${tfs.length > 0 ? `
                      <div class="key-tf-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; margin-bottom: ${sas.length > 0 ? '14px' : '0'};">
                        ${tfs.map(q => {
                          const num = q.origQNum || q.qnum || q.id;
                          const a = q.answer || q.answers || {};
                          const fa = a.a === true || a.a === 'Đ' || a.a === 'D' ? 'Đ' : 'S';
                          const fb = a.b === true || a.b === 'Đ' || a.b === 'D' ? 'Đ' : 'S';
                          const fc = a.c === true || a.c === 'Đ' || a.c === 'D' ? 'Đ' : 'S';
                          const fd = a.d === true || a.d === 'Đ' || a.d === 'D' ? 'Đ' : 'S';
                          return `
                            <div class="key-tf-card" style="cursor: pointer; padding: 8px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc;" onclick="window.PhysQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <div class="key-tf-num" style="font-weight: 700; font-size: 0.8rem; color: #0284c7; margin-bottom: 4px;">Câu ${num}</div>
                              <div style="font-size: 0.76rem; display: flex; justify-content: space-between;">
                                <span>a) <b style="color: ${fa === 'Đ' ? '#16a34a' : '#dc2626'}">${fa}</b></span>
                                <span>b) <b style="color: ${fb === 'Đ' ? '#16a34a' : '#dc2626'}">${fb}</b></span>
                              </div>
                              <div style="font-size: 0.76rem; display: flex; justify-content: space-between; margin-top: 2px;">
                                <span>c) <b style="color: ${fc === 'Đ' ? '#16a34a' : '#dc2626'}">${fc}</b></span>
                                <span>d) <b style="color: ${fd === 'Đ' ? '#16a34a' : '#dc2626'}">${fd}</b></span>
                              </div>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : ''}

                    ${sas.length > 0 ? `
                      <div class="key-table-grid short-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(88px, 1fr)); gap: 8px;">
                        ${sas.map(q => {
                          const num = q.origQNum || q.qnum || q.id;
                          return `
                            <div class="key-item short" style="cursor: pointer; padding: 6px 4px; text-align: center; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc;" onclick="window.PhysQuizApp.goToQuestionById(${q.id})" title="Chuyển đến câu ${num}">
                              <div class="key-qnum" style="font-size: 0.72rem; color: #64748b;">C${num}</div>
                              <div class="key-ans-val" style="font-size: 0.88rem; font-weight: 700; color: #0284c7;">${q.answer || '—'}</div>
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
      const panel = document.getElementById('panel-li12');
      if (!panel || !panel.classList.contains('active')) return;

      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        return;
      }

      if (state.answerKeyModalOpen || state.zoomModal.open) {
        if (e.key === 'Escape') {
          state.answerKeyModalOpen = false;
          state.zoomModal.open = false;
          renderPhysApp();
        }
        return;
      }

      if (state.mode !== 'slide') return;

      const filtered = getFilteredQuestions();
      if (filtered.length === 0) return;
      const currentQ = filtered[state.currentIndex];

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        window.PhysQuizApp.prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        window.PhysQuizApp.nextSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        window.PhysQuizApp.toggleReveal(currentQ.id);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        window.PhysQuizApp.toggleStar(currentQ.id);
      } else if (currentQ.type === 'mcq') {
        const keyMap = {
          '1': 'A', 'a': 'A', 'A': 'A',
          '2': 'B', 'b': 'B', 'B': 'B',
          '3': 'C', 'c': 'C', 'C': 'C',
          '4': 'D', 'd': 'D', 'D': 'D'
        };
        if (keyMap[e.key]) {
          e.preventDefault();
          window.PhysQuizApp.selectMcq(currentQ.id, keyMap[e.key]);
        }
      }
    });
  }

  // ==================== PUBLIC API ====================
  window.PhysQuizApp = {
    setMode: function (m) {
      state.mode = m;
      renderPhysApp();
    },

    selectCategory: function (cat) {
      state.category = cat;
      state.selectedSection = 'ALL';
      state.filterPart = 'ALL';
      state.currentIndex = 0;
      const exams = window.PHYS_EXAMS_DATA || {};
      const allExams = Object.values(exams);
      if (cat === 'boyle') {
        const b = allExams.filter(e => e.group === 'boyle' || e.code.startsWith('ly_boyle_'));
        if (b.length) state.currentExamId = b[0].code;
      } else if (cat === 'dhpt') {
        const d = allExams.filter(e => e.group === 'dhpt' || (e.code.startsWith('ly_cd2_') && !e.code.startsWith('ly_boyle_')));
        if (d.length) state.currentExamId = d[0].code;
      } else {
        const n = allExams.filter(e => e.group !== 'boyle' && e.group !== 'dhpt' && !e.code.startsWith('ly_boyle_') && !e.code.startsWith('ly_cd2_'));
        if (n.length) state.currentExamId = n[0].code;
      }
      saveState();
      renderPhysApp();
    },

    selectExam: function (code) {
      state.currentExamId = code;
      state.selectedSection = 'ALL';
      state.filterPart = 'ALL';
      state.currentIndex = 0;
      saveState();
      renderPhysApp();
    },

    selectSection: function (secKey) {
      state.selectedSection = secKey;
      renderPhysApp();
    },

    goToSlide: function (idx) {
      state.currentIndex = idx;
      renderPhysApp();
    },

    goToQuestionById: function (qId) {
      state.answerKeyModalOpen = false;
      state.mode = 'slide';
      state.filterPart = 'ALL';
      state.selectedSection = 'ALL';
      const exam = getCurrentExam();
      if (exam && exam.questions) {
        const idx = exam.questions.findIndex(q => q.id === qId);
        if (idx !== -1) {
          state.currentIndex = idx;
        }
      }
      renderPhysApp();
    },

    prevSlide: function () {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderPhysApp();
      }
    },

    nextSlide: function () {
      const filtered = getFilteredQuestions();
      if (state.currentIndex < filtered.length - 1) {
        state.currentIndex++;
        renderPhysApp();
      }
    },

    setPartFilter: function (p) {
      state.filterPart = p;
      state.currentIndex = 0;
      renderPhysApp();
    },

    toggleStarFilter: function () {
      state.filterStarred = !state.filterStarred;
      state.currentIndex = 0;
      renderPhysApp();
    },

    resetFilters: function () {
      state.filterPart = 'ALL';
      state.filterStarred = false;
      state.selectedSection = 'ALL';
      state.currentIndex = 0;
      renderPhysApp();
    },

    toggleSidebar: function () {
      state.sidebarOpen = !state.sidebarOpen;
      renderPhysApp();
    },

    changeZoom: function (delta) {
      state.fontScale = Math.max(0.8, Math.min(1.5, state.fontScale + delta));
      saveState();
      renderPhysApp();
    },

    toggleFullscreen: function () {
      state.isFullscreen = !state.isFullscreen;
      renderPhysApp();
    },

    toggleStar: function (qId) {
      const k = getQKey(qId);
      state.starredQuestions[k] = !state.starredQuestions[k];
      saveState();
      renderPhysApp();
    },

    toggleReveal: function (qId) {
      const k = getQKey(qId);
      state.revealedQuestions[k] = !state.revealedQuestions[k];
      renderPhysApp();
    },

    revealAllInFilter: function () {
      const filtered = getFilteredQuestions();
      filtered.forEach((q) => {
        state.revealedQuestions[getQKey(q.id)] = true;
      });
      renderPhysApp();
    },

    selectMcq: function (qId, optKey) {
      const k = getQKey(qId);
      state.mcqAnswers[k] = optKey;
      saveState();
      renderPhysApp();
    },

    selectTf: function (qId, subKey, val) {
      const k = getQKey(qId);
      if (!state.tfAnswers[k]) state.tfAnswers[k] = {};
      state.tfAnswers[k][subKey] = val;
      saveState();
      renderPhysApp();
    },

    setShortAnswer: function (qId, val) {
      const k = getQKey(qId);
      state.shortAnswers[k] = val;
      saveState();
      renderPhysApp();
    },

    clearQuestion: function (qId) {
      const k = getQKey(qId);
      delete state.mcqAnswers[k];
      delete state.tfAnswers[k];
      delete state.shortAnswers[k];
      delete state.revealedQuestions[k];
      saveState();
      renderPhysApp();
    },

    openAnswerKeyModal: function () {
      state.answerKeyModalOpen = true;
      renderPhysApp();
    },

    closeAnswerKeyModal: function () {
      state.answerKeyModalOpen = false;
      renderPhysApp();
    },

    zoomImage: function (src, caption) {
      state.zoomModal = {
        open: true,
        src,
        caption: caption || 'Hình ảnh thí nghiệm / Đồ thị'
      };
      renderPhysApp();
    },

    closeZoomModal: function () {
      state.zoomModal.open = false;
      renderPhysApp();
    },

    resetCurrentExamAnswers: function () {
      const exam = getCurrentExam();
      if (!exam || !exam.questions) return;
      if (confirm(`Bạn có chắc chắn muốn xóa toàn bộ câu trả lời của "${exam.shortTitle || exam.title}" để làm lại từ đầu?`)) {
        exam.questions.forEach(q => {
          const k = getQKey(q.id);
          delete state.mcqAnswers[k];
          delete state.tfAnswers[k];
          delete state.shortAnswers[k];
          delete state.revealedQuestions[k];
        });
        saveState();
        renderPhysApp();
      }
    }
  };

  // Khởi tạo
  setupKeyboard();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadSavedState();
      renderPhysApp();
    });
  } else {
    loadSavedState();
    renderPhysApp();
  }
})();
