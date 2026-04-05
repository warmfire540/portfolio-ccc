import type { HeaderThemeClasses } from '../types';
import ThemeToggle from '../ThemeToggle';
import MobileMenuButton from './MobileMenuButton';

export default function MobileControlsVibes({
  isMenuOpen,
  styles,
  onMenuToggle,
}: Readonly<{
  isMenuOpen: boolean;
  styles: HeaderThemeClasses;
  onMenuToggle: () => void;
}>) {
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
}
