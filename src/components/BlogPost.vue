<template>
  <div>
    <div class="bg-gray-300 font-bold my-3 p-4 rounded-md text-xl">
      <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }">
        <h2>{{ post.title }}</h2>
      </router-link>
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
