import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/cat.svg';

const CCCFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Footer link sections
  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Software Architecture', path: '/services#architecture' },
        { label: 'Full-Stack Development', path: '/services#fullstack' },
        { label: 'Cloud Solutions', path: '/services#cloud' },
        { label: 'DevOps & Automation', path: '/services#devops' },
        { label: 'Data Integration', path: '/services#data' },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          label: 'LinkedIn',
          path: 'https://www.linkedin.com/company/106965272',
          external: true,
        },
        {
          label: 'GitHub (HomeAssistant Extras)',
          path: 'https://github.com/homeassistant-extras',
          external: true,
        },
        {
          label: 'GitHub (Personal)',
          path: 'https://github.com/warmfire540',
          external: true,
        },
        {
          label: 'Email',
          path: 'mailto:hello@curiouscatconsulting.com',
          external: true,
        },
      ],
    },
  ];

  // Render external or internal link based on the 'external' property
  const renderLink = (link: {
    label: string;
    path: string;
    external?: boolean;
  }) => {
    if (link.external) {
      return (
        <a
          href={link.path}
          target={link.path.startsWith('mailto:') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }

    // Use React Router Link
    return (
      <Link
        to={link.path}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-white">
                <Logo fill="white" height="50px" width="50px" />
              </div>
              <div>
                <h3 className="text-lg font-bold">CURIOUS CAT CONSULTING</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Building thoughtful, well-architected software solutions for
              businesses of all sizes.
            </p>
            <p className="text-gray-400">
              <span className="block">Brandon, FL</span>
              <a
                href="mailto:hello@curiouscatconsulting.com"
                className="hover:text-white"
              >
                hello@curiouscatconsulting.com
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
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CCCFooter;
