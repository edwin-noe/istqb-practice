/* ============================================================
   ISTQB Quiz – Application Logic
   ============================================================ */

// State
let state = {
  currentQuiz: [],
  currentIndex: 0,
  answers: {},
  startTime: null,
  timerInterval: null,
  elapsedSeconds: 0,
  lastResults: null,
  isStudyMode: false,
  studyCount: 0,
};

const PASS_MARK = 65; // ISTQB pass mark is 65%
const QUIZ_SIZE = 40;

// ============================================================
// UTILITY
// ============================================================

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(q) {
  const entries = Object.entries(q.options);
  const shuffled = shuffle(entries);
  const newOptions = {};
  const letterMap = {};
  const letters = entries.length === 5 ? ['a','b','c','d','e'] : ['a','b','c','d'];
  letters.forEach((letter, i) => {
    newOptions[letter] = shuffled[i][1];
    letterMap[shuffled[i][0]] = letter;
  });
  const newCorrect = Array.isArray(q.correct)
    ? q.correct.map(c => letterMap[c]).sort()
    : letterMap[q.correct];
  return {
    ...q,
    options: newOptions,
    correct: newCorrect,
    _originalId: q.id,
  };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('istqb_history') || '[]');
  } catch { return []; }
}

function saveHistory(entry) {
  const history = getHistory();
  history.unshift(entry);
  if (history.length > 50) history.length = 50;
  localStorage.setItem('istqb_history', JSON.stringify(history));
}

// ============================================================
// PERSISTENT MISTAKE TRACKING
// ============================================================

function getMistakeTracker() {
  try {
    return JSON.parse(localStorage.getItem('istqb_mistakes') || '{}');
  } catch { return {}; }
}

function saveMistakeTracker(tracker) {
  localStorage.setItem('istqb_mistakes', JSON.stringify(tracker));
}

function recordAnswer(questionId, wasCorrect) {
  const tracker = getMistakeTracker();
  if (!tracker[questionId]) {
    tracker[questionId] = { wrong: 0, right: 0, lastSeen: null };
  }
  if (wasCorrect) {
    tracker[questionId].right++;
  } else {
    tracker[questionId].wrong++;
  }
  tracker[questionId].lastSeen = new Date().toISOString();
  saveMistakeTracker(tracker);
}

function getWeakQuestions() {
  const tracker = getMistakeTracker();
  // Return question IDs sorted by weakness score (most wrong, least right)
  return Object.entries(tracker)
    .filter(([_, stats]) => stats.wrong > 0)
    .map(([id, stats]) => ({
      id: parseInt(id),
      wrong: stats.wrong,
      right: stats.right,
      score: stats.wrong - stats.right, // higher = weaker
      lastSeen: stats.lastSeen,
    }))
    .sort((a, b) => b.score - a.score || b.wrong - a.wrong);
}

function getWeakAreaStats() {
  const weak = getWeakQuestions();
  const neverCorrect = weak.filter(q => q.right === 0);
  return {
    totalWeak: weak.length,
    neverCorrect: neverCorrect.length,
    weakQuestions: weak,
  };
}

function clearMistakes() {
  localStorage.removeItem('istqb_mistakes');
  updateHomeStats();
}

// ============================================================
// NAVIGATION
// ============================================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showHome() {
  stopTimer();
  showScreen('screen-home');
}

function showResults() {
  showScreen('screen-results');
}

// ============================================================
// QUIZ LOGIC
// ============================================================

function startNewQuiz() {
  const selected = shuffle(QUESTION_BANK).slice(0, QUIZ_SIZE);
  const quizQuestions = selected.map(q => shuffleOptions(q));
  initQuiz(quizQuestions);
}

function retakeSameQuiz() {
  if (!state.lastResults) return;
  const originalIds = state.lastResults.questions.map(q => q._originalId ?? q.id);
  const originals = QUESTION_BANK.filter(q => originalIds.includes(q.id));
  const reshuffled = shuffle(originals).map(q => shuffleOptions(q));
  initQuiz(reshuffled);
}

function initQuiz(questions) {
  state.currentQuiz = questions;
  state.currentIndex = 0;
  state.answers = {};
  state.elapsedSeconds = 0;
  state.isStudyMode = false;

  showScreen('screen-quiz');
  renderQuestion();
  renderDots();
  updateProgress();
  startTimer();
}

