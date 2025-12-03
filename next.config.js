/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.qr-space.si',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig

