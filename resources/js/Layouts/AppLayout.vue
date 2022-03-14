<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
    <n-message-provider>
      <!--      <div>-->
      <Head :title="title" />
      <!--        <main>-->
      <slot />
      <!--        </main>-->
      <!--      </div>-->
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'AppLayout',
  components: {
    Head,
  },
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
