import process from 'process';
import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const config: NextConfig = {
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
  },
  eslint: {
    ignoreDuringBuilds: true,
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

export default bundleAnalyzer(config);
