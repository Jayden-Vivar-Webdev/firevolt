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
      // Add more redirects as needed
    ];
  },
};

module.exports = nextConfig;





