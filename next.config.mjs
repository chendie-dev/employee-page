/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/path/:path*',
        headers: [
          { key: 'Cache-Control', value: 'max-age=0, must-revalidate' },
        ],
      },
    ]
  },
}

export default nextConfig
