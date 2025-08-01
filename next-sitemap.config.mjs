
const sitemapConfig = {
  siteUrl: 'https://www.firevolt.com.au',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,


  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default sitemapConfig;