import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for static export (GitHub Pages)
  output: "export",
  
  // Conditional basePath for GitHub Pages
  // In production (GitHub Actions), use /crazy-garage prefix
  // In development, use empty string for localhost
  basePath: process.env.NODE_ENV === 'production' ? '/crazy-garage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crazy-garage' : '',

  // Disable Next.js Image Optimization for static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Optimize package imports
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration for static export
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;
