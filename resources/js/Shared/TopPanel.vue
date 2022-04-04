<template>
  <div class="flex flex-row flex-nowrap justify-end">
    <n-menu v-model:value="activeProfileMenu" :options="projectMenuOptions" mode="horizontal" />
    <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
  </div>
  <n-modal
    v-model:show="showShareModalRef"
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
  BookOutline as BookIcon,
  ShareOutline as ShareIcon,
  DownloadOutline as DownloadIcon,
} from '@vicons/ionicons5'

export default {
  name: 'TopPanel',
  components: {
    NModal,
  },
  props: {
    project: Object,
    owner: Boolean,
  },
  setup(props) {
    const message = useMessage()
    const validationErrors = computed(() => usePage().props.value.errors)
    const activeKey = ref(null)
    const activeProfileMenu = ref(null)
    const shareEmail = ref(null)
    const currentProject = ref(null)
    const showShareModalRef = ref(false)
    const user = computed(() => usePage().props.value.user)

    const projectMenuOptions = [
      {
        label: () => h('div', {}, { default: () => 'Project' }),
        key: 'project',
        icon: renderIcon(PersonIcon),
        children: [
          {
            label: () => h('div', { onClick: () => share() }, { default: () => 'Share' }),
            key: 'share',
            disabled: !props.owner,
            icon: renderIcon(ShareIcon),
          },
          {
            label: () => h('div', { onClick: () => downloadToAndroid() }, { default: () => 'Download to Android' }),
            key: 'download',
            icon: renderIcon(DownloadIcon),
          },
          {
            label: () => h(Link, { href: route('project.files', { project: props.project }) }, { default: () => 'Files' }),
            key: 'files',
            icon: renderIcon(BookIcon),
          },
          // {
          //   label: () => h(NUpload, {
          //       ref: uploadRef.value,
          //       customRequest: fileUpload,
          //       // customRequest: () => fileUpload(this),
          //       // action: route('file.upload', { project: props.project }),
          //       defaultUpload: true,
          //       multiple: false,
          //       showFileList: false,
          //     },
          //     { default: () => 'Upload file' }),
          //   key: 'signOut',
          //   icon: renderIcon(UploadIcon),
          // },
        ],
      },
    ]

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
            icon: renderIcon(BookIcon),
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
      if (validationErrors.value.file != null) message.error(validationErrors.value.file)
    })

    const onPositiveClick = () => {
      Inertia.post(route('project.share', { project: currentProject.value }), { email: shareEmail.value })
      showShareModalRef.value = false
    }

    const onNegativeClick = () => {
      showShareModalRef.value = false
    }

    const share = () => {
      if (user.value != null) {
        shareEmail.value = null
        showShareModalRef.value = true
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
      activeProfileMenu,
      menuOptions,
      projectMenuOptions,
      showShareModalRef,
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
