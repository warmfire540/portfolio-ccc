'use client';

import { navItems, scrollToSection } from './data';
import { useDarkMode } from './useDarkMode';
import { useHeaderState } from './useHeaderState';
import LogoTerminal from './Logo/LogoTerminal';
import DesktopNavigationTerminal from './DesktopNavigation/DesktopNavigationTerminal';
import MobileControlsTerminal from './MobileControls/MobileControlsTerminal';
import MobileMenuTerminal from './MobileMenu/MobileMenuTerminal';

export default function HeaderTerminal() {
  const { dark, toggle } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  let headerBg = dark
    ? 'bg-zinc-900/90 backdrop-blur-sm'
    : 'bg-zinc-50/90 backdrop-blur-sm';
  if (isScrolled) {
    headerBg = dark
      ? 'bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800'
      : 'bg-zinc-50/95 backdrop-blur-sm border-b border-zinc-200';
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <LogoTerminal onLogoClick={() => handleNavClick('#home')} />

          <DesktopNavigationTerminal
            navItems={navItems}
            activeSection={activeSection}
            dark={dark}
            onNavClick={handleNavClick}
            onThemeToggle={toggle}
          />

          <MobileControlsTerminal
            isMenuOpen={isMenuOpen}
            dark={dark}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            onThemeToggle={toggle}
          />
        </div>

        <MobileMenuTerminal
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          dark={dark}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
