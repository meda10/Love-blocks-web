<template>
  <h2 class="card-title">Password reset</h2>
  <p>
    Forgot your password? No problem. Just let us know your email address and we will email you a password
    reset link that will allow you to choose a new one.
  </p>
  <form @submit.prevent="submit">
    <FormInput v-model="form.email" :error="form.errors.email" label="Email" required type="email" />
    <div class="justify-center card-actions">
      <ButtonLink :button="true" :disabled="form.processing" component-style="btn w-full btn-primary"
                  label="Email Password Reset Link" type="submit" />
    </div>
  </form>
</template>

<script>
import FormInput from '@/Shared/FormInput'
import ButtonLink from '@/Shared/ButtonLink'
import LoginLayout from '@/Layouts/LoginLayout'

export default {
  components: {
    FormInput,
    ButtonLink,
  },
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
