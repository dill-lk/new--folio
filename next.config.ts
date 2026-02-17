import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure proper asset prefix for static hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  basePath: '',
};

export default nextConfig;
