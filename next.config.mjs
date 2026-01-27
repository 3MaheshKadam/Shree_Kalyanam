/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingExcludes: {
    '*': ['./api/session']
  }
};

export default nextConfig;
