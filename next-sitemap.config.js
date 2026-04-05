/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Static export: next-sitemap reads `out/` and writes sitemap + robots there (see getStaticExportConfigPreset).
  output: 'export',
  siteUrl: process.env.SITE_URL || 'https://curiouscat.consulting',
  generateRobotsTxt: true,
  // Single sitemap file is enough; skip index-sitemap indirection.
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
