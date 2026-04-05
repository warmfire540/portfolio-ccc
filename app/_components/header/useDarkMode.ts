'use client';

import { useTheme } from 'next-themes';
import { useCallback, useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const mounted = () => true;
const notMounted = () => false;

export function useDarkMode() {
  const isMounted = useSyncExternalStore(subscribe, mounted, notMounted);
  const { resolvedTheme, setTheme } = useTheme();
  const dark = isMounted && resolvedTheme === 'dark';

  const toggle = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return { dark, toggle, mounted: isMounted };
}
