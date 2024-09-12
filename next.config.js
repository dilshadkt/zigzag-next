/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Change "http" to "https"
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
