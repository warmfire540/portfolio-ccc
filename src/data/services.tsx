import {
  BarChart,
  Cloud,
  Code,
  Database,
  FileCode,
  GitBranch,
  Layers,
  RefreshCw,
  Server,
  Terminal,
  Users,
  Workflow,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  offerings: string[];
}

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Software Architecture',
    description:
      'Design scalable, maintainable systems that align with your business goals and technical requirements.',
    icon: <Layers size={48} className="text-indigo-600 dark:text-indigo-400" />,
    benefits: [
      'Scalable systems that grow with your business',
      'Reduced technical debt and maintenance costs',
      'Improved performance and reliability',
      'Better alignment between technology and business goals',
    ],
    offerings: [
      'Architecture assessment and review',
      'Cloud architecture design',
      'Microservices architecture',
      'Event-driven architecture',
      'System integration architecture',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Build complete web and mobile applications with modern front-end interfaces and robust back-end services.',
    icon: <Code size={48} className="text-indigo-600 dark:text-indigo-400" />,
    benefits: [
      'Cohesive application development from end to end',
      'Consistent practices across the technology stack',
      'Streamlined communication and faster development',
      'Unified testing and quality assurance approach',
    ],
    offerings: [
      'Custom web application development',
      'RESTful API development',
      'Progressive Web Apps (PWAs)',
      'Single Page Applications (SPAs)',
      'Database design and implementation',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description:
      'Leverage the power of cloud platforms to reduce costs, increase scalability, and improve reliability.',
    icon: <Cloud size={48} className="text-indigo-600 dark:text-indigo-400" />,
    benefits: [
      'Reduced infrastructure costs and management overhead',
      'Improved scalability and flexibility',
      'Enhanced disaster recovery capabilities',
      'Access to cutting-edge cloud services and features',
    ],
    offerings: [
      'Cloud migration strategy and implementation',
      'Multi-cloud and hybrid cloud solutions',
      'Serverless architecture and development',
      'Cloud cost optimization',
      'Managed services integration',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description:
      'Streamline your development lifecycle with continuous integration, delivery, and infrastructure as code.',
    icon: (
      <RefreshCw size={48} className="text-indigo-600 dark:text-indigo-400" />
    ),
    benefits: [
      'Faster, more reliable software releases',
      'Reduced deployment risks and downtime',
      'Improved collaboration between development and operations',
      'Consistent, repeatable infrastructure provisioning',
    ],
    offerings: [
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Containerization with Docker and Kubernetes',
      'Automated testing strategies',
      'Monitoring and observability solutions',
    ],
  },
  {
    id: 'data',
    title: 'Data Integration',
    description:
      'Connect disparate systems and data sources to provide a unified view of your business information.',
    icon: (
      <Database size={48} className="text-indigo-600 dark:text-indigo-400" />
    ),
    benefits: [
      'Unified view of business data across systems',
      'Improved data quality and consistency',
      'Reduced manual data entry and processing',
      'Enhanced reporting and analytics capabilities',
    ],
    offerings: [
      'ETL/ELT pipeline development',
      'API integration and management',
      'Data warehouse design and implementation',
      'Real-time data processing solutions',
      'Legacy system integration',
    ],
  },
  {
    id: 'consultation',
    title: 'Technical Consultation',
    description:
      'Get expert advice on technology selection, system design, and technical strategy to guide your decisions.',
    icon: (
      <Terminal size={48} className="text-indigo-600 dark:text-indigo-400" />
    ),
    benefits: [
      'Informed decisions based on technical expertise',
      'Reduced risk in technology selection',
      'Clear roadmap for technical implementation',
      'Independent perspective on technical challenges',
    ],
    offerings: [
      'Technology stack evaluation and selection',
      'Technical debt assessment and remediation planning',
      'System performance optimization',
      'Security and compliance review',
      'Technical team mentoring and training',
    ],
  },
];

export const specializedServices = [
  {
    title: 'Legacy System Modernization',
    icon: <Server size={24} className="text-indigo-600 dark:text-indigo-400" />,
    description:
      'Transform outdated systems into modern, maintainable applications without losing critical functionality.',
  },
  {
    title: 'API Design & Development',
    icon: (
      <FileCode size={24} className="text-indigo-600 dark:text-indigo-400" />
    ),
    description:
      'Create well-designed, developer-friendly APIs that enable seamless integration and extensibility.',
  },
  {
    title: 'Workflow Automation',
    icon: (
      <Workflow size={24} className="text-indigo-600 dark:text-indigo-400" />
    ),
    description:
      'Automate repetitive business processes to improve efficiency, reduce errors, and free up valuable resources.',
  },
  {
    title: 'Version Control & Branching Strategy',
    icon: (
      <GitBranch size={24} className="text-indigo-600 dark:text-indigo-400" />
    ),
    description:
      'Establish effective source code management practices to support your development team and release processes.',
  },
  {
    title: 'Data Visualization',
    icon: (
      <BarChart size={24} className="text-indigo-600 dark:text-indigo-400" />
    ),
    description:
      'Transform raw data into insightful visualizations that help drive better business decisions.',
  },
  {
    title: 'Team Augmentation',
    icon: <Users size={24} className="text-indigo-600 dark:text-indigo-400" />,
    description:
      'Supplement your existing technical team with my expertise to tackle challenging projects or meet deadlines.',
  },
];
