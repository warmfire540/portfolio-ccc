import type { Metadata } from 'next';
import BrandKitContent from './BrandKitContent';

const title = 'Brand Kit';
const description =
  'Logo usage, typography, color, and UI patterns—the design reference for Curious Cat Consulting materials.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/brand',
    type: 'website',
    images: [{ url: '/assets/cat.svg', alt: 'Curious Cat Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/cat.svg'],
  },
  alternates: {
    canonical: '/brand',
  },
};

export default function BrandPage() {
  return <BrandKitContent />;
}
