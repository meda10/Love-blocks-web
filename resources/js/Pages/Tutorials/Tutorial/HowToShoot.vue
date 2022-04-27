<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <h1 class="m-0 text-2xl font-bold">How to shoot</h1>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
      <template #icon>
        <n-icon>
          <BackIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
  <n-p>
    First we need to setup some variables in
    <n-text code>love.load()</n-text>
    callback function. We need to create empty array for bullets,
    <n-text code>bullets = {}</n-text>
    . We
    will also define starting position
    <n-text code>StartPosX</n-text>
    and dimensions of our player,
    <n-text code>width</n-text>
    and
    <n-text code>height</n-text>
    (player will not move in this example, only shoot
    bullets).
  </n-p>
  <Code :code="shootCodeLoad" :blocks="shootBlocklyLoad" />
  <n-h3>Draw player and bullets</n-h3>
  <n-p>
    Next we set how bullets and player will be drawn. Bullets will be red filled circles, player will be a blue
    rectangle. We set the color with
    <n-text code>love.graphics.setColor()</n-text>
    . Last value is alpha which needs to be
    <n-text code>> 0</n-text>
    , otherwise our color will not be visible. For drawing bullets we need to loop through bullets array and draw
    them
    one by one. Function
    <n-text code>love.graphics.print()</n-text>
    prints help message to the screen.
  </n-p>
  <Code :code="shootCodeDraw" :blocks="shootBlocklyDraw" />
  <n-h3>Define bullets</n-h3>
  <n-p>
    Now we need to create bullets. Bullet is crated when you click left mouse button. Start
    position
    <n-text code>startX</n-text>
    ,
    <n-text code>startY</n-text>
    is defined as middle of the player rectangle and target position as current position of the mouse cursor. We get
    the
    current mouse position with
    <n-text code>love.mouse.getX()</n-text>
    and
    <n-text code>love.mouse.getY()</n-text>
    . Next we create new bullet in variable
    <n-text code>newBullet</n-text>
    and save it to the end of bullets array
    <n-text code>table.insert(bullets, #bullets + 1, newBullet)</n-text>
    .
  </n-p>
  <Code :code="shootCodeBullet" :blocks="shootBlocklyBullet" />
  <n-h3>Move bullets</n-h3>
  <n-p>
    Now it is time to define how the bullets will move. We define delta X
    <n-text code>dx</n-text>
    and delta Y
    <n-text code>dy</n-text>
    and multiply by delta
    time
    <n-text code>dt</n-text>
    . If we add this to the old position in bullet array we get the new position of the bullet. We need to do this
    for
    both
    <n-text code>X</n-text>
    and
    <n-text code>Y</n-text>
    positions.
    New values are saved to the bullet array. Last thing we need to do is remove bullet from bullets array
    when it exits the screen. To do this we compare
    bullet position to screen width and height, if it is situated outside the screen it is removed from the bullets
    array.
  </n-p>
  <Code :code="shootCodeMove" :blocks="shootBlocklyMove" />
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import shootTutorial from '@/Pages/Tutorials/code/shootTutorial.json'
import { onMounted } from 'vue'

export default {
  name: 'HowToShoot',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = shootTutorial.tutorial
    const shootBlocklyLoad = tutorial[0].blockly
    const shootCodeLoad = tutorial[0].code

    const shootBlocklyDraw = tutorial[1].blockly
    const shootCodeDraw = tutorial[1].code

    const shootBlocklyBullet = tutorial[2].blockly
    const shootCodeBullet = tutorial[2].code

    const shootBlocklyMove = tutorial[3].blockly
    const shootCodeMove = tutorial[3].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      shootCodeLoad,
      shootBlocklyLoad,
      shootCodeDraw,
      shootBlocklyDraw,
      shootCodeBullet,
      shootBlocklyBullet,
      shootBlocklyMove,
      shootCodeMove,
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
