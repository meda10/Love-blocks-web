<template>
  <div class="flex flex-col flex-nowrap" style="width:100%; height:100%;">
    <Tabs v-model="currentTab" :items="items" />
    <div id="monaco-container" class="flex-grow" />
  </div>
</template>
<script>
import { onMounted, ref, onUnmounted, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { MonacoServices } from 'monaco-languageclient'
import loader from '@monaco-editor/loader'
import { connectLanguageServer } from '@/languageServerConnect'
import Tabs from '@/Pages/Project/Editor/Tabs'

export default {
  name: 'Editor',
  components: {
    Tabs,
  },
  emits: ['change'],
  setup(props, { emit }) {
    let editor
    let monaco
    let webSocket

    const items = ref([
      { text: 'HTML', value: 'html' },
      { text: 'CSS', value: 'css' },
      { text: 'JS', value: 'javascript' },
    ])
    const initialEditorValue = {
      html: '<div id="app">RANDOM HTML</div> ',
      javascript: 'import { setup as JAVASCRIPT }',
      css: 'width: 875px',
    }

    const currentTab = ref(items.value[0].value)
    const editorState = ref({})
    const editorValue = ref(initialEditorValue)

    onMounted(function () {
      loader.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs' },
        'vs/nls': { availableLanguages: { '*': '' } },
      })

      loader.init().then(result => {
        monaco = result
        const editorOptions = {
          value: 'print("Hello World")',
          language: 'lua',
          theme: 'vs-dark',
          tabSize: 2,
          minimap: { enabled: false },
          automaticLayout: true,
        }
        editor = result.editor.create(document.getElementById('monaco-container'), editorOptions)
        MonacoServices.install(result)
        webSocket = connectLanguageServer(`ws://${location.hostname}:8888`)

        editor.getAction('editor.action.formatDocument').run()

        emit('change', editorValue.value)
        editor.onDidChangeModelContent(useDebounceFn(function () {
          if (editorValue.value[currentTab.value] !== editor.getValue()) {
            editorValue.value[currentTab.value] = editor.getValue()
            emit('change', editorValue.value)
          }
        }, 500))

        if (editorValue.value[currentTab.value]) {
          editor.setValue(editorValue.value[currentTab.value])
          editor.restoreViewState(editorState.value[currentTab.value])
        }
        return result
      }).catch(() => null)
    })

    watch(currentTab, function (current, previous) {
      monaco.editor.setModelLanguage(editor.getModel(), 'lua')
      editorState.value[previous] = editor.saveViewState()
      if (editorValue.value[current]) {
        editor.setValue(editorValue.value[current])
      } else {
        editor.setValue('')
      }
      if (editorState.value[current]) {
        editor.restoreViewState(editorState.value[current])
        editor.focus()
      }
    })

    onUnmounted(() => {
      webSocket.close()
      editor.dispose()
    })

    return {
      items,
      currentTab,
      editorValue,
    }
  },
}
</script>
