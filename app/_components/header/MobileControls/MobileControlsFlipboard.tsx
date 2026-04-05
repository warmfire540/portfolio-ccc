import ThemeToggle from '../ThemeToggle';

export default function MobileControlsFlipboard({
  isMenuOpen,
  onMenuToggle,
}: Readonly<{
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}>) {
  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle className="p-1.5 rounded-md text-stone-400 dark:text-zinc-500 hover:text-amber-800 dark:hover:text-yellow-400" />
      <button
        onClick={onMenuToggle}
        className="font-mono text-xs text-stone-500 dark:text-zinc-400 hover:text-amber-800 dark:hover:text-yellow-400 focus:outline-none transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '[×]' : '[≡]'}
      </button>
    </div>
  );
}
