<template>
  <Head :title="title" />
  <top-panel :owner="owner" :project="project" @pageLeave="pageLeave" />
  <div class="flex-grow">
    <splitpanes class="default-theme" style="height: 100%">
      <pane>
        <div ref="editorPane" class="h-full w-full">
          <div ref="btnEditor" class="absolute mt-2 z-50">
            <div class=" flex flex-row flex-nowrap">
              <n-button :strong="true" :type="'primary'" class="flex-shrink" size="small"
                        style="margin-right: 0.5rem" @click="changeEditor">
                {{ btnText }}
              </n-button>
            </div>
          </div>
          <Blockly v-if="!editorShow" :project="project" :save-code="changeEditorRef"
                   :save-workspace="saveBlocklyWorkspaceRef" :workspace="project.workspace"
                   @passCodeToMonaco="passCodeToMonaco" @saveWorkspace="saveBlocklyWorkspace" />
          <editor v-if="editorShow" :code="codeFromBlockly" :save-monaco="changeEditorRef"
                  @saveCode="saveCodeFromMonaco" />
        </div>
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
</template>

<script>
import ProjectLayout from '@/Layouts/ProjectLayout'
import { computed, onUnmounted, ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import Blockly from '@/Pages/Project/Blockly/Blockly'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import Interpret from '@/Pages/Project/Interpret/Interpret'
import useListeners from '@/keyListeners'
import { useResizeObserver } from '@vueuse/core/index'
import { Inertia } from '@inertiajs/inertia';

export default {
  name: 'Show',
  components: {
    Interpret,
    Head,
    Splitpanes,
    Pane,
    TopPanel,
    Editor,
    Blockly,
  },
  layout: ProjectLayout,
  props: {
    project: Object,
    owner: Boolean,
    gamePackage: Object,
    conf: String,
  },
  setup(props) {
    const { keyPressListener } = useListeners()
    const title = computed(() => props.project.name)
    const changeEditorRef = ref(false)
    const saveBlocklyWorkspaceRef = ref(false)
    const editorShow = ref(false)
    const editorPane = ref(null)
    const btnEditor = ref(null)
    const btnText = ref('Code')
    const codeFromBlockly = ref('')

    const pageLeave = () => {
      saveBlocklyWorkspaceRef.value = !saveBlocklyWorkspaceRef.value
    }

    const saveBlocklyWorkspace = (workspace, code) => {
      Inertia.post(route('project.update', { project: props.project }), { workspace: workspace, main: code })
    }

    const switchEditors = () => {
      editorShow.value = !editorShow.value
      btnText.value === 'Code' ? btnText.value = 'Block' : btnText.value = 'Code'
    }

    const passCodeToMonaco = (code) => {
      codeFromBlockly.value = code
      switchEditors()
      console.log('Code from blockly:')
      console.log(codeFromBlockly.value)
    }

    const saveCodeFromMonaco = (code) => {
      switchEditors()
      //todo
    }

    useResizeObserver(editorPane, () => {
      const position = window.innerWidth - editorPane.value.getBoundingClientRect().right
      btnEditor.value.style.right = position + 'px'
    })

    const changeEditor = () => {
      changeEditorRef.value = !changeEditorRef.value
    }

    onUnmounted(() => {
      console.log('Turning off game mode')
      window.addEventListener('keypress', keyPressListener, true)
      window.addEventListener('keydown', keyPressListener, true)
      window.addEventListener('keyup', keyPressListener, true)
    })

    return {
      title,
      editorShow,
      editorPane,
      btnEditor,
      btnText,
      changeEditorRef,
      saveBlocklyWorkspaceRef,
      codeFromBlockly,
      changeEditor,
      passCodeToMonaco,
      saveCodeFromMonaco,
      saveBlocklyWorkspace,
      pageLeave,
    }
  },
}
</script>

<style scoped>

</style>
