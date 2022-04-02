<template>
  <div class="flex flex-row flex-nowrap justify-end">
    <n-space align="center" justify="center">
      <n-button :block="true" :disabled="!owner" :strong="true" size="small" type="primary" @click="downloadToAndroid">
        Download to Android
      </n-button>
      <n-button :block="true" :disabled="!owner" :strong="true" size="small" type="primary" @click="share">
        <template #icon>
          <n-icon>
            <share-icon />
          </n-icon>
        </template>
      </n-button>
    </n-space>
    <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
  </div>
  <n-modal
    v-model:show="showModalRef"
    :mask-closable="false"
    negative-text="Cancel"
    positive-text="Confirm"
    preset="dialog"
    title="Share Project"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick">
    <n-input v-model:value="shareEmail" placeholder="E-mail" />
  </n-modal>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-vue3'
import { h, ref, computed, watch } from 'vue'
import { NIcon, NModal, useMessage } from 'naive-ui'
import {
  PersonOutline as PersonIcon,
  CreateOutline as CreateIcon,
  LogOutOutline as LogOutIcon,
  ShareOutline as ShareIcon,
} from '@vicons/ionicons5'

export default {
  name: 'TopPanel',
  components: {
    NModal,
    ShareIcon,
  },
  props: {
    project: Object,
    owner: Boolean,
  },
  setup(props) {
    const message = useMessage()
    const validationErrors = computed(() => usePage().props.value.errors)
    const activeKey = ref(null)
    const shareEmail = ref(null)
    const currentProject = ref(null)
    const showModalRef = ref(false)
    const user = computed(() => usePage().props.value.user)

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

    watch(validationErrors, () => {
      if (validationErrors.value.email != null) message.error(validationErrors.value.email)
    })

    const onPositiveClick = () => {
      Inertia.post(route('project.share', { project: currentProject.value }), { email: shareEmail.value })
      showModalRef.value = false
    }

    const onNegativeClick = () => {
      showModalRef.value = false
    }

    const share = () => {
      if (user.value != null) {
        shareEmail.value = null
        showModalRef.value = true
        currentProject.value = props.project.id
      } else message.error('Please Sign In')
    }

    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) })
    }

    const downloadToAndroid = () => {
      if (user.value != null) {
        Inertia.get(route('project.download', { project: props.project.id }), {}, {
          preserveState: true,
          preserveScroll: true,
          replace: true,
        })
      } else message.error('Please Sign In')
    }

    return {
      activeKey,
      menuOptions,
      showModalRef,
      shareEmail,
      share,
      downloadToAndroid,
      onPositiveClick,
      onNegativeClick,
    }
  },
}
</script>

<style scoped>

</style>
