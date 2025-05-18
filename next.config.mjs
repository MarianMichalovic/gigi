/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  experimental: {
    // Removing optimizeCss to fix the 'critters' module error
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
