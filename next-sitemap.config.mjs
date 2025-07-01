const blogSlugs = [
  "fire-extingusher-requirements-brisbane",
  "fire-saftey-compliance-brisbane",
  "fire-extinguisher-servicing-brisbane"
]

export default {
  siteUrl: 'https://www.firevolt.com.au',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    return blogSlugs.map((slug) => ({
      loc: `${config.siteUrl}/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
