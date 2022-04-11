<template>
  <Head :title="title" />
  <top-panel :owner="owner" :project="project" @pageLeave="pageLeaveSaveProject" />
  <div class="flex-grow">
    <splitpanes class="default-theme" style="height: 100%">
      <pane>
        <div ref="editorPaneResizeRef" class="h-full w-full">
          <div ref="btnEditor" class="absolute mt-2 z-50">
            <div class=" flex flex-row flex-nowrap">
              <n-button v-show="editorShow" :disabled="editMonacoRef" :strong="true"
                        class="flex-shrink" size="small" style="margin-right: 0.5rem"
                        type="error" @click="editMonacoRef = !editMonacoRef">
                Edit
              </n-button>
              <n-button :strong="true" :type="'primary'" class="flex-shrink" size="small"
                        style="margin-right: 0.5rem" @click="changeEditor">
                {{ btnText }}
              </n-button>
            </div>
          </div>
          <Blockly v-if="!editorShow" :project="project" :save-code="changeEditorRef"
                   :save-workspace="saveWorkspaceRef"
                   @passCodeToMonaco="passCodeToMonaco" @saveWorkspace="saveBlocklyWorkspace" />
          <editor v-if="editorShow" :config-lua="config" :edit-monaco="editMonacoRef" :main-lua="mainLuaCode"
                  :project="project" :save-monaco="saveWorkspaceRef"
                  @saveCode="saveCodeFromMonaco" @saveConf="saveConfFromMonaco" />
        </div>
      </pane>
      <pane>
        <splitpanes horizontal>
          <pane>
            <Interpret :game-package="gamePackage" :project="project" :turn-off-game-mode="turnOffGameModeRef" />
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
import { computed, onBeforeUnmount, onUnmounted, ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import Blockly from '@/Pages/Project/Blockly/Blockly'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import Interpret from '@/Pages/Project/Interpret/Interpret'
import { useResizeObserver } from '@vueuse/core/index'
import { Inertia } from '@inertiajs/inertia'

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
    main: String,
    config: String,
    gamePackage: Object,
  },
  setup(props) {
    const title = computed(() => props.project.name)
    const turnOffGameModeRef = ref(false)
    const changeEditorRef = ref(false)
    const editMonacoRef = ref(props.project.editor)
    const showModalRef = ref(false)
    const saveWorkspaceRef = ref(false)
    const editorShow = ref(props.project.editor)
    const editorPaneResizeRef = ref(null)
    const btnEditor = ref(null)
    const btnText = ref(props.project.editor === true ? 'Blocks' : 'Code')
    const mainLuaCode = ref(props.main)

    const pageLeaveSaveProject = () => {
      saveWorkspaceRef.value = !saveWorkspaceRef.value
    }

    const saveBlocklyWorkspace = (workspace, code) => {
      Inertia.post(route('project.update', { project: props.project }), {
        blockly_workspace: workspace,
        main: code,
        editor: false,
      })
    }

    const switchEditors = () => {
      editorShow.value = !editorShow.value
      btnText.value === 'Code' ? btnText.value = 'Blocks' : btnText.value = 'Code'
    }

    const passCodeToMonaco = (code) => {
      console.log('Blockly code')
      console.log(code)
      mainLuaCode.value = code
      switchEditors()
    }

    const saveCodeFromMonaco = (workspace, code, conf) => {
      Inertia.post(route('project.update', { project: props.project }), {
        monaco_workspace: workspace,
        main: code,
        config: conf,
        editor: true,
      })
    }

    const saveConfFromMonaco = (conf) => {
      console.log('save config:')
      console.log(conf)
      Inertia.post(route('project.config', { project: props.project }), { config: conf })
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

    onBeforeUnmount(() => {
      turnOffGameModeRef.value = !turnOffGameModeRef.value
    })

    return {
      title,
      editorShow,
      editorPaneResizeRef,
      btnEditor,
      btnText,
      changeEditorRef,
      editMonacoRef,
      showModalRef,
      saveWorkspaceRef,
      mainLuaCode,
      turnOffGameModeRef,
      onPositiveClick,
      passCodeToMonaco,
      saveCodeFromMonaco,
      saveConfFromMonaco,
      saveBlocklyWorkspace,
      pageLeaveSaveProject,
      changeEditor,
    }
  },
}
</script>
