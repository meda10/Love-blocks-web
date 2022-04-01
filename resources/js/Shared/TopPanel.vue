<template>
  <div class="flex flex-row flex-nowrap justify-end">
    <n-space align="center" justify="center">
      <n-button :block="true" :strong="true" size="small" type="primary" @click="downloadToAndroid">
        Download to Android
      </n-button>
    </n-space>
    <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
  </div>
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
} from '@vicons/ionicons5'

export default {
  name: 'TopPanel',
  props: {
    project: Object,
  },
  setup(props) {
    const dialog = useDialog()
    const activeKey = ref(null)
    const user = computed(() => usePage().props.value.user)

    // const getUserProjects = computed(() => Inertia.get(route('project.user', { user: user.value })))
    // console.log(getUserProjects.value)

    const userProjects = () => {
      dialog.success({
        title: 'Success',
        content: 'Cool',
        positiveText: 'Wow!',
        // onPositiveClick: () => {
        //   message.success('Great!')
        // },
      })
    }
    const menuOptions = [
      {
        label: () => h('div', {}, { default: () => user.value === null ? 'Profile' : user.value.name }),
        key: 'profile',
        icon: renderIcon(PersonIcon),
        children: [
          {
            label: () => h(Link, { href: route('profile.show') }, { default: () => 'Edit' }),
            key: 'edit',
            icon: renderIcon(CreateIcon),
          },
          {
            label: () => h(Link, { href: route('project.user') }, { default: () => 'Projects' }),
            key: 'projects',
            icon: renderIcon(CreateIcon),
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
        ],
      },
    ]

    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) })
    }

    const downloadToAndroid = () => {
      Inertia.get(route('project.download', { project: props.project.id }), {}, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
      })
    }

    return {
      downloadToAndroid,
      activeKey,
      menuOptions,
    }
  },
}
</script>

<style scoped>

</style>
