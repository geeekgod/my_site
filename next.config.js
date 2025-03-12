/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["geeekgod.in", "www.geeekgod.in"],
  },
  experimental: {
    reactCompiler: true,
  }
};

module.exports = nextConfig;
