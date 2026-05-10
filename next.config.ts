import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path to match your repository name for GitHub Pages
  basePath: '/Updated-Portfolio',
  // Ensure that links work correctly on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
