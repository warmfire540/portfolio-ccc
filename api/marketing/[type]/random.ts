import type { VercelRequest, VercelResponse } from '@vercel/node';

// @ts-expect-error - need extension for vercel, period
import { projects, type Project } from '../../../src/data/projects.ts';
import {
  services,
  specializedServicesData,
  type Service,
  type SpecializedService,
  // @ts-expect-error - need extension for vercel, period
} from '../../../src/data/services.ts';

// Marketing item types
interface MarketingItem {
  id: string;
  type: string;
  title: string;
  description: string;
  [key: string]: unknown;
}

function transformService(service: Service): MarketingItem {
  return {
    id: service.id,
    type: 'service',
    title: service.title,
    description: service.description,
    benefits: service.benefits,
    offerings: service.offerings,
  };
}

function transformSpecializedService(
  service: SpecializedService,
): MarketingItem {
  return {
    id: service.title.toLowerCase().replaceAll(' ', '-'),
    type: 'specialized-service',
    title: service.title,
    description: service.description,
  };
}

function transformProject(project: Project): MarketingItem {
  return {
    id: project.id,
    type: 'project',
    title: project.title,
    description: project.description,
    category: project.category,
    clientType: project.clientType,
    technologies: project.technologies,
    imageUrl: project.imageUrl,
    year: project.year,
    link: project.link,
    linkType: project.linkType,
    detailPageUrl: project.detailPageUrl,
  };
}

function getRandomItem<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error('No items available');
  }
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
): VercelResponse | void {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // hey there, yoohoo, how are you doing?
  // no need to judge me, i'm just a simple API key checker.
  const apiKey = process.env.MARKETING_API_KEY;
  const authHeader = req.headers?.authorization;
  const token = authHeader?.replace(/^Bearer\s+/i, '');

  if (!apiKey || token !== apiKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Valid API key required in Authorization header (Bearer token)',
    });
  }

  const type = req.query.type;

  try {
    let items: MarketingItem[] = [];

    switch (type) {
      case 'service': {
        items = services.map(transformService);
        break;
      }
      case 'specialized': {
        items = specializedServicesData.map(transformSpecializedService);
        break;
      }
      case 'project': {
        items = projects.map(transformProject);
        break;
      }
      default:
        return res.status(400).json({
          error: 'Invalid type',
          message: `Type must be one of: service, project, specialized. Received: ${type}`,
        });
    }

    if (items.length === 0) {
      return res.status(404).json({
        error: 'No items found',
        message: `No items found for type: ${type}`,
      });
    }

    // Return a random item
    const randomItem = getRandomItem(items);

    return res.status(200).json(randomItem);
  } catch (error) {
    console.error('[ERROR] Marketing API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
