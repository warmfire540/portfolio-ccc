import Image from 'next/image';

export default function LogoFlipboard({
  onLogoClick,
}: Readonly<{
  onLogoClick: () => void;
}>) {
  return (
    <button
      onClick={onLogoClick}
      className="flex items-center gap-3 focus:outline-none"
    >
      <Image
        src="/assets/cat.svg"
        alt="Curious Cat Consulting"
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-900 dark:text-amber-200">
        CCC
      </span>
    </button>
  );
}
