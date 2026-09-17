/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static output — deploys as plain files to Vercel or Cloudflare Pages.
  output: 'export',
  trailingSlash: true,
  images: {
    // No Image Optimization server in a static export.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
