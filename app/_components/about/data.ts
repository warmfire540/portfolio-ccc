import {
  faCalendar,
  faEye,
  faHandshake,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

import {
  faCode,
  faBolt,
  faUsers,
  faShieldHalved,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

export const STATS = [
  { value: '85%', label: 'Deployment Time Reduced' },
  { value: '6+', label: 'Open Source Projects' },
  { value: '0', label: 'Post-Migration Errors' },
  { value: '10K+', label: 'Community Downloads' },
];

export const TEAM = [
  {
    name: 'Patrick Masters',
    role: 'Founder & Software Engineer',
    bio: [
      'Patrick is a Senior Software Engineer and Architect with over 8 years of experience delivering innovative solutions such as cloud-based integrations and large-scale infrastructure transformations.',
      'Throughout his career, Patrick has played an active role during each phase of the Software Development Life Cycle, significantly enhancing code quality and maintainability through comprehensive management of complex initiatives.',
    ],
    imageUrl: '/assets/team/patrick.jpg',
  },
  {
    name: 'Gina Masters',
    role: 'Operations & Client Relations',
    bio: [
      'Gina brings a wealth of experience in business operations, project management, and client relations to Curious Cat Consulting.',
      'With a background in business administration and a keen eye for detail, Gina ensures our projects run smoothly from initial consultation to final delivery.',
      'She is passionate about creating positive client experiences and ensuring that our technical solutions align with real business needs and objectives.',
    ],
    imageUrl: '/assets/team/gina.jpg',
  },
];

export const MILESTONES = [
  {
    icon: faCalendar,
    year: '2025',
    title: 'Founded',
    description:
      'Curious Cat Consulting was founded by Patrick Masters, bringing together extensive experience in software engineering and architecture.',
  },
  {
    icon: faCode,
    year: '10+',
    title: 'Years of Experience',
    description:
      'After years of working in various technical roles across different industries, I recognized a common gap in software development.',
  },
  {
    icon: faBolt,
    year: 'Philosophy',
    title: 'Curiosity-Driven Approach',
    description:
      'Great software begins with curiosity—asking the right questions to truly understand business challenges before diving into code.',
  },
  {
    icon: faUsers,
    year: 'Mission',
    title: 'Future-Focused Solutions',
    description:
      'This approach leads to solutions that not only meet immediate needs but anticipate future ones as well.',
  },
];

export const VALUES = [
  {
    title: 'Curiosity-Driven',
    icon: faEye,
    gradient: 'from-blue-500 to-primary-600',
    description:
      'We approach every challenge with genuine curiosity, asking deeper questions to understand the real problem before jumping to solutions. This exploration leads to more innovative and effective outcomes.',
  },
  {
    title: 'Quality-Focused',
    icon: faShieldHalved,
    gradient: 'from-teal-500 to-cyan-600',
    description:
      'We believe in doing things right the first time. Our commitment to quality means thorough testing, clean code, and solutions that stand the test of time and grow with your business.',
  },
  {
    title: 'True Partnership',
    icon: faHandshake,
    gradient: 'from-green-500 to-teal-600',
    description:
      'We work closely with our clients as true partners, fostering open communication and ensuring alignment throughout the development process. Your success is our success.',
  },
  {
    title: 'Radical Transparency',
    icon: faHeart,
    gradient: 'from-orange-500 to-red-600',
    description:
      "We believe in open, honest communication at all times. You'll always know exactly where your project stands, what challenges we're facing, and how we plan to address them.",
  },
];

export const RECOGNITIONS = [
  {
    title: 'Verified Business',
    description: 'Verified listing on Biz Growth Collective business directory',
    icon: faShieldAlt,
    badgeUrl:
      'https://www.bizgrowthcollective.com/images/a-badge-with-the-text-verified-and-stand_y5ThjIZIQ1q8bWCrI7i5Yw_2P_mwAemQyeg4NvQ3bvr3Q.png',
    badgeLink:
      'https://www.bizgrowthcollective.com/united-states/brandon/technology-it-services/curious-cat-consulting?from=badge',
  },
];
