<template>
  <n-message-provider>
    <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
      <div class="">
        <slot />
      </div>
    </n-config-provider>
  </n-message-provider>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Administration',
  props: {
    title: String,
  },
})
</script>
