<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
    <n-message-provider>
      <Head :title="title" />
      <div class="flex justify-center items-center h-screen">
        <div class="max-w-md shadow-2xl flex-grow">
          <slot />
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { darkTheme, NThemeEditor } from 'naive-ui'
import { Head } from '@inertiajs/inertia-vue3';

export default {
  name: 'LoginLayout',
  components: {
    NThemeEditor,
    Head,
  },
  setup() {
    return {
      darkTheme,
    }
  },
}
</script>
