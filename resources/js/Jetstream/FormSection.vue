<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <jet-section-title>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #description>
        <slot name="description"></slot>
      </template>
    </jet-section-title>

    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="$emit('submitted')">
        <div :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'"
             class="px-4 py-5 bg-dark-gray sm:p-6 shadow">
          <div class="grid grid-cols-6 gap-6">
            <slot name="form"></slot>
          </div>
        </div>

        <div
          v-if="hasActions"
          class="flex items-center justify-end px-4 py-3 bg-dark-gray text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
          <slot name="actions"></slot>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import JetSectionTitle from './SectionTitle.vue'

export default defineComponent({
  emits: ['submitted'],

  components: {
    JetSectionTitle,
  },

  computed: {
    hasActions() {
      return !!this.$slots.actions
    },
  },
})
</script>
