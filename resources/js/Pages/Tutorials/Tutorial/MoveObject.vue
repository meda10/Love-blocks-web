<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <div class="flex-row flex flex-nowrap justify-start">
      <h1 class="m-0 text-2xl font-bold">Move object</h1>
      <n-tag class="self-center ml-6" type="warning" size="small" round>Medium</n-tag>
    </div>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
      <template #icon>
        <n-icon>
          <BackIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
  <n-p>
    This simple example shows how to move object with arrow keys. It uses delta time
    <n-text code>dt</n-text>
    . If you press key it will
    move object in that direction until you release the key. It moves the object by changing the
    <n-text code>X</n-text>
    and
    <n-text code>Y</n-text>
    values. You
    can manage the speed by changing the numerical value in the formula (original value is
    <n-text code>100</n-text>
    ).
  </n-p>
  <n-p>
    You can also change the keys, all of the keys you can use are defined in LÖVE
    <n-a href="https://love2d.org/wiki/KeyConstant" target="_blank">documentation</n-a>
  </n-p>
  <Code :code="moveWithKeyboardCode" :blocks="moveWithKeyboardBlockly" />
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import moveWithKeyboard from '@/Pages/Tutorials/code/moveWithKeyboard.json'
import { onMounted } from 'vue'

export default {
  name: 'MoveObject',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = moveWithKeyboard.tutorial
    const moveWithKeyboardBlockly = tutorial[0].blockly
    const moveWithKeyboardCode = tutorial[0].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      moveWithKeyboardBlockly,
      moveWithKeyboardCode,
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
