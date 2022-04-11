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
import { Inertia } from '@inertiajs/inertia'
import { h, ref } from 'vue'
import { NButton } from 'naive-ui'
import useMessaging from '@/messages'
import AppLayout from '@/Layouts/AppLayout'

export default {
  metaInfo: { title: 'Users' },
  name: 'Index',
  layout: AppLayout,
  props: {
    filters: Object,
    users: Object,
  },
  setup() {
    useMessaging()

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
