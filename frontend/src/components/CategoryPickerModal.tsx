import { useState } from 'react';
import type { CategoryStat } from '../api';

interface CategoryPickerModalProps {
  categories: CategoryStat[];
  onConfirm: (selected: string[]) => void;
  onClose: () => void;
}

export default function CategoryPickerModal({
  categories,
  onConfirm,
  onClose,
}: CategoryPickerModalProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(cat: string) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  function selectAll() {
    if (selected.size === categories.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(categories.map(c => c.category)));
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content category-picker" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Choose Practice Areas</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <p className="modal-desc">
          Select categories to focus on, or leave empty to practice all weak areas.
        </p>

        <button className="select-all-btn" onClick={selectAll}>
          {selected.size === categories.length ? 'Deselect All' : 'Select All'}
        </button>

        <div className="category-list">
          {categories.map(cat => {
            const isSelected = selected.has(cat.category);
            const isWeak = cat.accuracy < 65;
            return (
              <label
                key={cat.category}
                className={`category-row ${isSelected ? 'selected' : ''} ${isWeak ? 'weak' : 'strong'}`}
              >
                <div className="category-checkbox">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggle(cat.category)}
                  />
                  <span className="checkmark" />
                </div>
                <div className="category-info">
                  <span className="category-name">{cat.category}</span>
                  <div className="category-stats">
                    <div className="mini-bar-track">
                      <div
                        className={`mini-bar-fill ${isWeak ? 'weak' : 'good'}`}
                        style={{ width: `${cat.accuracy}%` }}
                      />
                    </div>
                    <span className={`category-pct ${isWeak ? 'weak' : 'good'}`}>
                      {cat.accuracy}%
                    </span>
                  </div>
                </div>
                <span className="category-count">
                  {cat.total_correct}/{cat.total_seen}
                </span>
              </label>
            );
          })}
        </div>

        <div className="modal-actions">
          <button className="nav-btn" onClick={onClose}>Cancel</button>
          <button
            className="nav-btn primary"
            onClick={() => onConfirm(Array.from(selected))}
          >
            {selected.size === 0
              ? 'Practice All Weak Areas'
              : `Practice ${selected.size} ${selected.size === 1 ? 'Category' : 'Categories'}`}
          </button>
        </div>
      </div>
    </div>
  );
}
