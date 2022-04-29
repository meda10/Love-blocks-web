<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <h1 class="m-0 text-2xl font-bold">How LÖVE works</h1>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
      <template #icon>
        <n-icon>
          <BackIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
  <n-p>
    Original tutorial source:
    <n-a
      target="_blank" href="https://sheepolution.com/learn/book/4">
      https://sheepolution.com/learn/book/4
    </n-a>
  </n-p>
  <n-p>
    LÖVE is what we call a framework. Simply said: It's a tool that makes programming games easier. LÖVE is made
    with C++ and OpenGL, which are both considered to be very difficult. The source code of LÖVE is very complex.
    But all this complex code makes creating a game a lot easier for us.
  </n-p>
  <n-h3>How does LÖVE work?</n-h3>
  <n-p>
    LÖVE calls 3 functions. First it calls
    <n-text code>love.load()</n-text>
    . In here we create our variables. After that it calls
    <n-text code>love.update()</n-text>
    and
    <n-text code>love.draw()</n-text>
    , repeatedly in that order.
  </n-p>
  <n-p>
    <n-text code>love.load()</n-text>
    ->
    <n-text code>love.update()</n-text>
    ->
    <n-text code>love.draw()</n-text>
    ->
    <n-text code>love.update()</n-text>
    ->
    <n-text code>love.draw()</n-text>
    ->
    <n-text code>love.update()</n-text>
    ...
  </n-p>
  <Code :code="howLoveCode" :blocks="howLoveBlockly" />
  <n-p>
    Behind the scenes, LÖVE calls these functions, and we to create them, and fill them with code. This is what
    we call a callback function. LÖVE uses multiple callback functions you can find all of them in category
    callback.
  </n-p>
  <n-h3>Draw to the screen</n-h3>
  <n-p>
    If we want to draw something to the screen we use function
    <n-text code>love.draw()</n-text>
    . For example for rectangle, we can do the following:
  </n-p>
  <Code :code="howLoveDrawCode" :blocks="howLoveDrawBlockly" />
  <n-p>
    We define, rectangle X, Y position, width and height. The other values can be left as 0. you can find more about
    them in
    <n-a href="https://love2d.org/wiki/love.graphics.rectangle" target="_blank">documentation</n-a>
    .
  </n-p>
  <n-p>
    When we want to update our game we use function
    <n-text code>love.update()</n-text>
    . For example you can change the position of our rectangle. Find out how to do it in: Move object tutorial.
  </n-p>
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import howLove from '@/Pages/Tutorials/code/howLove.json'
import { onMounted } from 'vue'

export default {
  name: 'HowLoveWorks',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = howLove.tutorial

    const howLoveBlockly = tutorial[0].blockly
    const howLoveCode = tutorial[0].code

    const howLoveDrawBlockly = tutorial[0].blockly
    const howLoveDrawCode = tutorial[0].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      howLoveBlockly,
      howLoveCode,
      howLoveDrawBlockly,
      howLoveDrawCode,
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
