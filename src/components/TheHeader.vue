<template>
  <header class="py-5">
    <div class="flex justify-between items-center">
      <router-link :to="{ name: 'Home' }"
        ><img class="w-14" src="../assets/logo.png" alt="Vue Blog Logo"
      /></router-link>
      <TheNavbar />
    </div>
  </header>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss" scoped></style>
