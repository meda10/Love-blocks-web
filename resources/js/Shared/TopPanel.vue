<template>
  <n-button :block="true" :strong="true" type="primary" @click="sendMSG">Send MSG</n-button>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'

export default {
  name: 'TopPanel',
  props: {
    project: Object,
  },
  setup(props) {
    const sendMSG = () => {
      Inertia.get(route('project.download', { project: props.project.id }), {}, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
      })
    }

    return {
      sendMSG,
    }
  },
}
</script>

<style scoped>

</style>
