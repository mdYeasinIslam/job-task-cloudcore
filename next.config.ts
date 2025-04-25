import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://admin.refabry.com/storage/product/**')], // 👈 Add allowed image domain(s)
  },
};

export default nextConfig;
