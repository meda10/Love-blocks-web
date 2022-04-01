<template>
  <Head :title="title"></Head>
  <top-panel :project="project" />
  <div class="flex-grow">
    <splitpanes class="default-theme" style="height: 100%">
      <pane min-size="25">
        <editor />
      </pane>
      <pane>
        <splitpanes horizontal>
          <pane>2</pane>
          <pane>3</pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
  <slot name="interpret" />
</template>

<script>
import ProjectLayout from '@/Layouts/ProjectLayout'
import { useMessage } from 'naive-ui'
import { computed, watch, onMounted } from 'vue'
import { usePage, Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Editor'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'

export default {
  name: 'Show',
  components: {
    Editor,
    Head,
    Splitpanes,
    Pane,
    TopPanel,
  },
  layout: ProjectLayout,
  props: {
    project: Object,
  },
  setup(props) {
    const title = computed(() => props.project.name)
    const message = useMessage()
    const flash = computed(() => usePage().props.value.flash)

    onMounted(() => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
    })

    watch(flash, () => {
      if (flash.value.success != null) message.success(flash.value.success)
      if (flash.value.error != null) message.error(flash.value.error)
    })

    return {
      title,
    }
  },
}
</script>

<style scoped>

</style>
