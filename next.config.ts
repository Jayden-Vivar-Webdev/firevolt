const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
  },
  async redirects() {
    return [
      {
        source: '/fire-training',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fire-safety-consulting',
        destination: '/',
        permanent: true,
      },
      {
        source: '/newpage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/compliance-regulations',
        destination: '/blog', // Assuming general blog page exists
        permanent: true,
      },
      {
        source: '/blog/fire-safety-tips',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/runtime-service-worker.js',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/rss2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/compliance-guide',
        destination: '/all-services',
        permanent: true,
      },
      {
        source: '/emergency-plans',
        destination: '/all-services',
        permanent: true,
      },
      {
        source: '/newpage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fire-protection-maintenance',
        destination: '/all-services',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;





