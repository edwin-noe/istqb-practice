import { useState, type FormEvent } from 'react';
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
  const [totpCode, setTotpCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function handleTotp(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await apiVerifyTotp(totpCode);
      setToken(res.access_token);
      onSuccess();
    } catch {
      setError('Invalid or expired code. Try again.');
      setTotpCode('');
    } finally {
      setLoading(false);
    }
  }

  function handleSetupContinue() {
    setStep('totp');
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-logo">
          <span className="login-logo-icon">📋</span>
          <h1>ISTQB Quiz</h1>
          <p>CTFL v4.0 Practice</p>
        </div>

        {step === 'password' && (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Sign In</h2>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
                autoFocus
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" className="btn-primary login-btn" disabled={loading}>
              {loading ? 'Signing in…' : 'Continue →'}
            </button>
          </form>
        )}

        {step === 'setup' && (
          <div className="totp-setup">
            <h2>Set Up Authenticator</h2>
            <p className="totp-instructions">
              Scan this QR code with <strong>Microsoft Authenticator</strong>:
            </p>
            <ol className="setup-steps">
              <li>Open Microsoft Authenticator on your phone</li>
              <li>Tap <strong>+</strong> → <strong>Other account</strong></li>
              <li>Scan the QR code below</li>
            </ol>
            <div className="qr-container">
              <img
                src={`data:image/png;base64,${qrCode}`}
                alt="TOTP QR Code"
                className="qr-code"
              />
            </div>
            <details className="manual-entry">
              <summary>Can't scan? Enter manually</summary>
              <code className="totp-secret">{secret}</code>
            </details>
            <button className="btn-primary login-btn" onClick={handleSetupContinue}>
              I've scanned the code →
            </button>
          </div>
        )}

        {step === 'totp' && (
          <form className="login-form" onSubmit={handleTotp}>
            <h2>Two-Factor Auth</h2>
            <p className="totp-instructions">
              Enter the 6-digit code from <strong>Microsoft Authenticator</strong>
            </p>
            <div className="form-group">
              <label>Authenticator Code</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                value={totpCode}
                onChange={e => setTotpCode(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="totp-input"
                autoFocus
                required
              />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" className="btn-primary login-btn" disabled={loading || totpCode.length !== 6}>
              {loading ? 'Verifying…' : 'Verify & Sign In'}
            </button>
            <button
              type="button"
              className="btn-link"
              onClick={() => { setStep('password'); setError(''); setTotpCode(''); }}
            >
              ← Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
