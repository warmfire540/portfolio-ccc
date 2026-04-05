import type { NavItem } from '../data';

export default function MobileMenuShowcase({
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
              className={`block w-full text-left px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300'
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
