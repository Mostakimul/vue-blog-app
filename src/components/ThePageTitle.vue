<template>
  <div>
    <h2 class="text-4xl font-bold text-gray-400">{{ page }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
