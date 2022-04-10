<template>
  <div class="border-b bg-light-gray border-dark-gray  text-sm flex justify-start">
    <a
      v-for="item in items"
      :key="item.value"
      :class="modelValue === item.value ? 'tab-item-active' : 'tab-item'"
      href="#"
      @click.prevent="emit('update:modelValue', item.value)"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    items: Array,
    modelValue: String,
  },
  emits: {
    'update:modelValue': String,
  },
  setup(props, { emit }) {
    return {
      emit,
    }
  },
}
</script>

<style>
.tab-item {
  @apply inline-block px-4 py-3 text-white hover:text-light-green;
}

.tab-item-active {
  @apply inline-block bg-dark-gray px-4 py-3 border-t-2 border-light-green text-light-green font-semibold;
}
</style>
