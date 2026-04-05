import type { Metadata } from 'next';
import TermsOfServiceContent from './TermsOfServiceContent';

const title = 'Terms of Service';
const description =
  'Terms governing use of Curious Cat Consulting, LLC websites, services, and deliverables.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/terms-of-service',
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
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
