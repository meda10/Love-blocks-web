<template>
  <div>
    <Head :title="title" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'

export default defineComponent({
  name: 'AppLayout',
  components: {
    Head,
  },
  props: {
    title: String,
  },
})
</script>
