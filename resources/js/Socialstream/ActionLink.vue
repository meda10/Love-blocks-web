<template>
  <a :href="href"
     class="inline-flex items-center px-4 py-2 bg-light-gray border border-gray-800 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-200 hover:border-gray-600 active:border-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['href'],
}
</script>
