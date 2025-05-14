import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: 'Services',
      links: [
        { name: 'Software Architecture', href: '#' },
        { name: 'Full-Stack Development', href: '#' },
        { name: 'DevOps & Automation', href: '#' },
        { name: 'Cloud Solutions', href: '#' },
      ],
    },
    {
      category: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      category: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Tech Stack', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-white mr-3">
                {/* SVG Logo */}
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
              Specialized in building modern, scalable, and maintainable software solutions that
              help businesses achieve their goals with curiously better software.
            </p>
            <p className="text-gray-400">
              <strong>Brandon, FL</strong>
              <br />
              <a href="mailto:contact@curiouscatconsulting.com" className="hover:text-white">
                contact@curiouscatconsulting.com
              </a>
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.map(column => (
            <div key={column.category}>
              <h4 className="text-md font-bold mb-4">{column.category}</h4>
              <ul className="space-y-2">
                {column.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Curious Cat Consulting. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
