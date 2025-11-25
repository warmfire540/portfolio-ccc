import React from 'react';

interface CtaButtonProps {
  text: string;
  onClick: () => void;
  primary?: boolean;
  className?: string;
}

/**
 * A customizable call-to-action button component.
 *
 * @param {CtaButtonProps} props - The properties for the CtaButton component.
 * @param {string} props.text - The text to display inside the button.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {boolean} [props.primary=true] - If true, applies primary styling; otherwise, applies secondary styling.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 *
 * @returns {JSX.Element} The rendered CTA button.
 */
const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  onClick,
  primary = true,
  className = '',
}) => {
  const baseClasses =
    'inline-block rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-in-out';

  const primaryClasses =
    'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500';
  const secondaryClasses =
    'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500';

  const defaultSizeClasses = 'px-4 py-2';

  const combinedClasses = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  } ${className || defaultSizeClasses}`;

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      data-testid="cta-button"
    >
      {text}
    </button>
  );
};

export default CtaButton;
