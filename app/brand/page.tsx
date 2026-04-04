import type { Metadata } from 'next';
import BrandKitContent from './BrandKitContent';

export const metadata: Metadata = {
  title: 'Brand Kit | Curious Cat Consulting',
  description:
    'Design system reference and source of truth for Curious Cat Consulting.',
};

export default function BrandPage() {
  return <BrandKitContent />;
}
