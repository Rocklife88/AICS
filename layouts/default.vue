<template>
  <div>
  <div ref="homeHeadingRef">
    <HomeHeader/>
  </div>
  <div class="flex ">
    <div class=" w-full h-full flex overflow-auto  " :style="{ height: contentHeight }">
      <slot />
    </div>
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
