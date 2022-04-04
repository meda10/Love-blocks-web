<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
    <n-dialog-provider>
      <n-message-provider>
        <slot />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'AppLayout',
  props: {
    title: String,
  },
  setup() {
    return {
      darkTheme,
    }
  },
})
</script>
