<template>
  <Head :title="title"></Head>
  <top-panel />
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
import { useDialog } from 'naive-ui'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import useMessaging from '@/messages'

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
  setup() {
    useMessaging()
    const title = 'Host project'
    const dialog = useDialog()

    const projectNotSaved = () => {
      dialog.warning({
        title: 'Confirm',
        content: 'You are not signed in! You can use full capabilities of the editor but this project won\'t be saved.',
        positiveText: 'I understand',
      })
    }
    projectNotSaved()

    return {
      title,
    }
  },
}
</script>

<style scoped>

</style>
