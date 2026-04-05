'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import StyleSwitcher from './StyleSwitcher';
import HeroVibes from './HeroVibes';
import HeroTerminal from './HeroTerminal';
import HeroMinimal from './HeroMinimal';
import HeroShowcase from './HeroShowcase';
import HeroBento from './HeroBento';
import HeroFlipboard from './HeroFlipboard';

const heroComponents = {
  vibes: HeroVibes,
  terminal: HeroTerminal,
  minimal: HeroMinimal,
  showcase: HeroShowcase,
  bento: HeroBento,
  flipboard: HeroFlipboard,
} as const;

export default function HeroShell() {
  const { variant } = useThemeVariant();
  const HeroComponent = heroComponents[variant];

  return (
    <>
      <div key={variant} className="animate-[fade-in-up_0.5s_ease-out]">
        <HeroComponent />
      </div>
      <StyleSwitcher />
    </>
  );
}
