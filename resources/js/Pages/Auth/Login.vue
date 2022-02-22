<template>
  <div class="tabs tabs-boxed mb-4">
    <Link :href="route('login')" class="tab tab-active flex-1">Login</Link>
    <Link :href="route('register')" class="tab flex-1">Register</Link>
  </div>
  <form @submit.prevent="submit">
    <FormInput v-model="form.email" :error="form.errors.email" label="Email" required type="email" />
    <FormInput v-model="form.password" :error="form.errors.password" autocomplete="current-password"
               label="Password" required type="password" />
    <div class="flex justify-between items-center pt-4">
      <label class="cursor-pointer items-center gap-1 inline-flex">
        <input v-model="form.remember" checked="checked" class="flex-shrink-0 checkbox" type="checkbox" />
        <span class="label-text">Remember me</span>
      </label>
      <label class="">
        <Link v-if="canResetPassword" :href="route('password.request')" class="label-text-alt">
          Forgot your password?
        </Link>
      </label>
    </div>
    <div class="justify-center card-actions mt-4">
      <ButtonLink :button="true" :disabled="form.processing" component-style="btn w-full btn-primary"
                  label="Login" type="submit" />
    </div>
  </form>
  <socialstream-providers v-if="$page.props.socialstream.show" />
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import FormInput from '@/Shared/FormInput'
import ButtonLink from '@/Shared/ButtonLink'
import LoginLayout from '@/Layouts/LoginLayout'
import SocialstreamProviders from '@/Socialstream/Providers'

export default {
  components: {
    FormInput,
    ButtonLink,
    Link,
    SocialstreamProviders,
  },
  layout: LoginLayout,
  props: {
    canResetPassword: Boolean,
    status: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: '',
        password: '',
        remember: false,
      }),
    }
  },
  methods: {
    submit() {
      this.form
        .transform(data => ({
          ...data,
          remember: this.form.remember ? 'on' : '',
        }))
        .post(this.route('login'), {
          onFinish: () => this.form.reset('password'),
        })
    },
  },
}
</script>
