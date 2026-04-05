import type { HeaderThemeClasses } from './types';

export function getHeaderStyles(
  isScrolled: boolean,
  dark: boolean,
): HeaderThemeClasses {
  function pick(
    scrolledDark: string,
    scrolledLight: string,
    notScrolledDark: string,
    notScrolledLight: string,
  ) {
    if (isScrolled) return dark ? scrolledDark : scrolledLight;
    return dark ? notScrolledDark : notScrolledLight;
  }

  return {
    logo: pick(
      'text-primary-400',
      'text-primary-900',
      'text-primary-300',
      'text-white',
    ),
    title: pick('text-white', 'text-primary-900', 'text-white', 'text-white'),
    subtitle: pick(
      'text-primary-300',
      'text-gray-600',
      'text-primary-200',
      'text-gray-200',
    ),
    navLink: pick(
      'text-gray-300 hover:text-primary-400',
      'text-gray-800 hover:text-primary-600',
      'text-gray-200 hover:text-primary-300',
      'text-white hover:text-gray-200',
    ),
    activeNavLink: pick(
      'text-primary-400 border-b-2 border-primary-400',
      'text-primary-600 border-b-2 border-primary-600',
      'text-primary-300 border-b-2 border-primary-300',
      'text-white border-b-2 border-white',
    ),
    themeButton: pick(
      'bg-gray-800 text-yellow-400 hover:bg-gray-700',
      'bg-gray-100 text-primary-900 hover:bg-gray-200',
      'bg-gray-800 text-yellow-400 hover:bg-gray-700',
      'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30',
    ),
    mobileIcon: pick(
      'text-white',
      'text-primary-900',
      'text-white',
      'text-white',
    ),
    mobileMenu: dark ? 'bg-gray-900 shadow-md' : 'bg-white shadow-md',
  };
}
