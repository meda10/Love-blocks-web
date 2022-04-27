<template>
  <div class="mb-16 bg-dark-gray flex flex-row flex-nowrap justify-end">
    <n-space align="center">
      <n-button :block="true" size="small" type="primary" @click="createProject">
        Create Project
      </n-button>
      <n-button :block="true" size="small" type="primary" @click="openTutorials">
        Tutorials
      </n-button>
    </n-space>
    <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
  </div>
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
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-vue3'
import { h, ref, computed } from 'vue'
import { NIcon, useDialog } from 'naive-ui'
import {
  PersonOutline as PersonIcon,
  CreateOutline as CreateIcon,
  LogOutOutline as LogOutIcon,
  DownloadOutline as DownloadIcon,
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
} from '@vicons/ionicons5'

export default {
  name: 'SimpleTopPanel',
  setup() {
    const dialog = useDialog()
    const showModalRef = ref(false)
    const projectName = ref(null)
    const activeKey = ref(null)
    const user = computed(() => usePage().props.value.user)

    const menuOptions = [
      {
        label: () => h('div', {}, { default: () => user.value === null ? 'Profile' : user.value.name }),
        key: 'profile',
        icon: renderIcon(PersonIcon),
        children: [
          {
            label: () => h('div', {
              onClick: () => Inertia.get(route('home')),
            }, { default: () => 'Home' }),
            key: 'home',
            icon: renderIcon(HomeIcon),
          },
          {
            label: () => h('div', {
              onClick: () => Inertia.get(route('profile.show')),
            }, { default: () => 'Edit' }),
            key: 'edit',
            icon: renderIcon(CreateIcon),
          },
          {
            label: () => h('div', { onClick: () => Inertia.get(route('project.user')) }, { default: () => 'Projects' }),
            key: 'projects',
            icon: renderIcon(BookIcon),
          },
          {
            label: () => h('a', { href: route('apk.download') }, { default: () => 'Love block APK' }),
            key: 'apk',
            icon: renderIcon(DownloadIcon),
          },
          {
            label: () => h(user.value === null ? Link : 'div', user.value === null
              ? { href: route('login') }
              : {
                onClick: () => {
                  user.value === null ? Inertia.post(route('login')) : Inertia.post(route('logout'))
                },
              }, { default: () => user.value === null ? 'Sign In' : 'Sign Out' },
            ),
            key: 'signOut',
            icon: renderIcon(LogOutIcon),
          },
          {
            label: () => h('div', { onClick: () => Inertia.get(route('user.index')) }, { default: () => 'Administration' }),
            key: 'administration',
            icon: renderIcon(BookIcon),
          },
        ],
      },
    ]

    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) })
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

    const openTutorials = () => {
      Inertia.get(route('tutorials'))
    }

    return {
      activeKey,
      menuOptions,
      showModalRef,
      projectName,
      onNegativeClick,
      onPositiveClick,
      createProject,
      openTutorials,
    }
  },
}
</script>
