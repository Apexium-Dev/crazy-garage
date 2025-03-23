/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    path: '/crazy-garage/_next/image'
  },
  basePath: '/crazy-garage', // Replace with your repository name
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  assetPrefix: '/crazy-garage', // Add asset prefix for static files
}

module.exports = nextConfig 