import { parseGithubRepoLink } from '@/app/_lib/parseGithubRepoLink';

const DEFAULT_BRANCH = 'main' as const;
const README_FILE = 'README.md' as const;

function rewriteRelativeMarkdownImageUrls(
  markdown: string,
  owner: string,
  repo: string,
): string {
  const base = `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/${DEFAULT_BRANCH}`;
  const imgRe = /!\[([^\]]*)\]\(([^)]+)\)/g;
  return markdown.replaceAll(imgRe, (full, alt, rawSrc: string) => {
    const src = rawSrc.trim();
    if (/^https?:\/\//i.test(src) || src.startsWith('data:')) return full;
    let path = src.replace(/\s+["'][^"']*["']\s*$/, '').trim();
    if (path.startsWith('./')) path = path.slice(2);
    if (path.startsWith('/')) path = path.slice(1);
    const absolute = `${base}/${path}`;
    return `![${alt}](${absolute})`;
  });
}

/**
 * Loads README at build time from raw.githubusercontent.com when `link` is a repo URL on github.com.
 * @see https://raw.githubusercontent.com/homeassistant-extras/whisker/refs/heads/main/README.md
 */
export async function fetchRepoReadmeMarkdown(
  link: string | undefined,
): Promise<string | null> {
  const parsed = parseGithubRepoLink(link);
  if (!parsed) return null;

  const url = `https://raw.githubusercontent.com/${parsed.owner}/${parsed.repo}/refs/heads/${DEFAULT_BRANCH}/${README_FILE}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const md = await res.text();
    if (!md.trim()) return null;
    return rewriteRelativeMarkdownImageUrls(md, parsed.owner, parsed.repo);
  } catch {
    return null;
  }
}
