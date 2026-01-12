// Cloudflare-specific Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Use static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
