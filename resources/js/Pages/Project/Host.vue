<template>
  <Head :title="title" />
  <top-panel :owner="false" :project="null" @loadTutorial="loadTutorial" />
  <splitpanes class="default-theme flex-grow max-h-screen, h-4/5">
    <pane>
      <div ref="editorPaneResizeRef" class="h-full w-full">
        <div ref="btnEditor" class="absolute mt-2 z-50">
          <div class=" flex flex-row flex-nowrap">
            <n-button v-show="editorShow" :disabled="editMonacoRef" class="flex-shrink" size="small"
                      style="margin-right: 0.5rem" type="error" @click="editMonacoRef = !editMonacoRef">
              Edit
            </n-button>
            <n-button :type="'primary'" class="flex-shrink" size="small" style="margin-right: 0.5rem"
                      @click="changeEditor">
              {{ btnText }}
            </n-button>
          </div>
        </div>
        <Blockly v-if="!editorShow" :project="blocklyProject" :save-code="changeEditorRef"
                 :save-workspace="saveWorkspaceRef"
                 @passCodeToMonaco="passCodeToMonaco" @saveWorkspace="saveBlocklyWorkspace" />
        <editor v-if="editorShow" :config-lua="''" :edit-monaco="editMonacoRef" :main-lua="mainLuaCode"
                :project="null" :save-monaco="saveWorkspaceRef" />
      </div>
    </pane>
    <pane>
      <splitpanes horizontal class="h-full">
        <pane size="40">
          <n-space align="center" class="h-full w-full" justify="center">
            <n-p>Interpret will not work, you need to Sign in</n-p>
          </n-space>
        </pane>
        <pane size="60">
          <n-scrollbar>
            <Tutorial :tutorial="tutorialRef" />
          </n-scrollbar>
        </pane>
      </splitpanes>
    </pane>
  </splitpanes>
  <n-modal
    v-model:show="showModalRef"
    :mask-closable="false"
    negative-text="Cancel"
    positive-text="Switch"
    preset="dialog"
    title="Discard changes"
    @positive-click="onPositiveClick">
    If you switch back to block editor, your changes will be discarded. It is not possible to transfer code from text to
    blocks.
  </n-modal>
</template>

<script>
import ProjectLayout from '@/Layouts/ProjectLayout'
import { useDialog } from 'naive-ui'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import useMessaging from '@/messages'
import { onUnmounted, ref } from 'vue'
import { useResizeObserver } from '@vueuse/core/index'
import Blockly from '@/Pages/Project/Blockly/Blockly'
import Tutorial from '@/Pages/Tutorials/Tutorial/Tutorial'

export default {
  name: 'Show',
  components: {
    Editor,
    Head,
    Splitpanes,
    Pane,
    Tutorial,
    TopPanel,
    Blockly,
  },
  layout: ProjectLayout,
  setup() {
    useMessaging()
    const title = 'Host project'
    const dialog = useDialog()
    const changeEditorRef = ref(false)
    const editMonacoRef = ref(false)
    const showModalRef = ref(false)
    const saveWorkspaceRef = ref(false)
    const editorShow = ref(false)
    const tutorialRef = ref(1)
    const editorPaneResizeRef = ref(null)
    const btnEditor = ref(null)
    const btnText = ref('Code')
    const mainLuaCode = ref('')
    const blocklyProject = { blockly_workspace: null }

    /**
     * Display dialog thet projects will not be saved
     */
    const projectNotSaved = () => {
      dialog.warning({
        title: 'Confirm',
        content: 'You are not signed in! You can use full capabilities of the editor but this project won\'t be saved.',
        positiveText: 'I understand',
      })
    }
    projectNotSaved()

    /**
     * Open tutorial by ID
     * @param tutorial
     */
    const loadTutorial = (tutorial) => {
      tutorialRef.value = tutorial
    }

    /**
     * Switch between Blockly and Monaco editor
     */
    const switchEditors = () => {
      editorShow.value = !editorShow.value
      btnText.value === 'Code' ? btnText.value = 'Blocks' : btnText.value = 'Code'
    }

    /**
     * Pass code from Blockly to Monaco
     * @param code
     */
    const passCodeToMonaco = (code) => {
      mainLuaCode.value = code
      switchEditors()
    }

    /**
     * Check if you can change editors
     */
    const changeEditor = () => {
      if (editMonacoRef.value) showModalRef.value = true
      else {
        if (changeEditorRef.value) {
          switchEditors()
        }
        changeEditorRef.value = !changeEditorRef.value
        editMonacoRef.value = false
      }
    }

    const onPositiveClick = () => {
      switchEditors()
      editMonacoRef.value = false
      changeEditorRef.value = !changeEditorRef.value
    }

    /**
     * Resize Blockly based on editorPaneResizeRef
     */
    useResizeObserver(editorPaneResizeRef, () => {
      const position = window.innerWidth - editorPaneResizeRef.value.getBoundingClientRect().right
      btnEditor.value.style.right = position + 'px'
    })

    /**
     * Save Blockly worksapce to variable
     * @param workspace
     */
    const saveBlocklyWorkspace = (workspace) => {
      blocklyProject.blockly_workspace = workspace
    }

    onUnmounted(() => {
      blocklyProject.blockly_workspace = null
    })

    return {
      title,
      editorShow,
      editorPaneResizeRef: editorPaneResizeRef,
      btnEditor,
      btnText,
      changeEditorRef,
      editMonacoRef,
      showModalRef,
      saveWorkspaceRef,
      mainLuaCode,
      blocklyProject,
      tutorialRef,
      saveBlocklyWorkspace,
      loadTutorial,
      onPositiveClick,
      passCodeToMonaco,
      changeEditor,
    }
  },
}
</script>

<style scoped>

</style>
