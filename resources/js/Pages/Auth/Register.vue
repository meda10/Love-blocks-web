<!--<template>-->
<!--  <div class="tabs tabs-boxed mb-4">-->
<!--    <Link :href="route('login')" class="tab flex-1">Login</Link>-->
<!--    <Link :href="route('register')" class="tab tab-active flex-1">Register</Link>-->
<!--  </div>-->
<!--  <form @submit.prevent="submit">-->
<!--    <FormInput id="name" v-model="form.name" :error="form.errors.name" autocomplete="name" autofocus-->
<!--               label="Name" required type="text" />-->
<!--    <FormInput id="email" v-model="form.email" :error="form.errors.email" label="Email" required type="email" />-->
<!--    <FormInput id="password" v-model="form.password" :error="form.errors.password" autocomplete="new-password"-->
<!--               label="Password" required type="password" />-->
<!--    <FormInput id="password_confirmation" v-model="form.password_confirmation"-->
<!--               :error="form.errors.password_confirmation" autocomplete="new-password" label="Password" required-->
<!--               type="password" />-->
<!--    <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature"-->
<!--         class="flex justify-between items-center py-4">-->
<!--      <label class="cursor-pointer items-center gap-1 inline-flex">-->
<!--        <input v-model="form.terms" checked="checked" class="flex-shrink-0 checkbox" required type="checkbox" />-->
<!--        <span class="label-text">I agree to the <a :href="route('terms.show')"-->
<!--                                                   class="link" target="_blank">Terms of Service</a> and <a-->
<!--          :href="route('policy.show')" class="link" target="_blank">Privacy Policy</a>-->
<!--                </span>-->
<!--        <label v-if="form.errors.terms" class="label">-->
<!--          <span class="label-text-alt">{{ form.errors.terms }}</span>-->
<!--        </label>-->
<!--      </label>-->
<!--    </div>-->
<!--    <div class="justify-center card-actions mt-9">-->
<!--      <ButtonLink :button="true" :disabled="form.processing" component-style="btn w-full btn-primary"-->
<!--                  label="Register" type="submit" />-->
<!--    </div>-->
<!--  </form>-->
<!--  <socialstream-providers v-if="$page.props.socialstream.show" />-->
<!--</template>-->

<!--<script>-->
<!--import { Link } from '@inertiajs/inertia-vue3'-->
<!--import FormInput from '@/Shared/FormInput'-->
<!--import ButtonLink from '@/Shared/ButtonLink'-->
<!--import LoginLayout from '@/Layouts/LoginLayout'-->
<!--import SocialstreamProviders from '@/Socialstream/Providers'-->

<!--export default {-->
<!--  components: {-->
<!--    FormInput,-->
<!--    ButtonLink,-->
<!--    Link,-->
<!--    SocialstreamProviders,-->
<!--  },-->
<!--  layout: LoginLayout,-->
<!--  data() {-->
<!--    return {-->
<!--      form: this.$inertia.form({-->
<!--        name: '',-->
<!--        email: '',-->
<!--        password: '',-->
<!--        password_confirmation: '',-->
<!--        terms: false,-->
<!--      }),-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    submit() {-->
<!--      this.form.post(this.route('register'), {-->
<!--        onFinish: () => this.form.reset('password', 'password_confirmation'),-->
<!--      })-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->
