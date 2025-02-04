import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports if needed
  // output: 'export',
  
  // Add any necessary redirects or rewrites
  async redirects() {
    return [];
  },
  
  // Configure image domains if using next/image
  images: {
    domains: [],
  },
};

export default nextConfig;
