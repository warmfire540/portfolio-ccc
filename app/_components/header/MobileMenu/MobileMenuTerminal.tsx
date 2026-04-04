import type { NavItem } from '../data';

export default function MobileMenuTerminal({
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
    borderClass = dark ? 'border-t border-zinc-800' : 'border-t border-zinc-200';
  }

  return (
    <div
      className={`md:hidden transition-all duration-200 overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className={`pb-4 pt-2 space-y-1 ${borderClass}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.href)}
              className={`block w-full text-left px-3 py-2 text-xs rounded-md transition-colors focus:outline-none ${
                isActive
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="text-zinc-400 dark:text-zinc-600 mr-1">$</span>
              cd ~/{item.label.toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
