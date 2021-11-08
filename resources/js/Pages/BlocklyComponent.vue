<template>
  <div>
    <div ref="blocklyDiv" class="blocklyDiv" />
    <xml ref="blocklyToolbox" style="display:none">
      <slot />
    </xml>
  </div>
</template>

<script>
import Blockly from 'blockly'
import { onMounted, ref, reactive } from 'vue'

export default {
  name: 'BlocklyComponent',
  props: {
    options: Object,
  },
  setup(props) {
    const workspace = reactive({})
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)

    onMounted(() => {
      const opt = props.options || {}
      if (!opt.toolbox) {
        opt.toolbox = blocklyToolbox.value
      }
      workspace.value = Blockly.inject(blocklyDiv.value, opt)
      console.log(workspace)
    })
    return {
      blocklyToolbox,
      workspace,
      blocklyDiv,
    }
  },
}
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
