// src/components/common/__tests__/CtaButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CtaButton from '../CtaButton';

describe('CtaButton Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders button with provided text', () => {
    render(<CtaButton text="Click Me" onClick={mockOnClick} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    render(<CtaButton text="Click Me" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders as primary button by default', () => {
    render(<CtaButton text="Primary Button" onClick={mockOnClick} />);
    const button = screen.getByTestId('cta-button');
    expect(button).toHaveClass('bg-indigo-600');
    expect(button).not.toHaveClass('bg-transparent');
  });

  it('renders as secondary button when primary is set to false', () => {
    render(<CtaButton text="Secondary Button" onClick={mockOnClick} primary={false} />);
    const button = screen.getByTestId('cta-button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).not.toHaveClass('bg-indigo-600');
  });

  it('applies additional class names when provided', () => {
    render(
      <CtaButton 
        text="Custom Button" 
        onClick={mockOnClick} 
        className="custom-class p-8"
      />
    );
    const button = screen.getByTestId('cta-button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('p-8');
  });

  it('uses default size classes when no className is provided', () => {
    render(<CtaButton text="Default Size" onClick={mockOnClick} />);
    const button = screen.getByTestId('cta-button');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
  });
});
