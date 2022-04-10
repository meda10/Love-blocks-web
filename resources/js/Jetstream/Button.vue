<template>
  <!--  <button :type="type"-->
  <!--          class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">-->
  <!--    <slot></slot>-->
  <!--  </button>-->
  <n-button attr-type="submit" type="info">
    <slot></slot>
  </n-button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'submit',
    },
  },
})
</script>
