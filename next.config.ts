import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // add more if you use them:
      // { protocol: "https", hostname: "res.cloudinary.com" },
      // { protocol: "https", hostname: "*.s3.amazonaws.com" }, // wildcards not allowed; list exact host
    ],
  },
};

export default nextConfig;
