import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import ScrollToAnchor from 'components/common/ScrollToAnchor';

import ScrollToTopButton from './components/common/ScrollToTopButton';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import { ThemeProvider } from './utils/ThemeContext';
// ScrollToTop component - ensures scrolling to top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToAnchor />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-grow pt-20 dark:text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </Router>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
