/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000/"]
  }
}

module.exports = nextConfig
