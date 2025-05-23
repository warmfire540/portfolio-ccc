import React, { useEffect, useState } from 'react';

import { ArrowUp } from 'lucide-react';

import { useTheme } from '../../utils/ThemeContext';

/**
 * A floating button component that appears when the user scrolls down the page,
 * allowing them to smoothly scroll back to the top.
 *
 * The button is only visible when the page is scrolled more than 300 pixels vertically.
 * It adapts its appearance based on the current theme (dark or light).
 *
 * @component
 * @example
 * <ScrollToTopButton />
 *
 * @returns {JSX.Element} The scroll-to-top button, conditionally rendered.
 */
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-md transition-all duration-300 z-50 ${
            theme === 'dark'
              ? 'bg-indigo-700 hover:bg-indigo-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
