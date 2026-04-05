import type { NavItem } from '../data';
import type { HeaderThemeClasses } from '../types';

export default function MobileMenuVibes({
  isOpen,
  navItems,
  activeSection,
  dark,
  styles,
  onNavClick,
}: Readonly<{
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  dark: boolean;
  styles: HeaderThemeClasses;
  onNavClick: (href: string) => void;
}>) {
  return (
    <div
      className={`md:hidden absolute left-0 right-0 transition-all duration-300 overflow-hidden ${
        isOpen ? `max-h-96 py-4 ${styles.mobileMenu}` : 'max-h-0 py-0'
      }`}
      style={{ top: isOpen ? '100%' : '0' }}
    >
      <nav className="container mx-auto px-4">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const base =
              'block py-2 transition-colors w-full text-left focus:outline-none';
            const activeClass = dark
              ? 'text-primary-400 font-medium'
              : 'text-primary-600 font-medium';
            const inactiveClass = dark
              ? 'text-gray-300 hover:text-primary-400'
              : 'text-gray-800 hover:text-primary-600';
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.href)}
                  className={`${base} ${isActive ? activeClass : inactiveClass}`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
