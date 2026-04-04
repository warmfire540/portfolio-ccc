import Image from 'next/image';
import type { HeaderThemeClasses } from '../types';

export default function LogoVibes({
  styles,
  onLogoClick,
}: Readonly<{
  styles: HeaderThemeClasses;
  onLogoClick: () => void;
}>) {
  return (
    <button
      onClick={onLogoClick}
      className="flex items-center space-x-3 focus:outline-none"
    >
      <div className={`flex-shrink-0 ${styles.logo}`}>
        <Image
          src="/assets/cat.svg"
          alt="Curious Cat Consulting"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col">
        <h1
          className={`text-base sm:text-lg font-bold leading-tight ${styles.title}`}
        >
          CURIOUS CAT CONSULTING
        </h1>
        <p className={`text-xs leading-tight ${styles.subtitle}`}>
          CURIOUSLY BETTER SOFTWARE
        </p>
      </div>
    </button>
  );
}
