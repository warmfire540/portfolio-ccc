'use client';

import { createContext, useContext } from 'react';

export const VARIANTS = [
  'vibes',
  'terminal',
  'minimal',
  'showcase',
  'bento',
  'flipboard',
] as const;

export type ThemeVariant = (typeof VARIANTS)[number];

export const DEFAULT_VARIANT: ThemeVariant = 'vibes';

export const VARIANT_LABELS: Record<ThemeVariant, string> = {
  vibes: 'Vibes',
  terminal: 'Terminal',
  minimal: 'Minimal',
  showcase: 'Interactive',
  bento: 'Bento',
  flipboard: 'Flip board',
};

interface ThemeVariantContextValue {
  variant: ThemeVariant;
  setVariant: (v: ThemeVariant) => void;
}

export const ThemeVariantContext = createContext<ThemeVariantContextValue>({
  variant: DEFAULT_VARIANT,
  setVariant: () => {},
});

export function useThemeVariant() {
  return useContext(ThemeVariantContext);
}
