/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  styledComponents: true,
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig;
