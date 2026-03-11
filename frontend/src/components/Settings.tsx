import { useState, useEffect } from 'react';
import {
  getSettings, updateModel, updateDiagramModel, upsertApiKey, deleteApiKey,
} from '../api';
import type { AppSettings, ModelOption, ApiKeyEntry } from '../api';

interface SettingsProps {
  onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // API key form
  const [newKey, setNewKey] = useState('');
  const [newLabel, setNewLabel] = useState('default');
  const [editingKey, setEditingKey] = useState(false);

  useEffect(() => { loadSettings(); }, []);

  async function loadSettings() {
    setLoading(true);
    try {
      const data = await getSettings();
      setSettings(data);
    } catch {
      setMessage('Failed to load settings');
    }
    setLoading(false);
  }

  function showMessage(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  }

  async function handleModelChange(model: string) {
    if (!settings) return;
    setSaving(true);
    try {
      await updateModel(model);
      setSettings({ ...settings, model });
      showMessage('Model updated');
    } catch {
      showMessage('Failed to update model');
    }
    setSaving(false);
  }

  async function handleDiagramModelChange(model: string) {
    if (!settings) return;
    setSaving(true);
    try {
      await updateDiagramModel(model);
      setSettings({ ...settings, diagram_model: model });
      showMessage('Diagram model updated');
    } catch {
      showMessage('Failed to update diagram model');
    }
    setSaving(false);
  }

  async function handleSaveKey() {
    if (!newKey.trim()) return;
    setSaving(true);
    try {
      await upsertApiKey(newKey.trim(), newLabel.trim() || 'default');
      setNewKey('');
      setEditingKey(false);
      await loadSettings();
      showMessage('API key saved');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      showMessage('Failed to save key: ' + msg);
    }
    setSaving(false);
  }

  async function handleDeleteKey(label: string) {
    if (!confirm(`Delete API key "${label}"?`)) return;
    setSaving(true);
    try {
      await deleteApiKey(label);
      await loadSettings();
      showMessage('API key deleted');
    } catch {
      showMessage('Failed to delete key');
    }
    setSaving(false);
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading settings...</p>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="settings-container animate-in">
        <div className="settings-header">
          <button onClick={onBack} className="nav-btn">← Back</button>
          <h1>Settings</h1>
        </div>
        <p className="settings-error">Could not load settings.</p>
      </div>
    );
  }

  return (
    <div className="settings-container animate-in">
      <div className="settings-header">
        <button onClick={onBack} className="nav-btn">← Back</button>
        <h1>Settings</h1>
      </div>

      {message && <div className="settings-toast">{message}</div>}

      {/* Model Selection */}
      <section className="settings-section">
        <h2>Quiz Generation Model</h2>
        <p className="settings-desc">Choose the LLM for generating weak-area quizzes and expanding the question bank.</p>
        <div className="model-grid">
          {settings.available_models.map((m: ModelOption) => (
            <button
              key={m.id}
              className={`model-card ${settings.model === m.id ? 'active' : ''}`}
              onClick={() => handleModelChange(m.id)}
              disabled={saving}
            >
              <span className="model-name">{m.name}</span>
              <span className="model-desc">{m.description}</span>
              {settings.model === m.id && <span className="model-check">✓</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Diagram Model */}
      <section className="settings-section">
        <h2>Diagram & Graph Model</h2>
        <p className="settings-desc">Model used specifically for questions with control flow graphs, charts, and diagrams.</p>
        <div className="model-grid">
          {settings.available_models.map((m: ModelOption) => (
            <button
              key={m.id}
              className={`model-card ${settings.diagram_model === m.id ? 'active' : ''}`}
              onClick={() => handleDiagramModelChange(m.id)}
              disabled={saving}
            >
              <span className="model-name">{m.name}</span>
              <span className="model-desc">{m.description}</span>
              {settings.diagram_model === m.id && <span className="model-check">✓</span>}
            </button>
          ))}
        </div>
      </section>

      {/* API Keys */}
      <section className="settings-section">
        <h2>API Keys</h2>
        <p className="settings-desc">Manage your OpenAI API keys. Keys are encrypted at rest.</p>

        <div className="api-key-list">
          {settings.api_keys.map((k: ApiKeyEntry) => (
            <div key={k.label} className="api-key-row">
              <div className="api-key-info">
                <span className="api-key-label">{k.label}</span>
                <span className="api-key-masked">{k.masked_key}</span>
                {k.updated_at && (
                  <span className="api-key-date">
                    Updated {new Date(k.updated_at).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="api-key-actions">
                {!k.label.includes('(env)') && (
                  <>
                    <button
                      className="key-action-btn edit"
                      onClick={() => {
                        setNewLabel(k.label);
                        setEditingKey(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="key-action-btn delete"
                      onClick={() => handleDeleteKey(k.label)}
                      disabled={saving}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          {settings.api_keys.length === 0 && (
            <div className="api-key-empty">No API keys configured</div>
          )}
        </div>

        {!editingKey ? (
          <button
            className="add-key-btn"
            onClick={() => setEditingKey(true)}
          >
            + Add API Key
          </button>
        ) : (
          <div className="api-key-form">
            <input
              type="text"
              placeholder="Label (e.g. default, work, personal)"
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
              className="settings-input"
            />
            <input
              type="password"
              placeholder="sk-..."
              value={newKey}
              onChange={e => setNewKey(e.target.value)}
              className="settings-input"
            />
            <div className="api-key-form-actions">
              <button onClick={handleSaveKey} disabled={saving || !newKey.trim()} className="nav-btn primary">
                {saving ? 'Saving...' : 'Save Key'}
              </button>
              <button onClick={() => { setEditingKey(false); setNewKey(''); }} className="nav-btn">
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
