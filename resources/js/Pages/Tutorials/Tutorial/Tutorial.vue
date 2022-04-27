<template>
  <div class="p-4">
    <div v-show="show === 0">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Open tutorial</h1>
      </div>
      <n-p>
        If you want you can copy the whole tutorial as your project. Just go to Project and in section tutorials
        click
        <n-text type="success">Copy to my projects</n-text>
        .
      </n-p>
      <n-card>
        <n-space justify="space-between">
          <n-h5>How Lua/LÖVE works</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(7)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Check if key is presed</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(2)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Move object</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(3)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Load image to the game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(1)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>How to shoot</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(4)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Fifteen - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(5)">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Snake - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="openTutorial(6)">Open</n-button>
        </n-space>
      </n-card>
    </div>
    <div v-show="show === 1">
      <load-image @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 2">
      <key-pressed @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 3">
      <MoveObject @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 4">
      <how-to-shoot @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 5">
      <fifteen @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 6">
      <snake @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
    <div v-show="show === 7">
      <how-love-works @goBack="openTutorial(0)" @loadingFinish="finishLoading" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import LoadImage from '@/Pages/Tutorials/Tutorial/LoadImage'
import KeyPressed from '@/Pages/Tutorials/Tutorial/KeyPressed'
import HowLoveWorks from '@/Pages/Tutorials/Tutorial/HowLoveWorks'
import Snake from '@/Pages/Tutorials/Tutorial/Snake'
import Fifteen from '@/Pages/Tutorials/Tutorial/Fifteen'
import HowToShoot from '@/Pages/Tutorials/Tutorial/HowToShoot'
import MoveObject from '@/Pages/Tutorials/Tutorial/MoveObject'
import { useLoadingBar } from 'naive-ui'

export default {
  name: 'Tutorial',
  components: {
    HowLoveWorks,
    KeyPressed,
    LoadImage,
    Snake,
    HowToShoot,
    Fifteen,
    MoveObject,
  },
  props: {
    tutorial: Number,
  },
  setup(props) {
    // const loadingBar = useLoadingBar()
    const show = ref(0)

    watch(() => props.tutorial, () => {
      show.value = props.tutorial
    })

    const openTutorial = (id) => {
      // console.log('open tutorial')
      // loadingBar.start()
      show.value = id
    }

    const finishLoading = () => {
      // console.log('finish loading')
      // loadingBar.finish()
    }

    return {
      show,
      finishLoading,
      openTutorial,
    }
  },
}
</script>
