const mix = require('laravel-mix')
const Components = require('unplugin-vue-components/webpack')
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers')
require('laravel-mix-bundle-analyzer')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js')
  .vue({ version: 3 }) //, extractStyles: 'css/vue-styles.css'
  .webpackConfig((webpack) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
        }),
        Components({ resolvers: [NaiveUiResolver()] }),
      ],
    }
  })
  .extract() // extracts all libraries so it doesn't always load them
  .postCss('resources/css/app.css', 'public/css')
  .webpackConfig(require('./webpack.config'))
  .sourceMaps()

// Add Custom Elements (Vue won't rise error)
mix.options({
  vue: {
    compilerOptions: {
      isCustomElement: tag => {
        return ['field', 'block', 'category', 'xml', 'mutation', 'value', 'shadow', 'sep'].includes(tag)
      },
    },
  },
})

// Add PostCss stuff -> config doesn't load
mix.options({
  postCss: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-purgecss-laravel')({ /* ... */ }),
  ],
})

// Blockly copy assets
// mix.copyDirectory('./node_modules/blockly/media', './storage/app/public/media')

mix.babelConfig({
  plugins: ['@babel/plugin-syntax-dynamic-import'],
})

// if (!mix.inProduction()) {
//   mix.bundleAnalyzer({ analyzerPort: 8000 })
// }

if (mix.inProduction()) {
  mix.version()
}
