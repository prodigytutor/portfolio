/** @type {import('next').NextConfig} */

// importing env.mjs in your next.config.mjs will make sure
// your environment variables are validated at build time
// https://env.t3.gg/

const nextConfig = {
  reactStrictMode: true,
   output: 'export',
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};

export default nextConfig;
