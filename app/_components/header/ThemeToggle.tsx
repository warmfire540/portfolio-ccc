import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from './useDarkMode';

export default function ThemeToggle({
  className = '',
}: Readonly<{
  className?: string;
}>) {
  const { dark, toggle, mounted } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className={`rounded-full focus:outline-none transition-colors ${className}`}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      {mounted ? (
        <FontAwesomeIcon
          icon={dark ? faSun : faMoon}
          className="w-4.5 h-4.5"
          aria-hidden
        />
      ) : (
        <span className="inline-block w-4.5 h-4.5" />
      )}
    </button>
  );
}
