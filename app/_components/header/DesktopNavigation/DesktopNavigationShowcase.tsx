import type { NavItem } from '../data';
import ThemeToggle from '../ThemeToggle';

export default function DesktopNavigationShowcase({
  navItems,
  activeSection,
  dark,
  onNavClick,
  onThemeToggle,
}: Readonly<{
  navItems: NavItem[];
  activeSection: string;
  dark: boolean;
  onNavClick: (href: string) => void;
  onThemeToggle: () => void;
}>) {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.href)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300'
            }`}
          >
            {item.label}
          </button>
        );
      })}
      <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-2" />
      <ThemeToggle
        dark={dark}
        onToggle={onThemeToggle}
        className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400"
      />
    </nav>
  );
}
