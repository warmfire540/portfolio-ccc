import type { ThemeVariant } from '@/app/_lib/theme';

export const footerBrand = {
  companyName: 'CURIOUS CAT CONSULTING',
  companyLegalName: 'Curious Cat Consulting LLC',
  contactEmail: 'info@curiouscat.consulting',
  logoAlt: 'Curious Cat Consulting',
} as const;

export const footerMailto = `mailto:${footerBrand.contactEmail}`;

export function footerCopyrightNotice(year: number): string {
  return `© ${year} ${footerBrand.companyLegalName}. All rights reserved.`;
}

/** One line per theme—small-business focus, voice matches the footer style. */
export const footerTaglines: Record<ThemeVariant, string> = {
  vibes:
    'Thoughtful architecture and engineering for teams that need dependable software.',
  terminal: 'Scripts, systems, and sane defaults so your shop ships reliably.',
  minimal:
    'Clear, maintainable software for businesses that want quality without the noise.',
  showcase:
    'Polished, interactive experiences that help local businesses earn trust and stand out online.',
  bento:
    'Modular tools and integrations that grow with your business; add what you need, skip what you do not.',
  flipboard:
    'Bold digital presence for small businesses ready to flip the script; big impact, practical scope.',
};

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  router?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/106965272',
        external: true,
      },
      {
        label: 'GitHub (HomeAssistant)',
        href: 'https://github.com/homeassistant-extras',
        external: true,
      },
      {
        label: 'GitHub (Personal)',
        href: 'https://github.com/warmfire540',
        external: true,
      },
      {
        label: 'Email',
        href: footerMailto,
        external: true,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      { label: 'Pawsport', href: '/projects/pawsport', router: true },
      { label: 'Web Canvas', href: '/projects/web-canvas', router: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms-of-service', router: true },
      { label: 'Privacy Policy', href: '/privacy-policy', router: true },
      { label: 'Brand Kit', href: '/brand', router: true },
    ],
  },
];
