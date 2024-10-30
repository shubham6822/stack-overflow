/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        mdxRs: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*'
            },
            {
                protocol: 'http',
                hostname: '*'
            },
        ]
    },
     eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
