'use client';

import { navItems, scrollToSection } from './data';
import { getHeaderStyles } from './headerStyles';
import { useDarkMode } from './useDarkMode';
import { useHeaderState } from './useHeaderState';
import LogoVibes from './Logo/LogoVibes';
import DesktopNavigationVibes from './DesktopNavigation/DesktopNavigationVibes';
import MobileControlsVibes from './MobileControls/MobileControlsVibes';
import MobileMenuVibes from './MobileMenu/MobileMenuVibes';

export default function HeaderVibes() {
  const { dark, toggle } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);
  const styles = getHeaderStyles(isScrolled, dark);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  let headerBg = 'bg-transparent py-3 backdrop-blur-sm bg-opacity-20';
  if (isScrolled) {
    headerBg = dark ? 'bg-gray-900 shadow-md py-2' : 'bg-white shadow-md py-2';
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <LogoVibes
            styles={styles}
            onLogoClick={() => handleNavClick('#home')}
          />

          <DesktopNavigationVibes
            navItems={navItems}
            activeSection={activeSection}
            styles={styles}
            dark={dark}
            onNavClick={handleNavClick}
            onThemeToggle={toggle}
          />

          <MobileControlsVibes
            isMenuOpen={isMenuOpen}
            dark={dark}
            styles={styles}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            onThemeToggle={toggle}
          />
        </div>

        <MobileMenuVibes
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          dark={dark}
          styles={styles}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
