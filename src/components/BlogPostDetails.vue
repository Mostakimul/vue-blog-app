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
    <div
      v-if="error"
      class="text-center font-bold text-base w-2/5 mx-auto bg-red-500 text-white rounded-md py-2 mt-10"
    >
      {{ error }}
    </div>

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
    <div v-else class="text-center">
      <button
        type="button"
        class="bg-red-600 py-2 px-5 font-semibold text-white rounded-md"
        disabled
      >
        Processing...
      </button>
    </div>
  </div>
</template>

<script>
import getPost from '../composables/getPost';

export default {
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const { blog, error, load } = getPost(props.id);

    load();

    return { blog, error };
  },
};
</script>

<style lang="scss" scoped></style>
