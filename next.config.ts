import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/audit",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/audit/",
        destination: "/services/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
