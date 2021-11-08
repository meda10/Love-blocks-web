<template>
  <component :is="componentIs" :as="componentAs" :class="componentStyle" :href="href" :type="componentType">
    <span v-if="label" v-html="label" />
    <Icon v-if="path" :path="path" />
  </component>
</template>

<script>
import Icon from '@/Shared/Icon'
import { Link } from '@inertiajs/inertia-vue3'
import { computed } from 'vue'

export default {
  name: 'ButtonLink',
  components: {
    Icon,
    Link,
  },
  props: {
    componentStyle: String,
    label: String,
    path: String,
    href: String,
    type: String,
    as: String,
    button: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const componentIs = computed(() => {
      if (props.button) {
        return 'button'
      }
      return 'Link'
    })

    const componentAs = computed(() => {
      if (props.as) {
        return props.as
      }
      if (componentIs.value === 'button') {
        return null
      }
      return 'button'
    })

    const componentType = computed(() => {
      if (componentAs.value === 'button') {
        return props.type ?? 'button'
      }
      return null
    })

    return {
      componentIs,
      componentType,
      componentAs,
    }
  },
}
</script>
