import type { NextConfig } from 'next';

const config: NextConfig = {
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
  },
  images: {},
  trailingSlash: true,

};

export default config;
