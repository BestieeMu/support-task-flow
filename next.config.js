/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com","images.unsplash.com" , "img.freepik.com", "media0.giphy.com", "cdn.sanity.io", "i.pinimg.com"],
        // unoptimized: true,
      },
}

module.exports = nextConfig
