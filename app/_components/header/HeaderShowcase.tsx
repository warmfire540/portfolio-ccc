'use client';

import { navItems, scrollToSection } from './data';
import { useDarkMode } from './useDarkMode';
import { useHeaderState } from './useHeaderState';
import LogoShowcase from './Logo/LogoShowcase';
import DesktopNavigationShowcase from './DesktopNavigation/DesktopNavigationShowcase';
import MobileControlsShowcase from './MobileControls/MobileControlsShowcase';
import MobileMenuShowcase from './MobileMenu/MobileMenuShowcase';

export default function HeaderShowcase() {
  const { dark, toggle } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  const scrolledStyle = isScrolled
    ? 'shadow-md border-b border-primary-200/30 dark:border-primary-800/20'
    : '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolledStyle}`}
      style={{
        backgroundColor: dark
          ? 'rgba(12, 25, 41, 0.92)'
          : 'rgba(232, 240, 250, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <LogoShowcase onLogoClick={() => handleNavClick('#home')} />

          <DesktopNavigationShowcase
            navItems={navItems}
            activeSection={activeSection}
            dark={dark}
            onNavClick={handleNavClick}
            onThemeToggle={toggle}
          />

          <MobileControlsShowcase
            isMenuOpen={isMenuOpen}
            dark={dark}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            onThemeToggle={toggle}
          />
        </div>

        <MobileMenuShowcase
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
