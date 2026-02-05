import React from 'react';

import { useTheme } from 'utils/ThemeContext';

import type { HeaderThemeClasses, NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  styles: HeaderThemeClasses;
  onNavClick: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navItems,
  activeSection,
  styles,
  onNavClick,
}) => {
  const { theme } = useTheme();

  const getNavButtonClasses = (itemId: string) => {
    const baseClasses =
      'block py-2 transition-colors w-full text-left focus:outline-none';

    const isActive = activeSection === itemId;
    const isDark = theme === 'dark';

    if (isActive) {
      return isDark
        ? `${baseClasses} text-primary-400 font-medium`
        : `${baseClasses} text-primary-600 font-medium`;
    }

    return isDark
      ? `${baseClasses} text-gray-300 hover:text-primary-400`
      : `${baseClasses} text-gray-800 hover:text-primary-600`;
  };

  return (
    <div
      className={`md:hidden absolute left-0 right-0 transition-all duration-300 overflow-hidden ${
        isOpen ? `max-h-60 py-4 ${styles.mobileMenu}` : 'max-h-0 py-0'
      }`}
      style={{ top: isOpen ? '100%' : '0' }}
    >
      <nav className="container mx-auto px-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.href)}
                className={getNavButtonClasses(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
