'use client';

import { navItems, scrollToSection } from './data';

import { useHeaderState } from './useHeaderState';
import LogoMinimal from './Logo/LogoMinimal';
import DesktopNavigationMinimal from './DesktopNavigation/DesktopNavigationMinimal';
import MobileControlsMinimal from './MobileControls/MobileControlsMinimal';
import MobileMenuMinimal from './MobileMenu/MobileMenuMinimal';

export default function HeaderMinimal() {
  const { isMenuOpen, setIsMenuOpen, isScrolled, activeSection, isVisible } =
    useHeaderState(navItems);

  function handleNavClick(href: string) {
    scrollToSection(href);
    setIsMenuOpen(false);
  }

  const scrolledBorder = isScrolled
    ? 'border-b border-zinc-200/60 dark:border-zinc-800/60'
    : '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolledBorder}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex justify-between items-center h-12">
          <LogoMinimal onLogoClick={() => handleNavClick('#home')} />

          <DesktopNavigationMinimal
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          <MobileControlsMinimal
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <MobileMenuMinimal
          isOpen={isMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
