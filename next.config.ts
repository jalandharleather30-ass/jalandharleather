import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable development overlays
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  // Image configuration
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Exclude admin routes from static export
  async generateBuildId() {
    return 'build'
  },
};

export default nextConfig;
