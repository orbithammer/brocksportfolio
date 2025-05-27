import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Enable static export for Netlify deployment
  output: 'export',
  
  // Add trailing slash to URLs for better static hosting compatibility
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Configure base path if deploying to a subdirectory (adjust if needed)
  // basePath: '',
  
  // Ensure compatibility with static hosting
  distDir: 'out',
  
  // Optional: Configure redirects if needed
  // async redirects() {
  //   return []
  // }
}

export default nextConfig