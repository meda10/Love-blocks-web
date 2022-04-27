const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

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
  plugins: [
    new LodashModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src', 'client')],
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'import',
                { libraryName: 'antd', style: true },
                'antd',
              ],
            ],
          },
        }],
      },
    ],
  },
}
