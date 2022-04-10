<template>
  <n-card>
    <n-h1 class="card-title">Password reset</n-h1>
    <n-p>
      Forgot your password? No problem. Just let us know your email address and we will email you a password
      reset link that will allow you to choose a new one.
    </n-p>
    <n-form :label-width="80" :model="form" size="medium">
      <n-form-item :feedback="form.errors.email"
                   :validation-status="form.errors.email != null ? 'error' : 'success'"
                   label="Email" path="email">
        <n-input v-model:value="form.email" placeholder="Email" />
      </n-form-item>
      <n-button :block="true" :strong="true" attr-type="submit" type="primary">Email Password Reset Link</n-button>
    </n-form>
  </n-card>
</template>

<script>
import LoginLayout from '@/Layouts/LoginLayout'

export default {
  layout: LoginLayout,
  props: {
    status: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: '',
      }),
    }
  },
  methods: {
    submit() {
      this.form.post(this.route('password.email'))
    },
  },
}
</script>
