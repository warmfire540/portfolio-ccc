tweaks
- decide on colors
- nav buttons odd
- smaller windows - logos and stuff odd
- leftover ai comments
- contact form?


# Curious Cat Consulting - Website

A modern, responsive website for Curious Cat Consulting LLC, showcasing our services, projects, and expertise as a software engineering and architecture consulting firm. Built with React, TypeScript, and Tailwind CSS.

![Curious Cat Consulting Preview](/public/preview.png)

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with attention to typography and spacing
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Interactive UI**: Smooth animations and transitions for engaging user experience
- **Projects Showcase**: Filterable project gallery highlighting our professional work
- **Detailed Services Pages**: Comprehensive information about our service offerings
- **About Us Section**: Information about our company, values, and team
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: ARIA attributes and keyboard navigation support

## 🚀 Technologies Used

- **React**: Frontend library for building the user interface
- **TypeScript**: For type-safe code and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For handling navigation and routing
- **Lucide React**: For modern, customizable icons
- **ESLint & Prettier**: For code quality and consistent formatting

## 📂 Project Structure

```
curious-cat-consulting/
├── public/                # Static files
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Generic UI components
│   │   └── layout/        # Layout components
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles with Tailwind
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Application entry point
└── configuration files    # Various config files for the project
```

## 🛠️ Setup & Installation

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

## 📦 Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
```

The built files will be in the `build/` directory.

## 🚀 Deployment

This website can be easily deployed to various hosting services:

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect React and configure the build settings

### Netlify
1. Push your code to a GitHub repository
2. Import the project in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://curiouscatconsulting.com",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🎨 Customization

### Changing Colors
The primary color scheme can be modified in the `tailwind.config.js` file:

```js
// Example: Change primary color to blue
theme: {
  extend: {
    colors: {
      indigo: {
        // Replace with blue shades
      }
    }
  }
}
```

### Adding Projects
Edit the projects array in `src/pages/CCCProjectsPage.tsx`:

```tsx
const projects: Project[] = [
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
Edit the services array in `src/pages/CCCServicesPage.tsx` to update or add new service offerings.

## 📄 License

MIT

## 🙏 Acknowledgements

- [Create React App](https://create-react-app.dev/) - For the initial project setup
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [React Router](https://reactrouter.com/) - For routing and navigation
- [Lucide React](https://lucide.dev/) - For beautiful icons

---

© 2025 Curious Cat Consulting LLC. All rights reserved.