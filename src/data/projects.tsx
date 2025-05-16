interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export const categories = [
  'All',
  'Architecture',
  'Full-Stack',
  'Cloud',
  'DevOps',
  'Data Integration',
];

export const projects: Project[] = [
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
    link: 'https://github.com/orgs/homeassistant-extras/repositories',
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
    link: 'https://learn.microsoft.com/en-us/azure/databricks/introduction/',
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
  },
];
