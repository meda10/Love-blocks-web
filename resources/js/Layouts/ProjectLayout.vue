<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } } ">
    <n-message-provider>
      <div class="h-screen flex flex-col flex-nowrap">
        <slot />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script>

export default {
  name: 'ProjetLayout',
  components: {},
}
</script>

<style scoped>

</style>
