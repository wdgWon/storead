/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_VARIABLE_URL}/:path*`,
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/public",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/200/300",
      },
      {
        protocol: "https",
        hostname: "shopping-phinf.pstatic.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
