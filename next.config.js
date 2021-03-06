/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                removeViewBox: false,
              },
              {
                prefixIds: {
                  prefix: 'svg',
                },
              },
            ],
          },
        },
      },
    });
    return config;
  },
};
