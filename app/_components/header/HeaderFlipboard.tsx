'use client';

import { navItems, scrollToSection } from './data';
import { useDarkMode } from './useDarkMode';
import { useHeaderState } from './useHeaderState';
import LogoFlipboard from './Logo/LogoFlipboard';
import DesktopNavigationFlipboard from './DesktopNavigation/DesktopNavigationFlipboard';
import MobileControlsFlipboard from './MobileControls/MobileControlsFlipboard';
import MobileMenuFlipboard from './MobileMenu/MobileMenuFlipboard';

export default function HeaderFlipboard() {
  const { dark } = useDarkMode();
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  let headerBg = dark
    ? 'bg-zinc-950/90 backdrop-blur-sm'
    : 'bg-stone-100/90 backdrop-blur-sm';
  if (isScrolled) {
    headerBg = dark
      ? 'bg-zinc-950/95 backdrop-blur-sm border-b-2 border-zinc-800'
      : 'bg-stone-100/95 backdrop-blur-sm border-b-2 border-stone-300';
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <LogoFlipboard onLogoClick={() => handleNavClick('#home')} />

          <DesktopNavigationFlipboard
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          <MobileControlsFlipboard
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <MobileMenuFlipboard
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
