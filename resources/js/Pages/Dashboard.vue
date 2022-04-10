<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-white leading-tight">
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-dark-gray overflow-hidden shadow-xl sm:rounded-lg">
          <welcome />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import Welcome from '@/Jetstream/Welcome.vue'

export default defineComponent({
  components: {
    AppLayout,
    Welcome,
  },
})
</script>
