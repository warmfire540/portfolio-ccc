import Image from 'next/image';

export default function LogoBento({
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
        width={40}
        height={40}
      />
      <span className="text-sm font-bold text-amber-900 dark:text-amber-100 tracking-tight">
        Curious Cat
      </span>
    </button>
  );
}
