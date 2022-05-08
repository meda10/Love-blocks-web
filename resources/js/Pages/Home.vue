<template>
  <Head title="Home" />
  <n-card>
    <n-h1>Love Blocks</n-h1>
    <n-p>
      Love Blocks is web based code editor for
      <n-a target="_blank" href="https://love2d.org/">LÖVE</n-a>
      or Lua. You can use block based programing or classic text editor.
    </n-p>
    <n-hr />
    <n-h2>How it works</n-h2>
    <n-p>
      You can use either block editor for programming or classic text editor. You can also switch between block editor
      and text editor and your code will be automatically translated from blocks to text code. But if you make changes
      in text editor you can't switch back to block editor, because it is not possible to generate blocks from code. If
      you switch back your changes from text editor will be discarded.
    </n-p>
    <n-h2>Run game in the browser</n-h2>
    <n-p>
      You can lunch the game you build in the browser. When you lunch your game the Game Mode will be activated, this
      mean that all keyboard input will go to the game. If you wish to turn this off you can use either the Stop or the
      Pause button.
    </n-p>
    <div class="flex flex-nowrap flex-row justify-start">
      <n-ol>
        <n-li>Refresh - lunch or refresh game</n-li>
        <n-li>Stop - stop the game and turn off game mode</n-li>
        <n-li>Play/Pause -turn on/off game mode</n-li>
      </n-ol>
      <div class="ml-6">
        <img src="/storage/media/play.png">
        <img src="/storage/media/pause.png">
      </div>
    </div>
    <n-p>Running games can be memory intensive and your browser can be slower. To clen up the memory refresh the page,
      you can find simple indicator of your memory usage in the top panel.
    </n-p>
    <img src="/storage/media/heap.png">
    <n-h2>Download game to your Android device</n-h2>
    <n-p>
      If you want to play your game on Android device, you can use
      <n-a target="_blank" href="https://play.google.com/store/apps/details?id=blocks.love">Love Blocks - Android</n-a>
      app to simply download and run
      your game. Just download your app
      <n-a target="_blank" href="https://play.google.com/store/apps/details?id=blocks.love">Love Blocks - Android</n-a>
      and login to your account. Then you can either download your games from the
      app or in the web browser click "Download to Android" and your game will be automatically downloaded and lunched.
    </n-p>
    <img src="/storage/media/downloadAndroid.png">
    <n-h2>Learn LÖVE</n-h2>
    You can learn LÖVE with build in tutorials or use some of these:
    <ul>
      <li>
        <n-a target="_blank" href="https://simplegametutorials.github.io/love/">Simple game tutorials</n-a>
      </li>
      <li>
        <n-a target="_blank" href="https://rvagamejams.com/learn2love/">learn2love</n-a>
      </li>
      <li>
        <n-a target="_blank" href="https://sheepolution.com/learn/book/contents">How to LÖVE</n-a>
      </li>
    </ul>
    <n-h2>Open-source</n-h2>
    <n-p>Both Android application and this web application are open-source you can find the code on Github:</n-p>
    <ul>
      <li>
        <n-a target="_blank" href="https://github.com/meda10/Love-blocks-android">Love Blocks - Android</n-a>
      </li>
      <li>
        <n-a target="_blank" href="https://github.com/meda10/Love-blocks-web">Love Blocks - Web</n-a>
      </li>
    </ul>
    <n-h2>Powered by</n-h2>
    <ul>
      <li>
        <n-a target="_blank" href="">Monaco code editor</n-a>
      </li>
      <li>
        <n-a target="_blank" href="">Blockly</n-a>
      </li>
      <li>
        <n-a target="_blank" href="">Lua Language Server</n-a>
      </li>
      <li>
        <n-a target="_blank" href="">love.js</n-a>
      </li>
      <li>
        <n-a target="_blank" href="https://icons8.com/icon/SkbzwdwhI2sy/love-circled">Love Circled</n-a>
      </li>
    </ul>
    <!--    <a href="">love2d</a>-->
    <!--    <a target="_blank" href="https://icons8.com/icon/SkbzwdwhI2sy/love-circled">Love Circled</a> icon by <a-->
    <!--    target="_blank" href="https://icons8.com">Icons8</a>-->
  </n-card>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/Layouts/AppLayout'
import { ref } from 'vue'
import useMessaging from '@/messages'

export default {
  name: 'Home',
  components: {
    Head,
  },
  layout: AppLayout,
  setup() {
    useMessaging()

    const theme = ref(localStorage.getItem('theme'))
    if (theme.value === null || theme.value === undefined || theme.value === '') {
      localStorage.setItem('theme', 'dark')
      theme.value = localStorage.getItem('theme')
    }

    const changeTheme = () => {
      theme.value = localStorage.getItem('theme')
      if (theme.value === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      }
      theme.value = localStorage.getItem('theme')
    }

    return {
      theme,
      changeTheme,
    }
  },
}
</script>
