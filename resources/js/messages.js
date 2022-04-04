import { useMessage } from 'naive-ui'
import { usePage } from '@inertiajs/inertia-vue3'
import { onMounted, watch, computed } from 'vue'

export default function () {
  const message = useMessage()
  const flash = computed(() => usePage().props.value.flash)

  onMounted(() => {
    console.log('OnMounted')
    if (flash.value.success != null) message.success(flash.value.success)
    if (flash.value.error != null) message.error(flash.value.error)
  })

  watch(flash, () => {
    console.log('watch')
    if (flash.value.success != null) message.success(flash.value.success)
    if (flash.value.error != null) message.error(flash.value.error)
  })

  return {
    message,
    onMounted,
    watch,
  }
}
