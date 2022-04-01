<template>
  <input ref="input" :value="modelValue"
         class="border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
         @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],

  emits: ['update:modelValue'],

  methods: {
    focus() {
      this.$refs.input.focus()
    },
  },
})
</script>
