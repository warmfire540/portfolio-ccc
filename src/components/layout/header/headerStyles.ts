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
      'text-indigo-400', // scrolled dark
      'text-indigo-900', // scrolled light
      'text-indigo-300', // not scrolled dark
      'text-indigo-900', // not scrolled light
    ),

    title: getClasses(
      'text-white', // scrolled dark
      'text-indigo-900', // scrolled light
      'text-white', // not scrolled dark
      'text-indigo-900', // not scrolled light
    ),

    subtitle: getClasses(
      'text-indigo-300', // scrolled dark
      'text-gray-600', // scrolled light
      'text-indigo-200', // not scrolled dark
      'text-indigo-700', // not scrolled light
    ),

    navLink: getClasses(
      'text-gray-300 hover:text-indigo-400', // scrolled dark
      'text-gray-800 hover:text-indigo-600', // scrolled light
      'text-gray-200 hover:text-indigo-300', // not scrolled dark
      'text-indigo-800 hover:text-indigo-600', // not scrolled light
    ),

    activeNavLink: getClasses(
      'text-indigo-400 border-b-2 border-indigo-400', // scrolled dark
      'text-indigo-600 border-b-2 border-indigo-600', // scrolled light
      'text-indigo-300 border-b-2 border-indigo-300', // not scrolled dark
      'text-indigo-800 border-b-2 border-indigo-800', // not scrolled light
    ),

    themeButton: getClasses(
      'bg-gray-800 text-yellow-400 hover:bg-gray-700', // scrolled dark
      'bg-gray-100 text-indigo-900 hover:bg-gray-200', // scrolled light
      'bg-gray-800 text-yellow-400 hover:bg-gray-700', // not scrolled dark
      'bg-indigo-100 text-indigo-900 hover:bg-indigo-200', // not scrolled light
    ),

    mobileIcon: getClasses(
      'text-white', // scrolled dark
      'text-indigo-900', // scrolled light
      'text-white', // not scrolled dark
      'text-indigo-900', // not scrolled light
    ),

    mobileMenu:
      theme === 'dark' ? 'bg-gray-900 shadow-md' : 'bg-white shadow-md',
  };
};
