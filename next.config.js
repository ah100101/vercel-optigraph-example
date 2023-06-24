/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bank.opti-demo.xyz',
        port: '',
        pathname: '/globalassets/**',
      },
    ],
  },
}

module.exports = nextConfig
