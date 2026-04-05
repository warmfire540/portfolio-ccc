import ThemeToggle from '../ThemeToggle';

export default function MobileControlsShowcase({
  isMenuOpen,
  onMenuToggle,
}: Readonly<{
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}>) {
  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400" />
      <button
        onClick={onMenuToggle}
        className="flex flex-col justify-center gap-1 w-6 h-6 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
            isMenuOpen ? 'w-0 opacity-0' : 'w-4'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
          }`}
        />
      </button>
    </div>
  );
}
