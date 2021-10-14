<template>
<div class="px-4 sm:px-6 md:px-8 max-w-screen-lg xl:max-w-screen-xl mx-auto">
  <TheHeader />
  <router-view />
</div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>
<style></style>
