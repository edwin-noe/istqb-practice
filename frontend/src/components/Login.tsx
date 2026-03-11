import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from 'react';
import { apiLogin, apiGetTotpSetup, apiVerifyTotp } from '../api';
import { useAuth } from '../context/AuthContext';

type Step = 'password' | 'setup' | 'totp';

interface Props {
  onSuccess: () => void;
}

export default function Login({ onSuccess }: Props) {
  const { setToken } = useAuth();
  const [step, setStep] = useState<Step>('password');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const digitRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step === 'totp') digitRefs.current[0]?.focus();
  }, [step]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await apiLogin(username, password);
      if (res.setup_required) {
        const setup = await apiGetTotpSetup();
        setQrCode(setup.qr_code_base64);
        setSecret(setup.secret);
        setStep('setup');
      } else {
        setStep('totp');
      }
    } catch {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  }

  async function submitTotp(code: string) {
    setError('');
    setLoading(true);
    try {
      const res = await apiVerifyTotp(code);
      setToken(res.access_token);
      onSuccess();
    } catch {
      setError('Incorrect code. Try again.');
      setDigits(['', '', '', '', '', '']);
      setTimeout(() => digitRefs.current[0]?.focus(), 50);
    } finally {
      setLoading(false);
    }
  }

  function handleDigitChange(idx: number, val: string) {
    const char = val.replace(/\D/g, '').slice(-1);
    const next = digits.map((d, i) => (i === idx ? char : d));
    setDigits(next);
    if (char && idx < 5) digitRefs.current[idx + 1]?.focus();
    if (next.every(d => d)) submitTotp(next.join(''));
  }

  function handleDigitKey(idx: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      digitRefs.current[idx - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && idx > 0) digitRefs.current[idx - 1]?.focus();
    if (e.key === 'ArrowRight' && idx < 5) digitRefs.current[idx + 1]?.focus();
  }

  function handleDigitPaste(e: React.ClipboardEvent) {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (text.length === 6) {
      e.preventDefault();
      const next = text.split('');
      setDigits(next);
      digitRefs.current[5]?.focus();
      submitTotp(text);
    }
  }

  const pageTitle =
    step === 'password' ? 'Sign In' :
    step === 'setup'    ? 'Set Up Two‑Factor Auth' :
                          'Enter Verification Code';

  const pageSubtitle =
    step === 'password' ? 'ISTQB CTFL v4.0 Practice' :
    step === 'setup'    ? 'Scan with Microsoft Authenticator' :
                          'Open Microsoft Authenticator for your code';

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-app-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#007AFF"/>
              <path d="M8 20L10.5 13L14 18L17.5 10L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="auth-title">{pageTitle}</h1>
          <p className="auth-subtitle">{pageSubtitle}</p>
        </div>

        {/* Step: Password */}
        {step === 'password' && (
          <form onSubmit={handleLogin}>
            <div className="auth-field-group">
              <div className="auth-field auth-field--first">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="admin"
                  autoFocus
                  autoComplete="username"
                  required
                />
              </div>
              <div className="auth-field auth-field--last">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-btn-primary" disabled={loading}>
              {loading
                ? <span className="auth-spinner" />
                : 'Continue'}
            </button>
          </form>
        )}

        {/* Step: QR Setup */}
        {step === 'setup' && (
          <div>
            <div className="auth-steps">
              {[
                ['1', 'Open Microsoft Authenticator'],
                ['2', 'Tap + → Other account'],
                ['3', 'Scan the QR code below'],
              ].map(([n, text]) => (
                <div className="auth-step" key={n}>
                  <span className="auth-step-num">{n}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="auth-qr-wrap">
              <img
                src={`data:image/png;base64,${qrCode}`}
                alt="Authenticator QR Code"
                className="auth-qr"
              />
            </div>

            <details className="auth-manual">
              <summary>Can't scan? Use setup key</summary>
              <code>{secret}</code>
            </details>

            <button className="auth-btn-primary" onClick={() => setStep('totp')}>
              I've scanned the code
            </button>
          </div>
        )}

        {/* Step: TOTP digits */}
        {step === 'totp' && (
          <div>
            <div className="auth-digits" onPaste={handleDigitPaste}>
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={el => { digitRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={e => handleDigitChange(i, e.target.value)}
                  onKeyDown={e => handleDigitKey(i, e)}
                  className={`auth-digit${d ? ' auth-digit--filled' : ''}`}
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            {error && <p className="auth-error">{error}</p>}

            {loading && (
              <div className="auth-verifying">
                <span className="auth-spinner" />
                <span>Verifying…</span>
              </div>
            )}

            <button
              type="button"
              className="auth-back"
              onClick={() => { setStep('password'); setError(''); setDigits(['','','','','','']); }}
            >
              ← Use a different account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
