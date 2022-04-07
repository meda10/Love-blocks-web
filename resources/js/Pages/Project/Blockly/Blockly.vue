<template>
  <div class="h-full w-full">
    <div ref="blocklyArea" class="h-full w-full" />
    <div ref="blocklyDiv" style="position: absolute" />
    <xml ref="blocklyToolbox" style="display:none">
      <slot />
    </xml>
  </div>

  <!--  <BlocklyComponent id="blockly" ref="blockly" :blockly-area="blocklyArea" :options="options" />-->
  <!--    <div id="code">-->
  <!--      <ButtonLink :button="true" component-style="btn btn-primary" label="Show code" @click="showCode" />-->
  <!--      <pre v-html="code" />-->
  <!--    </div>-->
</template>

<script>
import luaGenerator from 'blockly/lua'
import DarkTheme from '@blockly/theme-dark'
import { ref, onMounted, reactive, watch } from 'vue'
import Blockly from 'blockly'
import { useResizeObserver } from '@vueuse/core'
import toolboxOptions from '@/toolbox'
import { ScrollOptions, ScrollBlockDragger, ScrollMetricsManager } from '@blockly/plugin-scroll-options'

export default {
  name: 'Blockly',
  props: {
    saveBlockly: Boolean,
  },
  emits: ['saveCode'],
  setup(props, { emit }) {
    const code = ref(null)
    const workspace = reactive({})
    const blocklyArea = ref(null)
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)

    const options = {
      media: '/storage/media/',
      // theme: DarkTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true,
      },
      grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true,
      },
      trashcan: true,
      toolbox: toolboxOptions,
      plugins: {
        blockDragger: ScrollBlockDragger,
        metricsManager: ScrollMetricsManager,
      },
      move: {
        wheel: true,
      },
    }

    const generateCode = () => {
      code.value = luaGenerator.workspaceToCode(workspace.value)
      emit('saveCode', code.value)
    }

    watch(() => props.saveBlockly, () => {
      generateCode()
    })

    useResizeObserver(blocklyArea, (entries) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      blocklyDiv.value.style.left = blocklyArea.value.getBoundingClientRect().left + 'px'
      blocklyDiv.value.style.top = blocklyArea.value.getBoundingClientRect().top + 'px'
      blocklyDiv.value.style.width = width + 'px'
      blocklyDiv.value.style.height = height + 'px'
      Blockly.svgResize(workspace.value)
    })

    onMounted(() => {
      if (!options.toolbox) {
        options.toolbox = blocklyToolbox.value
      }
      workspace.value = Blockly.inject(blocklyDiv.value, options)
      const plugin = new ScrollOptions(workspace.value)
      plugin.init()
    })

    return {
      blocklyToolbox,
      workspace,
      blocklyDiv,
      options,
      blocklyArea,
      code,
      generateCode,
    }
  },
}
</script>
