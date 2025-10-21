interface ScrollToSectionOptions {
  /** The href/hash to scroll to (e.g., '#contact') */
  href: string;
  /** Height offset for fixed headers (default: 110) */
  navbarHeight?: number;
  /** Whether to update browser history (default: true) */
  updateHistory?: boolean;
  /** Whether to use pushState (true) or replaceState (false) when updating history (default: true) */
  usePushState?: boolean;
  /** Callback function to execute after scrolling (optional) */
  onComplete?: () => void;
}

/**
 * Reusable function to smoothly scroll to a section and optionally update the URL hash
 *
 * @param options - Configuration options for scrolling behavior
 */
export const scrollToSection = ({
  href,
  navbarHeight = 110,
  updateHistory = true,
  usePushState = true,
  onComplete,
}: ScrollToSectionOptions) => {
  const urlToSet = href === '#home' ? window.location.pathname : href;
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);

  if (element) {
    // Update URL hash if requested
    if (updateHistory) {
      if (usePushState) {
        window.history.pushState(null, '', urlToSet);
      } else {
        window.history.replaceState(null, '', urlToSet);
      }
    }

    // Calculate and scroll to position
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth',
    });

    // Execute callback if provided
    if (onComplete) {
      // Small delay to ensure scroll has started
      setTimeout(onComplete, 50);
    }
  }
};
