import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggle({
  dark,
  onToggle,
  className = '',
}: Readonly<{
  dark: boolean;
  onToggle: () => void;
  className?: string;
}>) {
  return (
    <button
      onClick={onToggle}
      className={`rounded-full focus:outline-none transition-colors ${className}`}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon
        icon={dark ? faSun : faMoon}
        className="w-4.5 h-4.5"
        aria-hidden
      />
    </button>
  );
}
