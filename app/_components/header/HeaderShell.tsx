'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import HeaderVibes from './HeaderVibes';
import HeaderTerminal from './HeaderTerminal';
import HeaderMinimal from './HeaderMinimal';
import HeaderShowcase from './HeaderShowcase';
import HeaderBento from './HeaderBento';
import HeaderFlipboard from './HeaderFlipboard';

const headerComponents = {
  vibes: HeaderVibes,
  terminal: HeaderTerminal,
  minimal: HeaderMinimal,
  showcase: HeaderShowcase,
  bento: HeaderBento,
  flipboard: HeaderFlipboard,
} as const;

export default function HeaderShell() {
  const { variant } = useThemeVariant();
  const HeaderComponent = headerComponents[variant];

  return <HeaderComponent />;
}
