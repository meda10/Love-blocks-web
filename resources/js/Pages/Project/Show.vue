<template>
  <div>Project SHOW</div>
</template>

<script>
import ProjectLayout from '@/Layouts/ProjectLayout'
import { useMessage } from 'naive-ui'
import { computed, watch, onMounted } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'

export default {
  name: 'Show',
  metaInfo: { title: 'Project' },
  layout: ProjectLayout,
  props: {
    project: Object,
  },
  setup() {
    const message = useMessage()
    const flash = computed(() => usePage().props.value.flash)

    onMounted(() => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
    })

    watch(flash, () => {
      console.log('watch')
      console.log(flash.value.success)
      flash.value.success ? message.success(flash.value.success) : message.error(flash.value.error)
    })

    return {}
  },
}
</script>

<style scoped>

</style>
