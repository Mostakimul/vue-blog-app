<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-gray-300 font-bold my-3 p-4 rounded-md text-xl"
    >
      <h2>{{ post.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
