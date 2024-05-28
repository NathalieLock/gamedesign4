/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the directory exists
const ensureDirectoryExistence = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ensure the directory exists on the client-side build
    if (!isServer) {
      ensureDirectoryExistence(path.join(__dirname, "public/_next-video"));
    }
    return config;
  },
};

export default withNextVideo(nextConfig);
