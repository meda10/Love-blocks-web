<template>
  <Head title="Home" />
  <h1>HOMESCREAN</h1>
  <ButtonLink :href="route('login')" component-style="btn btn-primary" label="Login" />
  <ButtonLink :href="route('register')" component-style="btn btn-primary" label="Register" />
  <ButtonLink :href="route('blocks')" component-style="btn btn-primary" label="Blockly" />
  <form class="w-full" @submit.prevent="logout">
    <ButtonLink :button="true" component-style="btn btn-primary" label="Log Out" type="submit" />
  </form>
  <button class="btn btn-square btn-ghost" @click="changeTheme">
    <Icon :path="theme === 'dark' ? mdiWeatherSunny : mdiMoonWaningCrescent" :size="24" />
  </button>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout'
import ButtonLink from '@/Shared/ButtonLink'
import { Inertia } from '@inertiajs/inertia'
import { mdiMoonWaningCrescent, mdiWeatherSunny } from '@mdi/js'
import { ref } from 'vue'
import Icon from '@/Shared/Icon'

export default {
  name: 'Home',
  components: {
    Head,
    ButtonLink,
    Icon,
  },
  layout: AppLayout,
  setup() {
    const theme = ref(localStorage.getItem('theme'))

    if (theme.value === null || theme.value === undefined || theme.value === '') {
      localStorage.setItem('theme', 'dark')
      theme.value = localStorage.getItem('theme')
    }

    const changeTheme = () => {
      theme.value = localStorage.getItem('theme')
      if (theme.value === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      }
      theme.value = localStorage.getItem('theme')
    }

    const logout = () => {
      Inertia.post(route('logout'))
    }
    return {
      logout,
      theme,
      changeTheme,
      mdiWeatherSunny,
      mdiMoonWaningCrescent,
    }
  },
}
</script>

<style>
</style>
