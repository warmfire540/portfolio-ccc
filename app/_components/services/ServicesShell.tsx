'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import ServicesBento from './ServicesBento';
import ServicesFlipboard from './ServicesFlipboard';
import ServicesMinimal from './ServicesMinimal';
import ServicesShowcase from './ServicesShowcase';
import ServicesTerminal from './ServicesTerminal';
import ServicesVibes from './ServicesVibes';

const servicesComponents = {
  vibes: ServicesVibes,
  terminal: ServicesTerminal,
  minimal: ServicesMinimal,
  showcase: ServicesShowcase,
  bento: ServicesBento,
  flipboard: ServicesFlipboard,
} as const;

export default function ServicesShell() {
  const { variant } = useThemeVariant();
  const ServicesComponent = servicesComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <ServicesComponent />
    </div>
  );
}
