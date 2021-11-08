<template>
  <Head title="Home" />
  <h1>HOMESCREAN</h1>
  <ButtonLink :href="route('login')" component-style="btn btn-primary" label="Login" />
  <ButtonLink :href="route('register')" component-style="btn btn-primary" label="Register" />
  <ButtonLink :href="route('blocks')" component-style="btn btn-primary" label="Blockly" />
  <form class="w-full" @submit.prevent="logout">
    <ButtonLink :button="true" component-style="btn btn-primary" label="Log Out" type="submit" />
  </form>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout'
import ButtonLink from '@/Shared/ButtonLink'
import { Inertia } from '@inertiajs/inertia'

export default {
  name: 'Home',
  components: {
    Head,
    ButtonLink,
  },
  layout: AppLayout,
  setup() {
    const logout = () => {
      Inertia.post(route('logout'))
    }
    return {
      logout,
    }
  },
}
</script>

<style>
</style>
