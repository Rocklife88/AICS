<template>
  <div>
    <div ref="homeHeadingRef">
      <HomeHeader />
    </div>
    <div class="flex flex-col min-h-screen">
      <div class="flex-1 overflow-auto overflow-x-hidden mb-10">
        <slot />
      </div>
      <div>
      <Footer />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

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
