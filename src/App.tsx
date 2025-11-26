import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import About from 'components/spa/About';
import Contact from 'components/spa/Contact';
import Cta from 'components/spa/Cta';
import Hero from 'components/spa/Hero';
import ProjectDetail from 'components/spa/ProjectDetail';
import Projects from 'components/spa/Projects';
import Services from 'components/spa/Services';

import ScrollToTopButton from './components/common/ScrollToTopButton';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import { ThemeProvider } from './utils/ThemeContext';

/**
 * App content component that conditionally renders header/footer based on route
 */
const AppContent: React.FC = () => {
  const location = useLocation();
  const isLegalPage =
    location.pathname === '/terms-of-service' ||
    location.pathname === '/privacy-policy';

  // Handle scrolling to sections when navigating from other routes or with hash
  useEffect(() => {
    if (location.pathname === '/') {
      const targetId =
        location.state?.scrollTo || location.hash.replace('#', '');

      if (targetId) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const navbarHeight = 110;
          const element = document.getElementById(targetId);
          if (element) {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {!isLegalPage && <Header />}
      <main className="flex-grow dark:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col">
                <Hero />
                <About />
                <Services />
                <Cta />
                <Projects />
                <Contact />
              </div>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      {!isLegalPage && <Footer />}
      {!isLegalPage && <ScrollToTopButton />}
    </div>
  );
};

/**
 * The main application component that sets up the overall layout and theming for the portfolio site.
 *
 * @component
 * @returns {JSX.Element} The root component containing the theme provider, header, main content sections,
 * footer, scroll-to-top button, and analytics integration.
 *
 * @remarks
 * - Wraps the entire application in a `ThemeProvider` for light/dark mode support.
 * - Conditionally renders header/footer based on current route.
 * - Legal pages (ToS, Privacy Policy) are rendered standalone without header/footer.
 * - Applies Tailwind CSS classes for responsive design and theming.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
        <Analytics />
      </Router>
    </ThemeProvider>
  );
};

export default App;
