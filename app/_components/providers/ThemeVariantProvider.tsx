'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  ThemeVariantContext,
  DEFAULT_VARIANT,
  VARIANTS,
  type ThemeVariant,
} from '@/app/_lib/theme';

const STORAGE_KEY = 'ccc-theme-variant';

export default function ThemeVariantProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState<ThemeVariant>(DEFAULT_VARIANT);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VARIANTS.includes(stored as ThemeVariant)) {
      setVariant(stored as ThemeVariant);
    }
  }, []);

  const setVariantCallback = useCallback((v: ThemeVariant) => {
    setVariant(v);
    localStorage.setItem(STORAGE_KEY, v);
  }, []);

  return (
    <ThemeVariantContext value={{ variant, setVariant: setVariantCallback }}>
      <div data-variant={variant}>{children}</div>
    </ThemeVariantContext>
  );
}
