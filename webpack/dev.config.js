const { merge } = require('webpack-merge');

const baseConfig = require('./base.config');
const paths = require('./paths');

// const proxyConfigs = require('./proxyConfig');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },

  performance: {
    hints: false,
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT,
    open: true,
    static: {
      directory: paths.appBuild,
    },
    devMiddleware: {
      stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        modules: false,
        performance: true,
        hash: false,
        version: false,
        timings: true,
        warnings: true,
        children: false,
      },
    },
    // proxy: proxyConfig,
  },
});
