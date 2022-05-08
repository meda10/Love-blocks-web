<template>
  <div class="flex flex-col flex-nowrap h-full w-full">
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
    editMonaco: Boolean,
    mainLua: String,
    configLua: String,
    project: Object,
  },
  emits: ['saveCode', 'saveConf'],
  setup(props, { emit }) {
    const monacoContainer = ref(null)
    const readOnlyRef = ref(!props.editMonaco)
    let editor, monaco, webSocket
    const items = ref([
      { text: 'main.lua', value: 'main' },
      { text: 'conf.lua', value: 'conf' },
    ])
    const initialEditorValue = {
      main: props.mainLua,
      conf: props.configLua,
    }
    const currentTab = ref(items.value[0].value)
    const editorState = ref({})
    const editorValue = ref(initialEditorValue)

    /**
     * Watch if code from Monaco should be saved
     */
    watch(() => props.saveMonaco, () => {
      emit('saveCode', editor.saveViewState(), editorValue.value.main, editorValue.value.conf)
    })

    /**
     * Make read only
     */
    const readOnly = () => {
      readOnlyRef.value = true
      editor.updateOptions({ readOnly: readOnlyRef.value })
    }

    /**
     * Make read and write
     */
    const readAndWrite = () => {
      readOnlyRef.value = false
      editor.updateOptions({ readOnly: readOnlyRef.value })
    }

    /**
     * watch if can edit Monaco
     */
    watch(() => props.editMonaco, () => {
      readAndWrite()
    })

    /**
     * Load Monaco and start Language server
     */
    onMounted(() => {
      loader.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs' },
        'vs/nls': { availableLanguages: { '*': '' } },
      })

      loader.init().then(result => {
        monaco = result
        const editorOptions = {
          language: 'lua',
          readOnly: readOnlyRef.value,
          theme: 'vs-dark',
          tabSize: 2,
          minimap: { enabled: false },
          automaticLayout: true,
          lightbulb: {
            enabled: true,
          },
        }
        editor = result.editor.create(monacoContainer.value, editorOptions)
        MonacoServices.install(result)
        // monaco.languages.register({ id: 'lua', extensions: ['.lua'], aliases: ['Lua', 'lua'] })
        // monaco.languages.setMonarchTokensProvider('lua', language)
        // monaco.languages.setLanguageConfiguration('lua', conf)

        webSocket = connectLanguageServer(`wss://${location.hostname}:8080`)

        editor.getAction('editor.action.formatDocument').run()
        editor.onDidChangeModelContent(useDebounceFn(() => {
          if (editorValue.value[currentTab.value] !== editor.getValue()) {
            editorValue.value[currentTab.value] = editor.getValue()
          }
        }, 500))

        if (editorValue.value[currentTab.value]) {
          editor.setValue(editorValue.value[currentTab.value])
          if (props.project !== null) {
            if (props.project.monaco_workspace !== null) editor.restoreViewState(props.project.monaco_workspace)
            else editor.restoreViewState(editorState.value[currentTab.value])
          }
        }
        return result
      }).catch(() => null)
    })

    /**
     * Switch tabs
     */
    watch(currentTab, function (current, previous) {
      if (current === 'conf') readAndWrite()
      else if (props.editMonaco && current === 'main') readAndWrite()
      else readOnly()

      if (previous === 'conf') emit('saveConf', editorValue.value.conf)

      editorState.value[previous] = editor.saveViewState()
      if (editorValue.value[current]) editor.setValue(editorValue.value[current])
      else editor.setValue('')

      if (editorState.value[current]) {
        editor.restoreViewState(editorState.value[current])
        editor.focus()
      }
    })

    /**
     * Remove Monaco and close connection to language server
     */
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
