import React from 'react';

import { HeaderThemeClasses } from './types';
import { ReactComponent as LogoSvg } from '../../../assets/cat.svg';
import { useTheme } from '../../../utils/ThemeContext';

interface LogoProps {
  styles: HeaderThemeClasses;
  onLogoClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ styles, onLogoClick }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onLogoClick}
      className="flex items-center space-x-3 focus:outline-none"
    >
      <div className={`flex-shrink-0 ${styles.logo}`}>
        <LogoSvg
          fill={theme === 'dark' ? 'white' : 'darkblue'}
          height="50px"
          width="50px"
        />
      </div>
      <div className="flex flex-col">
        <h1
          className={`text-base sm:text-lg font-bold leading-tight ${styles.title}`}
        >
          CURIOUS CAT CONSULTING
        </h1>
        <p className={`text-xs leading-tight ${styles.subtitle}`}>
          CURIOUSLY BETTER SOFTWARE
        </p>
      </div>
    </button>
  );
};
