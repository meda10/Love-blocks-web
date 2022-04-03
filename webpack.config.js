const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
      vscode: require.resolve('monaco-languageclient/lib/vscode-compatibility'),
    },
    // Needed for love.js
    fallback: {
      fs: false,
      path: false,
      os: false,
      crypto: false,
      stream: false,
      http: false,
      zlib: false,
      https: false,
      child_process: false,
      bufferutil: false,
      tls: false,
      net: false,
      'utf-8-validate': false,
    },
  },
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
}
