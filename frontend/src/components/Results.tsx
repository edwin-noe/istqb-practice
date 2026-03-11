import type { QuizSubmitResponse, ReviewItem } from '../api';
import { useState } from 'react';
import { formatExplanation } from '../utils/formatExplanation';

interface ResultsProps {
  result: QuizSubmitResponse;
  onHome: () => void;
}

export default function Results({ result, onHome }: ResultsProps) {
  const [showReview, setShowReview] = useState(false);
  const [filter, setFilter] = useState<'all' | 'wrong' | 'correct' | 'unsure'>('all');

  const flaggedCount = result.review.filter(r => r.is_flagged).length;

  const filtered = result.review.filter(r => {
    if (filter === 'wrong') return !r.is_correct;
    if (filter === 'correct') return r.is_correct;
    if (filter === 'unsure') return r.is_flagged;
    return true;
  });

  return (
    <div className="results-container">
      <div className={`score-card ${result.passed ? 'passed' : 'failed'}`}>
        <h1>{result.passed ? '🎉 PASSED' : '❌ FAILED'}</h1>
        <div className="score-big">{result.score}%</div>
        <div className="score-detail">
          <span className="correct-count">✓ {result.correct}</span>
          <span className="incorrect-count">✗ {result.incorrect}</span>
          <span className="unanswered-count">○ {result.unanswered}</span>
          {flaggedCount > 0 && (
            <span className="flagged-count">🚩 {flaggedCount}</span>
          )}
        </div>
        <div className="score-meta">
          {result.total} questions • {result.time_taken} • Pass mark: 65%
        </div>
      </div>

      <div className="results-actions">
        <button onClick={onHome} className="nav-btn">← Home</button>
        <button onClick={() => setShowReview(!showReview)} className="nav-btn primary">
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>
      </div>

      {showReview && (
        <div className="review-section">
          <div className="review-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >All ({result.total})</button>
            <button
              className={`filter-btn ${filter === 'wrong' ? 'active' : ''}`}
              onClick={() => setFilter('wrong')}
            >Wrong ({result.incorrect})</button>
            <button
              className={`filter-btn ${filter === 'correct' ? 'active' : ''}`}
              onClick={() => setFilter('correct')}
            >Correct ({result.correct})</button>
            {flaggedCount > 0 && (
              <button
                className={`filter-btn ${filter === 'unsure' ? 'active' : ''}`}
                onClick={() => setFilter('unsure')}
              >Unsure ({flaggedCount})</button>
            )}
          </div>

          {filtered.map((r, i) => (
            <ReviewCard key={r.question_id} item={r} delay={i * 0.05} />
          ))}
        </div>
      )}
    </div>
  );
}

function ReviewCard({ item, delay }: { item: ReviewItem; delay: number }) {
  const correctArr = Array.isArray(item.correct_answer) ? item.correct_answer : [item.correct_answer];
  const userArr = item.user_answer == null ? [] :
    (Array.isArray(item.user_answer) ? item.user_answer : [item.user_answer]);

  return (
    <div
      className={`review-card ${item.is_correct ? 'correct' : 'wrong'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="review-status">
        {item.is_correct ? '✓' : '✗'} {item.category}
        {item.is_flagged && <span className="flag-badge">🚩 Flagged</span>}
      </div>
      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: item.question_text }}
      />
      <div className="options-review">
        {Object.entries(item.options).sort(([a],[b]) => a.localeCompare(b)).map(([key, val]) => {
          const isCorrect = correctArr.includes(key);
          const isUser = userArr.includes(key);
          let cls = 'option-review';
          if (isCorrect) cls += ' correct-answer';
          if (isUser && !isCorrect) cls += ' wrong-answer';
          return (
            <div key={key} className={cls}>
              <span className="option-letter">{key.toUpperCase()}</span>
              <span dangerouslySetInnerHTML={{ __html: val }} />
              {isCorrect && <span className="badge correct-badge">✓</span>}
              {isUser && !isCorrect && <span className="badge wrong-badge">✗</span>}
            </div>
          );
        })}
      </div>
      {item.explanation && (
        <div className="explanation">
          <strong>Explanation</strong>
          <div
            className="explanation-body"
            dangerouslySetInnerHTML={{ __html: formatExplanation(item.explanation) }}
          />
        </div>
      )}
    </div>
  );
}
