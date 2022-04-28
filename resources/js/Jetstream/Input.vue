<template>
  <input ref="input" :value="modelValue"
         class="border text-white bg-light-gray border-dark-dark-gray rounded p-1 focus:border-success focus:ring focus:ring-success focus:ring-opacity-50 shadow-sm"
         @input="$emit('update:modelValue', $event.target.value)">
  <!--  <n-input ref="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />-->
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
