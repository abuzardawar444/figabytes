import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "media-usim-live.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
