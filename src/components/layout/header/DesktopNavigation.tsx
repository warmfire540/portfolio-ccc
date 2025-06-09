import React from 'react';

import { ThemeToggle } from './ThemeToggle';
import { HeaderThemeClasses, NavItem } from './types';

interface DesktopNavigationProps {
  navItems: NavItem[];
  activeSection: string;
  styles: HeaderThemeClasses;
  onNavClick: (href: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navItems,
  activeSection,
  styles,
  onNavClick,
}) => {
  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex space-x-5 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavClick(item.href)}
              className={`px-2 py-2 text-sm font-medium transition-colors focus:outline-none ${
                activeSection === item.id
                  ? styles.activeNavLink
                  : styles.navLink
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <ThemeToggle className={`p-2 ${styles.themeButton}`} />
        </li>
      </ul>
    </nav>
  );
};
