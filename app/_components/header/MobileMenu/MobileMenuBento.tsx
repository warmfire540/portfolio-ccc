import type { NavItem } from '../data';

export default function MobileMenuBento({
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
      <nav className="py-3 space-y-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.href)}
              className={`block w-full text-left px-3.5 py-2 text-sm font-medium rounded-2xl transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-amber-800/70 dark:text-amber-200/70 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-900 dark:hover:text-amber-100'
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
