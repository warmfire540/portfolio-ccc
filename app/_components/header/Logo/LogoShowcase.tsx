import Image from 'next/image';

export default function LogoShowcase({
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
        width={38}
        height={38}
      />
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
          CURIOUS CAT
        </span>
        <span className="text-[10px] font-medium tracking-wide uppercase text-primary-600 dark:text-primary-400 leading-tight">
          Consulting
        </span>
      </div>
    </button>
  );
}