function startTimer() {
  stopTimer();
  state.startTime = Date.now();
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
    document.getElementById('quiz-timer').textContent = formatTime(state.elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function renderQuestion() {
  const q = state.currentQuiz[state.currentIndex];
  const container = document.getElementById('options-container');
  const isMulti = q.multiSelect > 0;
  const isReview = state.isStudyMode && state.answers[state.currentIndex] !== undefined;
  const userAnswer = state.answers[state.currentIndex];

  document.getElementById('question-number').textContent =
    `Question ${state.currentIndex + 1} of ${state.currentQuiz.length}`;
  if (q._html) {
    document.getElementById('question-text').innerHTML = q.question;
  } else {
    document.getElementById('question-text').textContent = q.question;
  }

  // Show multi-select hint
  let hintEl = document.getElementById('multi-select-hint');
  if (!hintEl) {
    hintEl = document.createElement('div');
    hintEl.id = 'multi-select-hint';
    document.getElementById('question-text').parentNode.insertBefore(
      hintEl, document.getElementById('options-container')
    );
  }
  if (isMulti) {
    const selected = Array.isArray(userAnswer) ? userAnswer.length : 0;
    hintEl.className = 'multi-hint';
    hintEl.innerHTML = `🔘 Select <strong>${q.multiSelect}</strong> answers (${selected}/${q.multiSelect} selected)`;
    hintEl.style.display = '';
  } else {
    hintEl.style.display = 'none';
  }

  container.innerHTML = '';
  const optionLetters = Object.keys(q.options).sort();
  optionLetters.forEach(letter => {
    const div = document.createElement('div');
    div.className = 'option';

    if (isMulti) {
      if (Array.isArray(userAnswer) && userAnswer.includes(letter)) {
        div.classList.add('selected');
      }
    } else {
      if (userAnswer === letter) {
        div.classList.add('selected');
      }
    }

    if (isReview) {
      div.classList.add('disabled');
      const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
      const userArr = Array.isArray(userAnswer) ? userAnswer : (userAnswer ? [userAnswer] : []);
      if (correctArr.includes(letter)) div.classList.add('correct');
      if (userArr.includes(letter) && !correctArr.includes(letter)) {
        div.classList.add('incorrect');
      }
    }

    div.innerHTML = `
      <span class="option-letter">${letter.toUpperCase()}</span>
      <span class="option-text">${q.options[letter]}</span>
    `;

    if (!isReview) {
      div.onclick = () => selectOption(letter);
    }
    container.appendChild(div);
  });

  // Show explanation in study mode after answering
  if (isReview && q.explanation) {
    const explDiv = document.createElement('div');
    explDiv.className = 'review-explanation';
    explDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
    container.appendChild(explDiv);
  }

  // Update nav buttons
  document.getElementById('btn-prev').style.visibility = state.currentIndex === 0 ? 'hidden' : 'visible';
  document.getElementById('btn-next').textContent =
    state.currentIndex === state.currentQuiz.length - 1 ? 'Finish →' : 'Next →';
}

function selectOption(letter) {
  const q = state.currentQuiz[state.currentIndex];
  const isMulti = q.multiSelect > 0;

  if (isMulti) {
    let current = state.answers[state.currentIndex];
    if (!Array.isArray(current)) current = [];
    if (current.includes(letter)) {
      current = current.filter(l => l !== letter);
    } else {
      if (current.length < q.multiSelect) {
        current = [...current, letter].sort();
      } else {
        // Replace oldest selection
        current = [...current.slice(1), letter].sort();
      }
    }
    state.answers[state.currentIndex] = current.length > 0 ? current : undefined;
  } else {
    state.answers[state.currentIndex] = letter;
  }

  renderQuestion();
  updateDots();
  updateProgress();

  // In study mode, show result immediately (only when all answers selected)
  if (state.isStudyMode) {
    if (isMulti) {
      const ans = state.answers[state.currentIndex];
      if (Array.isArray(ans) && ans.length === q.multiSelect) {
        renderQuestion();
      }
    } else {
      renderQuestion();
    }
  }
}

function prevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuestion();
    updateDots();
  }
}

function nextQuestion() {
  if (state.currentIndex < state.currentQuiz.length - 1) {
    state.currentIndex++;
    renderQuestion();
    updateDots();
  } else if (state.isStudyMode) {
    finishStudySession();
  }
}

