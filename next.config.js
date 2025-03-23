/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: '/crazy-garage', // Replace with your repository name
  assetPrefix: '/crazy-garage', // Add asset prefix for static files
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
}

module.exports = nextConfig 