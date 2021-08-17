<template>
  <div>
    <div class="bg-gray-300 font-bold my-3 p-4 rounded-md text-xl">
      <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }">
        <h2>{{ post.title }}</h2>
      </router-link>
      <p
        v-for="tag in post.tags"
        :key="tag"
        class="inline-block bg-purple-600 text-gray-200 my-2 mr-2 py-1 px-2 text-xs font-semibold rounded-full"
      >
        <router-link :to="{ name: 'BlogTag', params: { tag: tag } }">{{
          tag
        }}</router-link>
      </p>
      <p class="text-base text-gray-700">{{ postBody }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {
    const postBody = computed(() => {
      return props.post.body.substring(0, 50) + '...';
    });
    return { postBody };
  },
};
</script>

<style lang="scss" scoped></style>
