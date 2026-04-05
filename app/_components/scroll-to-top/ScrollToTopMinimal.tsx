'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopMinimal() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-400 dark:text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 active:scale-95 transition-all duration-300 flex items-center justify-center ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-3.5 h-3.5" aria-hidden />
    </button>
  );
}
