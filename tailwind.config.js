const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './vendor/laravel/jetstream/**/*.blade.php',
      './storage/framework/views/*.php',
      './config/*.php',
      './resources/views/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
    ],
    // options: {
    //   safelist: [
    //     /data-theme$/,
    //   ],
    // },
  },

  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Nunito', ...defaultTheme.fontFamily.sans],
  //     },
  //     zIndex: {
  //       '-10': '-10',
  //     },
  //   },
  // },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    // require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
