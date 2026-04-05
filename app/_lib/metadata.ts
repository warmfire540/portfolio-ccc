/** Truncate for meta description (recommended ~150–160 chars) without ugly mid-word cuts. */
export function truncateMetaDescription(text: string, max = 160): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const slice = t.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const body = lastSpace > 80 ? slice.slice(0, lastSpace) : slice;
  return `${body.trimEnd()}…`;
}
