<template>
  <div>
    <Head :title="title" />
    <header v-if="$slots.header" class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot name="header" />
      </div>
    </header>

    <!-- Page Content -->
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
