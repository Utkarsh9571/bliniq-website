import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/face-lift-2", destination: "/face-lift", permanent: true },
      { source: "/fat-injection-2", destination: "/fat-injection", permanent: true },
      { source: "/fat-injection-3", destination: "/fat-injection", permanent: true },
      { source: "/chin-implant-2", destination: "/chin-implant", permanent: true },
      { source: "/tummy-tuck-2", destination: "/tummy-tuck", permanent: true },
      { source: "/buccal-fat-pad-removal-2", destination: "/buccal-fat-pad-removal", permanent: true },
      { source: "/dimple-creation-surgery-2", destination: "/dimple-creation-surgery", permanent: true },
      { source: "/double-eyelid-surgery-2", destination: "/double-eyelid-surgery", permanent: true }
    ];
  }
};

export default nextConfig;
