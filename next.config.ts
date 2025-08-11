import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable both App Router and Pages Router
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
