import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  turbo: {
    enabled: true,
    rules: {
      '*.glsl': {
        loaders: ['ts-shader-loader'],
        as: '*.ts',
      },
    },
  },
  // webpack: (config, { dev, isServer }) => {
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs)$/,
  //     use: ['ts-shader-loader'],
  //     exclude: /node_modules/,
  //   });
  //
  //   if (dev && !isServer) {
  //     config.watchOptions = {
  //       ignored: /node_modules/,
  //       aggregateTimeout: 300,
  //       poll: 1000,
  //     };
  //   }
  //
  //   return config;
  // },
};

export default nextConfig;
