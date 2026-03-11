import { useState, useEffect, useCallback } from 'react';
import { getBankQuestions, getBankStats } from '../api';
import type { BankQuestionItem, BankStats } from '../api';
import { formatExplanation } from '../utils/formatExplanation';

interface QuestionBankProps {
  onBack: () => void;
}

const CONTENT_TYPES = [
  { value: '', label: 'All', icon: '📋' },
  { value: 'diagram', label: 'Diagrams', icon: '📊' },
  { value: 'table', label: 'Tables', icon: '📑' },
  { value: 'code', label: 'Code', icon: '💻' },
  { value: 'multi-select', label: 'Multi-Select', icon: '☑️' },
  { value: 'text', label: 'Text Only', icon: '📝' },
];

export default function QuestionBank({ onBack }: QuestionBankProps) {
  const [questions, setQuestions] = useState<BankQuestionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [contentType, setContentType] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const pageSize = 15;

  useEffect(() => {
    getBankStats()
      .then((stats: BankStats) => {
        const cats = Object.keys(stats.categories).filter(c => c.length > 0).sort();
        setCategories(cats);
      })
      .catch(() => {});
  }, []);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getBankQuestions(page, pageSize, search, category, contentType);
      setQuestions(data.questions);
      setTotal(data.total);
    } catch {
      setQuestions([]);
    }
    setLoading(false);
  }, [page, search, category, contentType]);

  useEffect(() => { fetchQuestions(); }, [fetchQuestions]);

  const totalPages = Math.ceil(total / pageSize);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  }

  function parseCorrectAnswer(q: BankQuestionItem): string[] {
    try {
      const parsed = JSON.parse(q.correct_answer);
      return Array.isArray(parsed) ? parsed : [q.correct_answer];
    } catch {
      return [q.correct_answer];
    }
  }

  function contentTypeLabel(type: string): string {
    const found = CONTENT_TYPES.find(ct => ct.value === type);
    return found ? `${found.icon} ${found.label}` : type;
  }

  return (
    <div className="bank-container animate-in">
      <div className="bank-header">
        <button onClick={onBack} className="nav-btn">← Back</button>
        <h1>Question Bank</h1>
        <span className="bank-total">{total} questions</span>
      </div>

      {/* Content type filter chips */}
      <div className="bank-content-filters">
        {CONTENT_TYPES.map(ct => (
          <button
            key={ct.value}
            className={`content-chip ${contentType === ct.value ? 'active' : ''}`}
            onClick={() => { setContentType(ct.value); setPage(1); }}
          >
            <span className="chip-icon">{ct.icon}</span>
            <span className="chip-label">{ct.label}</span>
          </button>
        ))}
      </div>

      <div className="bank-controls">
        <form onSubmit={handleSearch} className="bank-search-form">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className="bank-search-input"
          />
          <button type="submit" className="bank-search-btn">Search</button>
          {search && (
            <button
              type="button"
              className="bank-clear-btn"
              onClick={() => { setSearchInput(''); setSearch(''); setPage(1); }}
            >
              Clear
            </button>
          )}
        </form>
        {categories.length > 0 && (
          <select
            value={category}
            onChange={e => { setCategory(e.target.value); setPage(1); }}
            className="bank-category-select"
          >
            <option value="">All Chapters</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
      </div>

      {loading ? (
        <div className="bank-loading">
          <div className="spinner" />
        </div>
      ) : questions.length === 0 ? (
        <div className="bank-empty">No questions found.</div>
      ) : (
        <div className="bank-list">
          {questions.map((q, idx) => {
            const isExpanded = expandedId === q.id;
            const correctKeys = parseCorrectAnswer(q);
            const optionKeys = Object.keys(q.options).sort();
            return (
              <div
                key={q.id}
                className={`bank-card ${isExpanded ? 'expanded' : ''}`}
                style={{ animationDelay: `${idx * 0.03}s` }}
              >
                <button
                  className="bank-card-toggle"
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                >
                  <span className="bank-card-number">#{q.id}</span>
                  <span
                    className="bank-card-preview"
                    dangerouslySetInnerHTML={{
                      __html: q.question_text.replace(/<svg[\s\S]*?<\/svg>/gi, '<em>[diagram]</em>').replace(/<table[\s\S]*?<\/table>/gi, '<em>[table]</em>').replace(/<pre[\s\S]*?<\/pre>/gi, '<em>[code]</em>').substring(0, 120) + (q.question_text.length > 120 ? '...' : ''),
                    }}
                  />
                  <div className="bank-card-badges">
                    {q.question_type !== 'text' && (
                      <span className={`content-badge badge-${q.question_type}`}>
                        {contentTypeLabel(q.question_type)}
                      </span>
                    )}
                  </div>
                  <span className="bank-card-chevron">{isExpanded ? '▾' : '▸'}</span>
                </button>

                {isExpanded && (
                  <div className="bank-card-body">
                    <div
                      className="question-text"
                      dangerouslySetInnerHTML={{ __html: q.question_text }}
                    />

                    {q.multi_select > 0 && (
                      <div className="multi-hint">
                        Select {q.multi_select} answers
                      </div>
                    )}

                    <div className="options-review">
                      {optionKeys.map(key => {
                        const isCorrect = correctKeys.includes(key);
                        return (
                          <div
                            key={key}
                            className={`option-review ${isCorrect ? 'correct-answer' : ''}`}
                          >
                            <span className="option-letter">{key.toUpperCase()}</span>
                            <span dangerouslySetInnerHTML={{ __html: q.options[key] }} />
                            {isCorrect && <span className="badge correct-badge">✓</span>}
                          </div>
                        );
                      })}
                    </div>

                    {q.explanation && (
                      <div className="explanation">
                        <strong>Explanation</strong>
                        <div
                          className="explanation-body"
                          dangerouslySetInnerHTML={{ __html: formatExplanation(q.explanation) }}
                        />
                      </div>
                    )}

                    <div className="bank-card-meta">
                      {q.category && <span className="bank-meta-tag">{q.category}</span>}
                      <span className={`bank-meta-tag tag-${q.question_type}`}>
                        {contentTypeLabel(q.question_type)}
                      </span>
                      {q.source && <span className="bank-meta-tag">Source: {q.source}</span>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {totalPages > 1 && (
        <div className="bank-pagination">
          <button
            className="nav-btn"
            disabled={page <= 1}
            onClick={() => setPage(p => p - 1)}
          >
            ← Prev
          </button>
          <span className="bank-page-info">
            Page {page} of {totalPages}
          </span>
          <button
            className="nav-btn"
            disabled={page >= totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
