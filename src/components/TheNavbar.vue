<template>
  <nav>
    <router-link
      :to="{ name: 'Home' }"
      class="mr-2 bg-green-500 text-white py-1 px-2 rounded font-semibold shadow-md"
      >Home</router-link
    >
    <router-link
      :to="{ name: 'CreateBlog' }"
      class="ml-2 bg-green-500 text-white py-1 px-2 rounded font-semibold shadow-md"
      >Create</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav a.router-link-active {
  background-color: #35495e;
}
</style>
