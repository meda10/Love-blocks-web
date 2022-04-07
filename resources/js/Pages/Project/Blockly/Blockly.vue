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
import BlocklyLua from 'blockly/lua'
import DarkTheme from '@blockly/theme-dark'
import { ref, onMounted, reactive } from 'vue'
import Blockly from 'blockly'
import { useResizeObserver } from '@vueuse/core'
// import './blocks/stocks';
// import './prompt';

export default {
  name: 'Blockly',
  components: {},
  setup() {
    const code = ref(null)
    const workspace = reactive({})
    const blocklyArea = ref(null)
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)

    const options = {
      media: '/storage/media/',
      theme: DarkTheme,
      grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true,
      },
      toolbox:
        `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
        </xml>`,
    }

    const showCode = () => {
      code.value = BlocklyLua.workspaceToCode(workspace.value)
    }

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
    })

    return {
      blocklyToolbox,
      workspace,
      blocklyDiv,
      options,
      blocklyArea,
      code,
      showCode,
    }
  },
}
</script>

<style>
/*#xxx {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  color: #2c3e50;*/
/*}*/

/*html, body {*/
/*  margin: 0;*/
/*}*/

/*#code {*/
/*  position: absolute;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  width: 50%;*/
/*  height: 100%;*/
/*  margin: 0;*/
/*  background-color: beige;*/
/*}*/

/*#blockly {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  bottom: 0;*/
/*  width: 50%;*/
/*  height: 100%;*/
/*}*/
</style>
