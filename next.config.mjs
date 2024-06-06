import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig = {
     webpack: (config) => {
          config.resolve.alias = {
               ...config.resolve.alias,
               '@': path.resolve(__dirname, './'),
          };
          return config;
     },
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'cdn.sanity.io',
               },
               {
                    protocol: 'https',
                    hostname: 'avatar.vercel.sh',
               },
          ],
     },
     webpack: (config, { isServer }) => {
          config.module.rules.push({
               test: /\.(mp4|webm|ogg|swf|ogv)$/,
               use: [
                    {
                         loader: 'file-loader',
                         options: {
                              publicPath: '/_next/static/videos/',
                              outputPath: 'static/videos/',
                              name: '[name].[hash].[ext]',
                         },
                    },
               ],
          });

          return config;
     },
};
export default nextConfig;