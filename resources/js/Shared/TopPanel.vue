<template>
  <div class="bg-dark-gray flex flex-row flex-nowrap justify-between">
    <n-space align="center" justify="center">
      <h5 class="mb-0 ml-6 font-bold">{{ project.name }}</h5>
    </n-space>
    <div class="bg-dark-gray flex flex-row flex-nowrap justify-end">
      <n-space align="center">
        <n-button :type="'primary'" class="flex-shrink" size="small" style="margin-right: 0.5rem" @click="saveProject">
          <template #icon>
            <n-icon>
              <save-icon />
            </n-icon>
          </template>
        </n-button>
      </n-space>
      <n-menu v-model:value="activeProfileMenu" :options="projectMenuOptions" mode="horizontal" />
      <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
    </div>
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
  <n-modal
    v-model:show="showTutorialModalRef"
    :mask-closable="false"
    negative-text="Cancel"
    preset="dialog"
    title="Open tutorial"
    @negative-click="onNegativeTutorialClick">
    <n-space justify="space-between">
      <n-h5>Load image to the game</n-h5>
      <n-button :type="'primary'" class="flex-shrink" size="small" @click="loadTutorial(1)">Open</n-button>
    </n-space>
    <n-space justify="space-between">
      <n-h5>Check if key is presed</n-h5>
      <n-button :type="'primary'" class="flex-shrink" size="small" @click="loadTutorial(2)">Open</n-button>
    </n-space>
    <n-space justify="space-between">
      <n-h5>Move object</n-h5>
      <n-button :type="'primary'" class="flex-shrink" size="small" @click="loadTutorial(3)">Open</n-button>
    </n-space>
    <n-space justify="space-between">
      <n-h5>How to shoot</n-h5>
      <n-button :type="'primary'" class="flex-shrink" size="small" @click="loadTutorial(4)">Open</n-button>
    </n-space>
  </n-modal>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-vue3'
import { h, ref, computed, watch } from 'vue'
import { NIcon, NModal, useDialog, useMessage } from 'naive-ui'
import {
  PersonOutline as PersonIcon,
  CreateOutline as CreateIcon,
  LogOutOutline as LogOutIcon,
  BookOutline as BookIcon,
  ShareOutline as ShareIcon,
  DownloadOutline as DownloadIcon,
  SaveOutline as SaveIcon,
  HomeOutline as HomeIcon,
  FileTrayOutline as TutorialIcon,
} from '@vicons/ionicons5'

export default {
  name: 'TopPanel',
  components: {
    NModal,
    SaveIcon,
  },
  props: {
    project: Object,
    owner: Boolean,
  },
  emits: ['pageLeave', 'loadTutorial'],
  setup(props, { emit }) {
    const message = useMessage()
    const dialog = useDialog()
    const validationErrors = computed(() => usePage().props.value.errors)
    const activeKey = ref(null)
    const activeProfileMenu = ref(null)
    const shareEmail = ref(null)
    const currentProject = ref(null)
    const showShareModalRef = ref(false)
    const showTutorialModalRef = ref(false)
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
            disabled: !props.owner || user.value === null,
            icon: renderIcon(ShareIcon),
          },
          {
            label: () => h('div', { onClick: () => downloadToAndroid() }, { default: () => 'Download to Android' }),
            key: 'download',
            disabled: user.value === null,
            icon: renderIcon(DownloadIcon),
          },
          {
            label: () => h('div', { onClick: () => goProjectFiles() }, { default: () => 'Files' }),
            key: 'files',
            disabled: user.value === null,
            icon: renderIcon(BookIcon),
          },
          {
            label: () => h('div', { onClick: () => openTutorials() }, { default: () => 'Tutorials' }),
            key: 'tutorials',
            icon: renderIcon(TutorialIcon),
          },
        ],
      },
    ]

    const openTutorials = () => {
      showTutorialModalRef.value = true
    }

    const onNegativeTutorialClick = () => {
      showTutorialModalRef.value = false
    }

    const loadTutorial = (code) => {
      emit('loadTutorial', code)
      showTutorialModalRef.value = false
    }

    const goProjectFiles = () => {
      if (user.value != null) {
        emit('pageLeave')
        dialog.warning({
          title: 'Confirm',
          content: 'Do you want to leave this page?',
          positiveText: 'Yes',
          negativeText: 'Not Sure',
          onPositiveClick: () => {
            Inertia.get(route('project.files', { project: props.project }))
          },
        })
      } else message.error('Please Sign in.')
    }

    const goProfileShow = () => {
      emit('pageLeave')
      dialog.warning({
        title: 'Confirm',
        content: 'Do you want to leave this page?',
        positiveText: 'Yes',
        negativeText: 'Not Sure',
        onPositiveClick: () => {
          Inertia.get(route('profile.show'))
        },
      })
    }

    const goProjectUser = () => {
      emit('pageLeave')
      dialog.warning({
        title: 'Confirm',
        content: 'Do you want to leave this page?',
        positiveText: 'Yes',
        negativeText: 'Not Sure',
        onPositiveClick: () => {
          Inertia.get(route('project.user'))
        },
      })
    }

    const goHome = () => {
      emit('pageLeave')
      dialog.warning({
        title: 'Confirm',
        content: 'Do you want to leave this page?',
        positiveText: 'Yes',
        negativeText: 'Not Sure',
        onPositiveClick: () => {
          Inertia.get(route('home'))
        },
      })
    }

    const menuOptions = [
      {
        label: () => h('div', {}, { default: () => user.value === null ? 'Profile' : user.value.name }),
        key: 'profile',
        icon: renderIcon(PersonIcon),
        children: [
          {
            label: () => h('div', { onClick: () => goHome() }, { default: () => 'Home' }),
            key: 'home',
            icon: renderIcon(HomeIcon),
          },
          {
            label: () => h('div', { onClick: () => goProfileShow() }, { default: () => 'Edit' }),
            key: 'edit',
            icon: renderIcon(CreateIcon),
          },
          {
            label: () => h('div', { onClick: () => goProjectUser() }, { default: () => 'Projects' }),
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
        ],
      },
    ]

    watch(validationErrors, () => {
      if (validationErrors.value.email != null) message.error(validationErrors.value.email)
      if (validationErrors.value.file != null) message.error(validationErrors.value.file)
    })

    const saveProject = () => {
      emit('pageLeave')
    }

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
      } else message.error('Please Sign in.')
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
      } else message.error('Please Sign in.')
    }

    return {
      activeKey,
      activeProfileMenu,
      menuOptions,
      projectMenuOptions,
      showShareModalRef,
      showTutorialModalRef,
      shareEmail,
      share,
      downloadToAndroid,
      onPositiveClick,
      onNegativeClick,
      onNegativeTutorialClick,
      saveProject,
      loadTutorial,
    }
  },
}
</script>
