const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

const nextConfig = withPlugins(
  [
    withCSS,
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
    withFonts,
    withImages,
    withOptimizedImages,
  ],
  {
    webpack: (config, { dev }) => {
      config.resolve.alias['~'] = path.join(__dirname, '/');
      config.resolve.alias.components = path.join(__dirname, 'src/components');
      config.resolve.alias.containers = path.join(__dirname, 'src/containers');
      config.resolve.alias.layouts = path.join(__dirname, 'src/layouts');
      config.resolve.alias.styles = path.join(__dirname, 'src/styles');
      config.resolve.alias.utils = path.join(__dirname, 'src/utils');
      config.resolve.alias.hooks = path.join(__dirname, 'src/hooks');
      config.resolve.alias.routes = path.join(__dirname, 'src/routes');

      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );

      config.module.rules.push({
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/styles/vars.scss', './src/styles/mixins.scss'],
        },
      });

      if (!dev) {
        config.plugins.push(new OptimizeCSSAssetsPlugin({}));
      }

      return config;
    },
  },
);

module.exports = nextConfig;
