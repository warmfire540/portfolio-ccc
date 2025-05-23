import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'utils/ThemeContext';

import { ReactComponent as Logo } from '../../assets/cat.svg';

/**
 * Renders the main header/navigation bar for the Curious Cat Consulting portfolio site.
 *
 * Features:
 * - Fixed header with dynamic background and shadow based on scroll position and theme.
 * - Responsive navigation: horizontal menu for desktop, collapsible menu for mobile.
 * - Smooth scrolling to page sections when navigation items are clicked.
 * - Highlights the active section based on scroll position.
 * - Theme toggle button for switching between light and dark modes.
 * - Displays company logo and tagline.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * ```tsx
 * <CCCHeader />
 * ```
 */
const CCCHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Navigation items with anchor links
  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const navbarHeight = 110;
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-gray-900 shadow-md py-2'
            : 'bg-white shadow-md py-2'
          : 'bg-transparent py-3 backdrop-blur-sm bg-opacity-20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <div
              className={`flex-shrink-0 ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-indigo-400'
                    : 'text-indigo-900'
                  : theme === 'dark'
                  ? 'text-indigo-300'
                  : 'text-indigo-900'
              }`}
            >
              <Logo
                fill={theme === 'dark' ? 'white' : 'darkblue'}
                height="50px"
                width="50px"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-base sm:text-lg font-bold leading-tight ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-indigo-900'
                    : theme === 'dark'
                    ? 'text-white'
                    : 'text-indigo-900'
                }`}
              >
                CURIOUS CAT CONSULTING
              </h1>
              <p
                className={`text-xs leading-tight ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-indigo-300'
                      : 'text-gray-600'
                    : theme === 'dark'
                    ? 'text-indigo-200'
                    : 'text-indigo-700'
                }`}
              >
                CURIOUSLY BETTER SOFTWARE
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-5 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`px-2 py-2 text-sm font-medium transition-colors focus:outline-none ${
                      activeSection === item.id
                        ? isScrolled
                          ? theme === 'dark'
                            ? 'text-indigo-400 border-b-2 border-indigo-400'
                            : 'text-indigo-600 border-b-2 border-indigo-600'
                          : theme === 'dark'
                          ? 'text-indigo-300 border-b-2 border-indigo-300'
                          : 'text-indigo-800 border-b-2 border-indigo-800'
                        : isScrolled
                        ? theme === 'dark'
                          ? 'text-gray-300 hover:text-indigo-400'
                          : 'text-gray-800 hover:text-indigo-600'
                        : theme === 'dark'
                        ? 'text-gray-200 hover:text-indigo-300'
                        : 'text-indigo-800 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Theme Toggle Button */}
              <li>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full focus:outline-none transition-colors ${
                    isScrolled
                      ? theme === 'dark'
                        ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                        : 'bg-gray-100 text-indigo-900 hover:bg-gray-200'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                      : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                  }`}
                  aria-label={`Switch to ${
                    theme === 'dark' ? 'light' : 'dark'
                  } mode`}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Controls (Menu Button + Theme Toggle) */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full focus:outline-none transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-indigo-900 hover:bg-gray-200'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
              }`}
              aria-label={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-6 flex items-center justify-center relative ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-indigo-900'
                    : theme === 'dark'
                    ? 'text-white'
                    : 'text-indigo-900'
                }`}
              >
                <span
                  className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 bg-current ${
                    isMenuOpen ? 'w-0' : 'w-6'
                  } transition-all duration-300`}
                ></span>
                <span
                  className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? theme === 'dark'
                ? 'max-h-60 py-4 bg-gray-900 shadow-md'
                : 'max-h-60 py-4 bg-white shadow-md'
              : 'max-h-0 py-0'
          }`}
          style={{ top: isMenuOpen ? '100%' : '0' }}
        >
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`block py-2 transition-colors w-full text-left focus:outline-none ${
                      activeSection === item.id
                        ? theme === 'dark'
                          ? 'text-indigo-400 font-medium'
                          : 'text-indigo-600 font-medium'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-indigo-400'
                        : 'text-gray-800 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CCCHeader;
