# Curious Cat Consulting - Portfolio Website

A modern, responsive portfolio website for Curious Cat Consulting built with React, TypeScript, and Tailwind CSS.

## Features

- Single Page Application (SPA) architecture
- TypeScript for type safety and better developer experience
- Responsive design using Tailwind CSS
- Component-based architecture for maintainability
- Comprehensive test suite using Jest and React Testing Library
- Modular code structure for scalability

## Project Structure

```
curious-cat-consulting/
├── public/                # Static files
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Generic UI components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── services/      # Service-specific components
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles
│   ├── __tests__/         # Tests for App and other root components
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Application entry point
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── jest.config.js         # Jest configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/curious-cat-consulting.git
   cd curious-cat-consulting
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at http://localhost:3000.

### Testing

Run tests:
```bash
npm test
# or
yarn test
```

Run tests with coverage report:
```bash
npm run test:coverage
# or
yarn test:coverage
```

### Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
```

The built files will be in the `build/` directory.

## Component Testing Guide

Each component in this project has corresponding test files. Here's how to write and run tests:

### Writing Tests

1. Create a test file with the naming pattern `ComponentName.test.tsx`.
2. Import the component and render it using React Testing Library.
3. Write tests that verify the component's functionality and appearance.

Example:
```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Best Practices

- Test component behavior, not implementation details.
- Use data-testid attributes for elements without text content.
- Mock external dependencies.
- Test user interactions using `fireEvent` or `userEvent`.

## License

MIT

## Contact

For questions or support, please contact:
contact@curiouscatconsulting.com
