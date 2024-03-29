<template>
  <jet-action-section>
    <template #title>
      Browser Sessions
    </template>

    <template #description>
      Manage and log out your active sessions on other browsers and devices.
    </template>

    <template #content>
      <div class="max-w-xl text-sm text-white">
        If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your
        recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been
        compromised, you should also update your password.
      </div>

      <!-- Other Browser Sessions -->
      <div v-if="sessions.length > 0" class="mt-5 space-y-6">
        <div v-for="(session, i) in sessions" :key="i" class="flex items-center">
          <div>
            <svg v-if="session.agent.is_desktop" class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <path
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>

            <svg v-else class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect height="16" rx="1" width="10" x="7" y="4"></rect>
              <path d="M11 5h2M12 17v.01"></path>
            </svg>
          </div>

          <div class="ml-3">
            <div class="text-sm text-white">
              {{ session.agent.platform ? session.agent.platform : 'Unknown' }} -
              {{ session.agent.browser ? session.agent.browser : 'Unknown' }}
            </div>

            <div>
              <div class="text-xs text-white">
                {{ session.ip_address }},

                <span v-if="session.is_current_device" class="text-green-500 font-semibold">This device</span>
                <span v-else>Last active {{ session.last_active }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-5">
        <jet-button @click="confirmLogout">
          Log Out Other Browser Sessions
        </jet-button>

        <jet-action-message :on="form.recentlySuccessful" class="ml-3">
          Done.
        </jet-action-message>
      </div>

      <!-- Log Out Other Devices Confirmation Modal -->
      <jet-dialog-modal :show="confirmingLogout" @close="closeModal">
        <template #title>
          Log Out Other Browser Sessions
        </template>

        <template #content>
          Please enter your password to confirm you would like to log out of your other browser sessions across all of
          your devices.

          <div class="mt-4">
            <jet-input ref="password" v-model="form.password" class="mt-1 block w-3/4"
                       placeholder="Password"
                       type="password"
                       @keyup.enter="logoutOtherBrowserSessions" />

            <jet-input-error :message="form.errors.password" class="mt-2" />
          </div>
        </template>

        <template #footer>
          <jet-secondary-button @click="closeModal">
            Cancel
          </jet-secondary-button>

          <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-3"
                      @click="logoutOtherBrowserSessions">
            Log Out Other Browser Sessions
          </jet-button>
        </template>
      </jet-dialog-modal>
    </template>
  </jet-action-section>
</template>

<script>
import { defineComponent } from 'vue'
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetActionSection from '@/Jetstream/ActionSection.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetDialogModal from '@/Jetstream/DialogModal.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetInputError from '@/Jetstream/InputError.vue'
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'

export default defineComponent({
  props: ['sessions'],

  components: {
    JetActionMessage,
    JetActionSection,
    JetButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton,
  },

  data() {
    return {
      confirmingLogout: false,

      form: this.$inertia.form({
        password: '',
      }),
    }
  },

  methods: {
    confirmLogout() {
      this.confirmingLogout = true

      setTimeout(() => this.$refs.password.focus(), 250)
    },

    logoutOtherBrowserSessions() {
      this.form.delete(route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset(),
      })
    },

    closeModal() {
      this.confirmingLogout = false

      this.form.reset()
    },
  },
})
</script>
