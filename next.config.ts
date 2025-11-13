import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
    ],
  },
};

export default nextConfig;
