'use client';

import { useState, useEffect, useRef } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faDiagramProject,
  faMinus,
  faPalette,
  faTableCells,
  faTerminal,
  faTrainSubway,
  faWandMagicSparkles,
  faXmark,
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
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {open && (
        <div className="flex flex-col gap-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700 shadow-xl p-2 animate-[fade-in-up_0.15s_ease-out]">
          {VARIANTS.map((v) => {
            const label = VARIANT_LABELS[v];
            const isActive = variant === v;
            return (
              <button
                key={v}
                onClick={() => {
                  setVariant(v);
                  setOpen(false);
                }}
                aria-label={`Switch to ${label} style`}
                aria-pressed={isActive}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <FontAwesomeIcon
                  icon={VARIANT_ICONS[v]}
                  className="w-4 h-4"
                  aria-hidden
                />
                {label}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close theme picker' : 'Open theme picker'}
        aria-expanded={open}
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:shadow-xl active:scale-95 transition-all duration-200 ${
          open
            ? 'hover:scale-105'
            : 'animate-[theme-picker-glow_1.9s_ease-in-out_infinite] motion-reduce:animate-none hover:scale-105 hover:animate-none'
        }`}
      >
        <FontAwesomeIcon
          icon={open ? faXmark : faPalette}
          className="w-5 h-5"
          aria-hidden
        />
      </button>
    </div>
  );
}
