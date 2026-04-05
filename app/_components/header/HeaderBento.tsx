'use client';

import { navItems, scrollToSection } from './data';
import { useDarkMode } from './useDarkMode';
import { useHeaderState } from './useHeaderState';
import LogoBento from './Logo/LogoBento';
import DesktopNavigationBento from './DesktopNavigation/DesktopNavigationBento';
import MobileControlsBento from './MobileControls/MobileControlsBento';
import MobileMenuBento from './MobileMenu/MobileMenuBento';

export default function HeaderBento() {
  const { dark } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  const scrolledStyle = isScrolled
    ? 'shadow-sm border-b border-amber-200/60 dark:border-amber-900/20'
    : '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolledStyle}`}
      style={{
        backgroundColor: dark
          ? 'rgba(18, 17, 16, 0.92)'
          : 'rgba(250, 249, 247, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <LogoBento onLogoClick={() => handleNavClick('#home')} />

          <DesktopNavigationBento
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          <MobileControlsBento
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <MobileMenuBento
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
