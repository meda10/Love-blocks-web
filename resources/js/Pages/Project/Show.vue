<template>
  <Head :title="title" />
  <top-panel :owner="owner" :project="project" />
  <div class="flex-grow">
    <splitpanes class="default-theme" style="height: 100%">
      <pane min-size="25">
        <editor />
      </pane>
      <pane>
        <splitpanes horizontal>
          <pane>
            <Interpret :game-package="gamePackage" :project="project" />
          </pane>
          <pane>
            3
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
  <slot name="interpret" />
</template>

<script>
import ProjectLayout from '@/Layouts/ProjectLayout'
import { computed, onUnmounted } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import Interpret from '@/Pages/Project/Interpret/Interpret'
import useListeners from '@/keyListeners'

export default {
  name: 'Show',
  components: {
    Interpret,
    Editor,
    Head,
    Splitpanes,
    Pane,
    TopPanel,
  },
  layout: ProjectLayout,
  props: {
    project: Object,
    owner: Boolean,
    gamePackage: Object,
  },
  setup(props) {
    const { keyPressListener } = useListeners()
    const title = computed(() => props.project.name)

    onUnmounted(() => {
      console.log('UNMOUNT')
      console.log('Turning off game mode')
      window.addEventListener('keypress', keyPressListener, true)
      window.addEventListener('keydown', keyPressListener, true)
      window.addEventListener('keyup', keyPressListener, true)
    })

    return {
      title,
    }
  },
}
</script>

<style scoped>

</style>
