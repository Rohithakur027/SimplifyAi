import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "/**", // Allow all paths under pixabay.com
      },
    ],
  },
  // other config options here
};

export default nextConfig;
