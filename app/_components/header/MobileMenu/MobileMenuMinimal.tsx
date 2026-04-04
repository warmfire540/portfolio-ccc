import type { NavItem } from '../data';

export default function MobileMenuMinimal({
  isOpen,
  navItems,
  activeSection,
  onNavClick,
}: Readonly<{
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (href: string) => void;
}>) {
  return (
    <div
      className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <nav className="py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.href)}
              className={`block w-full text-left py-2 text-sm transition-colors focus:outline-none ${
                isActive
                  ? 'text-zinc-900 dark:text-white font-medium'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
