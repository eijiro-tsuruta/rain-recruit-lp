import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "rain-recruit-lp.vercel.app",
          },
        ],
        destination: "https://recruit.rainaiproject.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
