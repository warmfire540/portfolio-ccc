export interface NavItem {
  href: string;
  label: string;
  id: string;
}

export const navItems: NavItem[] = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export const NAVBAR_HEIGHT = 110;

export function scrollToSection(href: string) {
  const id = href.replace('#', '');
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - NAVBAR_HEIGHT,
      behavior: 'smooth',
    });
  }
}
