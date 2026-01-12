/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Cloudflare Pages compatibility
  output: process.env.CF_PAGES ? 'export' : undefined,
  // Disable features not supported on Cloudflare Pages
  ...(process.env.CF_PAGES && {
    experimental: {
      outputFileTracingIncludes: {
        '/**': ['./data/**', './public/**'],
      },
    },
  }),
}

module.exports = nextConfig
