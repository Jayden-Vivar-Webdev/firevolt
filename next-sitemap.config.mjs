import blogSlugs from './blog-urls.json' assert { type: "json" };

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
