import ThemeToggle from '../ThemeToggle';

export default function MobileControlsTerminal({
  isMenuOpen,
  onMenuToggle,
}: Readonly<{
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}>) {
  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle className="p-1.5 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800" />
      <button
        onClick={onMenuToggle}
        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 focus:outline-none text-xs"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '[×]' : '[≡]'}
      </button>
    </div>
  );
}
