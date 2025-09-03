/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://georgewanyoike.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'monthly',
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom transform for specific sections
    const sectionPriorities = {
      '/': 1.0,
      '/#about': 0.9,
      '/#skills': 0.8,
      '/#experience': 0.8,
      '/#certifications': 0.8,
      '/#contact': 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: sectionPriorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};