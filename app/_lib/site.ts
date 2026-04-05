/** Canonical site origin (no trailing slash). Used for metadataBase and absolute URLs. */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? '';
  const trimmed = raw.replace(/\/$/, '');
  return trimmed || 'https://curiouscat.consulting';
}
