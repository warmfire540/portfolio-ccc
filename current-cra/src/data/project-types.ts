/**
 * An array of project type options used for selection components.
 * Each option contains a `value` (used as an identifier) and a `label` (displayed to the user).
 * The first entry is a placeholder prompting the user to select a project type.
 *
 * Available project types include:
 * - Software Architecture
 * - Full-Stack Development
 * - Cloud Solutions
 * - DevOps & Automation
 * - Data Integration
 * - General Consultation
 * - Other
 */
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
