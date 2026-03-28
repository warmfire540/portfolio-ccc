export const getHeaderStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  if (isScrolled) {
    return isDark ? 'bg-gray-900 shadow-md py-2' : 'bg-white shadow-md py-2';
  }
  return 'bg-transparent py-3 backdrop-blur-sm bg-opacity-20';
};

export const getLogoIconStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  if (isScrolled) {
    return isDark ? 'text-primary-400' : 'text-primary-900';
  }
  return isDark ? 'text-primary-300' : 'text-primary-900';
};

export const getTitleStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  if (isScrolled) {
    return isDark ? 'text-white' : 'text-primary-900';
  }
  // Always white when not scrolled (transparent header over dark background)
  return 'text-white';
};

export const getSubtitleStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  if (isScrolled) {
    return isDark ? 'text-primary-300' : 'text-gray-600';
  }
  // Always light when not scrolled (transparent header over dark background)
  return 'text-primary-200';
};

export const getNavItemStyles = (
  isActive: boolean,
  isScrolled: boolean,
  isDark: boolean,
): string => {
  const baseStyles =
    'px-2 py-2 text-sm font-medium transition-colors focus:outline-none';

  if (isActive) {
    if (isScrolled) {
      const activeStyles = isDark
        ? 'text-primary-400 border-b-2 border-primary-400'
        : 'text-primary-600 border-b-2 border-primary-600';
      return `${baseStyles} ${activeStyles}`;
    }
    // Always light when not scrolled (transparent header over dark background)
    const activeStyles = 'text-primary-300 border-b-2 border-primary-300';
    return `${baseStyles} ${activeStyles}`;
  }

  if (isScrolled) {
    const inactiveStyles = isDark
      ? 'text-gray-300 hover:text-primary-400'
      : 'text-gray-800 hover:text-primary-600';
    return `${baseStyles} ${inactiveStyles}`;
  }

  // Always light when not scrolled (transparent header over dark background)
  const inactiveStyles = 'text-gray-200 hover:text-primary-300';
  return `${baseStyles} ${inactiveStyles}`;
};

export const getThemeToggleStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  const baseStyles = 'p-2 rounded-full focus:outline-none transition-colors';

  if (isScrolled) {
    const scrolledStyles = isDark
      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
      : 'bg-gray-100 text-primary-900 hover:bg-gray-200';
    return `${baseStyles} ${scrolledStyles}`;
  }

  // Always dark background when not scrolled for better visibility
  const defaultStyles = 'bg-gray-800 text-yellow-400 hover:bg-gray-700';
  return `${baseStyles} ${defaultStyles}`;
};

export const getMobileThemeToggleStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  const baseStyles = 'p-1.5 rounded-full focus:outline-none transition-colors';

  if (isScrolled) {
    const scrolledStyles = isDark
      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
      : 'bg-gray-100 text-primary-900 hover:bg-gray-200';
    return `${baseStyles} ${scrolledStyles}`;
  }

  // Always dark background when not scrolled for better visibility
  const defaultStyles = 'bg-gray-800 text-yellow-400 hover:bg-gray-700';
  return `${baseStyles} ${defaultStyles}`;
};

export const getHamburgerStyles = (
  isScrolled: boolean,
  isDark: boolean,
): string => {
  const baseStyles = 'w-6 h-6 flex items-center justify-center relative';

  if (isScrolled) {
    const scrolledStyles = isDark ? 'text-white' : 'text-primary-900';
    return `${baseStyles} ${scrolledStyles}`;
  }

  // Always white when not scrolled (transparent header over dark background)
  const defaultStyles = 'text-white';
  return `${baseStyles} ${defaultStyles}`;
};

export const getMobileMenuStyles = (
  isMenuOpen: boolean,
  isDark: boolean,
): string => {
  const baseStyles =
    'md:hidden absolute left-0 right-0 transition-all duration-300 overflow-hidden';

  if (isMenuOpen) {
    const openStyles = isDark
      ? 'max-h-60 py-4 bg-gray-900 shadow-md'
      : 'max-h-60 py-4 bg-white shadow-md';
    return `${baseStyles} ${openStyles}`;
  }

  return `${baseStyles} max-h-0 py-0`;
};

export const getMobileNavItemStyles = (
  isActive: boolean,
  isDark: boolean,
): string => {
  const baseStyles =
    'block py-2 transition-colors w-full text-left focus:outline-none';

  if (isActive) {
    const activeStyles = isDark
      ? 'text-primary-400 font-medium'
      : 'text-primary-600 font-medium';
    return `${baseStyles} ${activeStyles}`;
  }

  const inactiveStyles = isDark
    ? 'text-gray-300 hover:text-primary-400'
    : 'text-gray-800 hover:text-primary-600';
  return `${baseStyles} ${inactiveStyles}`;
};
