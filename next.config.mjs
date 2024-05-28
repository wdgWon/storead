/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NEXT_BASE_URL}/:path*`,
      },
      {
        source: "/naver/books/:path*",
        destination: "https://openapi.naver.com/v1/search/book.json/:path*",
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
