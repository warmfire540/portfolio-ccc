'use client';

import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopTerminal() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 group flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 shadow-sm font-mono text-xs text-zinc-500 dark:text-zinc-400 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md active:scale-95 transition-all duration-200 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="text-emerald-500 dark:text-emerald-400 group-hover:text-emerald-400 dark:group-hover:text-emerald-300 transition-colors">
        $
      </span>
      <span>cd&nbsp;~</span>
      <span className="inline-block w-1.5 h-4 bg-emerald-500 animate-[blink_1s_steps(1)_infinite]" />
    </button>
  );
}
