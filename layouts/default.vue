<template>
  <div ref="homeHeadingRef">
    <Header/>
  </div>
  <div class="flex">
    <div class="flex flex-column w-full overflow-auto" :style="{ height: contentHeight }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">


const homeHeadingRef = ref<HTMLElement | null>(null);
const contentHeight = computed(() => {
  if (homeHeadingRef.value) {
    const headerHeight = homeHeadingRef.value.clientHeight;
    return `calc(100vh - ${headerHeight}px)`;
  }
  return '100vh'; 
});

onMounted(() => {
  if (homeHeadingRef.value) {
    const headerHeight = homeHeadingRef.value.clientHeight;
    console.log('Header Height:', headerHeight);
  }
});
</script>
