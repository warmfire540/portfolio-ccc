import Image from 'next/image';

export default function LogoMinimal({
  onLogoClick,
}: Readonly<{
  onLogoClick: () => void;
}>) {
  return (
    <button
      onClick={onLogoClick}
      className="flex items-center gap-2.5 focus:outline-none"
    >
      <Image
        src="/assets/cat.svg"
        alt="Curious Cat Consulting"
        width={28}
        height={28}
      />
      <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
        Curious Cat
      </span>
    </button>
  );
}
