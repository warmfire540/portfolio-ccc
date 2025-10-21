import React from 'react';

import { scrollToSection } from 'utils/ScrollToSection';

import { footerSections } from 'data/footer-sections';

import { ReactComponent as Logo } from '../../assets/cat.svg';

const CCCFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Render external or internal link based on the link properties
  const renderLink = (link: {
    label: string;
    href: string;
    external?: boolean;
    router?: boolean;
  }) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }

    if (link.router) {
      return (
        <a
          href={link.href}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }

    // Use smooth scrolling for internal navigation with hash update
    return (
      <button
        onClick={() => scrollToSection({ href: link.href })}
        className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
      >
        {link.label}
      </button>
    );
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollToSection({ href: '#home' })}
              className="flex items-center mb-4 focus:outline-none"
            >
              <div className="text-white">
                <Logo fill="white" height="50px" width="50px" />
              </div>
              <div>
                <h3 className="text-lg font-bold">CURIOUS CAT CONSULTING</h3>
              </div>
            </button>
            <p className="text-gray-400 mb-4">
              Building thoughtful, well-architected software solutions for
              businesses of all sizes.
            </p>
            <p className="text-gray-400">
              <span className="block">Brandon, FL</span>
              <a
                href="mailto:info@curiouscat.consulting"
                className="hover:text-white"
              >
                info@curiouscat.consulting
              </a>
            </p>
          </div>

          {/* Footer link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-md font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Curious Cat Consulting LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CCCFooter;
