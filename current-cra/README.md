# Curious Cat Consulting - Website

A modern, responsive website for Curious Cat Consulting LLC, showcasing services, projects, and expertise as a software engineering and architecture consulting firm.

## Overview

This website serves as the digital presence for Curious Cat Consulting, featuring:

- Company information and service offerings
- Project portfolio with filterable categories
- Team member profiles and company values
- Contact form for client inquiries
- Dark/light mode theme toggle for improved user experience

The site is built with React, TypeScript, and Tailwind CSS, providing a clean, professional aesthetic with responsive design across all devices.

## Project Structure

```
curious-cat-consulting/
├── public/                # Static files
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components (buttons, forms, etc.)
│   │   └── layout/        # Layout components (header, footer)
│   ├── pages/             # Page components
│   ├── data/              # Data files (projects, services, team)
│   ├── utils/             # Utility functions and context providers
│   ├── styles/            # Global styles with Tailwind
│   ├── assets/            # SVG and image assets
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Application entry point
└── configuration files    # Config files (tailwind, eslint, etc.)
```

## Technologies

- **React 18**: Frontend library for building the user interface
- **TypeScript**: For type-safe code and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For handling navigation and routing
- **Lucide React**: For modern, customizable icons
- **Formspree**: For handling contact form submissions
- **Vercel Analytics**: For tracking site performance and usage metrics
- **Google Analytics**: For detailed visitor analytics

## Setup & Installation

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/curiouscatconsulting/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
```

The built files will be in the `build/` directory.

## Deployment

The website is currently deployed on Vercel with automatic deployments from the `release` branch.

**Deployment URL**: [https://vercel.com/warmfire540s-projects/portfolio-ccc-ys7u](https://vercel.com/warmfire540s-projects/portfolio-ccc-ys7u)

The deployment process is automated:
- Push changes to the `release` branch
- Vercel automatically builds and deploys the updated site
- No additional CI/CD configuration is currently required

## Integration Services

### Contact Form

The contact form uses Formspree for handling submissions:
- Form endpoint: [https://formspree.io/forms/xanovqwr](https://formspree.io/forms/xanovqwr/integration)
- Submissions are sent directly to the configured email address
- Form validation is handled by the Formspree React library

### Analytics

The site uses dual analytics tracking:
- **Vercel Analytics**: Built-in performance and usage metrics
- **Google Analytics**: More detailed visitor tracking and analysis
  - GA Property: [https://analytics.google.com/analytics/web/#/p489524012/reports/intelligenthome](https://analytics.google.com/analytics/web/#/p489524012/reports/intelligenthome)

## Customization

### Updating Projects

Projects are now defined in `src/data/projects.tsx`:

```tsx
export const projects: Project[] = [
  {
    id: 'new-project',
    title: 'New Project Name',
    category: 'Architecture',
    description: 'Project description here...',
    // Add other required fields
  },
  // Other projects...
];
```

### Updating Services

Services are defined in `src/data/services.tsx`. Use the `getServices` function to retrieve them with the appropriate icon size.

## TODO List

- **Testing**:
  - Implement unit tests for components
  - Add integration tests for key user flows
  - Set up accessibility testing

- **CI/CD**:
  - Configure GitHub Actions for automated testing
  - Set up staging environment for QA
  - Implement automated visual regression testing

- **Potential Future Enhancements**:
  - Blog/Articles section
  - Case study deep dives
  - Testimonials carousel
  - Performance optimizations
  - Enhanced animations

## License

MIT

---

© 2025 Curious Cat Consulting LLC. All rights reserved.