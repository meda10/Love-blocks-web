<template>
  <n-card>
    <n-tabs :tabs-padding="20" justify-content="space-evenly" pane-style="padding: 20px;" size="large" type="segment">
      <n-tab-pane name="Login">
        <n-form :label-width="80" :model="form" size="medium">
          <n-form-item :feedback="form.errors.email"
                       :validation-status="form.errors.email != null ? 'error' : 'success'"
                       label="E-mail" path="email">
            <n-input v-model:value="form.email" placeholder="E-mail" />
          </n-form-item>
          <n-form-item :feedback="form.errors.password"
                       :validation-status="form.errors.password != null ? 'error' : 'success' "
                       label="Password" path="password">
            <n-input v-model:value="form.password" placeholder="Password" show-password-on="mousedown"
                     type="password" />
          </n-form-item>
          <n-form-item :show-feedback="true" :show-label="false" path="remember">
            <n-space justify="space-between" style="flex-grow: 1">
              <n-checkbox v-model:checked="form.remember">Remember me</n-checkbox>
              <Link v-if="canResetPassword" :href="route('password.request')" class="label-text-alt">
                Forgot your password?
              </Link>
            </n-space>
          </n-form-item>
        </n-form>
        <n-button :block="true" :strong="true" type="primary" @click="submit">Login</n-button>
        <socialstream-providers v-if="$page.props.socialstream.show" />
      </n-tab-pane>
      <n-tab-pane name="Register">
        <n-form :label-width="80" :model="form" size="medium">
          <n-form-item :feedback="form_reg.errors.name"
                       :validation-status="form_reg.errors.name != null ? 'error' : 'success'"
                       label="Name" path="name">
            <n-input v-model:value="form_reg.name" placeholder="Name" />
          </n-form-item>
          <n-form-item :feedback="form_reg.errors.email"
                       :validation-status="form_reg.errors.email != null ? 'error' : 'success'"
                       label="E-mail" path="email">
            <n-input v-model:value="form_reg.email" placeholder="E-mail" />
          </n-form-item>
          <n-form-item :feedback="form_reg.errors.password"
                       :validation-status="form_reg.errors.password != null ? 'error' : 'success'"
                       label="Password" path="password">
            <n-input v-model:value="form_reg.password" placeholder="Password" show-password-on="mousedown"
                     type="password" />
          </n-form-item>
          <n-form-item :feedback="form_reg.errors.password_confirmation"
                       :validation-status="form_reg.errors.password_confirmation != null ? 'error' : 'success'"
                       label="Password" path="password">
            <n-input v-model:value="form_reg.password_confirmation" placeholder="Password" show-password-on="mousedown"
                     type="password" />
          </n-form-item>
        </n-form>
        <n-button :block="true" :strong="true" type="primary" @click="submit_reg">Register</n-button>
        <socialstream-providers v-if="$page.props.socialstream.show" />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import LoginLayout from '@/Layouts/LoginLayout'
import SocialstreamProviders from '@/Socialstream/Providers'

export default {
  metaInfo: { title: 'Login' },
  components: {
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
      form_reg: this.$inertia.form({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
      }),
    }
  },
  methods: {
    submit() {
      this.form
        .transform(data => ({ ...data, remember: this.form.remember ? 'on' : '' }))
        .post(this.route('login'), { onFinish: () => this.form.reset('password') })
    },
    submit_reg() {
      this.form_reg.post(this.route('register'), {
        onFinish: () => this.form_reg.reset('password', 'password_confirmation'),
      })
    },
  },
}
</script>
