import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable strict mode for better compatibility
  reactStrictMode: false,
};

export default nextConfig;
