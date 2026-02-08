import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  basePath: '/Phase-2', // Adjust base path for GitHub Pages deployment
  trailingSlash: true, // Add trailing slashes to URLs for GitHub Pages compatibility
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

export default nextConfig;
