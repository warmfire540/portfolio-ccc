'use client';

import { useEffect, useState, useRef } from 'react';
import type { NavItem } from './data';
import { NAVBAR_HEIGHT } from './data';

export function useHeaderState(navItems: NavItem[]) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
          setIsVisible(true);
        } else if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > 100
        ) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= NAVBAR_HEIGHT) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('home');
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems]);

  return { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible };
}
