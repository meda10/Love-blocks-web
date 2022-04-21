<template>
  <n-card>
    <div class="absolute right-0 pr-2 mt-2 z-50">
      <div class=" flex flex-row flex-nowrap">
        <n-button :type="'primary'" class="flex-shrink" size="small" style="margin-right: 0.5rem" @click="switchCode">
          {{ btnCode.value === false ? 'Code' : 'Blocks' }}
        </n-button>
      </div>
    </div>
    <n-code v-show="btnCode" :code="code" language="lua" />
    <div v-show="!btnCode" ref="blocklyDiv" />
  </n-card>
</template>

<script>
import { onMounted, ref } from 'vue'
import Blockly from 'blockly'

export default {
  name: 'Code',
  props: {
    code: String,
    blocks: Object,
  },
  setup(props) {
    let workspace
    const blocklyDiv = ref(null)
    const options = {
      comments: false,
      toolbox: false,
      trashcan: false,
      readOnly: true,
      scrollbars: false,
      zoom: false,
    }
    const btnCode = ref(true)

    const switchCode = () => {
      btnCode.value = !btnCode.value
    }

    onMounted(() => {
      workspace = Blockly.inject(blocklyDiv.value, options)

      if (props.blocks !== null) Blockly.serialization.workspaces.load(props.blocks, workspace)

      // // add blocks
      // const parentBlock = workspace.newBlock('text_print')
      // parentBlock.initSvg()
      // parentBlock.render()
      //
      // const childBlock = workspace.newBlock('text')
      //
      // childBlock.setFieldValue('Hello', 'TEXT')
      // childBlock.initSvg()
      // childBlock.render()
      //
      // const parentConnection = parentBlock.getInput('TEXT').connection
      // const childConnection = childBlock.outputConnection
      // parentConnection.connect(childConnection)

      // Fit the container exactly around the blocks.
      const metrics = workspace.getMetrics()
      blocklyDiv.value.style.height = metrics.contentHeight + 'px'
      blocklyDiv.value.style.width = metrics.contentWidth + 'px'
      Blockly.svgResize(workspace)
    })
    return {
      blocklyDiv,
      btnCode,
      switchCode,
    }
  },
}
</script>
