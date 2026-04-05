'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopShowcase() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-lg border border-primary-400/50 dark:border-primary-500/40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 shadow-md hover:bg-primary-600 hover:text-white hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:hover:border-primary-600 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" aria-hidden />
    </button>
  );
}
