import type { QuestionOut } from '../api';

interface QuestionProps {
  question: QuestionOut;
  index: number;
  total: number;
  selected: string | string[] | null;
  onSelect: (questionId: string, answer: string | string[]) => void;
  isFlagged: boolean;
  onFlag: (questionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  slideDirection: 'right' | 'left';
}

export default function Question({
  question, index, total, selected, onSelect, isFlagged, onFlag, onNext, onPrev, isFirst, isLast, slideDirection,
}: QuestionProps) {
  const isMulti = question.multi_select > 0;
  const selectedArr = Array.isArray(selected) ? selected : (selected ? [selected] : []);
  const multiCount = question.multi_select;

  function handleOptionClick(key: string) {
    if (isMulti) {
      let updated: string[];
      if (selectedArr.includes(key)) {
        updated = selectedArr.filter(k => k !== key);
      } else {
        updated = [...selectedArr, key];
        if (updated.length > multiCount) {
          updated = updated.slice(1);
        }
      }
      onSelect(question.id, updated);
    } else {
      onSelect(question.id, key);
    }
  }

  const optionKeys = Object.keys(question.options).sort();
  const animClass = slideDirection === 'right' ? 'slide-right' : 'slide-left';

  return (
    <div className={`question-card ${animClass}`}>
      <div className="question-header">
        <span className="question-number">
          Question {index + 1} of {total}
          <button
            className={`flag-btn ${isFlagged ? 'flagged' : ''}`}
            onClick={() => onFlag(question.id)}
            title={isFlagged ? 'Remove flag' : 'Flag as unsure'}
          >
            {isFlagged ? '🚩' : '🏳️'}
          </button>
        </span>
        {question.category && (
          <span className="question-category">{question.category}</span>
        )}
      </div>

      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.question_text }}
      />

      {isMulti && (
        <div className="multi-hint">
          Select {multiCount} answers ({selectedArr.length}/{multiCount} selected)
        </div>
      )}

      <div className="options-list">
        {optionKeys.map((key, i) => {
          const isSelected = isMulti
            ? selectedArr.includes(key)
            : selected === key;
          return (
            <button
              key={key}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => handleOptionClick(key)}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="option-letter">{key.toUpperCase()}</span>
              <span
                className="option-text"
                dangerouslySetInnerHTML={{ __html: question.options[key] }}
              />
            </button>
          );
        })}
      </div>

      <div className="question-nav">
        <button onClick={onPrev} disabled={isFirst} className="nav-btn">
          ← Previous
        </button>
        <button onClick={onNext} className="nav-btn primary">
          {isLast ? 'Review & Submit' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
