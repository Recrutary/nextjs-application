/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api-docs',
        destination: '/swagger-ui.html',
      },
    ];
  },
};

export default nextConfig;
