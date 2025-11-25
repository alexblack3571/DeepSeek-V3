/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove these lines:
  // output: 'export',
  // basePath: '/your-base-path',
  images: {
    unoptimized: true, // Optional: Only needed if you're using static exports
  },
};

module.exports = nextConfig;