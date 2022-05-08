<template>
  <Head :title="title" />
  <top-panel :owner="owner" :heap-size="heapSizeRef" :project="project" @pageLeave="pageLeaveSaveProject"
             @loadTutorial="loadTutorial" />
  <splitpanes class="default-theme flex-grow max-h-screen, h-4/5">
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
        <Blockly v-if="!editorShow" :project="project" :save-code="changeEditorRef"
                 :save-workspace="saveWorkspaceRef"
                 @passCodeToMonaco="passCodeToMonaco" @saveWorkspace="saveBlocklyWorkspace" />
        <editor v-if="editorShow" :config-lua="config" :edit-monaco="editMonacoRef" :main-lua="mainLuaCode"
                :project="project" :save-monaco="saveWorkspaceRef"
                @saveCode="saveCodeFromMonaco" @saveConf="saveConfFromMonaco" />
      </div>
    </pane>
    <pane>
      <splitpanes horizontal class="h-full">
        <pane size="40">
          <Interpret :refresh-game="refreshGameRef" :game-package="gamePackage" :project="project"
                     :turn-off-game-mode="turnOffGameModeRef" @saveAndRefresh="saveGameRefreshInterpret"
                     @heapSize="displayHeapSize" />
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
import { computed, onBeforeUnmount, ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import Editor from '@/Pages/Project/Editor/Editor'
import Blockly from '@/Pages/Project/Blockly/Blockly'
import { Splitpanes, Pane } from '../../../../node_modules/splitpanes/dist/splitpanes.es'
import TopPanel from '@/Shared/TopPanel'
import Interpret from '@/Pages/Project/Interpret/Interpret'
import { useResizeObserver } from '@vueuse/core/index'
import { Inertia } from '@inertiajs/inertia'
import Tutorial from '@/Pages/Tutorials/Tutorial/Tutorial'

export default {
  name: 'Show',
  components: {
    Tutorial,
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
    const refreshRef = ref(false)
    const refreshGameRef = ref(false)
    const tutorialRef = ref(1)
    const heapSizeRef = ref(30)
    const editorShow = ref(props.project.editor)
    const editorPaneResizeRef = ref(null)
    const btnEditor = ref(null)
    const btnText = ref(props.project.editor === true ? 'Blocks' : 'Code')
    const mainLuaCode = ref(props.main)

    /**
     * Save project on page leave
     */
    const pageLeaveSaveProject = () => {
      saveWorkspaceRef.value = !saveWorkspaceRef.value
    }

    /**
     * Loads tutorial by ID
     * @param tutorial
     */
    const loadTutorial = (tutorial) => {
      tutorialRef.value = tutorial
    }

    /**
     * Display heap size
     * @param heapSize
     */
    const displayHeapSize = (heapSize) => {
      heapSizeRef.value = heapSize
    }

    /**
     * Save blockly workspace
     * @param workspace
     * @param code
     */
    const saveBlocklyWorkspace = (workspace, code) => {
      Inertia.post(route('project.update', { project: props.project }), {
        blockly_workspace: workspace,
        main: code,
        editor: false,
        gameRefresh: refreshRef.value,
      }, {
        onSuccess: () => {
          if (refreshRef.value) {
            refreshGameRef.value = true
            refreshRef.value = false
          }
        },
        onFinish: () => {
          refreshGameRef.value = false
        },
      })
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
     * Save code from Monaco to DB
     * @param workspace
     * @param code
     * @param conf
     */
    const saveCodeFromMonaco = (workspace, code, conf) => {
      if (conf === '') conf = 'EMPTY'
      if (code === '') code = 'EMPTY'
      Inertia.post(route('project.update', { project: props.project }), {
        monaco_workspace: workspace,
        main: code,
        config: conf,
        editor: true,
        gameRefresh: refreshRef.value,
      }, {
        onSuccess: () => {
          if (refreshRef.value) {
            refreshGameRef.value = true
            refreshRef.value = false
          }
        },
        onFinish: () => {
          refreshGameRef.value = false
        },
      })
    }

    /**
     * Save code end refresh game
     */
    const saveGameRefreshInterpret = () => {
      refreshRef.value = true
      saveWorkspaceRef.value = !saveWorkspaceRef.value
    }

    /**
     * Save config from Monaco
     * @param conf
     */
    const saveConfFromMonaco = (conf) => {
      if (conf === '') conf = 'EMPTY'
      Inertia.post(route('project.config', { project: props.project }), { config: conf })
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

    /**
     * Switch between Blockly and Monaca editor
     */
    const switchEditors = () => {
      editorShow.value = !editorShow.value
      btnText.value === 'Code' ? btnText.value = 'Blocks' : btnText.value = 'Code'
    }

    /**
     * Modal -> switch back to Blockly
     */
    const onPositiveClick = () => {
      switchEditors()
      editMonacoRef.value = false
      changeEditorRef.value = !changeEditorRef.value
    }

    /**
     * Change Blockly size based od the editorPaneResizeRef size
     */
    useResizeObserver(editorPaneResizeRef, () => {
      const position = window.innerWidth - editorPaneResizeRef.value.getBoundingClientRect().right
      btnEditor.value.style.right = position + 'px'
    })

    /**
     * Turn off game mode before unmount
     */
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
      refreshGameRef,
      tutorialRef,
      heapSizeRef,
      onPositiveClick,
      passCodeToMonaco,
      saveCodeFromMonaco,
      saveConfFromMonaco,
      saveBlocklyWorkspace,
      pageLeaveSaveProject,
      changeEditor,
      saveGameRefreshInterpret,
      loadTutorial,
      displayHeapSize,
    }
  },
}
</script>
