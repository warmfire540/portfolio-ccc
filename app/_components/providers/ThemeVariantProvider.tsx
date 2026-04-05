'use client';

import { useState, useCallback } from 'react';
import {
  ThemeVariantContext,
  VARIANTS,
  type ThemeVariant,
} from '@/app/_lib/theme';

function getRandomVariant(): ThemeVariant {
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
}

export default function ThemeVariantProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState<ThemeVariant>(getRandomVariant);

  const setVariantCallback = useCallback((v: ThemeVariant) => {
    setVariant(v);
  }, []);

  return (
    <ThemeVariantContext value={{ variant, setVariant: setVariantCallback }}>
      <div data-variant={variant}>{children}</div>
    </ThemeVariantContext>
  );
}
