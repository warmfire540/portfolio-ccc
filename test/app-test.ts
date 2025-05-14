// src/__tests__/App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock the page components
jest.mock('../pages/HomePage', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('../pages/ServicesPage', () => () => <div data-testid="services-page">Services Page</div>);
jest.mock('../pages/ProjectsPage', () => () => <div data-testid="projects-page">Projects Page</div>);
jest.mock('../pages/AboutPage', () => () => <div data-testid="about-page">About Page</div>);
jest.mock('../pages/ContactPage', () => () => <div data-testid="contact-page">Contact Page</div>);

describe('App Component', () => {
  it('renders the header, main content and footer', () => {
    render(<App />);
    
    // Check for header
    expect(screen.getByText('CURIOUS CAT CONSULTING')).toBeInTheDocument();
    
    // Check for main content
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    
    // Check for footer (check for copyright text which is present in footer)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
  
  it('shows HomePage by default', () => {
    render(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
  
  it('navigates to different pages when nav links are clicked', () => {
    render(<App />);
    
    // Initially on home page
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    
    // Navigate to Services
    fireEvent.click(screen.getByText('Services'));
    expect(screen.getByTestId('services-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    
    // Navigate to Projects
    fireEvent.click(screen.getByText('Projects'));
    expect(screen.getByTestId('projects-page')).toBeInTheDocument();
    expect(screen.queryByTestId('services-page')).not.toBeInTheDocument();
    
    // Navigate to About
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    expect(screen.queryByTestId('projects-page')).not.toBeInTheDocument();
    
    // Navigate to Contact
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    expect(screen.queryByTestId('about-page')).not.toBeInTheDocument();
    
    // Back to Home
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.queryByTestId('contact-page')).not.toBeInTheDocument();
  });
});
