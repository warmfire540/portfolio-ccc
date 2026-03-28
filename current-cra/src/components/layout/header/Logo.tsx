import React from 'react';

import type { HeaderThemeClasses } from './types';
import { ReactComponent as LogoSvg } from '../../../assets/cat.svg';

interface LogoProps {
  styles: HeaderThemeClasses;
  onLogoClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ styles, onLogoClick }) => {
  return (
    <button
      onClick={onLogoClick}
      className="flex items-center space-x-3 focus:outline-none"
    >
      <div className={`flex-shrink-0 ${styles.logo}`}>
        <LogoSvg fill="currentColor" height="50px" width="50px" />
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
