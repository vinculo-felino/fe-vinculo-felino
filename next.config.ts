import { NextConfig } from "next";

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["ts", "tsx", "mdx"],
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Para desarrollo, permite imágenes locales sin optimización
  },
} satisfies NextConfig;

export default nextConfig;
