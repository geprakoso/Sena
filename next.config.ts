import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Environment variables available in the app (in addition to NEXT_PUBLIC_*)
  env: {
    APP_VERSION: process.env.NEXT_PUBLIC_SITE_VERSION || "0.1.0",
  },
  // Image optimization remote patterns (if using external images)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Experimental features (enable as needed)
  experimental: {
    // typedRoutes: true,
  },
};

export default nextConfig;
