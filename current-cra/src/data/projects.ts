export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: string;
  technologies: string[];
  imageUrl: string;
  year: string;
  link?: string;
  linkType?: 'project' | 'technology' | 'client';
  detailPageUrl?: string;
}

/**
 * List of project categories used for filtering and organizing projects.
 *
 * @remarks
 * The first category, 'All', represents an option to include all projects regardless of category.
 * The remaining categories correspond to specific areas of expertise or technology focus.
 *
 * @example
 * // Usage example:
 * categories.forEach(category => console.log(category));
 */
export const categories = [
  'All',
  'Architecture',
  'Full-Stack',
  'Cloud',
  'DevOps',
  'Data Integration',
  'Automation',
];

/**
 * An array of project objects representing various software engineering initiatives,
 * including open source contributions, enterprise transformations, cloud migrations,
 * intranet modernizations, legacy application upgrades, and system integrations.
 *
 * Each project entry contains metadata such as:
 * - `id`: Unique identifier for the project.
 * - `title`: Name or title of the project.
 * - `category`: The primary domain or focus area (e.g., Full-Stack, DevOps, Cloud).
 * - `description`: A summary of the project's goals, achievements, and impact.
 * - `clientType`: The type of client or organization for whom the project was delivered.
 * - `technologies`: A list of technologies, platforms, or tools used in the project.
 * - `imageUrl`: Path to an image representing the project.
 * - `year`: The year the project was completed or delivered.
 * - `link` (optional): A URL for more information or related resources.
 *
 * @type {Project[]}
 */
