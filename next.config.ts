import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio',
  trailingSlash: true,
};

export default nextConfig;
