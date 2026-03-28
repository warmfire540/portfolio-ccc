import React from 'react';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../../../utils/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: number;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 18,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full focus:outline-none transition-colors ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
};
