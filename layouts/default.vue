<template>
  <div>
    <div ref="homeHeadingRef">
      <HomeHeader />
    </div>
    <div class="flex flex-col min-h-screen">
      <div class="flex-1 overflow-auto overflow-x-hidden ">
        <slot />
      </div>
      <div>
      <Footer />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
