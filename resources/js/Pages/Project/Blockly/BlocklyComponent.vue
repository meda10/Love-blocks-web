<template>
  <div>
    <div ref="blocklyDiv" class="blocklyDiv" style="position: absolute" />
    <xml ref="blocklyToolbox" style="display:none">
      <slot />
    </xml>
  </div>
</template>

<script>
import Blockly from 'blockly'
import { onMounted, ref, reactive, computed } from 'vue'

export default {
  name: 'BlocklyComponent',
  props: {
    options: Object,
    blocklyArea: Object,
  },
  setup(props) {
    const workspace = reactive({})
    const area = computed(() => props.blocklyArea)
    console.log(area.value)
    console.log(props.blocklyArea)
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)

    const onresize = function () {
      let element = area.value
      let x = 0
      let y = 0
      do {
        x += element.offsetLeft
        y += element.offsetTop
        element = element.offsetParent
      } while (element)
      blocklyDiv.value.style.left = x + 'px'
      blocklyDiv.value.style.top = y + 'px'
      blocklyDiv.value.style.width = area.value.offsetWidth + 'px'
      blocklyDiv.value.style.height = area.value.offsetHeight + 'px'
      Blockly.svgResize(workspace.value)
    }

    onMounted(() => {
      const opt = props.options || {}
      if (!opt.toolbox) {
        opt.toolbox = blocklyToolbox.value
      }
      workspace.value = Blockly.inject(blocklyDiv.value, opt)

      // window.addEventListener('resize', onresize, false)
      // onresize()
      // Blockly.svgResize(workspace.value)
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
