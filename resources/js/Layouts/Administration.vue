<template>
  <!--    <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">-->
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <div class="">
        <slot />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'Administration',
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
