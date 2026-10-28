/**
 * ============================================================================
 * MODULE TRÌNH CHIẾU & SỬA BÀI BỘ 4 ĐỀ ÔN TẬP & CHUYÊN ĐỀ VẬT LÍ 12
 * Gồm:
 *   1. Đề 1 Giữa kì (25 câu: 16 ABCD + 3 Đ/S + 6 TLN)
 *   2. Đề 2 Giữa kì (28 câu: 18 ABCD + 4 Đ/S + 6 TLN)
 *   3. Đề cương GK1 (78 câu: 57 ABCD + 8 Đ/S + 13 TLN - 6 Bài học)
 *   4. Chuyên đề Nhiệt hóa hơi riêng (41 câu: 37 ABCD + 4 Đ/S)
 *
 * Tính năng:
 * - Chế độ Trình chiếu (Slide) & Danh sách (List)
 * - Tăng giảm cỡ chữ trình chiếu máy chiếu (Font zoom 80% - 150%)
 * - Bảng đáp án nhanh toàn bộ các phần (ABCD, Đúng/Sai, Trả lời ngắn)
 * - Hỗ trợ phóng to hình ảnh thí nghiệm / đồ thị HD toàn màn hình
 * - Phím tắt máy tính: ⬅️ ➡️ chuyển câu, S đánh dấu, Space hiện lời giải, 1-4/A-D chọn đáp án
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'tnphet_phys_quiz_state_v2';

  const state = {
    currentExamId: 'ly_de1',
    mode: 'slide', // 'slide' | 'list'
    currentIndex: 0,
    filterPart: 'ALL', // 'ALL' | 1 | 2 | 3
    filterStarred: false,
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

  function normalizeNumberStr(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .trim()
      .replace(/\s+/g, '')
      .replace(',', '.')
      .replace(/^0+(?=\d)/, '');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function getCurrentExam() {
    const data = window.PHYS_EXAMS_DATA || {};
    return data[state.currentExamId] || Object.values(data)[0] || null;
  }

  function getQKey(qid) {
    return `${state.currentExamId}_q${qid}`;
  }

  function hasExamProgress(code) {
    return (
      Object.keys(state.mcqAnswers).some(k => k.startsWith(code + '_')) ||
      Object.keys(state.tfAnswers).some(k => k.startsWith(code + '_')) ||
      Object.keys(state.shortAnswers).some(k => k.startsWith(code + '_'))
    );
  }

  function isMcqOptionCorrect(q, letter) {
    if (!letter) return false;
    if (Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.includes(letter)) {
      return true;
    }
    return letter === q.answer;
  }

  function getFilteredQuestions() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return [];

    return exam.questions.filter((q) => {
      if (state.filterPart !== 'ALL' && q.part !== Number(state.filterPart)) return false;
      if (state.filterStarred && !state.starredQuestions[getQKey(q.id)]) return false;
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
      if (!user || Object.keys(user).length === 0) return 'UNANSWERED';
      const subKeys = ['a', 'b', 'c', 'd'];
      const correctAns = q.answer || q.answers || {};
      const answeredKeys = subKeys.filter(k => typeof user[k] === 'boolean');
      if (answeredKeys.length === 0) return 'UNANSWERED';

      let correctCount = 0;
      for (const k of subKeys) {
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

    // Chuẩn hóa về thang điểm 10
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
        if (p.currentExamId && window.PHYS_EXAMS_DATA && window.PHYS_EXAMS_DATA[p.currentExamId]) {
          state.currentExamId = p.currentExamId;
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
    const examList = Object.values(exams);

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="physWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- THANH CÔNG CỤ TRÌNH CHIẾU TRÊN CÙNG -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">⚡</div>
            <div class="quiz-title-text">
              <h3>${exam.title} (${exam.shortTitle || exam.title})</h3>
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

        <!-- THANH CHỌN ĐỀ & BỘ LỌC PHẦN -->
        <div class="math-exam-selector-bar selector-40-exams">
          <div class="math-exam-top-row">
            <div class="math-category-tabs">
              <button type="button" class="math-category-tab-btn active" style="cursor: default;">
                ⚡ Bộ 4 Đề Ôn Tập Giữa Kì I & Chuyên Đề Vật Lí 12 (Chương 1: Vật Lí Nhiệt)
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

          <div class="math-exam-grid-20" style="grid-template-columns: repeat(4, minmax(0, 1fr));">
            ${examList.map((ex, i) => {
              const num = i + 1;
              const isAct = state.currentExamId === ex.code;
              const hasProg = hasExamProgress(ex.code);
              return `
                <button
                  type="button"
                  class="math-exam-num-btn ${isAct ? 'active' : ''} ${hasProg ? 'has-progress' : ''}"
                  onclick="window.PhysQuizApp.selectExam('${ex.code}')"
                  title="Chuyển sang ${ex.title}"
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
              <div class="quiz-modal-body zoom-body">
                <img src="${state.zoomModal.src}" alt="Zoom" class="zoomed-figure-img" />
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
              <h4>🧭 Chuyển nhanh (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            <div class="navigator-grid" style="grid-template-columns: repeat(4, 1fr);">
              ${filtered.map((q, idx) => {
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

                const shortTag = state.currentExamId === 'ly_decuong'
                  ? `C${q.qnum}`
                  : (q.part === 1 ? `P1.${q.qnum}` : (q.part === 2 ? `P2.${q.qnum}` : `P3.${q.qnum}`));

                return `
                  <button
                    type="button"
                    class="nav-q-cell ${cellClass}"
                    style="aspect-ratio: auto; padding: 0.45rem 0.25rem; font-size: 0.75rem;"
                    onclick="window.PhysQuizApp.goToSlide(${idx})"
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
        <div class="slide-q-meta">
          <span class="slide-q-number">${exam.shortTitle || exam.title} • ${q.label || `Câu ${q.qnum}`}</span>
          ${q.topic ? `<span class="slide-q-topic">📌 ${q.topic}</span>` : ''}
          <span class="slide-q-topic" style="background: rgba(2, 132, 199, 0.1); color: #0284c7; border: 1px solid rgba(2, 132, 199, 0.25);">
            ${typeLabel}
          </span>
        </div>

        <div class="slide-q-actions">
          <button class="btn-star-q ${isStarred ? 'starred' : ''}" onclick="window.PhysQuizApp.toggleStar(${q.id})" title="Đánh dấu câu hỏi cần lưu ý (Phím S)">
            ${isStarred ? '★ Đã lưu ý' : '☆ Đánh dấu lưu ý'}
          </button>
          ${!isSlideMode ? `
            <button class="quiz-tool-btn" onclick="window.PhysQuizApp.toggleReveal(${q.id})">
              ${isRevealed ? '🙈 Ẩn lời giải' : '👁️ Xem lời giải'}
            </button>
          ` : ''}
        </div>
      </div>

      <div class="slide-q-body ${q.figure ? 'has-figure' : ''}">
        <div class="slide-q-text">${q.prompt || q.question || ''}</div>

        ${q.figure ? `
          <div class="slide-q-figure" onclick="window.PhysQuizApp.zoomImage('${q.figure}', '${escapeAttr((exam.shortTitle || exam.title) + ' • ' + (q.label || 'Câu ' + q.qnum))}')" title="Nhấn vào hình để phóng to toàn màn hình">
            <img src="${q.figure}?v=20261026" alt="${q.label || ''}" class="slide-q-figure-img" onerror="this.onerror=null;this.src='${q.figure}'" />
            <div class="slide-q-figure-caption">🔍 Nhấn để phóng to hình ảnh chi tiết</div>
          </div>
        ` : ''}
      </div>

      ${renderPartInteraction(q, key, isRevealed)}

      ${(isRevealed || status !== 'UNANSWERED') ? `
        <div class="slide-explanation-box">
          <div class="explanation-header">
            <span>💡 ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT:</span>
            <span class="explanation-ans-badge">${getAnswerBadgeText(q)}</span>
          </div>
          <div class="explanation-content">
            ${q.explanation || 'Đang cập nhật hướng dẫn giải chi tiết.'}
          </div>
        </div>
      ` : ''}
    `;
  }

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
            const isCorrectLetter = isMcqOptionCorrect(q, letter);

            if (isRevealed) {
              if (isCorrectLetter) {
                stateClass = 'is-correct';
                statusIcon = '✔';
              } else if (userAns === letter && !isCorrectLetter) {
                stateClass = 'is-wrong';
                statusIcon = '✖';
              }
            } else if (userAns) {
              if (letter === userAns) {
                if (isCorrectLetter) {
                  stateClass = 'is-correct';
                  statusIcon = '✔';
                } else {
                  stateClass = 'is-wrong';
                  statusIcon = '✖';
                }
              } else if (isCorrectLetter && !isMcqOptionCorrect(q, userAns)) {
                stateClass = 'is-correct';
                statusIcon = '✔';
              }
            }

            return `
              <button
                type="button"
                class="quiz-option-btn ${stateClass}"
                onclick="window.PhysQuizApp.selectMcq(${q.id}, '${letter}')"
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
                    onclick="window.PhysQuizApp.selectTf(${q.id}, '${subKey}', true)"
                  >
                    Đúng (Đ)
                  </button>
                  <button
                    type="button"
                    class="tf-choice-btn ${btnFalseClass}"
                    onclick="window.PhysQuizApp.selectTf(${q.id}, '${subKey}', false)"
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

    // 3. PHẦN 3: Trả lời ngắn (KQ tối đa 4-6 kí tự)
    if (q.type === 'sa' || q.type === 'short') {
      const userVal = state.shortAnswers[key] || '';
      const hasVal = userVal.trim() !== '';
      const normU = normalizeNumberStr(userVal);
      const normC = normalizeNumberStr(q.answer);
      const isCorrect = hasVal && (normU === normC || (q.acceptedAnswers && q.acceptedAnswers.map(normalizeNumberStr).includes(normU)));
      const inputClass = hasVal ? (isCorrect ? 'is-correct' : 'is-wrong') : '';
      const showKq = isRevealed || isCorrect;

      const ansStr = String(q.answer);
      const cellLen = Math.max(4, Math.min(7, ansStr.length));
      const kqCells = (q.kqCells && q.kqCells.length >= 4)
        ? q.kqCells
        : ansStr.padEnd(cellLen, ' ').slice(0, cellLen).split('');

      return `
        <div class="math-sa-wrapper">
          <div class="math-sa-input-group">
            <span class="math-sa-label">✍️ Nhập đáp số học sinh:</span>
            <input
              type="text"
              class="math-sa-input ${inputClass}"
              placeholder="Nhập số..."
              value="${escapeAttr(userVal)}"
              onchange="window.PhysQuizApp.setShortAnswer(${q.id}, this.value)"
            />
            <button type="button" class="quiz-tool-btn" onclick="const inp=this.previousElementSibling; window.PhysQuizApp.setShortAnswer(${q.id}, inp.value)">
              ✔ Kiểm tra
            </button>
            ${hasVal ? `
              <span style="font-weight: 800; font-size: 0.92rem; color: ${isCorrect ? '#16a34a' : '#dc2626'};">
                ${isCorrect ? '🎉 Chính xác!' : `✖ Chưa đúng (Đáp số chuẩn: ${q.answer})`}
              </span>
            ` : ''}
          </div>

          <div class="math-kq-box-group" title="Ô điền kết quả chuẩn trên phiếu trả lời trắc nghiệm">
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
    if (q.type === 'mcq') {
      if (Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length > 1) {
        return `Chọn <b>${q.acceptedAnswers.join(', ')}</b>`;
      }
      return `Chọn <b>${q.answer}</b>`;
    }
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
      <div class="quiz-modal-backdrop open" onclick="window.PhysQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-card quiz-modal-box modal-box-wide" onclick="event.stopPropagation()">
          <div class="quiz-modal-header">
            <h4>🔑 BẢNG ĐÁP ÁN — ${exam.title} (${questions.length} CÂU)</h4>
            <button class="modal-close-btn quiz-modal-close" onclick="window.PhysQuizApp.closeAnswerKeyModal()">&times;</button>
          </div>
          <div class="quiz-modal-body">
            <!-- PHẦN 1 -->
            <div class="key-section-title">PHẦN 1: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (${p1.length} CÂU)</div>
            <div class="key-table-grid">
              ${p1.map(q => {
                const ansTxt = Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length > 1
                  ? q.acceptedAnswers.join(',')
                  : q.answer;
                return `
                  <div class="key-item">
                    <span class="key-qnum">C${q.qnum}</span>
                    <span class="key-ans-letter">${ansTxt}</span>
                  </div>
                `;
              }).join('')}
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

            ${p3.length > 0 ? `
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
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // ==================== BÀN PHÍM PHÍM TẮT ====================
  function setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      const panel = document.getElementById('panel-ly12');
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

      if (e.key === 'Escape' && state.isFullscreen) {
        state.isFullscreen = false;
        renderPhysApp();
        return;
      }

      if (state.mode !== 'slide') return;
      const filtered = getFilteredQuestions();
      if (filtered.length === 0) return;
      const currentQ = filtered[state.currentIndex];

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        window.PhysQuizApp.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        window.PhysQuizApp.prevSlide();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        window.PhysQuizApp.toggleReveal(currentQ.id);
      } else if (e.key.toLowerCase() === 's') {
        e.preventDefault();
        window.PhysQuizApp.toggleStar(currentQ.id);
      } else if (currentQ.type === 'mcq') {
        if (['a', '1'].includes(e.key.toLowerCase())) window.PhysQuizApp.selectMcq(currentQ.id, 'A');
        else if (['b', '2'].includes(e.key.toLowerCase())) window.PhysQuizApp.selectMcq(currentQ.id, 'B');
        else if (['c', '3'].includes(e.key.toLowerCase())) window.PhysQuizApp.selectMcq(currentQ.id, 'C');
        else if (['d', '4'].includes(e.key.toLowerCase())) window.PhysQuizApp.selectMcq(currentQ.id, 'D');
      }
    });
  }

  // ==================== PUBLIC API ====================
  window.PhysQuizApp = {
    init: function () {
      loadSavedState();
      renderPhysApp();
    },

    selectExam: function (examCode) {
      state.currentExamId = examCode;
      state.currentIndex = 0;
      saveState();
      renderPhysApp();
    },

    setMode: function (mode) {
      state.mode = mode;
      renderPhysApp();
    },

    setPartFilter: function (part) {
      state.filterPart = part;
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
      state.currentIndex = 0;
      renderPhysApp();
    },

    nextSlide: function () {
      const filtered = getFilteredQuestions();
      if (state.currentIndex < filtered.length - 1) {
        state.currentIndex++;
        renderPhysApp();
      }
    },

    prevSlide: function () {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderPhysApp();
      }
    },

    goToSlide: function (idx) {
      state.currentIndex = idx;
      if (state.mode !== 'slide') state.mode = 'slide';
      renderPhysApp();
    },

    toggleSidebar: function () {
      state.sidebarOpen = !state.sidebarOpen;
      renderPhysApp();
    },

    changeZoom: function (delta) {
      state.fontScale = Math.min(1.5, Math.max(0.8, Math.round((state.fontScale + delta) * 10) / 10));
      saveState();
      renderPhysApp();
    },

    toggleFullscreen: function () {
      state.isFullscreen = !state.isFullscreen;
      renderPhysApp();
    },

    toggleReveal: function (qid) {
      const k = getQKey(qid);
      state.revealedQuestions[k] = !state.revealedQuestions[k];
      renderPhysApp();
    },

    revealAllInFilter: function () {
      const filtered = getFilteredQuestions();
      const allRev = filtered.every(q => !!state.revealedQuestions[getQKey(q.id)]);
      filtered.forEach(q => {
        state.revealedQuestions[getQKey(q.id)] = !allRev;
      });
      renderPhysApp();
    },

    toggleStar: function (qid) {
      const k = getQKey(qid);
      state.starredQuestions[k] = !state.starredQuestions[k];
      saveState();
      renderPhysApp();
    },

    selectMcq: function (qid, letter) {
      const k = getQKey(qid);
      state.mcqAnswers[k] = letter;
      state.revealedQuestions[k] = true;
      saveState();
      renderPhysApp();
    },

    selectTf: function (qid, subKey, boolVal) {
      const k = getQKey(qid);
      if (!state.tfAnswers[k]) state.tfAnswers[k] = {};
      state.tfAnswers[k][subKey] = boolVal;
      saveState();
      renderPhysApp();
    },

    setShortAnswer: function (qid, val) {
      const k = getQKey(qid);
      state.shortAnswers[k] = val;
      saveState();
      renderPhysApp();
    },

    clearQuestion: function (qid) {
      const k = getQKey(qid);
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
