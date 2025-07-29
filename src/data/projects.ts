interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: string;
  technologies: string[];
  imageUrl: string;
  year: string;
  link?: string;
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
    year: '2021',
  },
];
