import { useMessage } from 'naive-ui'
import { usePage } from '@inertiajs/inertia-vue3'
import { onMounted, watch, computed } from 'vue'

export default () => {
  const message = useMessage()
  const flash = computed(() => usePage().props.value.flash)

  onMounted(() => {
    if (flash.value.success != null) message.success(flash.value.success)
    if (flash.value.error != null) message.error(flash.value.error)
  })

  watch(flash, () => {
    if (flash.value.success != null) message.success(flash.value.success)
    if (flash.value.error != null) message.error(flash.value.error)
  })

  return {
    message,
    onMounted,
    watch,
  }
}
