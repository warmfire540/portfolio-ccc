import React, { useState, useEffect } from 'react';
import { useTheme } from 'utils/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const CCCHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900 shadow-md py-2' 
            : 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 backdrop-blur-sm bg-opacity-20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`mr-3 ${
              isScrolled 
                ? theme === 'dark' ? 'text-indigo-400' : 'text-indigo-900'
                : theme === 'dark' ? 'text-indigo-300' : 'text-indigo-900'
            }`}>
              {/* Cat Logo SVG */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                className="fill-current"
                aria-label="Curious Cat Consulting Logo"
              >
                <path
                  d="M24.5,10c-0.9,0-1.7,0.2-2.5,0.5c-6.4,2.5-9.7,9.6-7.2,16c1.4,3.5,4.2,6.1,7.8,7.3c0.6,0.2,1.3,0.3,1.9,0.4
                  c0.8,0.1,1.7,0.1,2.5,0c6.8-0.9,11.6-7.2,10.7-14c-0.5-3.7-2.7-7-5.9-9C30,10.5,27.8,10,24.5,10z M14.8,22.9
                  c-0.7-1.9-0.8-3.9-0.3-6c0.4-2,1.4-3.9,2.8-5.4c-2.3,0.8-4.5,2.1-6.2,4.1c-3.2,3.6-4.4,8.4-3.5,13c0.9,4.6,3.8,8.5,8,10.9
                  c3.5,2,7.4,2.6,11.3,2c-4.7-2.2-8.4-6.1-10.2-11.1C16.1,27.8,15.6,25.3,14.8,22.9z M35.8,14.1c0.4,0.4,0.8,0.9,1.2,1.4
                  c2.5,3.3,3.3,7.5,2.3,11.5c-1,4-3.7,7.3-7.5,9c-3.2,1.5-6.8,1.7-10.1,0.7c3.2,2.4,7.4,3.6,11.5,3c4.2-0.5,7.9-2.8,10.2-6.3
                  c2.4-3.5,3-7.7,1.9-11.8C44.2,17.6,42.1,14.5,35.8,14.1z"
                />
              </svg>
            </div>
            <div>
              <h1 className={`text-lg font-bold ${
                isScrolled 
                  ? theme === 'dark' ? 'text-white' : 'text-indigo-900'
                  : theme === 'dark' ? 'text-white' : 'text-indigo-900'
              }`}>
                CURIOUS CAT CONSULTING
              </h1>
              <p className={`text-xs ${
                isScrolled 
                  ? theme === 'dark' ? 'text-indigo-300' : 'text-gray-600'
                  : theme === 'dark' ? 'text-indigo-200' : 'text-indigo-700'
              }`}>
                CURIOUSLY BETTER SOFTWARE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-2 py-2 text-sm font-medium transition-colors ${
                      window.location.pathname === item.path
                        ? isScrolled 
                            ? theme === 'dark' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600'
                            : theme === 'dark' ? 'text-indigo-300 border-b-2 border-indigo-300' : 'text-indigo-800 border-b-2 border-indigo-800'
                        : isScrolled 
                            ? theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'
                            : theme === 'dark' ? 'text-gray-200 hover:text-indigo-300' : 'text-indigo-800 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              
              {/* Theme Toggle Button */}
              <li>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full focus:outline-none transition-colors ${
                    isScrolled
                      ? theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-indigo-900 hover:bg-gray-200'
                      : theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                  }`}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? (
                    <Sun size={20} />
                  ) : (
                    <Moon size={20} />
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Controls (Menu Button + Theme Toggle) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                isScrolled
                  ? theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-indigo-900 hover:bg-gray-200'
                  : theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-6 flex items-center justify-center relative ${
                isScrolled 
                  ? theme === 'dark' ? 'text-white' : 'text-indigo-900' 
                  : theme === 'dark' ? 'text-white' : 'text-indigo-900'
              }`}>
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
              {navItems.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 transition-colors ${
                      window.location.pathname === item.path
                        ? theme === 'dark' ? 'text-indigo-400 font-medium' : 'text-indigo-600 font-medium'
                        : theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </Link>
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