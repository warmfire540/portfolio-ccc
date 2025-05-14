// src/components/layout/__tests__/Header.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  const mockSetCurrentPage = jest.fn();
  
  beforeEach(() => {
    mockSetCurrentPage.mockClear();
  });
  
  it('renders the company name correctly', () => {
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    expect(screen.getByText('CURIOUS CAT CONSULTING')).toBeInTheDocument();
  });
  
  it('renders the company tagline correctly', () => {
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    expect(screen.getByText('CURIOUSLY BETTER SOFTWARE.')).toBeInTheDocument();
  });
  
  it('renders the logo SVG', () => {
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    expect(screen.getByLabelText('Curious Cat Consulting Logo')).toBeInTheDocument();
  });
  
  it('renders all navigation items', () => {
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
  
  it('applies active styling to the current page', () => {
    render(<Header currentPage="services" setCurrentPage={mockSetCurrentPage} />);
    
    const servicesButton = screen.getByText('Services');
    const homeButton = screen.getByText('Home');
    
    expect(servicesButton.closest('button')).toHaveClass('bg-indigo-900');
    expect(servicesButton.closest('button')).toHaveClass('text-white');
    
    expect(homeButton.closest('button')).not.toHaveClass('bg-indigo-900');
    expect(homeButton.closest('button')).toHaveClass('text-indigo-900');
  });
  
  it('calls setCurrentPage when a navigation item is clicked', () => {
    render(<Header currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    
    fireEvent.click(screen.getByText('Services'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('services');
    
    fireEvent.click(screen.getByText('Projects'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('projects');
  });
  
  it('sets aria-current attribute correctly', () => {
    render(<Header currentPage="about" setCurrentPage={mockSetCurrentPage} />);
    
    expect(screen.getByText('About').closest('button')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Home').closest('button')).not.toHaveAttribute('aria-current', 'page');
  });
});
