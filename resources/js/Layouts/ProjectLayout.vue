<template>
  <n-config-provider :theme="darkTheme" :hljs="hljs">
    <n-dialog-provider>
      <n-message-provider>
        <div class="max-h-screen w-full h-screen flex flex-col flex-nowrap">
          <slot />
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script>
import { darkTheme } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import lua from 'highlight.js/lib/languages/lua'

export default {
  name: 'ProjetLayout',
  components: {},
  setup() {
    hljs.registerLanguage('lua', lua)
    return {
      darkTheme,
      hljs,
    }
  },
}
</script>

<style scoped>

</style>
