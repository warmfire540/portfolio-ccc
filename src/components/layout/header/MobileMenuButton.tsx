import React from 'react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  iconClassName: string;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  iconClassName,
}) => {
  return (
    <button
      type="button"
      className="focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center relative ${iconClassName}`}
      >
        <span
          className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
            isOpen ? 'rotate-45' : '-translate-y-1.5'
          }`}
        />
        <span
          className={`block absolute h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'w-0' : 'w-6'
          }`}
        />
        <span
          className={`transform transition-transform duration-300 block absolute h-0.5 w-6 bg-current ${
            isOpen ? '-rotate-45' : 'translate-y-1.5'
          }`}
        />
      </div>
    </button>
  );
};
