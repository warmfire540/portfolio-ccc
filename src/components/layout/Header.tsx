import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from 'utils/ThemeContext';

import { DesktopNavigation } from './header/DesktopNavigation';
import { useHeaderStyles } from './header/headerStyles';
import { Logo } from './header/Logo';
import { MobileControls } from './header/MobileControls';
import { MobileMenu } from './header/MobileMenu';
import { NavItem } from './header/types';
import { useHeaderState } from './header/userHeaderState';

const CCCHeader: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  const styles = useHeaderStyles(isScrolled);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      setIsMenuOpen(false);
      return;
    }

    // If we're already on the home page, scroll to the section
    const navbarHeight = 110;
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  const getHeaderBackgroundClass = () => {
    if (isScrolled) {
      return theme === 'dark'
        ? 'bg-gray-900 shadow-md py-2'
        : 'bg-white shadow-md py-2';
    }
    return 'bg-transparent py-3 backdrop-blur-sm bg-opacity-20';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${getHeaderBackgroundClass()}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo styles={styles} onLogoClick={() => scrollToSection('#home')} />

          <DesktopNavigation
            navItems={navItems}
            activeSection={activeSection}
            styles={styles}
            onNavClick={scrollToSection}
          />

          <MobileControls
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            styles={styles}
          />
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          styles={styles}
          onNavClick={scrollToSection}
        />
      </div>
    </header>
  );
};

export default CCCHeader;
