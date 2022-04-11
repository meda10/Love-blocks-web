<template>
  <Head :title="title" />
  <top-panel />
  <div class="flex-grow">
    <splitpanes class="default-theme" style="height: 100%">
      <pane>
        <div ref="editorPaneResizeRef" class="h-full w-full">
          <div ref="btnEditor" class="absolute mt-2 z-50">
            <div class=" flex flex-row flex-nowrap">
              <n-button v-show="editorShow" :disabled="editMonacoRef"
                        class="flex-shrink" size="small" style="margin-right: 0.5rem"
                        type="error" @click="editMonacoRef = !editMonacoRef">
                Edit
              </n-button>
              <n-button :type="'primary'" class="flex-shrink" size="small"
                        style="margin-right: 0.5rem" @click="changeEditor">
                {{ btnText }}
              </n-button>
            </div>
          </div>
          <Blockly v-if="!editorShow" :project="null"
                   :save-code="changeEditorRef" :save-workspace="saveWorkspaceRef"
                   @passCodeToMonaco="passCodeToMonaco" />
          <editor v-if="editorShow" :config-lua="'config'" :edit-monaco="editMonacoRef" :main-lua="mainLuaCode"
                  :project="null"
                  :save-monaco="saveWorkspaceRef" />
        </div>
      </pane>
      <pane>
        <splitpanes horizontal>
          <pane>
            <n-space align="center" class="h-full w-full" justify="center">
              <n-p>Interpret will not work, you need to Sign in</n-p>
            </n-space>
          </pane>
          <pane>
            3
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
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

export default {
  name: 'Show',
  components: {
    Editor,
    Head,
    Splitpanes,
    Pane,
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
    const editorPaneResizeRef = ref(null)
    const btnEditor = ref(null)
    const btnText = ref('Code')
    const mainLuaCode = ref('')

    const projectNotSaved = () => {
      dialog.warning({
        title: 'Confirm',
        content: 'You are not signed in! You can use full capabilities of the editor but this project won\'t be saved.',
        positiveText: 'I understand',
      })
    }
    projectNotSaved()

    const switchEditors = () => {
      editorShow.value = !editorShow.value
      btnText.value === 'Code' ? btnText.value = 'Blocks' : btnText.value = 'Code'
    }

    const passCodeToMonaco = (code) => {
      mainLuaCode.value = code
      switchEditors()
    }

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

    useResizeObserver(editorPaneResizeRef, () => {
      const position = window.innerWidth - editorPaneResizeRef.value.getBoundingClientRect().right
      btnEditor.value.style.right = position + 'px'
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
      onPositiveClick,
      passCodeToMonaco,
      changeEditor,
    }
  },
}
</script>

<style scoped>

</style>
