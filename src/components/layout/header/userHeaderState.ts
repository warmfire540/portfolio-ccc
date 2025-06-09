// src/components/layout/header/useHeaderState.ts
import { useEffect, useState } from 'react';

import { NavItem } from './types';

export const useHeaderState = (navItems: NavItem[]) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > 10);

      // Hide/show header on mobile based on scroll direction
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          if (currentScrollY < lastScrollY || currentScrollY < 100) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
            setIsMenuOpen(false);
          }
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);

      // Determine active section
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

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, navItems]);

  return {
    isMenuOpen,
    setIsMenuOpen,
    isScrolled,
    activeSection,
    isVisible,
  };
};
