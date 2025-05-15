import React from 'react';
import { Link } from 'react-router-dom';

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
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Software Architecture', path: '/services#architecture' },
        { label: 'Full-Stack Development', path: '/services#fullstack' },
        { label: 'Cloud Solutions', path: '/services#cloud' },
        { label: 'DevOps & Automation', path: '/services#devops' },
        { label: 'Data Integration', path: '/services#data' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', path: 'https://linkedin.com', external: true },
        { label: 'GitHub', path: 'https://github.com', external: true },
        { label: 'Email', path: 'mailto:hello@curiouscatconsulting.com', external: true },
      ]
    }
  ];

  // Render external or internal link based on the 'external' property
  const renderLink = (link: { label: string; path: string; external?: boolean }) => {
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
              <div className="text-white mr-3">
                {/* Logo SVG */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 48 48"
                  className="fill-current"
                  aria-label="Curious Cat Consulting Logo"
                >
                  <path
                    d="M24.5,10c-0.9,0-1.7,0.2-2.5,0.5c-6.4,2.5-9.7,9.6-7.2,16c1.4,3.5,4.2,6.1,7.8,7.3c0.6,0.2,1.3,0.3,1.9,0.4
                    c0.8,0.1,1.7,0.1,2.5,0c6.8-0.9,11.6-7.2,10.7-14c-0.5-3.7-2.7-7-5.9-9C30,10.5,27.8,10,24.5,10z M14.8,22.9
                    c-0.7-1.9-0.8-3.9-0.3-6c0.4-2,1.4-3.9,2.8-5.4c-2.3,0.8-4.5,2.1-6.2,4.1c-3.2,3.6-4.4,8.4-3.5,13c0.9,4.6,3.8,8.5,8,10.9
                    c3.5,2,7.4,2.6,11.3,2c-4.7-2.2-8.4-6.1-10.2-11.1C16.1,27.8,15.6,25.3,14.8,22.9z M35.8,14.1c0.4,0.4,0.8,0.9,1.2,1.4
                    c2.5,3.3,3.3,7.5,2.3,11.5c-1,4-3.7,7.3-7.5,9c-3.2,1.5-6.8,1.7-10.1,0.7c3.2,2.4,7.4,3.6,11.5,3c4.2-0.5,7.9-2.8,10.2-6.3
                    c2.4-3.5,3-7.7,1.9-11.8C44.2,17.6,42.1,14.5,35.8,14.1z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">CURIOUS CAT CONSULTING</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              A partnership dedicated to building thoughtful, well-architected software solutions for businesses of all sizes.
            </p>
            <p className="text-gray-400">
              <span className="block">Brandon, FL</span>
              <a href="mailto:hello@curiouscatconsulting.com" className="hover:text-white">
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
                  <li key={linkIndex}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Curious Cat Consulting LLC. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CCCFooter;