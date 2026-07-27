import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // No source in public/img is wider than 1800px, so 2048/3840 would only
    // duplicate the 1920 output. 1366 fills the 1200->1920 gap.
    // 1600 is deliberately absent: the built-in optimizer never returns for
    // that width on several sources (sharp encodes them in ~1s on its own),
    // which left 1440px-wide viewports waiting on a hero image forever.
    deviceSizes: [640, 750, 828, 1080, 1200, 1366, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    qualities: [75],
  },
  async headers() {
    return [
      {
        // Content-hashed by filename: a replaced asset must get a new name.
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
