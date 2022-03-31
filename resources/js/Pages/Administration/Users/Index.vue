<template>
  <n-card title="Users">
    <n-data-table
      ref="tableRef"
      :columns="columns"
      :data="users"
      :pagination="pagination"
    />
  </n-card>
</template>

<script>
import Administration from '@/Layouts/Administration'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-vue3'
import { h, ref, watch, computed, onMounted } from 'vue'
import { NButton, useMessage } from 'naive-ui'

export default {
  metaInfo: { title: 'Users' },
  name: 'Index',
  layout: Administration,
  props: {
    filters: Object,
    users: Object,
  },
  setup() {
    const message = useMessage()
    const flash = computed(() => usePage().props.value.flash)

    onMounted(() => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
    })

    watch(flash, () => {
      flash.value.success ? message.success(flash.value.success) : message.error(flash.value.error)
    })

    const pagination = { pageSize: 5 }
    const columns = [
      {
        title: 'Name',
        key: 'name',
        defaultSortOrder: 'ascend',
        sorter: 'default',
      },
      {
        title: 'E-mail',
        key: 'email',
        sorter: 'default',
        // sorter: (row1, row2) => row1.age - row2.age,
      },
      {
        title: 'Action',
        key: 'actions',
        render(row) {
          return h(NButton, {
            type: 'error',
            size: 'small',
            onClick: () => deleteItem(row.id),
            // onClick: () => flashMessage(row.id),
          }, { default: () => 'Delete' })
        },
      },
    ]

    const tableRef = ref(null)
    const sortName = () => {
      tableRef.value.sort('name', 'ascend')
    }
    const sortEmail = () => {
      tableRef.value.sort('email', 'ascend')
    }

    const deleteItem = (id) => {
      Inertia.delete(route('user.destroy', { user: id }))
    }
    return {
      columns,
      pagination,
      tableRef,
      sortName,
      sortEmail,
      deleteItem,
    }
  },
}
</script>
