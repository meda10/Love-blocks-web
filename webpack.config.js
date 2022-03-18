const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
      vscode: require.resolve('monaco-languageclient/lib/vscode-compatibility'),
    },
  },
  // Cache Busting
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
}
