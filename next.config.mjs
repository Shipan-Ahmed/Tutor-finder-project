/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Covers i.ibb.co.com, s.ibb.co.com, etc.
      }
    ],
  },
};

export default nextConfig;