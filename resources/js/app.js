import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import registerBlocks from '@/blocklyCusomBlocks'

// [Native UI]
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
// [Native UI]

require('./bootstrap')

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Löve Blocks'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route } })
      .mount(el)
  },
})

InertiaProgress.init({ color: '#4B5563' })
registerBlocks()
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
