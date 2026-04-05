'use client';

import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopFlipboard() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 rounded-lg border-2 border-zinc-700 dark:border-zinc-600 bg-zinc-900 dark:bg-zinc-950 px-3 py-2.5 font-mono text-sm text-yellow-400 shadow-lg hover:text-yellow-300 hover:border-yellow-500/50 hover:shadow-yellow-900/20 hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="inline-block rotate-180 text-base leading-none">
        &darr;
      </span>
    </button>
  );
}
