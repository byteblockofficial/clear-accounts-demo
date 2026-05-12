import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/clear-accounts-demo",
  images: { unoptimized: true },
};

export default nextConfig;
