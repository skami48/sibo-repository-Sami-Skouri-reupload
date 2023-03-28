const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com", "images.prismic.io", "localhost"],
  },
};

module.exports = nextConfig;
