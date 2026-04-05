import type { Project } from './data';

export type ProjectCta =
  | { mode: 'internal'; href: string }
  | { mode: 'external'; href: string };

/** Same routing rule as CRA Projects: in-app case study vs external URL. */
export function getProjectCta(project: Project): ProjectCta | null {
  if (!project.link) return null;
  if (project.detailPageUrl && project.linkType === 'project') {
    return { mode: 'internal', href: project.detailPageUrl };
  }
  return { mode: 'external', href: project.link };
}

export function projectExternalLinkLabel(
  linkType: Project['linkType'],
): string {
  if (linkType === 'technology') return 'View Technology';
  if (linkType === 'client') return 'View Client';
  return 'View Project';
}
