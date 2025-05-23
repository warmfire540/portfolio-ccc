import { Calendar, Code, Users, Zap } from 'lucide-react';

/**
 * An array of milestone objects representing key events and principles of Curious Cat Consulting.
 *
 * Each milestone includes:
 * - `icon`: A React component representing the milestone visually.
 * - `year`: A string indicating the year, duration, or theme of the milestone.
 * - `title`: The title or headline of the milestone.
 * - `description`: A detailed explanation of the milestone's significance.
 */
export const milestones = [
  {
    icon: Calendar,
    year: '2025',
    title: 'Founded',
    description:
      'Curious Cat Consulting was founded by Patrick Masters, bringing together extensive experience in software engineering and architecture.',
  },
  {
    icon: Code,
    year: '8+',
    title: 'Years of Experience',
    description:
      'After years of working in various technical roles across different industries, I recognized a common gap in software development.',
  },
  {
    icon: Zap,
    year: 'Philosophy',
    title: 'Curiosity-Driven Approach',
    description:
      'Great software begins with curiosity—asking the right questions to truly understand business challenges before diving into code.',
  },
  {
    icon: Users,
    year: 'Mission',
    title: 'Future-Focused Solutions',
    description:
      'This approach leads to solutions that not only meet immediate needs but anticipate future ones as well.',
  },
];
