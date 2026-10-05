import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Allow LAN devices (phones/tablets) to load dev JS resources so the page hydrates
  allowedDevOrigins: ["192.168.1.4", "192.168.137.1", "192.168.1.*", "192.168.137.*"],
};

export default nextConfig;
