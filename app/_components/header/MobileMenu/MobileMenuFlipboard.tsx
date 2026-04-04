import type { NavItem } from '../data';

export default function MobileMenuFlipboard({
  isOpen,
  navItems,
  activeSection,
  dark,
  onNavClick,
}: Readonly<{
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  dark: boolean;
  onNavClick: (href: string) => void;
}>) {
  let borderClass = '';
  if (isOpen) {
    borderClass = dark
      ? 'border-t border-zinc-800'
      : 'border-t border-stone-300';
  }

  return (
    <div
      className={`md:hidden transition-all duration-200 overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className={`py-3 space-y-0.5 ${borderClass}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.href)}
              className={`block w-full text-left px-3 py-2 font-mono text-xs uppercase tracking-widest rounded-md transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-zinc-900 dark:bg-zinc-800 text-yellow-400'
                  : 'text-stone-500 dark:text-zinc-400 hover:text-amber-800 dark:hover:text-yellow-400 hover:bg-stone-200/60 dark:hover:bg-zinc-800/60'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
