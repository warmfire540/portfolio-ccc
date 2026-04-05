import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/app/_components/projects/data';
import { truncateMetaDescription } from '@/app/_lib/metadata';
import ProjectDetailContent from './ProjectDetailContent';

const appConfigs: Record<
  string,
  {
    appStoreUrl: string;
    playStoreUrl?: string;
    screenshots: string[];
    features: Array<{ title: string; description: string }>;
  }
> = {
  'web-canvas': {
    appStoreUrl: 'https://apps.apple.com/us/app/web-canvas/id6755220973',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.curiouscat.webcanvas',
    screenshots: [
      '/assets/projects/apps/webcanvas/01.png',
      '/assets/projects/apps/webcanvas/02.png',
      '/assets/projects/apps/webcanvas/03.png',
      '/assets/projects/apps/webcanvas/04.png',
      '/assets/projects/apps/webcanvas/05.png',
    ],
    features: [
      {
        title: 'Infinite Canvas',
        description:
          'Pan and zoom freely across your workspace. See all your research and browsing at a glance.',
      },
      {
        title: 'Visual Browsing',
        description:
          'Add multiple browser windows to your canvas. Images show in your workspace. See visual connections between related content.',
      },
      {
        title: 'Natural Gestures',
        description:
          'Drag windows anywhere on the canvas. Pinch to zoom in and out. Pan with two fingers to navigate.',
      },
      {
        title: 'Full Web Browsing',
        description:
          'Full web browsing with standard WebView. Search history that remembers your journey. Dark mode support.',
      },
    ],
  },
  pawsport: {
    appStoreUrl: 'https://apps.apple.com/us/app/travel-pawsport/id6754227856',
    screenshots: [
      '/assets/projects/apps/pawsport/01.png',
      '/assets/projects/apps/pawsport/02.png',
      '/assets/projects/apps/pawsport/03.png',
      '/assets/projects/apps/pawsport/04.png',
      '/assets/projects/apps/pawsport/05.png',
      '/assets/projects/apps/pawsport/06.png',
    ],
    features: [
      {
        title: 'Cat Photo Capture',
        description:
          'Capture geotagged photos of cats you encounter while traveling. Automatic location tagging and manual override options.',
      },
      {
        title: 'Interactive Map',
        description:
          'View your cat stamps on an interactive Mapbox map with heat visualization. Track your geographic coverage across countries, states, and regions.',
      },
      {
        title: 'Achievement System',
        description:
          'Unlock achievements and badges for milestones like first cat, completing regions, international travel, and maintaining streaks.',
      },
      {
        title: 'Collection & Stats',
        description:
          'Build your personal cat passport collection. Track statistics, view regional progress, and see your travel coverage visualized.',
      },
      {
        title: 'Premium Features',
        description:
          'Purrfect Pro subscription unlocks full achievement tracking, advanced stats, and exclusive features. Monthly and yearly options available.',
      },
    ],
  },
};

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const description = truncateMetaDescription(project.description);
  const pagePath = `/projects/${project.id}`;

  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      type: 'article',
      url: pagePath,
      images: [
        {
          url: project.imageUrl,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description,
      images: [project.imageUrl],
    },
    alternates: {
      canonical: pagePath,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isApp = project.category === 'Full-Stack' && !!project.detailPageUrl;
  const config = appConfigs[project.id] ?? null;

  return (
    <ProjectDetailContent
      project={project}
      isApp={isApp}
      appStoreUrl={config?.appStoreUrl ?? project.link ?? ''}
      playStoreUrl={config?.playStoreUrl ?? ''}
      screenshots={config?.screenshots ?? []}
      features={config?.features ?? []}
    />
  );
}
