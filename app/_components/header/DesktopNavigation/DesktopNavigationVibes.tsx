import type { NavItem } from '../data';
import type { HeaderThemeClasses } from '../types';
import ThemeToggle from '../ThemeToggle';

export default function DesktopNavigationVibes({
  navItems,
  activeSection,
  styles,
  dark,
  onNavClick,
  onThemeToggle,
}: Readonly<{
  navItems: NavItem[];
  activeSection: string;
  styles: HeaderThemeClasses;
  dark: boolean;
  onNavClick: (href: string) => void;
  onThemeToggle: () => void;
}>) {
  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex space-x-5 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavClick(item.href)}
              className={`px-2 py-2 text-sm font-medium transition-colors focus:outline-none ${
                activeSection === item.id
                  ? styles.activeNavLink
                  : styles.navLink
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <ThemeToggle
            dark={dark}
            onToggle={onThemeToggle}
            className={`p-2 ${styles.themeButton}`}
          />
        </li>
      </ul>
    </nav>
  );
}
