import type { NavItem } from '../data';
import ThemeToggle from '../ThemeToggle';

export default function DesktopNavigationMinimal({
  navItems,
  activeSection,
  onNavClick,
}: Readonly<{
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (href: string) => void;
}>) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.href)}
            className={`text-xs transition-colors focus:outline-none ${
              isActive
                ? 'text-zinc-900 dark:text-white font-medium'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {item.label}
          </button>
        );
      })}
      <ThemeToggle className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white" />
    </nav>
  );
}
