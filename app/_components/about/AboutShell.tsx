'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import AboutBento from './AboutBento';
import AboutFlipboard from './AboutFlipboard';
import AboutMinimal from './AboutMinimal';
import AboutShowcase from './AboutShowcase';
import AboutTerminal from './AboutTerminal';
import AboutVibes from './AboutVibes';

const aboutComponents = {
  vibes: AboutVibes,
  terminal: AboutTerminal,
  minimal: AboutMinimal,
  showcase: AboutShowcase,
  bento: AboutBento,
  flipboard: AboutFlipboard,
} as const;

export default function AboutShell() {
  const { variant } = useThemeVariant();
  const AboutComponent = aboutComponents[variant];

  return (
    <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
      <AboutComponent />
    </div>
  );
}
