const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
  // Cache Busting
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
};
