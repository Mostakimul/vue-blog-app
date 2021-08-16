<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-gray-300 font-bold my-3 p-4 rounded-md text-xl"
    >
      <router-link :to="{ name: 'BlogPostDetails', params: { id: post.id } }">
        <h2>{{ post.title }}</h2>
      </router-link>
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
