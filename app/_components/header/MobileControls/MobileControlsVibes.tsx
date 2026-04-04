import type { HeaderThemeClasses } from '../types';
import ThemeToggle from '../ThemeToggle';
import MobileMenuButton from './MobileMenuButton';

export default function MobileControlsVibes({
  isMenuOpen,
  dark,
  styles,
  onMenuToggle,
  onThemeToggle,
}: Readonly<{
  isMenuOpen: boolean;
  dark: boolean;
  styles: HeaderThemeClasses;
  onMenuToggle: () => void;
  onThemeToggle: () => void;
}>) {
  return (
    <div className="md:hidden flex items-center space-x-3">
      <ThemeToggle
        dark={dark}
        onToggle={onThemeToggle}
        className={`p-1.5 ${styles.themeButton}`}
      />
      <MobileMenuButton
        isOpen={isMenuOpen}
        onClick={onMenuToggle}
        iconClassName={styles.mobileIcon}
      />
    </div>
  );
}
