import type { NavItem } from '../data';
import ThemeToggle from '../ThemeToggle';

export default function DesktopNavigationFlipboard({
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
            className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest rounded-md transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-zinc-900 dark:bg-zinc-800 text-yellow-400 shadow-sm'
                : 'text-stone-500 dark:text-zinc-400 hover:text-amber-800 dark:hover:text-yellow-400 hover:bg-stone-200/60 dark:hover:bg-zinc-800/60'
            }`}
          >
            {item.label}
          </button>
        );
      })}
      <div className="w-px h-4 bg-stone-300 dark:bg-zinc-700 mx-2" />
      <ThemeToggle
        dark={dark}
        onToggle={onThemeToggle}
        className="p-1.5 rounded-md text-stone-400 dark:text-zinc-500 hover:text-amber-800 dark:hover:text-yellow-400 hover:bg-stone-200/60 dark:hover:bg-zinc-800/60"
      />
    </nav>
  );
}
