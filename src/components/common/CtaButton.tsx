import React from 'react';

interface CtaButtonProps {
  text: string;
  onClick: () => void;
  primary?: boolean;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  onClick,
  primary = true,
  className = '',
}) => {
  const baseClasses =
    'inline-block rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-in-out';

  const primaryClasses =
    'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500';
  const secondaryClasses =
    'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500';

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
