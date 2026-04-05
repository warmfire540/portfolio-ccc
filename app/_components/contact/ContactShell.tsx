'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import ContactBento from './ContactBento';
import ContactFlipboard from './ContactFlipboard';
import ContactMinimal from './ContactMinimal';
import ContactShowcase from './ContactShowcase';
import ContactTerminal from './ContactTerminal';
import ContactVibes from './ContactVibes';

const contactComponents = {
  vibes: ContactVibes,
  terminal: ContactTerminal,
  minimal: ContactMinimal,
  showcase: ContactShowcase,
  bento: ContactBento,
  flipboard: ContactFlipboard,
} as const;

export default function ContactShell() {
  const { variant } = useThemeVariant();
  const ContactComponent = contactComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <ContactComponent />
    </div>
  );
}
