/** owner/repo when `link` is a github.com repository URL (any subpath after repo is ignored). */
export function parseGithubRepoLink(
  link: string | undefined,
): { owner: string; repo: string } | null {
  if (!link?.includes('github.com')) return null;
  try {
    const url = new URL(link.trim());
    const host = url.hostname.toLowerCase();
    if (host !== 'github.com' && host !== 'www.github.com') return null;

    const segments = url.pathname.split('/').filter(Boolean);
    if (segments.length < 2) return null;

    const [a0, a1] = segments;
    if (a0 === 'orgs' || a0 === 'settings' || a0 === 'enterprise') return null;

    const owner = a0;
    let repo = a1;
    if (repo.endsWith('.git')) repo = repo.slice(0, -4);

    return { owner, repo };
  } catch {
    return null;
  }
}
