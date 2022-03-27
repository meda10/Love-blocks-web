<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
    <n-message-provider>
      <!--      <Head :title="title" />-->
      <slot />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'

export default {
  name: 'ProjetLayout',
  components: {
    Head,
  },
}
</script>

<style scoped>

</style>
