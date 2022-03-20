<template>
  <div id="monaco-container" style="width:800px; height:600px; border:1px solid #ccc;" />
</template>
<script>
import { onMounted, ref, onUnmounted, watch, toRefs } from 'vue'
// import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core'
// import { initialEditorValue, useDarkGlobal } from '../utils';

import { MonacoServices } from 'monaco-languageclient'
import loader from '@monaco-editor/loader'
import { connectLanguageServer } from '@/languageServerConnect'

export default {
  name: 'Editor',
  components: {},
  setup() {
    const container = ref(null)
    const port = 8888
    let editor
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws'

    // const isDark = useDarkGlobal()
    // const ACTIVE_TAB = 'active-tab'
    // const EDITOR_STATE = 'editor-state'
    // const EDITOR_VALUE = 'editor-value'
    // const editorState = useStorage(EDITOR_STATE, {})
    // const editorValue = useStorage(EDITOR_VALUE, initialEditorValue)
    // const emit = defineEmits()

    onMounted(function () {
      loader.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs' },
        'vs/nls': { availableLanguages: { '*': '' } },
      })

      loader.init().then(result => {
        const editorOptions = {
          value: 'print("Hello World")',
          language: 'lua',
          theme: 'vs-dark',
          tabSize: 2,
          minimap: { enabled: false },
        }
        editor = result.editor.create(document.getElementById('monaco-container'), editorOptions)
        MonacoServices.install(result)
        connectLanguageServer(`ws://${location.hostname}:${port}`)

        editor.getAction('editor.action.formatDocument').run()
      })

      // emit('change', editorValue.value)
      // editor.onDidChangeModelContent(useDebounceFn(function () {
      //   if (editorValue.value[activeTab.value] !== editor.getValue()) {
      //     editorValue.value[activeTab.value] = editor.getValue()
      //     emit('change', editorValue.value)
      //   }
      // }, 500))
      // // Set values from storage on load
      // if (editorValue.value[activeTab.value]) {
      //   editor.setValue(editorValue.value[activeTab.value])
      //   editor.restoreViewState(editorState.value[activeTab.value])
      // }
    })

    // watch(activeTab, function (currentTab, prevTab) {
    //   monaco.editor.setModelLanguage(editor.getModel(), currentTab)
    //   editorState.value[prevTab] = editor.saveViewState()
    //   if (editorValue.value[currentTab]) {
    //     editor.setValue(editorValue.value[currentTab])
    //   } else {
    //     editor.setValue('')
    //   }
    //   if (editorState.value[currentTab]) {
    //     editor.restoreViewState(editorState.value[currentTab])
    //     editor.focus()
    //   }
    // })
    //
    // watch(isDark, function (value) {
    //   editor.updateOptions({
    //     theme: value ? 'vs-dark' : 'vs',
    //   })
    // })

    // const editorObserver = useResizeObserver(container, function () {
    //   editor.layout()
    // })

    onUnmounted(function () {
      editor.dispose()
      // editorObserver.stop()
    })
    return {}
  },
}
</script>
