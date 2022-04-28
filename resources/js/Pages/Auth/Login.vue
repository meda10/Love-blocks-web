<template>
  <Head :title="title" />
  <n-card>
    <n-tabs :tabs-padding="20" default-value="Login" justify-content="space-evenly" pane-style="padding: 20px;"
            size="large"
            type="segment"
            @update:value="handleUpdateValue">
      <n-tab-pane name="Login">
        <div class="w-full mb-2">
          <n-text v-if="errors[0] !== null" type="error" class="label-text-alt text-justify">{{ errors[0] }}</n-text>
        </div>
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
        <n-button :block="true" type="primary" @click="submit">Login</n-button>
        <socialstream-providers v-if="$page.props.socialstream.show" />
      </n-tab-pane>
      <n-tab-pane name="Register">
        <n-form :label-width="80" :model="form" size="medium">
          <n-form-item :feedback="registrationForm.errors.name"
                       :validation-status="registrationForm.errors.name != null ? 'error' : 'success'"
                       label="Name" path="name">
            <n-input v-model:value="registrationForm.name" placeholder="Name" />
          </n-form-item>
          <n-form-item :feedback="registrationForm.errors.email"
                       :validation-status="registrationForm.errors.email != null ? 'error' : 'success'"
                       label="E-mail" path="email">
            <n-input v-model:value="registrationForm.email" placeholder="E-mail" />
          </n-form-item>
          <n-form-item :feedback="registrationForm.errors.password"
                       :validation-status="registrationForm.errors.password != null ? 'error' : 'success'"
                       label="Password" path="password">
            <n-input v-model:value="registrationForm.password" placeholder="Password" show-password-on="mousedown"
                     type="password" />
          </n-form-item>
          <n-form-item :feedback="registrationForm.errors.password_confirmation"
                       :validation-status="registrationForm.errors.password_confirmation != null ? 'error' : 'success'"
                       label="Password" path="password">
            <n-input v-model:value="registrationForm.password_confirmation" placeholder="Password"
                     show-password-on="mousedown"
                     type="password" />
          </n-form-item>
        </n-form>
        <n-button :block="true" type="primary" @click="submitReg">Register</n-button>
        <socialstream-providers v-if="$page.props.socialstream.show" />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import { Link, Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import LoginLayout from '@/Layouts/LoginLayout'
import SocialstreamProviders from '@/Socialstream/Providers'
import { ref, computed } from 'vue'

export default {
  components: {
    Link,
    Head,
    SocialstreamProviders,
  },
  layout: LoginLayout,
  props: {
    canResetPassword: Boolean,
    status: String,
  },
  setup() {
    const title = ref('Login')
    const errors = computed(() => usePage().props.value.errors)
    const form = useForm({
      email: '',
      password: '',
      remember: false,
    })

    const registrationForm = useForm({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false,
    })

    const submit = () => {
      form.transform(data => ({ ...data, remember: form.remember ? 'on' : '' }))
        .post(route('login'), { onFinish: () => form.reset('password') })
    }

    const submitReg = () => {
      registrationForm.post(route('register'), {
        onFinish: () => registrationForm.reset('password', 'password_confirmation'),
      })
    }

    const handleUpdateValue = (value) => {
      title.value = value
    }

    return {
      submit,
      submitReg,
      title,
      form,
      registrationForm,
      errors,
      handleUpdateValue,
    }
  },
}
</script>
