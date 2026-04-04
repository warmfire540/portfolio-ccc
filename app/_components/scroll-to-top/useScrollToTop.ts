'use client';

import { useState, useEffect } from 'react';

export function useScrollToTop(threshold = 400) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > threshold);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return visible;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
