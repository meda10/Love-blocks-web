<template>
  <n-message-provider>
    <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
      <Head :title="title" />
      <div class="">
        <slot />
      </div>
    </n-config-provider>
  </n-message-provider>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { Head, usePage } from '@inertiajs/inertia-vue3'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'Administration',
  components: {
    Head,
  },
  props: {
    title: String,
  },
})
</script>
