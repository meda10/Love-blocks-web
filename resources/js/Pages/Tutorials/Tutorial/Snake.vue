<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <div class="flex-row flex flex-nowrap justify-start">
      <h1 class="m-0 text-2xl font-bold">Snake - game</h1>
      <n-tag class="self-center ml-6" type="error" size="small" round>Hard</n-tag>
    </div>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
      <template #icon>
        <n-icon>
          <BackIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import snake from '@/Pages/Tutorials/code/moveWithKeyboard.json'
import { onMounted } from 'vue'

export default {
  name: 'Snake',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = snake.tutorial
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
