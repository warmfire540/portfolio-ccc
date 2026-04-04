'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollToTop, scrollToTop } from './useScrollToTop';

export default function ScrollToTopVibes() {
  const visible = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" aria-hidden />
    </button>
  );
}
