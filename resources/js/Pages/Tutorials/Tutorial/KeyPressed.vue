<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <h1 class="m-0 text-2xl font-bold">Key pressed</h1>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
      <template #icon>
        <n-icon>
          <BackIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
  <n-p>
    This example shows how to check if key is pressed. We are using
    <n-text code>love.keyboard.isDown("x")</n-text>
    function, where
    <n-text code>"x"</n-text>
    is the key. To show if key is pressed we use
    <n-text code>love.graphics.print() function</n-text>
    to print text to screen.
    <n-p>
      You can find names of the keys in LÖVE
      <n-a href="https://love2d.org/wiki/KeyConstant" target="_blank">documentation</n-a>
    </n-p>
  </n-p>
  <Code :code="keyIsDownCode" :blocks="keyIsDownBlockly" />
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import keyIsDown from '@/Pages/Tutorials/code/keyIsDown.json'
import { onMounted } from 'vue'

export default {
  name: 'KeyPressed',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = keyIsDown.tutorial
    const keyIsDownBlockly = tutorial[0].blockly
    const keyIsDownCode = tutorial[0].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      keyIsDownBlockly,
      keyIsDownCode,
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
