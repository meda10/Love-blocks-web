<template>
  <div
    class="border-b border-gray-200 text-sm flex justify-start"
  >
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
  @apply inline-block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400;
}

.tab-item-active {
  @apply inline-block px-4 py-2 border-t-2 border-indigo-500 text-indigo-500 font-semibold;
}
</style>
