<template>
  <!--  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">-->
  <n-config-provider :theme="darkTheme">
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

export default defineComponent({
  name: 'AppLayout',
  components: {
    SimpleTopPanel,
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
