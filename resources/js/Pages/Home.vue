<template>
  <Head title="Home" />
  <h1>Home</h1>
  <n-divider />
  <Link :href="route('project.user')">Projects</Link>
  <Link :href="route('login')">Login</Link>
  <n-space align="center" justify="center">
    <n-button :block="true" :strong="true" size="small" type="primary" @click="logout">
      Log out
    </n-button>
    <n-button :block="true" :strong="true" size="small" type="primary" @click="createProject">
      Create Project
    </n-button>
  </n-space>
  <n-modal
    v-model:show="showModalRef"
    :mask-closable="false"
    negative-text="Cancel"
    positive-text="Create"
    preset="dialog"
    title="Project Name"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick">
    <n-input v-model:value="projectName" placeholder="Project name" />
  </n-modal>
</template>

<script>
import { Head, usePage, Link } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout'
import { Inertia } from '@inertiajs/inertia'
import { mdiMoonWaningCrescent, mdiWeatherSunny } from '@mdi/js'
import { useDialog } from 'naive-ui'
import { computed, ref } from 'vue'
import useMessaging from '@/messages'

export default {
  name: 'Home',
  components: {
    Head,
    Link,
  },
  layout: AppLayout,
  setup() {
    useMessaging()
    const dialog = useDialog()
    const user = computed(() => usePage().props.value.user)
    const showModalRef = ref(false)
    const projectName = ref(null)

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

    const onPositiveClick = () => {
      Inertia.post(route('project.create'), { name: projectName.value })
      showModalRef.value = false
    }

    const onNegativeClick = () => {
      showModalRef.value = false
    }

    const createProjectNotSignedIn = () => {
      dialog.warning({
        title: 'Confirm',
        content: 'You are not signed in! If you create project your data won\'t be saved',
        positiveText: 'Create',
        negativeText: 'Cancel',
        onPositiveClick: () => {
          Inertia.get(route('project.host'))
        },
      })
    }

    const createProjectSignedIn = () => {
      showModalRef.value = true
      projectName.value = null
    }

    const createProject = () => {
      user.value === null ? createProjectNotSignedIn() : createProjectSignedIn()
    }

    return {
      theme,
      projectName,
      showModalRef,
      mdiWeatherSunny,
      mdiMoonWaningCrescent,
      logout,
      changeTheme,
      onNegativeClick,
      onPositiveClick,
      createProject,
    }
  },
}
</script>

<style>
</style>
