'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import ProjectsBento from './ProjectsBento';
import ProjectsFlipboard from './ProjectsFlipboard';
import ProjectsMinimal from './ProjectsMinimal';
import ProjectsShowcase from './ProjectsShowcase';
import ProjectsTerminal from './ProjectsTerminal';
import ProjectsVibes from './ProjectsVibes';

const projectsComponents = {
  vibes: ProjectsVibes,
  terminal: ProjectsTerminal,
  minimal: ProjectsMinimal,
  showcase: ProjectsShowcase,
  bento: ProjectsBento,
  flipboard: ProjectsFlipboard,
} as const;

export default function ProjectsShell() {
  const { variant } = useThemeVariant();
  const ProjectsComponent = projectsComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <ProjectsComponent />
    </div>
  );
}
