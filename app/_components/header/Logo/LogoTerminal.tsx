import Image from 'next/image';

export default function LogoTerminal({
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
        width={36}
        height={36}
      />
      <div className="flex flex-col">
        <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
          curious-cat
        </span>
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-tight tracking-wider">
          v1.0.0
        </span>
      </div>
    </button>
  );
}
