/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Change "http" to "https"
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
