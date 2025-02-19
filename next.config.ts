import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'raw-loader',
        'glslify-loader'
      ]
    });
  
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
  
    return config;
  },
};

export default nextConfig;
