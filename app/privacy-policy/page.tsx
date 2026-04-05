import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

const title = 'Privacy Policy';
const description =
  'How Curious Cat Consulting, LLC collects, uses, and protects information when you use our website and services.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/privacy-policy',
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
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
