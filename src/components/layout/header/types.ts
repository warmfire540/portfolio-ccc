// src/components/layout/header/types.ts
export interface NavItem {
  href: string;
  label: string;
  id: string;
}

export interface HeaderThemeClasses {
  logo: string;
  title: string;
  subtitle: string;
  navLink: string;
  activeNavLink: string;
  themeButton: string;
  mobileIcon: string;
  mobileMenu: string;
}
