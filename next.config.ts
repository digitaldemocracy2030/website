import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Add trailingSlash for better compatibility with static file serving
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  output: 'export',
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  basePath: process.env.NEXT_PUBLIC_PR_NUMBER ? `/pr-preview/pr-${process.env.NEXT_PUBLIC_PR_NUMBER}` : '',
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default nextConfig
