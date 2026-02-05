import { HeaderThemeClasses } from './types';
import { useTheme } from '../../../utils/ThemeContext';

export const useHeaderStyles = (isScrolled: boolean): HeaderThemeClasses => {
  const { theme } = useTheme();

  // Helper function to select the correct class based on scroll state and theme
  const getClasses = (
    scrolledDark: string,
    scrolledLight: string,
    notScrolledDark: string,
    notScrolledLight: string,
  ): string => {
    if (isScrolled) {
      return theme === 'dark' ? scrolledDark : scrolledLight;
    }
    return theme === 'dark' ? notScrolledDark : notScrolledLight;
  };

  return {
    logo: getClasses(
      'text-primary-400', // scrolled dark
      'text-primary-900', // scrolled light
      'text-primary-300', // not scrolled dark
      'text-white', // not scrolled light - white for contrast with dark hero
    ),

    title: getClasses(
      'text-white', // scrolled dark
      'text-primary-900', // scrolled light
      'text-white', // not scrolled dark
      'text-white', // not scrolled light - white for contrast with dark hero
    ),

    subtitle: getClasses(
      'text-primary-300', // scrolled dark
      'text-gray-600', // scrolled light
      'text-primary-200', // not scrolled dark
      'text-gray-200', // not scrolled light - light gray for contrast with dark hero
    ),

    navLink: getClasses(
      'text-gray-300 hover:text-primary-400', // scrolled dark
      'text-gray-800 hover:text-primary-600', // scrolled light
      'text-gray-200 hover:text-primary-300', // not scrolled dark
      'text-white hover:text-gray-200', // not scrolled light - white for contrast with dark hero
    ),

    activeNavLink: getClasses(
      'text-primary-400 border-b-2 border-primary-400', // scrolled dark
      'text-primary-600 border-b-2 border-primary-600', // scrolled light
      'text-primary-300 border-b-2 border-primary-300', // not scrolled dark
      'text-white border-b-2 border-white', // not scrolled light - white for contrast with dark hero
    ),

    themeButton: getClasses(
      'bg-gray-800 text-yellow-400 hover:bg-gray-700', // scrolled dark
      'bg-gray-100 text-primary-900 hover:bg-gray-200', // scrolled light
      'bg-gray-800 text-yellow-400 hover:bg-gray-700', // not scrolled dark
      'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30', // not scrolled light - semi-transparent white for contrast
    ),

    mobileIcon: getClasses(
      'text-white', // scrolled dark
      'text-primary-900', // scrolled light
      'text-white', // not scrolled dark
      'text-white', // not scrolled light - white for contrast with dark hero
    ),

    mobileMenu:
      theme === 'dark' ? 'bg-gray-900 shadow-md' : 'bg-white shadow-md',
  };
};
