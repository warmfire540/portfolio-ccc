'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import CtaBento from './CtaBento';
import CtaFlipboard from './CtaFlipboard';
import CtaMinimal from './CtaMinimal';
import CtaShowcase from './CtaShowcase';
import CtaTerminal from './CtaTerminal';
import CtaVibes from './CtaVibes';

const ctaComponents = {
  vibes: CtaVibes,
  terminal: CtaTerminal,
  minimal: CtaMinimal,
  showcase: CtaShowcase,
  bento: CtaBento,
  flipboard: CtaFlipboard,
} as const;

export default function CtaShell() {
  const { variant } = useThemeVariant();
  const CtaComponent = ctaComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <CtaComponent />
    </div>
  );
}
