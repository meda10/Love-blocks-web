<template>
  <span :class="spanClass">
    <svg :height="size" :width="size" class="inline-block" viewBox="0 0 24 24">
      <path :d="path" />
    </svg>
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Icon',
  props: {
    path: {
      type: String,
      required: true,
    },
    w: {
      type: String,
      default: 'w-6',
    },
    h: {
      type: String,
      default: 'h-6',
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props) {
    const spanClass = computed(() => {
      return `inline-flex justify-center items-center ${props.w} ${props.h}`
    })
    return { spanClass }
  },
}
</script>

<style scoped>
/*svg {*/
/*  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));*/
/*}*/
path {
  fill: currentColor;
}
</style>
