<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <div class="flex-row flex flex-nowrap justify-start">
      <h1 class="m-0 text-2xl font-bold">Load image</h1>
      <n-tag class="self-center ml-6" type="success" size="small" round>Easy</n-tag>
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
    To load image into the game you will need to first upload it. In top menu click on Project/Files, here you can
    upload your image. After upload, you will see a table of all uploaded files, where you can find path to your
    image.
    Copy the file path and use it in your code in function
    <n-text code>love.graphics.newImage()</n-text>
    . This function returns the image, now you can draw it with
    <n-text code>love.graphics.draw()</n-text>
    . You will also need to specify
    <n-text code>X</n-text>
    and
    <n-text code>Y</n-text>
    positions. Left corner is
    <n-text code>X=0, Y=0</n-text>
    .
  </n-p>
  <Code :code="code" :blocks="block" />
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import loadImage from '@/Pages/Tutorials/code/loadImage.json'
import { onMounted } from 'vue'

export default {
  name: 'LoadImage',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = loadImage.tutorial
    const block = tutorial[0].blockly
    const code = tutorial[0].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      block,
      code,
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
