import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Curious Cat Consulting',
  description: 'Privacy Policy for Curious Cat Consulting, LLC.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
