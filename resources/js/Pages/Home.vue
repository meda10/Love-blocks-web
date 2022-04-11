<template>
  <Head title="Home" />
  <n-card>
    <n-h1>Home</n-h1>
    <n-h2>How it works</n-h2>
    <n-h2>Some links</n-h2>
    <a href="">love2d</a>
  </n-card>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout'
import { mdiMoonWaningCrescent, mdiWeatherSunny } from '@mdi/js'
import { ref } from 'vue'
import useMessaging from '@/messages'

export default {
  name: 'Home',
  components: {
    Head,
  },
  layout: AppLayout,
  setup() {
    useMessaging()

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

    return {
      theme,
      mdiWeatherSunny,
      mdiMoonWaningCrescent,
      changeTheme,
    }
  },
}
</script>

<style>
</style>
