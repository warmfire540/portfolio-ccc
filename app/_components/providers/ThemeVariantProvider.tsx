'use client';

import { useState, useCallback } from 'react';
import {
  ThemeVariantContext,
  DEFAULT_VARIANT,
  type ThemeVariant,
} from '@/app/_lib/theme';

export default function ThemeVariantProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState<ThemeVariant>(DEFAULT_VARIANT);

  const setVariantCallback = useCallback((v: ThemeVariant) => {
    setVariant(v);
  }, []);

  return (
    <ThemeVariantContext value={{ variant, setVariant: setVariantCallback }}>
      <div data-variant={variant}>{children}</div>
    </ThemeVariantContext>
  );
}
