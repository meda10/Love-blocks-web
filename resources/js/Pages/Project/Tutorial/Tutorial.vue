<template>
  <div class="p-4">
    <div v-if="show === 0">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Open tutorial</h1>
      </div>
      <n-card>
        <n-space justify="space-between">
          <n-h5>Load image to the game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 1">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Check if key is presed</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 2">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Move object</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 3">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>How to shoot</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 4">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Fifteen - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 5">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Snake - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 6">Open</n-button>
        </n-space>
      </n-card>
    </div>
    <div v-if="show === 1">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Load image</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        To load image to the game you will need to first upload it. In top menu click Project/Files, here you can
        upload your image. After upload, you can find path to your image in the table. Copy the file path and use it in
        your code.
      </n-p>
      <Code :code="loadImageCode" :blocks="loadImageBlockly" />
    </div>
    <div v-if="show === 2">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Key pressed</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        Shows if "X" key is pressed.
      </n-p>
      <Code :code="keyIsDownCode" :blocks="keyIsDownBlockly" />
    </div>
    <div v-if="show === 3">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Move object</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        This simple example shows how to move object with arrow keys. It uses delta time (dt), if you press key it will
        move object in that direction until you release the key. It moves the object by changing the X and Y values, you
        can manage the speed by changing the numerical value in the formula (original value is 100).
      </n-p>
      <n-p>You can find names of the key <a href="https://love2d.org/wiki/KeyConstant" target="_blank">here</a></n-p>
      <Code :code="moveWithKeyboardCode" :blocks="moveWithKeyboardBlockly" />
    </div>
    <div v-if="show === 4">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">How to shoot</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        First we need to setup some variables in load callback function. We need to create empty array for bullets, we
        will also define starting position and dimension of our player (player will not move in this example only shoot
        bullets).
      </n-p>
      <Code :code="shootCodeLoad" :blocks="shootBlocklyLoad" />
      <n-p>
        Next we set how bullets and player will be drawn. Bullets will be red filled circles, player will ber blue
        rectangle. For drawing bullets we need to loop through bullets array and draw them one by one.
      </n-p>
      <Code :code="shootCodeDraw" :blocks="shootBlocklyDraw" />
      <n-p>
        Next thin we need to do is create bullets. Bullet is crated when left mouse button is clicked. We define start
        position as middle of the player rectangle and target position as current position of the mouse cursor. Created
        bullet is saved to bullets array.
      </n-p>
      <Code :code="shootCodeBullet" :blocks="shootBlocklyBullet" />
      <n-p>
        Now it is time to define how will the bullets move. We define delta X(dx) and delta Y(dy) and multiply by delta
        time(dt). New values are saved to the bullet array. Last thing we need to do is remove bullet from bullets array
        when it exits the screen. To do this we compose
        bullet position to screen width and height.
      </n-p>
      <Code :code="shootCodeMove" :blocks="shootBlocklyMove" />
    </div>
    <div v-if="show === 5">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Fifteen - game</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <div v-if="show === 6">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Snake - game</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </div>
</template>

<script>
import Code from '@/Pages/Project/Tutorial/Code'
import useTutorials from '@/Tutorials'
import { ref, watch } from 'vue'
import {
  ArrowBackOutline as BackIcon,
} from '@vicons/ionicons5'

export default {
  name: 'Tutorial',
  components: {
    Code,
    BackIcon,
  },
  props: {
    tutorial: Number,
  },
  setup(props) {
    const {
      loadImageBlockly,
      loadImageCode,
      keyIsDownBlockly,
      keyIsDownCode,
      moveWithKeyboardBlockly,
      moveWithKeyboardCode,
      shootCodeMove,
      shootCodeDraw,
      shootCodeLoad,
      shootBlocklyMove,
      shootBlocklyLoad,
      shootCodeBullet,
      shootBlocklyDraw,
      shootBlocklyBullet,
    } = useTutorials()
    const show = ref(0)

    watch(() => props.tutorial, () => {
      show.value = props.tutorial
    })

    return {
      loadImageBlockly,
      loadImageCode,
      keyIsDownBlockly,
      keyIsDownCode,
      moveWithKeyboardBlockly,
      moveWithKeyboardCode,
      shootCodeMove,
      shootCodeDraw,
      shootCodeLoad,
      shootBlocklyMove,
      shootBlocklyLoad,
      shootCodeBullet,
      shootBlocklyDraw,
      shootBlocklyBullet,
      show,
    }
  },
}
</script>
