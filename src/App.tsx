import React from 'react';

import { Analytics } from '@vercel/analytics/react';

import About from 'components/spa/About';
import Contact from 'components/spa/Contact';
import Cta from 'components/spa/Cta';
import Hero from 'components/spa/Hero';
import Projects from 'components/spa/Projects';
import Services from 'components/spa/Services';

import ScrollToTopButton from './components/common/ScrollToTopButton';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { ThemeProvider } from './utils/ThemeContext';

/**
 * The main application component that sets up the overall layout and theming for the portfolio site.
 *
 * @component
 * @returns {JSX.Element} The root component containing the theme provider, header, main content sections,
 * footer, scroll-to-top button, and analytics integration.
 *
 * @remarks
 * - Wraps the entire application in a `ThemeProvider` for light/dark mode support.
 * - Renders the following sections in order: Header, Hero, About, Services, Projects, Contact, Call to Action (Cta), Footer, and utility components.
 * - Applies Tailwind CSS classes for responsive design and theming.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow dark:text-white">
          <div className="flex flex-col">
            <Hero />
            <About />
            <Services />
            <Cta />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
