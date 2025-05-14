// src/components/services/__tests__/ServiceCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from '../ServiceCard';
import { Service } from '../../../types/Service';

describe('ServiceCard Component', () => {
  const mockService: Service = {
    id: 'test-service',
    title: 'Test Service',
    description: 'This is a test service description.',
    icon: 'Code'
  };

  it('renders the service title correctly', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });

  it('renders the service description correctly', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByText('This is a test service description.')).toBeInTheDocument();
  });

  it('renders with the correct test id', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByTestId('service-card-test-service')).toBeInTheDocument();
  });

  it('renders the Code icon correctly', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByTestId('icon-code')).toBeInTheDocument();
  });

  it('renders different icons based on the service', () => {
    const layersService: Service = { ...mockService, id: 'layers-service', icon: 'Layers' };
    const { rerender } = render(<ServiceCard service={mockService} />);
    expect(screen.getByTestId('icon-code')).toBeInTheDocument();

    rerender(<ServiceCard service={layersService} />);
    expect(screen.getByTestId('icon-layers')).toBeInTheDocument();

    const refreshService: Service = { ...mockService, id: 'refresh-service', icon: 'RefreshCw' };
    rerender(<ServiceCard service={refreshService} />);
    expect(screen.getByTestId('icon-refresh')).toBeInTheDocument();

    const databaseService: Service = { ...mockService, id: 'database-service', icon: 'Database' };
    rerender(<ServiceCard service={databaseService} />);
    expect(screen.getByTestId('icon-database')).toBeInTheDocument();

    const cloudService: Service = { ...mockService, id: 'cloud-service', icon: 'Cloud' };
    rerender(<ServiceCard service={cloudService} />);
    expect(screen.getByTestId('icon-cloud')).toBeInTheDocument();

    const shieldService: Service = { ...mockService, id: 'shield-service', icon: 'Shield' };
    rerender(<ServiceCard service={shieldService} />);
    expect(screen.getByTestId('icon-shield')).toBeInTheDocument();
  });

  it('renders default icon when provided with an invalid icon type', () => {
    // @ts-ignore - Testing invalid type
    const invalidIconService: Service = { ...mockService, icon: 'InvalidIcon' };
    render(<ServiceCard service={invalidIconService} />);
    expect(screen.getByTestId('icon-code')).toBeInTheDocument();
  });
});
