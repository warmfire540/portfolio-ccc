// src/setupTests.ts
import '@testing-library/jest-dom';

// Mock the Lucide React icons
jest.mock('lucide-react', () => ({
  Code: () => <div data-testid="icon-code" />,
  Layers: () => <div data-testid="icon-layers" />,
  RefreshCw: () => <div data-testid="icon-refresh" />,
  Database: () => <div data-testid="icon-database" />,
  Cloud: () => <div data-testid="icon-cloud" />,
  Shield: () => <div data-testid="icon-shield" />,
}));
