import type { NavItem } from '../data';
import ThemeToggle from '../ThemeToggle';

export default function DesktopNavigationBento({
  navItems,
  activeSection,
  onNavClick,
}: Readonly<{
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (href: string) => void;
}>) {
  return (
    <nav className="hidden md:flex items-center gap-1.5">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.href)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-amber-800/70 dark:text-amber-200/70 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-900 dark:hover:text-amber-100'
            }`}
          >
            {item.label}
          </button>
        );
      })}
      <div className="w-px h-4 bg-amber-200 dark:bg-amber-900/40 mx-1.5" />
      <ThemeToggle className="p-1.5 rounded-full text-amber-700/50 dark:text-amber-300/50 hover:text-amber-900 dark:hover:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-900/20" />
    </nav>
  );
}
