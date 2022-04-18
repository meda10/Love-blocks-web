<template>
  <div class="h-full w-full">
    <div ref="blocklyArea" class="h-full w-full" />
    <div ref="blocklyDiv" style="position: absolute" />
    <xml ref="blocklyToolbox" style="display:none">
      <slot />
    </xml>
  </div>
</template>

<script>
import luaGenerator from 'blockly/lua'
import DarkTheme from '@blockly/theme-dark'
import { ref, onMounted, watch } from 'vue'
import Blockly from 'blockly'
import { useResizeObserver } from '@vueuse/core'
import toolboxOptions from '@/toolbox'
import registerBlocks from '@/blocklyCusomBlocks'
import { ScrollOptions, ScrollBlockDragger, ScrollMetricsManager } from '@blockly/plugin-scroll-options'

export default {
  name: 'Blockly',
  props: {
    saveCode: Boolean,
    saveWorkspace: Boolean,
    project: Object,
  },
  emits: ['passCodeToMonaco', 'saveWorkspace'],
  setup(props, { emit }) {
    let workspace
    const code = ref(null)
    const blocklyArea = ref(null)
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)

    const options = {
      media: '/storage/media/',
      theme: DarkTheme,
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

    const saveWorkspace = () => {
      const workspaceState = Blockly.serialization.workspaces.save(workspace)
      const luaCode = luaGenerator.workspaceToCode(workspace)
      emit('saveWorkspace', workspaceState, luaCode)
    }

    watch(() => props.saveCode, () => {
      saveWorkspace()
      code.value = luaGenerator.workspaceToCode(workspace)
      emit('passCodeToMonaco', code.value)
    })

    watch(() => props.saveWorkspace, () => {
      saveWorkspace()
    })

    useResizeObserver(blocklyArea, (entries) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      blocklyDiv.value.style.left = blocklyArea.value.getBoundingClientRect().left + 'px'
      blocklyDiv.value.style.top = blocklyArea.value.getBoundingClientRect().top + 'px'
      blocklyDiv.value.style.width = width + 'px'
      blocklyDiv.value.style.height = height + 'px'
      Blockly.svgResize(workspace)
    })

    onMounted(() => {
      registerBlocks()
      if (!options.toolbox) {
        options.toolbox = blocklyToolbox.value
      }
      workspace = Blockly.inject(blocklyDiv.value, options)
      if (props.project !== null) {
        if (props.project.blockly_workspace !== null) Blockly.serialization.workspaces.load(props.project.blockly_workspace, workspace)
      }
      const plugin = new ScrollOptions(workspace)
      plugin.init()
    })

    return {
      blocklyToolbox,
      blocklyDiv,
      options,
      blocklyArea,
      code,
    }
  },
}
</script>
