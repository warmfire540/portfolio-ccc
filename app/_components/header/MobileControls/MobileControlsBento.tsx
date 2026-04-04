import ThemeToggle from '../ThemeToggle';

export default function MobileControlsBento({
  isMenuOpen,
  dark,
  onMenuToggle,
  onThemeToggle,
}: Readonly<{
  isMenuOpen: boolean;
  dark: boolean;
  onMenuToggle: () => void;
  onThemeToggle: () => void;
}>) {
  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle
        dark={dark}
        onToggle={onThemeToggle}
        className="p-1.5 rounded-full text-amber-700/50 dark:text-amber-300/50 hover:text-amber-900 dark:hover:text-amber-100"
      />
      <button
        onClick={onMenuToggle}
        className="flex flex-col justify-center gap-[5px] w-6 h-6 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-5 rounded-full bg-amber-900 dark:bg-amber-200 transition-all duration-300 origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-[3.5px] w-6' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full bg-amber-900 dark:bg-amber-200 transition-all duration-300 origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
          }`}
        />
      </button>
    </div>
  );
}
