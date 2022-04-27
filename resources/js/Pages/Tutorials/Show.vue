<template>
  <!--  <n-card title="Tutorials">-->
  <!--  <n-loading-bar-provider>-->
  <Tutorial :tutorial="tutorialRef" />
  <!--  </n-loading-bar-provider>-->
  <!--  </n-card>-->
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import Tutorial from '@/Pages/Tutorials/Tutorial/Tutorial'
import { ref } from 'vue'

export default {
  name: 'ShowTutorials',
  components: {
    Tutorial,
  },
  layout: AppLayout,
  setup() {
    const tutorialRef = ref(0)
    return {
      tutorialRef,
    }
  },
}
</script>

<style scoped>

</style>
