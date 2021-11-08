<template>
  <div class="form-control">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <div class="relative form-control">
      <Multiselect v-if="computedType === 'select'"
                   :id="id"
                   v-model="computedValue"
                   :can-deselect="false"
                   :class="inputElClass"
                   :classes="multiselectClasses"
                   :name="name"
                   :options="options"

      />
      <textarea v-else-if="computedType === 'textarea'"
                :id="id"
                v-model="computedValue"
                :class="inputElClass"
                :name="name"
                :placeholder="placeholder"
                :required="required"
                class="relative w-full h-24 textarea textarea-bordered"
      />
      <input v-else
             :id="id"
             v-model="computedValue"
             :autocomplete="autocomplete"
             :class="inputElClass"
             :name="name"
             :placeholder="placeholder"
             :required="required"
             :type="computedType"
             class="relative w-full input input-bordered"
      />
      <Icon v-if="icon" :h="iconH" :path="icon" class="absolute top-0 left-0 z-10 pointer-events-none text-gray-500"
            w="w-10" />
    </div>
    <label v-if="error || help" class="label">
      <span class="label-text-alt">{{ error }}</span>
      <span class="label-text-alt">{{ help }}</span>
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'
import Icon from '@/Shared/Icon'
import Multiselect from '@vueform/multiselect'
import msClasses from '@/multiselectClasses'

export default {
  name: 'Control',
  components: {
    Icon,
    Multiselect,
  },
  props: {
    name: String,
    label: String,
    error: String,
    help: String,
    id: String,
    required: Boolean,
    autocomplete: String,
    placeholder: String,
    icon: String,
    options: Array,
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: '',
    },
  },
  emits: ['update:modelValue', 'right-icon-click'],
  setup(props, { emit }) {
    const computedType = computed(() => props.options ? 'select' : props.type)

    const multiselectClasses = msClasses

    const computedValue = computed({
      get: () => props.modelValue,
      set: value => {
        emit('update:modelValue', value)
      },
    })

    const inputElClass = computed(() => {
      const base = []
      if (props.error) {
        if (computedType.value === 'textarea') {
          base.push('textarea-error')
        } else {
          base.push('input-error')
        }
      }
      if (props.icon) {
        base.push('pl-10')
      } else {
        base.push('')
      }

      return base
    })

    const iconH = computed(() => props.type === 'textarea' ? 'h-full' : 'h-12')

    return {
      computedValue,
      inputElClass,
      multiselectClasses,
      computedType,
      iconH,
    }
  },
}
</script>
