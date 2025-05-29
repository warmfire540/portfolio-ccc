import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

import { scrollToSection } from 'utils/ScrollToSection';
import { useTheme } from 'utils/ThemeContext';

import { navItems } from 'data/nav';
import {
  getHamburgerStyles,
  getHeaderStyles,
  getLogoIconStyles,
  getMobileMenuStyles,
  getMobileNavItemStyles,
  getMobileThemeToggleStyles,
  getNavItemStyles,
  getSubtitleStyles,
  getThemeToggleStyles,
  getTitleStyles,
} from 'styles/computed-styles';

import { ReactComponent as Logo } from '../../assets/cat.svg';

/**
 * Renders the main header/navigation bar for the Curious Cat Consulting portfolio site.
 *
 * Features:
 * - Fixed header with dynamic background and shadow based on scroll position and theme.
 * - Responsive navigation: horizontal menu for desktop, collapsible menu for mobile.
 * - Smooth scrolling to page sections when navigation items are clicked.
 * - Updates URL hash for bookmarking support.
 * - Highlights the active section based on scroll position.
 * - Theme toggle button for switching between light and dark modes.
 * - Displays company logo and tagline.
 */
const CCCHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  // Event handlers
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);

    // Determine active section based on scroll position
    const navbarHeight = 110;
    const sections = navItems.map((item) => item.id);

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= navbarHeight) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Handle initial page load with hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 110;
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render helpers
  const renderLogo = () => (
    <button
      onClick={() => scrollToSection({ href: '#home' })}
      className="flex items-center space-x-3 focus:outline-none"
    >
      <div className={`flex-shrink-0 ${getLogoIconStyles(isScrolled, isDark)}`}>
        <Logo
          fill={isScrolled && !isDark ? 'darkblue' : 'white'}
          height="50px"
          width="50px"
        />
      </div>
      <div className="flex flex-col">
        <h1
          className={`text-base sm:text-lg font-bold leading-tight ${getTitleStyles(
            isScrolled,
            isDark,
          )}`}
        >
          CURIOUS CAT CONSULTING
        </h1>
        <p
          className={`text-xs leading-tight ${getSubtitleStyles(
            isScrolled,
            isDark,
          )}`}
        >
          CURIOUSLY BETTER SOFTWARE
        </p>
      </div>
    </button>
  );

  const renderDesktopNavigation = () => (
    <nav className="hidden md:flex items-center">
      <ul className="flex space-x-5 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection({ href: item.href })}
              className={getNavItemStyles(
                activeSection === item.id,
                isScrolled,
                isDark,
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            className={getThemeToggleStyles(isScrolled, isDark)}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </li>
      </ul>
    </nav>
  );

  const renderMobileControls = () => (
    <div className="md:hidden flex items-center space-x-3">
      <button
        onClick={toggleTheme}
        className={getMobileThemeToggleStyles(isScrolled, isDark)}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <button
        type="button"
        className="focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className={getHamburgerStyles(isScrolled, isDark)}>
          <span
            className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`block absolute h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'w-0' : 'w-6'
            }`}
          />
          <span
            className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </div>
      </button>
    </div>
  );

  const renderMobileMenu = () => (
    <div
      className={getMobileMenuStyles(isScrolled, isDark)}
      style={{ top: isMenuOpen ? '100%' : '0' }}
    >
      <nav className="container mx-auto px-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection({ href: item.href })}
                className={getMobileNavItemStyles(
                  activeSection === item.id,
                  isDark,
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyles(
        isScrolled,
        isDark,
      )}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {renderLogo()}
          {renderDesktopNavigation()}
          {renderMobileControls()}
        </div>
        {renderMobileMenu()}
      </div>
    </header>
  );
};

export default CCCHeader;
