'use client';

import { useState, useEffect, useRef } from 'react';

interface TerminalLineProps {
  text: string;
  type: 'command' | 'output' | 'success' | 'final';
  delay: number;
  typingSpeed?: number;
}

const typeColors = {
  command: 'text-zinc-700 dark:text-zinc-300',
  output: 'text-zinc-500 dark:text-zinc-400',
  success: 'text-emerald-600 dark:text-emerald-400',
  final: 'text-primary-600 dark:text-primary-400 font-semibold',
};

export default function TerminalLine({
  text,
  type,
  delay,
  typingSpeed = 40,
}: Readonly<TerminalLineProps>) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (type !== 'command') {
      setDisplayed(text);
      setDone(true);
      return;
    }

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current >= text.length) {
        setDisplayed(text);
        setDone(true);
        clearInterval(interval);
      } else {
        setDisplayed(text.slice(0, indexRef.current + 1));
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [started, text, type, typingSpeed]);

  if (!started) return null;

  return (
    <div className={`${typeColors[type]} font-mono text-sm leading-relaxed`}>
      {displayed}
      {type === 'command' && !done && (
        <span className="animate-[blink_1s_step-end_infinite] ml-0.5">▊</span>
      )}
    </div>
  );
}
