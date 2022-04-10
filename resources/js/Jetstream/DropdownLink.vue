<template>
  <div>
    <button v-if="as == 'button'"
            class="block w-full px-4 py-2 text-sm leading-5 text-white text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
            type="submit">
      <slot></slot>
    </button>

    <a v-else-if="as =='a'"
       :href="href"
       class="block px-4 py-2 text-sm leading-5 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
      <slot></slot>
    </a>

    <Link v-else
          :href="href"
          class="block px-4 py-2 text-sm leading-5 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
      <slot></slot>
    </Link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

export default defineComponent({
  components: {
    Link,
  },
  props: ['href', 'as'],
})
</script>
