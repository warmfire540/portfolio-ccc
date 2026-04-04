import ThemeToggle from '../ThemeToggle';

export default function MobileControlsMinimal({
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
    <div className="md:hidden flex items-center gap-4">
      <ThemeToggle
        dark={dark}
        onToggle={onThemeToggle}
        className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
      />
      <button
        onClick={onMenuToggle}
        className="flex flex-col justify-center gap-[5px] w-5 h-5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-px bg-zinc-900 dark:bg-white transition-all duration-300 origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
          }`}
        />
        <span
          className={`block h-px bg-zinc-900 dark:bg-white transition-all duration-300 origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
          }`}
        />
      </button>
    </div>
  );
}
