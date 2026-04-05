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

function Prompt({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <span className="text-emerald-500 dark:text-emerald-400">
        curious-cat
      </span>
      <span className="text-zinc-400">:</span>
      <span className="text-primary-500 dark:text-primary-400">~</span>
      <span className="text-zinc-400">$ </span>
      <span className="text-zinc-700 dark:text-zinc-300">{children}</span>
    </div>
  );
}

function FooterLinkItem({ link }: Readonly<{ link: FooterLink }>) {
  const cls =
    'font-mono text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 hover:underline transition-colors';

  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
        rel={
          link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
        }
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
    <button
      onClick={() => scrollToSection(link.href)}
      className={`${cls} text-left`}
    >
      {link.label}
    </button>
  );
}

export default function FooterTerminal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Prompt>cat /etc/company-info</Prompt>
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-3 focus:outline-none"
            >
              <Image
                src="/assets/cat.svg"
                alt={footerBrand.logoAlt}
                width={40}
                height={40}
              />
              <span className="font-mono text-sm font-bold text-zinc-800 dark:text-zinc-200">
                {footerBrand.companyName}
              </span>
            </button>
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
              {footerTaglines.terminal}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-3">
                {section.title}/
              </p>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-300 dark:border-zinc-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <Prompt>
            <span className="text-zinc-500 dark:text-zinc-400 text-xs">
              {footerCopyrightNotice(currentYear)}
            </span>
          </Prompt>
        </div>
      </div>
    </footer>
  );
}
