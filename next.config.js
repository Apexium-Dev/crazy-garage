/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/crazy-garage', // Replace with your repository name
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
}

module.exports = nextConfig 