import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
  }
};

export default nextConfig;