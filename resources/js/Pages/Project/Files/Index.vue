<template>
  <Head :title="title" />
  <n-card :title="title">
    <n-data-table
      ref="tableRef"
      :columns="columns"
      :data="files"
      :pagination="pagination"
    />
  </n-card>
</template>

<script>
import { h, ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import { NButton } from 'naive-ui'
import { Inertia } from '@inertiajs/inertia'
import Administration from '@/Layouts/Administration'
import useMessaging from '@/messages';

export default {
  name: 'Index',
  components: {
    Head,
  },
  layout: Administration,
  props: {
    projectName: String,
    files: Object,
  },
  setup(props) {
    useMessaging()
    const title = props.projectName + ' files'
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
          return h(NButton, {
            type: 'error',
            size: 'small',
            onClick: () => deleteItem(row.id),
          }, { default: () => 'Delete' })
        },
      },
    ]

    const sortName = () => {
      tableRef.value.sort('name', 'ascend')
    }

    const deleteItem = (id) => {
      Inertia.delete(route('file.destroy', { projectFile: id }))
    }

    return {
      title,
      columns,
      pagination,
      tableRef,
      sortName,
    }
  },
}
</script>

<style scoped>

</style>
