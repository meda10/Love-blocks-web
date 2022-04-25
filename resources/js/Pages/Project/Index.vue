<template>
  <Head title="My Projects" />
  <n-card title="My projects">
    <n-space :size="12" :vertical="true">
      <n-space>
        <n-button icon-placement="right" size="small" type="primary" @click="createProject">
          Create Project
        </n-button>
      </n-space>
      <n-data-table ref="tableRef" :columns="columns" :data="projects" :pagination="pagination" />
    </n-space>
  </n-card>
  <n-card title="Tutorials" class="mt-16">
    <n-space :size="12" :vertical="true">
      <n-data-table ref="tableRef" :columns="columnsTutorials" :data="tutorials" :pagination="pagination" />
    </n-space>
  </n-card>
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
  <n-modal
    v-model:show="showModalProjectRef"
    :mask-closable="false"
    negative-text="Cancel"
    positive-text="Create"
    preset="dialog"
    title="Project Name"
    @positive-click="onPositiveProjectClick"
    @negative-click="onNegativeProjectClick">
    <n-input v-model:value="projectName" placeholder="Project name" />
  </n-modal>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, usePage } from '@inertiajs/inertia-vue3'
import { h, ref, computed, onMounted } from 'vue'
import { NButton, NButtonGroup } from 'naive-ui'
import useMessaging from '@/messages'

export default {
  name: 'Index',
  components: {
    Head,
  },
  layout: AppLayout,
  props: {
    projects: Object,
    tutorials: Object,
  },
  setup() {
    const { message } = useMessaging()
    const validationErrors = computed(() => usePage().props.value.errors)
    const shareEmail = ref(null)
    const currentProject = ref(null)
    const showModalRef = ref(false)
    const showModalProjectRef = ref(false)
    const projectName = ref(null)
    const tableRef = ref(null)
    const pagination = { pageSize: 5 }
    const columnsTutorials = [
      {
        title: 'Name',
        key: 'name',
        defaultSortOrder: 'ascend',
        sorter: 'default',
      },
      {
        title: 'Action',
        key: 'actions',
        render(row) {
          return h(NButton, {
            type: 'info',
            size: 'small',
            onClick: () => copyItem(row.id),
          }, { default: () => 'Copy to my projects' })
        },
      },
    ]

    const columns = [
      {
        title: 'Name',
        key: 'name',
        defaultSortOrder: 'ascend',
        sorter: 'default',
      },
      {
        title: 'Path',
        key: 'path',
      },
      {
        title: 'Created at',
        key: 'created_at',
        // sorter: 'default',
        // sorter: (row1, row2) => row1.age - row2.age,
      },
      {
        title: 'Action',
        key: 'actions',
        render(row) {
          const openBtn = h(NButton, {
            type: 'info',
            size: 'small',
            onClick: () => openItem(row.id),
          }, { default: () => 'Open' })
          const deleteBtn = h(NButton, {
            type: 'error',
            size: 'small',
            disabled: !row.owner,
            onClick: () => deleteItem(row.id),
          }, { default: () => 'Delete' })
          const shareBtn = h(NButton, {
            type: 'info',
            size: 'small',
            disabled: !row.owner,
            onClick: () => shareItem(row.id),
          }, { default: () => 'Share' })
          const copyBtn = h(NButton, {
            type: 'info',
            size: 'small',
            onClick: () => copyItem(row.id),
          }, { default: () => 'Copy' })
          return h(NButtonGroup, () => [openBtn, shareBtn, copyBtn, deleteBtn])
        },
      },
    ]

    onMounted(() => {
      if (validationErrors.value.email != null) message.error(validationErrors.value.email)
    })

    const onPositiveClick = () => {
      Inertia.post(route('project.share', { project: currentProject.value }), { email: shareEmail.value })
      showModalRef.value = false
    }

    const onNegativeClick = () => {
      showModalRef.value = false
    }

    const onPositiveProjectClick = () => {
      Inertia.post(route('project.create'), { name: projectName.value })
      showModalProjectRef.value = false
    }

    const onNegativeProjectClick = () => {
      showModalProjectRef.value = false
    }

    const sortName = () => {
      tableRef.value.sort('name', 'ascend')
    }

    const shareItem = (id) => {
      shareEmail.value = null
      showModalRef.value = true
      currentProject.value = id
    }

    const copyItem = (id) => {
      Inertia.get(route('project.copy', { project: id }))
    }

    const deleteItem = (id) => {
      Inertia.delete(route('project.destroy', { project: id }))
    }

    const openItem = (id) => {
      Inertia.get(route('project.show', { project: id }))
    }

    const createProject = () => {
      showModalProjectRef.value = true
      projectName.value = null
    }

    return {
      columns,
      columnsTutorials,
      pagination,
      tableRef,
      shareEmail,
      showModalRef,
      showModalProjectRef,
      projectName,
      sortName,
      onNegativeClick,
      onPositiveClick,
      createProject,
      onPositiveProjectClick,
      onNegativeProjectClick,
    }
  },
}
</script>
