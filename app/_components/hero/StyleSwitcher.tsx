'use client';

import { useState, useEffect } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faDiagramProject,
  faMinus,
  faMoon,
  faSun,
  faTableCells,
  faTerminal,
  faTrainSubway,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeVariant, VARIANTS, VARIANT_LABELS } from '@/app/_lib/theme';

const VARIANT_ICONS: Record<(typeof VARIANTS)[number], IconDefinition> = {
  vibes: faWandMagicSparkles,
  terminal: faTerminal,
  minimal: faMinus,
  showcase: faDiagramProject,
  bento: faTableCells,
  flipboard: faTrainSubway,
};

export default function StyleSwitcher() {
  const { variant, setVariant } = useThemeVariant();
  const [showTooltip, setShowTooltip] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('ccc-color-scheme');
    const prefersDark =
      stored === 'dark' ||
      (!stored &&
        globalThis.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('ccc-color-scheme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    const hasInteracted = localStorage.getItem('ccc-switcher-seen');
    if (!hasInteracted) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSwitch = (v: (typeof VARIANTS)[number]) => {
    setVariant(v);
    if (showTooltip) {
      setShowTooltip(false);
      localStorage.setItem('ccc-switcher-seen', '1');
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {showTooltip && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-white/90 dark:bg-zinc-900/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm animate-[fade-in-up_0.3s_ease-out]">
          Design Showcase — try different styles
        </span>
      )}
      <div className="flex items-center gap-1 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700 shadow-lg px-2 py-1.5">
        {VARIANTS.map((v) => {
          const label = VARIANT_LABELS[v];
          const isActive = variant === v;
          return (
            <button
              key={v}
              onClick={() => handleSwitch(v)}
              aria-label={`Switch to ${label} style`}
              aria-pressed={isActive}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <FontAwesomeIcon
                icon={VARIANT_ICONS[v]}
                className="w-3.5 h-3.5"
                aria-hidden
              />
              <span className="hidden sm:inline">{label}</span>
            </button>
          );
        })}
        <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1" />
        <button
          onClick={toggleDark}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex items-center justify-center rounded-full w-8 h-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
        >
          <FontAwesomeIcon
            icon={dark ? faSun : faMoon}
            className="w-3.5 h-3.5"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}
