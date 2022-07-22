/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        ssr: true,
        displayName: true,
        meaninglessFileNames: false,
        removeConsole: true,
    },
    images: {
        domains: ['localhost', 'media.rawg.io'],
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
