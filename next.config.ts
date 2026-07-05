import type { NextConfig } from "next";

const isPlaywright = process.env.PLAYWRIGHT === "true";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: isPlaywright ? "" : "/multi-step-form", //GitHub Pages subpath
  assetPrefix: isPlaywright ? "" : "/multi-step-form/", // Prefix assets with repo path
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
