<template>
  <Head title="Terms of Service" />

  <div class="font-sans text-white antialiased">
    <div class="pt-4 bg-gray-100">
      <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
        <div>
          <jet-authentication-card-logo />
        </div>

        <div class="w-full sm:max-w-2xl mt-6 p-6 bg-dark-gray shadow-md overflow-hidden sm:rounded-lg prose"
             v-html="terms">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Head } from '@inertiajs/inertia-vue3';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue'

export default defineComponent({
  props: ['terms'],

  components: {
    Head,
    JetAuthenticationCardLogo,
  },
})
</script>
