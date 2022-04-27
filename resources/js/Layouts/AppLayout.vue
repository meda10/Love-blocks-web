<template>
  <!--  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">-->
  <n-config-provider :theme="darkTheme" :hljs="hljs">
    <n-dialog-provider>
      <n-message-provider>
        <simple-top-panel />
        <div class="flex justify-center h-screen">
          <div class="max-w-screen-xl flex-grow">
            <!--            shadow-2xl-->
            <slot />
          </div>
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'
import SimpleTopPanel from '@/Shared/SimpleTopPanel'
import hljs from 'highlight.js/lib/core'
import lua from 'highlight.js/lib/languages/lua'

export default defineComponent({
  name: 'AppLayout',
  components: {
    SimpleTopPanel,
  },
  props: {
    title: String,
  },
  setup() {
    hljs.registerLanguage('lua', lua)
    return {
      darkTheme,
      hljs,
    }
  },
})
</script>
