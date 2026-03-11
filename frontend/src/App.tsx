import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import QuestionBank from './components/QuestionBank';
import Settings from './components/Settings';
import { generateQuiz, generateWeakQuiz } from './api';
import type { QuestionOut, QuizSubmitResponse } from './api';
import './styles/app.css';

type Screen = 'home' | 'loading' | 'quiz' | 'results' | 'bank' | 'settings';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [sessionId, setSessionId] = useState('');
  const [questions, setQuestions] = useState<QuestionOut[]>([]);
  const [result, setResult] = useState<QuizSubmitResponse | null>(null);
  const [loadingMsg, setLoadingMsg] = useState('');

  async function startQuiz() {
    setScreen('loading');
    setLoadingMsg('Preparing your quiz...');
    try {
      const data = await generateQuiz();
      setSessionId(data.session_id);
      setQuestions(data.questions);
      setScreen('quiz');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert('Failed to generate quiz: ' + msg);
      setScreen('home');
    }
  }

  async function startWeakQuiz(categories: string[] = []) {
    setScreen('loading');
    setLoadingMsg(categories.length > 0
      ? `Preparing targeted quiz for ${categories.length} ${categories.length === 1 ? 'category' : 'categories'}...`
      : 'Analyzing your weaknesses and generating targeted questions...');
    try {
      const data = await generateWeakQuiz(40, categories);
      setSessionId(data.session_id);
      setQuestions(data.questions);
      setScreen('quiz');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      alert('Failed to generate quiz: ' + msg);
      setScreen('home');
    }
  }

  if (screen === 'loading') {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>{loadingMsg}</p>
        <p className="loading-sub">Loading questions from the bank...</p>
      </div>
    );
  }

  if (screen === 'quiz') {
    return (
      <Quiz
        sessionId={sessionId}
        questions={questions}
        onFinish={(r) => { setResult(r); setScreen('results'); }}
        onBack={() => setScreen('home')}
      />
    );
  }

  if (screen === 'bank') {
    return <QuestionBank onBack={() => setScreen('home')} />;
  }

  if (screen === 'settings') {
    return <Settings onBack={() => setScreen('home')} />;
  }

  if (screen === 'results' && result) {
    return <Results result={result} onHome={() => setScreen('home')} />;
  }

  return <Home onStartQuiz={startQuiz} onStartWeakQuiz={startWeakQuiz} onBrowseBank={() => setScreen('bank')} onSettings={() => setScreen('settings')} />;
}

export default App;