export const projects: Project[] = [
  {
    id: 'pawsport',
    title: 'Pawsport: Cat Travel Passport',
    category: 'Full-Stack',
    description:
      'Developed a gamified mobile app that transforms cat photography during travel into an engaging collection experience. Pawsport allows users to capture geotagged photos of cats they encounter while traveling, build a visual passport collection, track achievements, and view their stamps on an interactive map. Features include camera capture with automatic geotagging, achievement-based gamification system, interactive Mapbox map with heat visualization, streak tracking, emoji reactions, and premium subscription tier (Purrfect Pro) with RevenueCat integration. Built with React Native, Expo, Supabase backend, and Mapbox for location services.',
    clientType: 'Personal / Business',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'Mapbox',
      'RevenueCat',
      'NativeWind',
      'Expo Router',
      'React Context API',
      'Expo Camera',
      'PostHog',
      'Crisp Chat',
      'iOS',
      'Android',
    ],
    imageUrl: '/assets/projects/apps/pawsport/04.png',
    year: '2025',
    link: 'https://apps.apple.com/us/app/travel-pawsport/id6754227856',
    linkType: 'project',
    detailPageUrl: '/projects/pawsport',
  },
  {
    id: 'web-canvas',
    title: 'Web Canvas: Spatial Web Browsing',
    category: 'Full-Stack',
    description:
      'Developed a revolutionary iOS/iPadOS/macOS app that transforms web browsing into a spatial experience. Web Canvas provides an infinite canvas where users can arrange browser windows, images, and ideas visually instead of juggling traditional tabs. Features include smooth pan/zoom gestures, visual connections between related content, search history management, and full WebView browsing capabilities. Built with React Native, Expo, and Shopify React Native Skia for 60fps animations.',
    clientType: 'Personal / Business',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'React Native Reanimated',
      'React Native Skia',
      'NativeWind',
      'Expo Router',
      'Zustand',
      'PostHog',
      'Crisp Chat',
      'iOS',
      'iPadOS',
      'macOS',
    ],
    imageUrl: '/assets/projects/apps/webcanvas/01.png',
    year: '2025',
    link: 'https://apps.apple.com/us/app/web-canvas/id6755220973',
    linkType: 'project',
    detailPageUrl: '/projects/web-canvas',
  },
  {
    id: 'linkedin-content-automation',
    title: 'AI-Powered LinkedIn Content Automation System',
    category: 'Automation',
    description:
      'Built a comprehensive content automation pipeline that transforms blog content into engaging LinkedIn posts with minimal human intervention. The system automatically scrapes website content, generates AI-powered social media posts with accompanying images, and manages a complete approval workflow before publishing. Features include intelligent content selection, ChatGPT integration for post creation, automated image generation, and Microsoft Teams-based approval processes.',
    clientType: 'Digital Marketing Agency',
    technologies: [
      'Zapier',
      'ChatGPT API',
      'Browse.AI',
      'Zapier Tables',
      'Microsoft Teams',
      'OneDrive',
      'LinkedIn API',
      'Workflow Automation',
    ],
    imageUrl: '/assets/projects/linkedin-automation.png',
    year: '2025',
    link: 'https://zapier.com/',
    linkType: 'technology',
  },
  {
    id: 'sharepoint-permission-management',
    title: 'SharePoint Permission Management & Automated Onboarding',
    category: 'Automation',
    description:
      'Engineered an intelligent permission management solution that revolutionized client onboarding through automation and standardization. The system leverages Microsoft Forms and Power Automate to create a zero-touch provisioning workflow that automatically generates role-based security groups in both Microsoft 365 and SharePoint, provisions document libraries and folders with pre-populated templates, and configures custom SharePoint web parts. Reduced onboarding time from 2+ hours to under 10 minutes while achieving 100% consistency in permission structures and enhancing security compliance through standardized, auditable workflows.',
    clientType: 'Professional Services Firm',
    technologies: [
      'SharePoint Online',
      'Power Automate',
      'Microsoft Forms',
      'Microsoft Graph API',
      'Azure AD',
      'Security Groups',
      'Role-Based Access Control',
      'Workflow Automation',
      'Governance',
    ],
    imageUrl: '/assets/projects/sharepoint-client-onboarding.png',
    year: '2025',
    link: 'https://www.ctileadership.com/',
    linkType: 'client',
  },
  {
    id: 'employee-hub-modernization',
    title: 'Employee Hub Modernization & Vacation Management System',
    category: 'Full-Stack',
    description:
      'Spearheaded a complete redesign of a corporate Employee Hub, transforming it into a modern, intuitive intranet with an integrated vacation management system. Built a sophisticated time-off solution using Microsoft Forms for dynamic request submission, Power Automate for multi-level approval workflows with automatic manager routing based on org hierarchy, and Outlook Calendar integration for real-time availability checking and automatic time-off blocking. Features include escalation logic with SLA tracking, automated notifications, executive HR dashboard with analytics, and mobile-responsive self-service portal. Reduced HR administrative burden by 70% while providing employees instant visibility into time-off balances and approval status.',
    clientType: 'Healthcare Services Provider',
    technologies: [
      'SharePoint Online',
      'SharePoint Framework (SPFx)',
      'Power Automate',
      'Microsoft Forms',
      'Microsoft Graph API',
      'Outlook Calendar API',
      'Power Platform',
      'Azure AD',
      'React',
      'TypeScript',
    ],
    imageUrl: '/assets/projects/sharepoint-employee-hub.png',
    year: '2025',
    link: 'https://www.ctileadership.com/',
    linkType: 'client',
  },
  {
    id: 'sessions-programs-ai-agent',
    title: 'Sessions and Programs AI Agent',
    category: 'Full-Stack',
    description:
      'Developed an intelligent assistant using Microsoft Copilot Studio to help create, analyze, and improve client sessions and programs. The agent leverages historical session data, case studies, and content documents from SharePoint to provide data-driven insights and recommendations. Features include performance analysis, strategic agenda planning, and automated program suggestions based on successful patterns.',
    clientType: 'Professional Services Firm',
    technologies: [
      'Microsoft Copilot Studio',
      'SharePoint Online',
      'Microsoft Teams',
      'Power Platform',
      'Azure AI',
      'Microsoft Graph API',
      'Natural Language Processing',
    ],
    imageUrl: '/assets/projects/ai-agent.png',
    year: '2025',
    link: 'https://www.ctileadership.com/',
    linkType: 'client',
  },
  {
    id: 'synapse-expense-management',
    title: 'Synapse: AI-Powered Expense Management Platform',
    category: 'Full-Stack',
    description:
      'Built a comprehensive AI-powered expense management platform that automates receipt processing and expense tracking. Leverages OpenAI GPT-4o vision model to automatically extract data from receipt images with 99% accuracy, eliminating manual data entry. Features include advanced fraud detection algorithms, duplicate expense detection, team collaboration with approval workflows, comprehensive analytics dashboards, and Stripe subscription billing. Built as a secure multi-tenant SaaS application with PostgreSQL Row Level Security (RLS) policies and full test coverage using Playwright and pgTAP.',
    clientType: 'Personal / Business',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'OpenAI API',
      'GPT-4o',
      'Stripe',
      'Google Maps API',
      'Tailwind CSS',
      'shadcn/ui',
      'Playwright',
      'pgTAP',
      'Row Level Security',
    ],
    imageUrl: '/assets/projects/synapse.png',
    year: '2025',
  },
  {
    id: 'home-assistant-extensions',
    title: 'Home Assistant Open Source Contributions',
    category: 'Full-Stack',
    description:
      'Maintained and developed 6+ open source integrations and extensions for Home Assistant, the popular home automation platform. Projects include custom components, integrations with various APIs and services, and utilities that enhance the Home Assistant ecosystem. These projects have collectively received hundreds of stars on GitHub and are actively used by the community.',
    clientType: 'Open Source / Community',
    technologies: [
      'Python',
      'Home Assistant',
      'REST APIs',
      'MQTT',
      'GitHub Actions',
      'IoT Protocols',
      'Automation',
    ],
    imageUrl: '/assets/projects/ha.png',
    year: '2025',
    link: 'https://github.com/orgs/homeassistant-extras/repositories',
    linkType: 'project',
  },
  {
    id: 'curious-cat-portfolio',
    title: 'Curious Cat Consulting Portfolio Website',
    category: 'Full-Stack',
    description:
      'Designed and developed a modern, responsive portfolio website showcasing software engineering expertise and project portfolio. Features include dark/light mode theming, animated sections, contact form integration, project filtering, and mobile-first responsive design. Built with React 18, TypeScript, and Tailwind CSS, deployed on Vercel with automated CI/CD and analytics integration.',
    clientType: 'Personal / Business',
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'React Router',
      'Vercel Analytics',
      'Google Analytics',
      'Formspree',
      'Lucide React',
      'Responsive Design',
    ],
    imageUrl: '/assets/projects/portfolio.jpg',
    year: '2025',
    link: 'https://curiouscat.consulting',
    linkType: 'project',
  },
  {
    id: 'ci-cd-transformation',
    title: 'Enterprise CI/CD Transformation',
    category: 'DevOps',
    description:
      'Transformed a brittle, manual deployment process into a robust, automated CI/CD pipeline. Revamped Git workflows, implemented branch protection rules, and created standardized deployment templates. Reduced deployment time by 85% while eliminating deployment errors that had previously affected business operations.',
    clientType: 'Large Retail Corporation',
    technologies: [
      'Azure DevOps',
      'Bitbucket Pipelines',
      'Docker',
      'PowerShell',
      'YAML',
      '.NET Core',
      'Git Flow',
    ],
    imageUrl: '/assets/projects/devops.png',
    year: '2024',
  },
  {
    id: 'cloud-data-transformation',
    title: 'Digital Transformation - Ground to Cloud',
    category: 'Cloud',
    description:
      'Led a comprehensive migration from legacy on-premise applications to a scalable cloud architecture. Developed data pipeline integrations between on-premise SQL databases and cloud-based Delta Lake infrastructure. Enabled business self-service reporting through Power BI, replacing outdated SSRS and Cognos implementations.',
    clientType: 'National Retail Chain',
    technologies: [
      'Azure Data Factory',
      'Databricks',
      'Google Cloud Platform',
      'Power BI',
      'ASP.NET',
      'Microservices',
      'Hubspot Integration',
    ],
    imageUrl: '/assets/projects/delta.jpeg',
    year: '2023',
    link: 'https://learn.microsoft.com/en-us/azure/databricks/introduction/',
    linkType: 'technology',
  },
  {
    id: 'intranet-modernization',
    title: 'SharePoint Intranet Modernization',
    category: 'Full-Stack',
    description:
      'Revitalized an outdated corporate intranet by implementing modern workflows, approval processes, and security groups. Created custom PowerApps solutions to replace paper-based processes, and developed Power Automate flows to streamline business operations. Implemented proper governance and documentation to ensure long-term maintainability.',
    clientType: 'Healthcare Services Provider',
    technologies: [
      'SharePoint Online',
      'Power Apps',
      'Power Automate',
      'Microsoft Graph API',
      'Azure AD',
      'React',
      'SPFx',
    ],
    imageUrl: '/assets/projects/sharepoint.jpg',
    link: 'https://www.ctileadership.com/',
    linkType: 'client',
    year: '2025',
  },
  {
    id: 'legacy-app-modernization',
    title: 'Legacy Application Modernization',
    category: 'Architecture',
    description:
      'Transformed a suite of outdated Windows Forms applications into a modern web-based platform. Applied domain-driven design principles to restructure the application architecture while preserving business logic. Implemented a phased migration approach that minimized business disruption while delivering incremental improvements.',
    clientType: 'Financial Services Firm',
    technologies: [
      'React',
      'TypeScript',
      'ASP.NET Core API',
      'Entity Framework',
      'SQL Server',
      'Azure App Services',
      'CI/CD',
    ],
    imageUrl: '/assets/projects/modernize.jpg',
    year: '2020',
  },
  {
    id: 'gl-system-integration',
    title: 'General Ledger System Integration',
    category: 'Data Integration',
    description:
      'Orchestrated the integration between a legacy accounting system and a new enterprise DMS platform. Identified all affected systems, many with no prior documentation, and developed comprehensive migration strategies. Created validation frameworks to ensure data integrity during and after migration, resulting in zero financial discrepancies post-cutover.',
    clientType: 'Automotive Retail Group',
    technologies: [
      'SQL Server',
      'Azure Functions',
      'Dynamics AX',
      'Custom APIs',
      'PowerShell',
      'ETL Processes',
      'Data Validation Framework',
    ],
    imageUrl: '/assets/projects/d365.jpg',
    link: 'https://www.microsoft.com/en-us/dynamics-365',
    linkType: 'technology',
    year: '2022',
  },
  {
    id: 'multi-system-integration',
    title: 'Multi-System Integration Platform',
    category: 'Data Integration',
    description:
      'Designed and implemented an integration hub that connected disparate business systems (CRM, ERP, and custom applications) to enable unified data flow across the organization. Created a centralized logging and monitoring solution that provided real-time visibility into integration health and data movement.',
    clientType: 'Manufacturing Enterprise',
    technologies: [
      'Azure Service Bus',
      'Logic Apps',
      'API Management',
      'Event Grid',
      'Azure Functions',
      'Cosmos DB',
      'Application Insights',
    ],
    imageUrl: '/assets/projects/integration.png',
    link: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven',
    linkType: 'technology',
    year: '2021',
  },
];
