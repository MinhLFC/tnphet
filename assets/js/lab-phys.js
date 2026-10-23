/**
 * ============================================================================
 * TRÌNH DIỄN CHUYÊN ĐỀ VẬT LÍ 12: NHIỆT HÓA HƠI RIÊNG (CHƯƠNG 1: VẬT LÍ NHIỆT)
 * Mô phỏng tiêu chuẩn hiện đại: Slide thuyết trình & Danh sách cuộn
 * Hỗ trợ bộ lọc ABCD / Đúng Sai / Mức độ Nhận biết & Vận dụng, Bảng đáp án chuẩn
 * ============================================================================
 */

(function () {
  const STORAGE_KEY = 'tnphet_phys_quiz_state_v1';

  const state = {
    currentExamId: 'ly_nhiethoahoi',
    mode: 'slide', // 'slide' | 'list'
    currentIndex: 0,
    filterPart: 'ALL', // 'ALL' | 1 | 2
    filterLevel: 'ALL', // 'ALL' | 'nb_th' | 'vd_vdc'
    filterStarred: false,
    sidebarOpen: true,
    fontScale: 1.0,
    isFullscreen: false,
    answerKeyModalOpen: false,

    // Dữ liệu người dùng
    starredQuestions: {},
    mcqAnswers: {},
    tfAnswers: {},
    revealedQuestions: {}
  };

  function getCurrentExam() {
    const data = window.PHYS_EXAMS_DATA || {};
    return data[state.currentExamId] || Object.values(data)[0] || null;
  }

  function getQKey(qid) {
    return `${state.currentExamId}_q${qid}`;
  }

  function getFilteredQuestions() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return [];

    return exam.questions.filter((q) => {
      if (state.filterPart !== 'ALL' && q.part !== state.filterPart) return false;
      if (state.filterLevel !== 'ALL' && q.level !== state.filterLevel) return false;
      if (state.filterStarred && !state.starredQuestions[getQKey(q.id)]) return false;
      return true;
    });
  }

  function evaluateQuestionStatus(q) {
    const key = getQKey(q.id);

    if (q.type === 'mcq') {
      const user = state.mcqAnswers[key];
      if (!user) return 'UNANSWERED';
      return user === q.answer ? 'CORRECT' : 'WRONG';
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

    return 'UNANSWERED';
  }

  function getExamStats() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return { total: 0, answered: 0, correct: 0, totalScore: '0.00' };

    let answered = 0;
    let correct = 0;
    const questions = exam.questions;

    questions.forEach((q) => {
      const status = evaluateQuestionStatus(q);
      if (status === 'CORRECT') {
        answered++;
        correct++;
      } else if (status === 'WRONG' || status === 'PARTIAL') {
        answered++;
      }
    });

    const score = questions.length > 0 ? (correct / questions.length) * 10 : 0;
    return {
      total: questions.length,
      answered,
      correct,
      totalScore: score.toFixed(2)
    };
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const p = JSON.parse(saved);
        if (p.starredQuestions) state.starredQuestions = p.starredQuestions;
        if (p.mcqAnswers) state.mcqAnswers = p.mcqAnswers;
        if (p.tfAnswers) state.tfAnswers = p.tfAnswers;
        if (typeof p.fontScale === 'number') state.fontScale = p.fontScale;
      }
    } catch (e) {
      console.warn('Cannot load phys quiz state:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        starredQuestions: state.starredQuestions,
        mcqAnswers: state.mcqAnswers,
        tfAnswers: state.tfAnswers,
        fontScale: state.fontScale
      }));
    } catch (e) {
      console.warn('Cannot save phys quiz state:', e);
    }
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
          <p style="margin-top: 10px; font-weight: 600;">Đang chuẩn bị dữ liệu chuyên đề Vật lí 12...</p>
        </div>
      `;
      return;
    }

    const filtered = getFilteredQuestions();
    if (state.currentIndex >= filtered.length) {
      state.currentIndex = Math.max(0, filtered.length - 1);
    }
    const stats = getExamStats();

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="physWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- THANH CÔNG CỤ TRÌNH CHIẾU TRÊN CÙNG -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">⚡</div>
            <div class="quiz-title-text">
              <h3>${exam.title} — ${exam.shortTitle}</h3>
              <p>Trọn bộ 41 câu chuẩn phân hóa: 37 câu Trắc nghiệm ABCD • 4 câu Đúng / Sai (16 ý) • Kèm lời giải chi tiết</p>
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
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : '▶ Hiện lưới 41 câu'}
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
              🔄 Làm mới
            </button>
          </div>
        </div>

        <!-- BỘ LỌC PHÂN MÔN & MỨC ĐỘ -->
        <div class="math-exam-selector-bar selector-40-exams">
          <div class="math-exam-top-row">
            <div class="math-category-tabs">
              <button type="button" class="math-category-tab-btn active" style="cursor: default;">
                ⚡ Chuyên đề: Nhiệt Hóa Hơi Riêng (Vật lí 12 - Chương 1)
              </button>
            </div>

            <div class="math-part-pills">
              <button class="math-part-pill ${state.filterPart === 'ALL' && state.filterLevel === 'ALL' ? 'active' : ''}" onclick="window.PhysQuizApp.setFilter('ALL', 'ALL')">
                Tất cả (41 câu)
              </button>
              <button class="math-part-pill ${state.filterPart === 1 ? 'active' : ''}" onclick="window.PhysQuizApp.setFilter(1, 'ALL')">
                Phần 1: ABCD (37)
              </button>
              <button class="math-part-pill ${state.filterPart === 2 ? 'active' : ''}" onclick="window.PhysQuizApp.setFilter(2, 'ALL')">
                Phần 2: Đúng - Sai (4)
              </button>
              <button class="math-part-pill ${state.filterLevel === 'nb_th' ? 'active' : ''}" onclick="window.PhysQuizApp.setFilter('ALL', 'nb_th')">
                Nhận biết - Thông hiểu (23)
              </button>
              <button class="math-part-pill ${state.filterLevel === 'vd_vdc' ? 'active' : ''}" onclick="window.PhysQuizApp.setFilter('ALL', 'vd_vdc')">
                Vận dụng (18)
              </button>
              <button class="math-part-pill ${state.filterStarred ? 'active' : ''}" onclick="window.PhysQuizApp.toggleStarFilter()">
                ★ Đã lưu ý (${countStarred()})
              </button>
            </div>
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
            <button class="quiz-mini-btn" onclick="window.PhysQuizApp.resetCurrentExamAnswers()" title="Xóa toàn bộ câu trả lời để làm lại từ đầu">
              ↺ Làm lại chuyên đề này
            </button>
          </div>
        </div>

        <!-- THÂN NỘI DUNG: SLIDE HOẶC LIST -->
        ${state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered)}

        <!-- MODAL BẢNG ĐÁP ÁN -->
        ${state.answerKeyModalOpen ? renderAnswerKeyModal(exam) : ''}
      </div>
    `;
  }

  function countStarred() {
    const exam = getCurrentExam();
    if (!exam || !exam.questions) return 0;
    return exam.questions.filter(q => !!state.starredQuestions[getQKey(q.id)]).length;
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
              Câu tiếp ➡
            </button>
          </div>

          <div class="keyboard-hint-bar">
            <span>Phím tắt: <b>[←]</b> Câu trước • <b>[→]</b> Câu tiếp • <b>[Space]</b> Xem giải • <b>[S]</b> Đánh dấu sao • <b>[1-4]</b> Chọn A-D</span>
          </div>
        </div>

        <!-- CỘT ĐIỀU HƯỚNG 41 CÂU BÊN CẠNH -->
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

                const shortTag = q.part === 1 ? `P1.${q.qnum}` : `P2.${q.qnum}`;

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
    const key = getQKey(q.id);
    const isRevealed = !!state.revealedQuestions[key];
    const isStarred = !!state.starredQuestions[key];
    const status = evaluateQuestionStatus(q);
    const levelBadge = q.level === 'vd_vdc' ? '🎯 Vận dụng cao' : '🎯 Nhận biết - Thông hiểu';

    return `
      <div class="slide-card-header">
        <div class="slide-q-meta">
          <span class="slide-q-number">${q.label || `Câu ${q.qnum}`}</span>
          <span class="slide-q-topic">${levelBadge}</span>
          ${q.topic ? `<span class="slide-q-topic">📌 ${q.topic}</span>` : ''}
          <span class="slide-q-topic" style="background: rgba(2, 132, 199, 0.1); color: #0284c7; border: 1px solid rgba(2, 132, 199, 0.25);">
            ${q.part === 1 ? 'Nhiều lựa chọn (0.25đ)' : 'Đúng/Sai (Tối đa 1.0đ)'}
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

      <div class="slide-q-body">
        <div class="slide-q-text">${q.prompt || q.question || ''}</div>
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
    return '';
  }

  // ==================== BẢNG ĐÁP ÁN NHANH ====================
  function renderAnswerKeyModal(exam) {
    const questions = exam.questions || [];
    const p1 = questions.filter(q => q.part === 1);
    const p2 = questions.filter(q => q.part === 2);

    return `
      <div class="quiz-modal-backdrop open" onclick="window.PhysQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-card quiz-modal-box modal-box-wide" onclick="event.stopPropagation()">
          <div class="quiz-modal-header">
            <h4>🔑 BẢNG ĐÁP ÁN CHUYÊN ĐỀ — ${exam.title} (41 CÂU)</h4>
            <button class="modal-close-btn quiz-modal-close" onclick="window.PhysQuizApp.closeAnswerKeyModal()">&times;</button>
          </div>
          <div class="quiz-modal-body">
            <!-- PHẦN 1 -->
            <div class="key-section-title">PHẦN 1: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (37 CÂU)</div>
            <div class="key-table-grid">
              ${p1.map(q => `
                <div class="key-item">
                  <span class="key-qnum">C${q.qnum}</span>
                  <span class="key-ans-letter">${q.answer}</span>
                </div>
              `).join('')}
            </div>

            <!-- PHẦN 2 -->
            <div class="key-section-title" style="margin-top: 18px;">PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (4 CÂU)</div>
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

      if (state.answerKeyModalOpen) {
        if (e.key === 'Escape') {
          state.answerKeyModalOpen = false;
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

    setMode: function (mode) {
      state.mode = mode;
      renderPhysApp();
    },

    setFilter: function (part, level) {
      state.filterPart = part;
      state.filterLevel = level;
      state.filterStarred = false;
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
      state.filterLevel = 'ALL';
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
      state.fontScale = Math.min(1.4, Math.max(0.85, Math.round((state.fontScale + delta) * 10) / 10));
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
      filtered.forEach(q => {
        state.revealedQuestions[getQKey(q.id)] = true;
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

    clearQuestion: function (qid) {
      const k = getQKey(qid);
      delete state.mcqAnswers[k];
      delete state.tfAnswers[k];
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

    resetCurrentExamAnswers: function () {
      const exam = getCurrentExam();
      if (!exam || !exam.questions) return;
      if (confirm(`Bạn có chắc chắn muốn xóa toàn bộ câu trả lời của "${exam.shortTitle}" để làm lại từ đầu?`)) {
        exam.questions.forEach(q => {
          const k = getQKey(q.id);
          delete state.mcqAnswers[k];
          delete state.tfAnswers[k];
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
