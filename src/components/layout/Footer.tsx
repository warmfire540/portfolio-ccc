import React from 'react';

import { ReactComponent as Logo } from '../../assets/cat.svg';

const CCCFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const navbarHeight = 110;
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  // Footer link sections
  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home', external: false },
        { label: 'About', href: '#about', external: false },
        { label: 'Services', href: '#services', external: false },
        { label: 'Projects', href: '#projects', external: false },
        { label: 'Contact', href: '#contact', external: false },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Software Architecture', href: '#services', external: false },
        { label: 'Full-Stack Development', href: '#services', external: false },
        { label: 'Cloud Solutions', href: '#services', external: false },
        { label: 'DevOps & Automation', href: '#services', external: false },
        { label: 'Data Integration', href: '#services', external: false },
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
          label: 'GitHub (HomeAssistant Extras)',
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
          href: 'mailto:info@curiouscat.consulting',
          external: true,
        },
      ],
    },
  ];

  // Render external or internal link based on the 'external' property
  const renderLink = (link: {
    label: string;
    href: string;
    external?: boolean;
  }) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }

    // Use smooth scrolling for internal navigation
    return (
      <button
        onClick={() => scrollToSection(link.href)}
        className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
      >
        {link.label}
      </button>
    );
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <button
              onClick={() => scrollToSection('#home')}
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
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-md font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{renderLink(link)}</li>
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
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              type="button"
              className="text-gray-400 hover:text-white text-sm bg-transparent border-none p-0 m-0 cursor-pointer"
              onClick={() => {
                // You can add privacy policy content or modal here
                alert('Privacy Policy - Coming Soon');
              }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-white text-sm bg-transparent border-none p-0 m-0 cursor-pointer"
              onClick={() => {
                // You can add terms of service content or modal here
                alert('Terms of Service - Coming Soon');
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CCCFooter;
