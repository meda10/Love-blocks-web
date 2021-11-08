<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="flex-col justify-center hero-content lg:flex-row w-full max-w-md items-stretch">
      <div class="card flex-shrink-0 flex-grow shadow-2xl bg-base-100">
        <div class="card-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
}
</script>