function goToQuestion(index) {
  state.currentIndex = index;
  renderQuestion();
  updateDots();
}

function renderDots() {
  const container = document.getElementById('question-dots');
  container.innerHTML = '';
  state.currentQuiz.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === state.currentIndex) dot.classList.add('current');
    if (state.answers[i] !== undefined) dot.classList.add('answered');
    dot.onclick = () => goToQuestion(i);
    container.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('current', i === state.currentIndex);
    dot.classList.toggle('answered', state.answers[i] !== undefined);
  });
}

function updateProgress() {
  const total = state.currentQuiz.length;
  const answered = Object.keys(state.answers).length;
  const pct = ((state.currentIndex + 1) / total) * 100;

  document.getElementById('quiz-progress-text').textContent =
    `Question ${state.currentIndex + 1} of ${total}`;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('answered-count').textContent = `${answered} / ${total} answered`;
}

// ============================================================
// SUBMIT & RESULTS
// ============================================================

function confirmSubmit() {
  const answered = Object.keys(state.answers).length;
  const total = state.currentQuiz.length;
  const unanswered = total - answered;

  document.getElementById('modal-title').textContent = 'Submit Quiz?';
  document.getElementById('modal-message').textContent = unanswered > 0
    ? `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`
    : 'Are you ready to submit your answers?';
  document.getElementById('modal-confirm').textContent = 'Submit';
  document.getElementById('modal-confirm').onclick = submitQuiz;
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function submitQuiz() {
  closeModal();
  stopTimer();

  const total = state.currentQuiz.length;
  let correct = 0, incorrect = 0, unanswered = 0;

  state.currentQuiz.forEach((q, i) => {
    const userAnswer = state.answers[i];
    const qOrigId = q._originalId ?? q.id;
    const isMulti = q.multiSelect > 0;

    let isCorrect = false;
    if (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      unanswered++;
    } else if (isMulti) {
      const correctArr = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
      const userArr = Array.isArray(userAnswer) ? [...userAnswer].sort() : [userAnswer];
      isCorrect = correctArr.length === userArr.length && correctArr.every((v, j) => v === userArr[j]);
      if (isCorrect) correct++;
      else incorrect++;
    } else {
      if (userAnswer === q.correct) {
        isCorrect = true;
        correct++;
      } else {
        incorrect++;
      }
    }
    recordAnswer(qOrigId, isCorrect && userAnswer !== undefined);
  });

  const score = Math.round((correct / total) * 100);
  const passed = score >= PASS_MARK;
  const timeTaken = formatTime(state.elapsedSeconds);

  state.lastResults = {
    questions: state.currentQuiz,
    answers: { ...state.answers },
    score,
    correct,
    incorrect,
    unanswered,
    timeTaken,
    passed,
    date: new Date().toISOString(),
  };

  // Save to history
  saveHistory({
    date: state.lastResults.date,
    score,
    correct,
    incorrect,
    unanswered,
    total,
    timeTaken,
    passed,
  });

  renderResults();
  showScreen('screen-results');
}

function renderResults() {
  const r = state.lastResults;

  document.getElementById('score-value').textContent = r.score + '%';
  document.getElementById('correct-count').textContent = r.correct;
  document.getElementById('incorrect-count').textContent = r.incorrect;
  document.getElementById('unanswered-count').textContent = r.unanswered;
  document.getElementById('time-taken').textContent = r.timeTaken;

  const circle = document.getElementById('score-circle');
  circle.className = 'score-circle ' + (r.passed ? 'pass' : 'fail');

  const status = document.getElementById('result-status');
  status.className = 'result-status ' + (r.passed ? 'pass' : 'fail');
  status.textContent = r.passed
    ? `✅ PASSED (${PASS_MARK}% required)`
    : `❌ FAILED (${PASS_MARK}% required)`;

  renderReview('all');
  updateHomeStats();
}

function renderReview(filter) {
  const r = state.lastResults;
  const container = document.getElementById('review-container');
  container.innerHTML = '';

  r.questions.forEach((q, i) => {
    const userAnswer = r.answers[i];
    const isMulti = q.multiSelect > 0;
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
    const userArr = Array.isArray(userAnswer) ? userAnswer : (userAnswer ? [userAnswer] : []);

    let status;
    if (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      status = 'unanswered';
    } else if (isMulti) {
      const sortedCorrect = [...correctArr].sort();
      const sortedUser = [...userArr].sort();
      status = sortedCorrect.length === sortedUser.length &&
        sortedCorrect.every((v, j) => v === sortedUser[j]) ? 'correct' : 'incorrect';
    } else {
      status = userAnswer === q.correct ? 'correct' : 'incorrect';
    }

    if (filter !== 'all' && filter !== status) return;

    const item = document.createElement('div');
    item.className = `review-item review-${status}`;

    const statusIcon = status === 'correct' ? '✅' : status === 'incorrect' ? '❌' : '⬜';
    const qNum = i + 1;

    let detailsHtml = '';
    const optionLetters = Object.keys(q.options).sort();
    optionLetters.forEach(letter => {
      let cls = '';
      if (correctArr.includes(letter)) cls = 'ra-correct';
      else if (userArr.includes(letter) && !correctArr.includes(letter)) cls = 'ra-incorrect';

      const marker = correctArr.includes(letter) ? ' ✓' : (userArr.includes(letter) && !correctArr.includes(letter) ? ' ✗' : '');
      detailsHtml += `<div class="review-answer ${cls}">${letter.toUpperCase()}) ${q.options[letter]}${marker}</div>`;
    });

    if (q.explanation) {
      detailsHtml += `<div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>`;
    }

    item.innerHTML = `
      <div class="review-question" onclick="toggleReviewDetails(this)">
        ${statusIcon} <strong>Q${qNum}.</strong> ${q.question.substring(0, 120)}${q.question.length > 120 ? '...' : ''} ▾
      </div>
      <div class="review-details">${detailsHtml}</div>
    `;
    container.appendChild(item);
  });

  if (container.children.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">No questions in this category.</p>';
  }
}

function toggleReviewDetails(el) {
  const details = el.nextElementSibling;
  details.classList.toggle('expanded');
}

function filterReview(filter) {
  document.querySelectorAll('.review-filter .btn').forEach(b => {
    b.classList.toggle('filter-active', b.dataset.filter === filter);
  });
  renderReview(filter);
}

// ============================================================
// STUDY FROM MISTAKES
// ============================================================

function studyMistakes() {
  if (!state.lastResults) return;

  const incorrectIndices = [];
  state.lastResults.questions.forEach((q, i) => {
    const ans = state.lastResults.answers[i];
    if (ans === undefined) {
      incorrectIndices.push(i);
    } else if (Array.isArray(q.correct)) {
      const userArr = Array.isArray(ans) ? [...ans].sort() : [ans];
      const correctArr = [...q.correct].sort();
      if (!(correctArr.length === userArr.length && correctArr.every((v, j) => v === userArr[j]))) {
        incorrectIndices.push(i);
      }
    } else if (ans !== q.correct) {
      incorrectIndices.push(i);
    }
  });

  if (incorrectIndices.length === 0) {
    alert('Congratulations! You got all questions correct!');
    return;
  }

  const info = document.getElementById('study-info');
  info.textContent = `You got ${incorrectIndices.length} question${incorrectIndices.length > 1 ? 's' : ''} wrong or unanswered.`;

  const countContainer = document.getElementById('count-options');
  countContainer.innerHTML = '';

  const options = [incorrectIndices.length];
  if (incorrectIndices.length > 5) options.unshift(5);
  if (incorrectIndices.length > 10) options.splice(1, 0, 10);
  if (incorrectIndices.length > 20) options.splice(options.length - 1, 0, 20);

  // Deduplicate
  const uniqueOpts = [...new Set(options)];
  state.studyCount = uniqueOpts[0];

  uniqueOpts.forEach((n, idx) => {
    const div = document.createElement('div');
    div.className = 'count-option' + (idx === 0 ? ' selected' : '');
    div.textContent = n === incorrectIndices.length ? `All (${n})` : n;
    div.onclick = () => {
      document.querySelectorAll('.count-option').forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      state.studyCount = n;
    };
    countContainer.appendChild(div);
  });

  // Store incorrect questions for study
  state._incorrectQuestions = incorrectIndices.map(i => state.lastResults.questions[i]);

  showScreen('screen-study');
}

function startStudySession() {
  const questions = shuffle(state._incorrectQuestions).slice(0, state.studyCount);
  // Re-shuffle options
  const studyQuestions = questions.map(q => {
    const orig = QUESTION_BANK.find(oq => oq.id === (q._originalId ?? q.id));
    return orig ? shuffleOptions(orig) : shuffleOptions(q);
  });

  state.currentQuiz = studyQuestions;
  state.currentIndex = 0;
  state.answers = {};
  state.isStudyMode = true;
  state.elapsedSeconds = 0;

  showScreen('screen-quiz');
  renderQuestion();
  renderDots();
  updateProgress();
  startTimer();

  // Change submit button text for study mode
  document.querySelector('.quiz-footer .btn-danger').textContent = 'Finish Review';
}

function finishStudySession() {
  stopTimer();

  const total = state.currentQuiz.length;
  let correct = 0;
  state.currentQuiz.forEach((q, i) => {
    const qOrigId = q._originalId ?? q.id;
    const userAnswer = state.answers[i];
    const isMulti = q.multiSelect > 0;

    let isCorrect = false;
    if (isMulti) {
      const correctArr = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
      const userArr = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
      isCorrect = correctArr.length === userArr.length && correctArr.every((v, j) => v === userArr[j]);
    } else {
      isCorrect = userAnswer === q.correct;
    }

    if (isCorrect) {
      correct++;
      recordAnswer(qOrigId, true);
    } else if (userAnswer !== undefined) {
      recordAnswer(qOrigId, false);
    }
  });

  const score = Math.round((correct / total) * 100);
  alert(`Study Session Complete!\n\nYou got ${correct} out of ${total} correct (${score}%).`);

  updateHomeStats();

  if (state.lastResults) {
    showScreen('screen-results');
  } else {
    showHome();
  }
}

// ============================================================
// HISTORY
// ============================================================

function showHistory() {
  const history = getHistory();
  const container = document.getElementById('history-container');

  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty">No attempts yet. Start a quiz to see your history here!</div>';
  } else {
    container.innerHTML = history.map((h, i) => {
      const date = new Date(h.date).toLocaleString();
      return `
        <div class="history-item">
          <div>
            <div class="history-score ${h.passed ? 'pass' : 'fail'}">${h.score}%</div>
            <div class="history-meta">${h.passed ? '✅ Passed' : '❌ Failed'}</div>
          </div>
          <div style="text-align:right">
            <div>${h.correct}/${h.total} correct</div>
            <div class="history-meta">⏱ ${h.timeTaken} · ${date}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  showScreen('screen-history');
}

// ============================================================
// INIT
// ============================================================

function startWeakAreaQuiz() {
  const weak = getWeakQuestions();
  if (weak.length === 0) {
    alert('No mistakes tracked yet! Take a quiz first.');
    return;
  }

  // Pick up to QUIZ_SIZE questions, prioritizing the weakest
  const count = Math.min(weak.length, QUIZ_SIZE);
  const selectedIds = weak.slice(0, count).map(w => w.id);
  const questions = selectedIds
    .map(id => QUESTION_BANK.find(q => q.id === id))
    .filter(Boolean)
    .map(q => shuffleOptions(q));

  const shuffled = shuffle(questions);
  initQuiz(shuffled);
}

function updateHomeStats() {
  const stats = getWeakAreaStats();
  const el = document.getElementById('weak-area-stats');
  const btn = document.getElementById('btn-weak-area');
  if (stats.totalWeak > 0) {
    el.innerHTML = `
      <span class="weak-badge">${stats.totalWeak} weak question${stats.totalWeak !== 1 ? 's' : ''} tracked</span>
      ${stats.neverCorrect > 0 ? `<span class="weak-badge danger">${stats.neverCorrect} never answered correctly</span>` : ''}
    `;
    el.style.display = 'block';
    btn.style.display = '';
  } else {
    el.style.display = 'none';
    btn.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.question-count').textContent =
    `${QUESTION_BANK.length} questions from official ISTQB sample exams`;

  // Override submit for study mode
  const submitBtn = document.querySelector('.quiz-footer .btn-danger');
  const originalOnclick = submitBtn.onclick;
  submitBtn.onclick = () => {
    if (state.isStudyMode) {
      finishStudySession();
    } else {
      confirmSubmit();
    }
  };

  updateHomeStats();
});
