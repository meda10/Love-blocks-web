<template>
  <div class="flex flex-col flex-nowrap" style="width:100%; height:100%;">
    <Tabs v-model="currentTab" :items="items" />
    <div ref="monacoContainer" class="flex-grow" />
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
  props: {
    saveMonaco: Boolean,
    code: String,
  },
  emits: ['saveCode'],
  setup(props, { emit }) {
    const monacoContainer = ref(null)
    let editor, monaco, webSocket
    const items = ref([
      { text: 'HTML', value: 'html' },
      { text: 'CSS', value: 'css' },
      { text: 'JS', value: 'javascript' },
    ])
    const initialEditorValue = {
      html: props.code,
      javascript: 'import { setup as JAVASCRIPT }',
      css: 'width: 875px',
    }
    const currentTab = ref(items.value[0].value)
    const editorState = ref({})
    const editorValue = ref(initialEditorValue)

    const generateCode = () => {
      emit('saveCode', '')
      //  todo save code
    }

    watch(() => props.saveMonaco, () => {
      generateCode()
    })

    onMounted(() => {
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
        editor = result.editor.create(monacoContainer.value, editorOptions)
        MonacoServices.install(result)
        webSocket = connectLanguageServer(`ws://${location.hostname}:8888`)

        editor.getAction('editor.action.formatDocument').run()

        editor.onDidChangeModelContent(useDebounceFn(function () {
          if (editorValue.value[currentTab.value] !== editor.getValue()) {
            editorValue.value[currentTab.value] = editor.getValue()
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
      editor.dispose()
      webSocket.close()
    })

    return {
      items,
      currentTab,
      editorValue,
      monacoContainer,
    }
  },
}
</script>
