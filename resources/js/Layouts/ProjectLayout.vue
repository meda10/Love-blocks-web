<template>
  <!--  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">-->
  <n-config-provider :theme="darkTheme">
    <n-dialog-provider>
      <n-message-provider>
        <div class="h-screen flex flex-col flex-nowrap">
          <slot />
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script>
import { darkTheme } from 'naive-ui'

export default {
  name: 'ProjetLayout',
  components: {},
  setup() {
    return {
      darkTheme,
    }
  },
}
</script>

<style scoped>

</style>
