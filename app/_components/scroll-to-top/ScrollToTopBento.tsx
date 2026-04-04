'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopBento() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-2xl border border-amber-200 dark:border-amber-800 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 shadow-lg hover:shadow-xl hover:scale-105 hover:border-amber-300 dark:hover:border-amber-700 active:scale-95 transition-all duration-300 flex items-center justify-center ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" aria-hidden />
    </button>
  );
}
