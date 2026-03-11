import { useState, useEffect, useRef } from 'react';

interface TimerProps {
  running: boolean;
  onTick?: (seconds: number) => void;
}

export default function Timer({ running, onTick }: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => {
          const next = s + 1;
          onTick?.(next);
          return next;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return <div className="timer">{display}</div>;
}
