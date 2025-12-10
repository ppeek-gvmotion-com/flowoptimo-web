/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["flowoptimo.com"],
  },
  async redirects() {
    return [
      {
        source: "/signup",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/signup`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
