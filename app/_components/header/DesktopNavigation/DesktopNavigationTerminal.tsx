import type { NavItem } from '../data';
import ThemeToggle from '../ThemeToggle';

function Prompt() {
  return (
    <span className="hidden lg:inline text-xs">
      <span className="text-emerald-500 dark:text-emerald-400">
        curious-cat
      </span>
      <span className="text-zinc-400">:</span>
      <span className="text-primary-500 dark:text-primary-400">~</span>
      <span className="text-zinc-400">$ </span>
    </span>
  );
}

export default function DesktopNavigationTerminal({
  navItems,
  activeSection,
  onNavClick,
}: Readonly<{
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (href: string) => void;
}>) {
  return (
    <nav className="hidden md:flex items-center gap-1">
      <Prompt />
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.href)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors focus:outline-none ${
              isActive
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            ./{item.label.toLowerCase()}
          </button>
        );
      })}
      <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-2" />
      <ThemeToggle className="p-1.5 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800" />
    </nav>
  );
}
