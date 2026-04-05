'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  footerBrand,
  footerCopyrightNotice,
  footerSections,
  footerTaglines,
  type FooterLink,
} from './data';

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function FooterLinkItem({ link }: Readonly<{ link: FooterLink }>) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
        rel={
          link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
        }
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {link.label}
      </a>
    );
  }

  if (link.router) {
    return (
      <Link
        href={link.href}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => scrollToSection(link.href)}
      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
    >
      {link.label}
    </button>
  );
}

export default function FooterVibes() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center mb-4 focus:outline-none"
            >
              <div className="text-white mr-2">
                <Image
                  src="/assets/cat.svg"
                  alt={footerBrand.logoAlt}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{footerBrand.companyName}</h3>
              </div>
            </button>
            <p className="text-gray-400">{footerTaglines.vibes}</p>
          </div>

          {/* Footer link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-md font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {footerCopyrightNotice(currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
}
