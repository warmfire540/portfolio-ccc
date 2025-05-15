import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import PortfolioHeader from './components/layout/PortfolioHeader';
import PortfolioFooter from './components/layout/PortfolioFooter';

// Pages
import PortfolioHomePage from './pages/PortfolioHomePage';
import PortfolioProjectsPage from './pages/PortfolioProjectsPage';
import PortfolioAboutPage from './pages/PortfolioAboutPage';
import PortfolioContactPage from './pages/PortfolioContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <PortfolioHeader />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<PortfolioHomePage />} />
            <Route path="/projects" element={<PortfolioProjectsPage />} />
            <Route path="/about" element={<PortfolioAboutPage />} />
            <Route path="/contact" element={<PortfolioContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <PortfolioFooter />
      </div>
    </Router>
  );
};

export default App;