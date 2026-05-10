import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set the base path to match your repository name for GitHub Pages
  basePath: isProd ? "/portfolio" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio' : '',
  },
};

export default nextConfig;
