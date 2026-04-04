import type { Metadata } from 'next';
import TermsOfServiceContent from './TermsOfServiceContent';

export const metadata: Metadata = {
  title: 'Terms of Service | Curious Cat Consulting',
  description: 'Terms of Service for Curious Cat Consulting, LLC.',
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
