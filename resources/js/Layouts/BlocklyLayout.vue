<template>
  <Head :title="title" />
  <slot />
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'

export default {
  name: 'BlocklyLayout',
  components: {
    Head,
  },
}
</script>

<style scoped>

</style>
