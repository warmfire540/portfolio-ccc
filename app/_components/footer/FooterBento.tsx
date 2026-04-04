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
  const cls =
    'text-sm text-amber-800/60 dark:text-amber-200/60 hover:text-amber-900 dark:hover:text-amber-100 transition-colors duration-200';

  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className={cls}
      >
        {link.label}
      </a>
    );
  }

  if (link.router) {
    return (
      <Link href={link.href} className={cls}>
        {link.label}
      </Link>
    );
  }

  return (
    <button onClick={() => scrollToSection(link.href)} className={`${cls} text-left`}>
      {link.label}
    </button>
  );
}

export default function FooterBento() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 dark:bg-zinc-900 border-t border-amber-200 dark:border-amber-900/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          <div className="md:col-span-2">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center mb-4 focus:outline-none"
            >
              <Image
                src="/assets/cat.svg"
                alt={footerBrand.logoAlt}
                width={50}
                height={50}
                className="mr-3"
              />
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                {footerBrand.companyName}
              </h3>
            </button>
            <p className="text-amber-800/60 dark:text-amber-200/60 text-sm leading-relaxed">
              {footerTaglines.bento}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-100 mb-4">
                {section.title}
              </h4>
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

        <div className="border-t border-amber-200 dark:border-amber-900/30 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-800/40 dark:text-amber-200/40 text-sm">
            {footerCopyrightNotice(currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
}
