import React from 'react';

import { MobileMenuButton } from './MobileMenuButton';
import { ThemeToggle } from './ThemeToggle';
import { HeaderThemeClasses } from './types';

interface MobileControlsProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  styles: HeaderThemeClasses;
}

export const MobileControls: React.FC<MobileControlsProps> = ({
  isMenuOpen,
  onMenuToggle,
  styles,
}) => {
  return (
    <div className="md:hidden flex items-center space-x-3">
      <ThemeToggle className={`p-1.5 ${styles.themeButton}`} />
      <MobileMenuButton
        isOpen={isMenuOpen}
        onClick={onMenuToggle}
        iconClassName={styles.mobileIcon}
      />
    </div>
  );
};
