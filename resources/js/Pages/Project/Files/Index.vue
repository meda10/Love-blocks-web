<template>
  <Head :title="title" />
  <n-card title="Project Files">
    <n-space :size="12" vertical>
      <n-space>
        <n-upload ref="uploadRef" :custom-request="fileUpload" :default-upload="true" :show-file-list="false">
          <n-button icon-placement="right" size="small" type="primary">
            <template #icon>
              <n-icon>
                <upload-icon />
              </n-icon>
            </template>
            Upload File
          </n-button>
        </n-upload>
      </n-space>
      <n-data-table ref="tableRef" :columns="columns" :data="files" :pagination="pagination" />
    </n-space>
  </n-card>
</template>

<script>
import { h, ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import { NButton } from 'naive-ui'
import { Inertia } from '@inertiajs/inertia'
import AppLayout from '@/Layouts/AppLayout'
import useMessaging from '@/messages'
import {
  CloudUploadOutline as UploadIcon,
} from '@vicons/ionicons5'

export default {
  name: 'Index',
  components: {
    UploadIcon,
    Head,
  },
  layout: AppLayout,
  props: {
    project: Object,
    files: Object,
  },
  setup(props) {
    useMessaging()
    const uploadRef = ref(null)
    const title = props.project.name + ' files'
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
        title: 'Image path',
        key: 'path',
        // sorter: 'default',
        // sorter: (row1, row2) => row1.age - row2.age,
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

    const fileUpload = ({ file }) => {
      Inertia.post((route('file.upload', { project: props.project })), { file: file.file })
    }

    return {
      uploadRef,
      title,
      columns,
      pagination,
      tableRef,
      sortName,
      fileUpload,
    }
  },
}
</script>
