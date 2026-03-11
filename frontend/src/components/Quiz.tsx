import { useState, useRef, useCallback } from 'react';
import type { QuestionOut, QuizSubmitResponse } from '../api';
import { submitQuiz } from '../api';
import Question from './Question';
import Timer from './Timer';

interface QuizProps {
  sessionId: string;
  questions: QuestionOut[];
  onFinish: (result: QuizSubmitResponse) => void;
  onBack: () => void;
}

export default function Quiz({ sessionId, questions, onFinish, onBack }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[] | null>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right');
  const [animKey, setAnimKey] = useState(0);
  const timeRef = useRef(0);

  const handleSelect = useCallback((qid: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [qid]: answer }));
  }, []);

  const handleFlag = useCallback((qid: string) => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(qid)) next.delete(qid);
      else next.add(qid);
      return next;
    });
  }, []);

  const answeredCount = Object.keys(answers).length;

  function goTo(idx: number, dir: 'right' | 'left') {
    setSlideDir(dir);
    setAnimKey(k => k + 1);
    setCurrentIdx(idx);
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const result = await submitQuiz({
        session_id: sessionId,
        answers,
        time_seconds: timeRef.current,
        flagged_questions: Array.from(flagged),
      });
      onFinish(result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert('Failed to submit: ' + msg);
      setSubmitting(false);
    }
  }

  if (showReview) {
    return (
      <div className="review-panel">
        <h2>Review Your Answers</h2>
        <p className="review-summary">
          {answeredCount} of {questions.length} answered
        </p>
        <div className="review-grid">
          {questions.map((q, i) => {
            const ans = answers[q.id];
            const isFlagged = flagged.has(q.id);
            const status = ans ? 'answered' : 'unanswered';
            return (
              <button
                key={q.id}
                className={`review-cell ${status} ${isFlagged ? 'flagged' : ''}`}
                onClick={() => { setShowReview(false); goTo(i, 'right'); }}
              >
                {isFlagged && <span className="flag-indicator">🚩</span>}
                {i + 1}
              </button>
            );
          })}
        </div>
        <div className="review-actions">
          <button onClick={() => setShowReview(false)} className="nav-btn">
            ← Back to Quiz
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="nav-btn submit-btn"
          >
            {submitting ? 'Submitting...' : `Submit Quiz (${answeredCount}/${questions.length})`}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="quiz-container">
      <div className="quiz-topbar">
        <button onClick={onBack} className="quit-btn">✕ Quit</button>
        <div className="progress-info">
          {answeredCount}/{questions.length} answered
        </div>
        <Timer running={!submitting} onTick={s => { timeRef.current = s; }} />
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Question
        key={animKey}
        question={q}
        index={currentIdx}
        total={questions.length}
        selected={answers[q.id] ?? null}
        onSelect={handleSelect}
        isFlagged={flagged.has(q.id)}
        onFlag={handleFlag}
        slideDirection={slideDir}
        onNext={() => {
          if (currentIdx === questions.length - 1) {
            setShowReview(true);
          } else {
            goTo(currentIdx + 1, 'right');
          }
        }}
        onPrev={() => goTo(Math.max(0, currentIdx - 1), 'left')}
        isFirst={currentIdx === 0}
        isLast={currentIdx === questions.length - 1}
      />
    </div>
  );
}
