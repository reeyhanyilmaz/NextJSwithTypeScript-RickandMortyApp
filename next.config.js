/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  //images error verdiği için yazdık, tekrar npm run dev dediğimizde ekrana basacak resimleri.
  images: {
    domains: ["rickandmortyapi.com"],

    //image optimization için
    loader: "custom",
    path: "/"
  }
}

module.exports = nextConfig
