export const projectTypes = [
  { value: '', label: 'Select Project Type' },
  { value: 'architecture', label: 'Software Architecture' },
  { value: 'fullstack', label: 'Full-Stack Development' },
  { value: 'cloud', label: 'Cloud Solutions' },
  { value: 'devops', label: 'DevOps & Automation' },
  { value: 'data', label: 'Data Integration' },
  { value: 'consultation', label: 'General Consultation' },
  { value: 'other', label: 'Other' },
];

export const contactInfo = {
  location: 'Tampa, FL, United States',
  email: 'info@curiouscat.consulting',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/106965272',
      icon: 'linkedin' as const,
    },
    {
      label: 'GitHub (Home Assistant)',
      href: 'https://github.com/homeassistant-extras',
      icon: 'github' as const,
    },
    {
      label: 'GitHub (Personal)',
      href: 'https://github.com/warmfire540',
      icon: 'github' as const,
    },
  ],
};
