/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Static export: next-sitemap reads `out/` and writes sitemap + robots there (see getStaticExportConfigPreset).
  output: 'export',
  siteUrl: process.env.SITE_URL || 'https://curiouscat.consulting',
  generateRobotsTxt: true,
  // Single sitemap file is enough; skip index-sitemap indirection.
  generateIndexSitemap: false,
  // Defaults for anything not handled explicitly in transform (e.g. future routes).
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1,
        lastmod,
      };
    }

    if (path.startsWith('/projects/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod,
      };
    }

    if (
      path === '/brand' ||
      path === '/privacy-policy' ||
      path === '/terms-of-service'
    ) {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.3,
        lastmod,
      };
    }

    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod,
    };
  },
};
