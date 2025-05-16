interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  imageUrl: string;
}

interface Value {
  id: string;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Patrick Masters',
    role: 'Founder & Software Engineer',
    bio: [
      'Patrick is a Senior Software Engineer and Architect with over 8 years of experience delivering innovative solutions such as cloud-based integrations and large-scale infrastructure transformations.',
      'Throughout his career, Patrick has played an active role during each phase of the Software Development Life Cycle, significantly enhancing code quality and maintainability through comprehensive management of complex initiatives.',
      'He specializes in designing scalable, efficient, and robust solutions involving architectural patterns such as cloud-native applications and microservices.',
    ],
    imageUrl: '/assets/team/patrick.jpeg',
  },
  {
    id: 'member-2',
    name: 'Gina Masters',
    role: 'Operations & Client Relations',
    bio: [
      'Gina brings a wealth of experience in business operations, project management, and client relations to Curious Cat Consulting.',
      'With a background in business administration and a keen eye for detail, Gina ensures our projects run smoothly from initial consultation to final delivery.',
      'She is passionate about creating positive client experiences and ensuring that our technical solutions align with real business needs and objectives.',
    ],
    imageUrl: '/assets/team/gina.jpeg',
  },
];

export const values: Value[] = [
  {
    id: 'curiosity',
    title: 'Curiosity-Driven',
    description:
      'We approach every challenge with genuine curiosity, asking deeper questions to understand the real problem before jumping to solutions. This exploration leads to more innovative and effective outcomes.',
  },
  {
    id: 'quality',
    title: 'Quality-Focused',
    description:
      'We believe in doing things right the first time. Our commitment to quality means thorough testing, clean code, and solutions that stand the test of time and grow with your business.',
  },
  {
    id: 'partnership',
    title: 'True Partnership',
    description:
      'We work closely with our clients as true partners, fostering open communication and ensuring alignment throughout the development process. Your success is our success.',
  },
  {
    id: 'transparency',
    title: 'Radical Transparency',
    description:
      "We believe in open, honest communication at all times. You'll always know exactly where your project stands, what challenges we're facing, and how we plan to address them.",
  },
];
