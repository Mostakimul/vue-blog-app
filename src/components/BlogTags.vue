<template>
  <div class="tags bg-gray-300 my-3 p-4 rounded-md">
    <h3 class="text-xl font-semibold">All Tags</h3>
    <p v-for="tag in tags" :key="tag" class="inline-block py-2">
      <router-link
        :to="{ name: 'BlogTag', params: { tag: tag } }"
        class="bg-purple-600 text-gray-200 my-2 mr-2 py-1 px-2 text-xs font-semibold rounded-full"
        >{{ tag }}</router-link
      >
    </p>
  </div>
</template>

<script>
import getTags from '../composables/getTags';
export default {
  props: {
    posts: {
      type: Object,
    },
  },
  setup(props) {
    const { tags } = getTags(props.posts);

    return { tags };
  },
};
</script>

<style scoped>
.tags a.router-link-active {
  background-color: rgba(76, 29, 149, 1);
}
</style>
