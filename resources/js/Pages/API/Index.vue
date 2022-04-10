<template>
  <app-layout title="API Tokens">
    <template #header>
      <h2 class="font-semibold text-xl text-white leading-tight">
        API Tokens
      </h2>
    </template>

    <div>
      <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <api-token-manager :available-permissions="availablePermissions"
                           :default-permissions="defaultPermissions"
                           :tokens="tokens" />
      </div>
    </div>
  </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue'
import AppLayout from '@/Layouts/AppLayout.vue'

export default defineComponent({
  props: [
    'tokens',
    'availablePermissions',
    'defaultPermissions',
  ],

  components: {
    ApiTokenManager,
    AppLayout,
  },
})
</script>
