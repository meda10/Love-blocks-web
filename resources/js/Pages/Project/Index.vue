<template>
  <Head title="My Projects" />
  <n-card title="My projects">
    <n-data-table
      ref="tableRef"
      :columns="columns"
      :data="projects"
      :pagination="pagination"
    />
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
</template>

<script>
import Administration from '@/Layouts/Administration'
import { Inertia } from '@inertiajs/inertia'
import { Head, usePage } from '@inertiajs/inertia-vue3'
import { h, ref, computed, onMounted, watch } from 'vue'
import { NButton, NButtonGroup, useMessage } from 'naive-ui'

export default {
  name: 'Index',
  components: {
    Head,
  },
  layout: Administration,
  props: {
    projects: Object,
  },
  setup() {
    const message = useMessage()
    const flash = computed(() => usePage().props.value.flash)
    const validationErrors = computed(() => usePage().props.value.errors)
    const shareEmail = ref(null)
    const currentProject = ref(null)
    const showModalRef = ref(false)
    const tableRef = ref(null)
    const pagination = { pageSize: 5 }
    const columns = [
      {
        title: 'Name',
        key: 'name',
        defaultSortOrder: 'ascend',
        sorter: 'default',
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
          }, { default: () => 'open' })
          const deleteBtn = h(NButton, {
            type: 'error',
            size: 'small',
            onClick: () => deleteItem(row.id),
          }, { default: () => 'Delete' })
          const shareBtn = h(NButton, {
            type: 'info',
            size: 'small',
            onClick: () => shareItem(row.id),
          }, { default: () => 'Share' })
          return h(NButtonGroup, () => [openBtn, shareBtn, deleteBtn])
        },
      },
    ]

    onMounted(() => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
      if (validationErrors.value.email != null) message.error(validationErrors.value.email)
    })

    watch(flash, () => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
    })

    const onPositiveClick = () => {
      Inertia.post(route('project.share', { project: currentProject.value }), { email: shareEmail.value })
      showModalRef.value = false
    }

    const onNegativeClick = () => {
      showModalRef.value = false
    }

    const sortName = () => {
      tableRef.value.sort('name', 'ascend')
    }

    const shareItem = (id) => {
      shareEmail.value = null
      showModalRef.value = true
      currentProject.value = id
    }

    const deleteItem = (id) => {
      Inertia.delete(route('project.destroy', { project: id }))
    }

    const openItem = (id) => {
      Inertia.get(route('project.show', { project: id }))
    }

    return {
      columns,
      pagination,
      tableRef,
      shareEmail,
      showModalRef,
      sortName,
      onNegativeClick,
      onPositiveClick,
    }
  },
}
</script>
