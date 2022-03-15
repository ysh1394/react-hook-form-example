/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: false,
  rewrites: async () => {
    return [{ destination: "/api/heartbeat", source: "/heartbeat" }];
  },
  swcMinify: true,
};
