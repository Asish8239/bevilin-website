/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  reactStrictMode: true,

  // Prevent browsers from caching stale JS chunks across builds.
  // Each build already produces content-hashed filenames; this header
  // ensures the browser always re-validates rather than serving a
  // cached chunk that no longer exists on the server.
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML pages must never be cached so the browser always fetches
        // the latest chunk manifest.
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
