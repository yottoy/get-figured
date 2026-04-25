import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
