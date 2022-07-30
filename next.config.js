/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        ssr: true,
        displayName: false,
        meaninglessFileNames: true,
        removeConsole: false,
    },
    images: {
        domains: ['localhost', 'media.rawg.io'],
        formats: ['image/avif', 'image/webp'],
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
};

module.exports = nextConfig;
