<template>
  <div class="lg:container mx-auto">
    <!-- Header -->
    <header class="mb-10">
      <div>
        <img
          class="w-40 mx-auto"
          src="../assets/logo.png"
          alt="Vue Blog Logo"
        />
        <h2 class="text-4xl font-bold text-center">Vue Blog Details</h2>
      </div>
    </header>

    <!-- error div -->
    <TheError :error="error" />

    <!-- blog details -->
    <div v-if="blog" class="bg-gray-300  my-3 p-4 rounded-md ">
      <h2 class="font-bold text-xl">{{ blog.title }}</h2>
      <p
        v-for="tag in blog.tags"
        :key="tag"
        class="inline-block bg-purple-600 text-gray-200 my-2 mr-2 py-1 px-2 text-xs font-semibold rounded-full"
      >
        {{ tag }}
      </p>
      <p class="text-base text-gray-700">{{ blog.body }}</p>
    </div>
    <!-- loading -->
    <TheLoader v-else />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import TheLoader from './TheLoader.vue';
import TheError from './TheError.vue';

export default {
  props: {
    id: {
      type: String,
    },
  },
  components: {
    TheLoader,
    TheError,
  },
  setup(props) {
    const { blog, error, load } = getPost(props.id);

    load();

    return { blog, error };
  },
};
</script>

<style lang="scss" scoped></style>
