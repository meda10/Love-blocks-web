<template>
  <!--  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">-->
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
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

export default {
  name: 'LoginLayout',
  components: {
    NThemeEditor,
  },
  setup() {
    return {
      darkTheme,
    }
  },
}
</script>
