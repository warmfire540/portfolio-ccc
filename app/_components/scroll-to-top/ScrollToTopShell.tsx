'use client';

import { useThemeVariant } from '@/app/_lib/theme';
import ScrollToTopVibes from './ScrollToTopVibes';
import ScrollToTopTerminal from './ScrollToTopTerminal';
import ScrollToTopMinimal from './ScrollToTopMinimal';
import ScrollToTopShowcase from './ScrollToTopShowcase';
import ScrollToTopBento from './ScrollToTopBento';
import ScrollToTopFlipboard from './ScrollToTopFlipboard';

const scrollToTopComponents = {
  vibes: ScrollToTopVibes,
  terminal: ScrollToTopTerminal,
  minimal: ScrollToTopMinimal,
  showcase: ScrollToTopShowcase,
  bento: ScrollToTopBento,
  flipboard: ScrollToTopFlipboard,
} as const;

export default function ScrollToTopShell() {
  const { variant } = useThemeVariant();
  const Component = scrollToTopComponents[variant];

  return <Component />;
}
