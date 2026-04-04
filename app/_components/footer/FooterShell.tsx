'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import FooterVibes from './FooterVibes';
import FooterTerminal from './FooterTerminal';
import FooterMinimal from './FooterMinimal';
import FooterShowcase from './FooterShowcase';
import FooterBento from './FooterBento';
import FooterFlipboard from './FooterFlipboard';

const footerComponents = {
  vibes: FooterVibes,
  terminal: FooterTerminal,
  minimal: FooterMinimal,
  showcase: FooterShowcase,
  bento: FooterBento,
  flipboard: FooterFlipboard,
} as const;

export default function FooterShell() {
  const { variant } = useThemeVariant();
  const FooterComponent = footerComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <FooterComponent />
    </div>
  );
}
