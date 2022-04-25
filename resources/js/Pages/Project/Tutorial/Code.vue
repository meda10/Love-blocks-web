<template>
  <n-card class="min-h-fit">
    <div class="absolute right-0 pr-2 z-20">
      <div class=" flex flex-row flex-nowrap">
        <n-button :type="'primary'" class="flex-shrink" size="small" style="margin-right: 0.5rem" @click="switchCode">
          {{ btnCode === false ? 'Code' : 'Blocks' }}
        </n-button>
      </div>
    </div>
    <div class="mt-8  overflow-auto">
      <n-code v-show="btnCode" :code="code" language="lua" />
    </div>
    <div v-show="!btnCode" ref="blocklyArea" class="w-full h-fit mt-2">
      <div v-show="!btnCode" ref="blocklyDiv" />
    </div>
  </n-card>
</template>

<script>
import { onMounted, ref } from 'vue'
import Blockly from 'blockly'
import { useResizeObserver } from '@vueuse/core/index'
import DarkTheme from '@blockly/theme-dark'

export default {
  name: 'Code',
  props: {
    code: String,
    blocks: Object,
  },
  setup(props) {
    let workspace
    const blocklyArea = ref(null)
    const blocklyDiv = ref(null)
    const options = {
      comments: false,
      toolbox: false,
      trashcan: false,
      // readOnly: true,
      scrollbars: true,
      theme: DarkTheme,
      zoom: {
        startScale: 1.0,
        maxScale: 1.0,
        minScale: 1.0,
      },
    }
    const btnCode = ref(true)

    const switchCode = () => {
      btnCode.value = !btnCode.value
      resizeBlockly()
    }

    const resizeBlockly = () => {
      try {
        if (props.blocks !== null) Blockly.serialization.workspaces.load(props.blocks, workspace)
      } catch (e) {
      }
      const metrics = workspace.getMetrics()
      blocklyDiv.value.style.height = metrics.contentHeight + 'px'
      blocklyDiv.value.style.width = '100%'
      Blockly.svgResize(workspace)
    }

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
      workspace = Blockly.inject(blocklyDiv.value, options)
      resizeBlockly()
    })

    return {
      blocklyDiv,
      blocklyArea,
      btnCode,
      switchCode,
    }
  },
}
</script>
