<template>
  <!--  <div id="container" ref="container" style="height: calc(100% - 2.5rem)" />-->
  <div id="container" style="width:800px; height:600px; border:1px solid #ccc;" />
</template>
<script>
import { onMounted, ref, onUnmounted, watch, toRefs } from 'vue'
// import { useResizeObserver, useStorage, useDebounceFn } from '@vueuse/core'
// import { initialEditorValue, useDarkGlobal } from '../utils';
// import * as monaco from 'monaco-editor'
import loader from '@monaco-editor/loader'

export default {
  name: 'Editor',
  components: {},
  setup() {
    // self.MonacoEnvironment = {
    //   getWorker: function (_, label) {
    //     if (label === 'json') return jsonWorker()
    //     if (label === 'css' || label === 'scss' || label === 'less') return cssWorker()
    //     if (label === 'html' || label === 'handlebars' || label === 'razor') return htmlWorker()
    //     if (label === 'typescript' || label === 'javascript') return tsWorker()
    //     return editorWorker()
    //   },
    // }
    // self.MonacoEnvironment = {
    //   getWorkerUrl: function (moduleId, label) {
    //     if (label === 'json') return './js/json.worker.js'
    //     if (label === 'css' || label === 'scss' || label === 'less') return './js/css.worker.js'
    //     if (label === 'html' || label === 'handlebars' || label === 'razor') return './js/html.worker.js'
    //     if (label === 'typescript' || label === 'javascript') return './js/ts.worker.js'
    //     return './js/editor.worker.js'
    //   },
    //   getWorker: (moduleId, label) => {
    //     return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleId, label))
    //   },
    // }

    const container = ref(null)
    let editor
    // const isDark = useDarkGlobal()
    // const ACTIVE_TAB = 'active-tab'
    // const EDITOR_STATE = 'editor-state'
    // const EDITOR_VALUE = 'editor-value'
    // const editorState = useStorage(EDITOR_STATE, {})
    // const editorValue = useStorage(EDITOR_VALUE, initialEditorValue)
    // const emit = defineEmits()

    onMounted(function () {
      loader.init().then(monaco => {
        monaco.editor.create(document.getElementById('container'), {
          value: 'const foo = () => 0;',
          language: 'javascript',
          theme: 'vs-dark',
        })
      })

      // monaco.editor.create(document.getElementById('container'), {
      //   value: `const foo = () => 0;`,
      //   language: 'javascript',
      //   theme: 'vs-dark',
      // })
      // editor = monaco.editor.create(container.value, {
      //   language: 'javascript',
      //   theme: isDark.value ? 'vs-dark' : 'vs',
      // })
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

    // self.MonacoEnvironment = {
    //   getWorkerUrl: function (moduleId, label) {
    //     if (label === 'json') return './json.worker.js'
    //     if (label === 'css' || label === 'scss' || label === 'less') return './css.worker.js'
    //     if (label === 'html' || label === 'handlebars' || label === 'razor') return './html.worker.js'
    //     if (label === 'typescript' || label === 'javascript') return './ts.worker.js'
    //     return './editor.worker.js'
    //   },
    // }
    //
    // monaco.editor.create(document.getElementById('container'), {
    //   // value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    //   // language: 'javascript',
    // })
    // onMounted()

    return {}
  },
}
</script>
