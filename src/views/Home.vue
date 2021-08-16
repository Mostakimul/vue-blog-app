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
        <h2 class="text-4xl font-bold text-center">Vue Blog</h2>
      </div>
    </header>
    <!-- Main Content -->
    <main>
      <!-- error div -->
      <div
        v-if="error"
        class="text-center font-bold text-base w-2/5 mx-auto bg-red-500 text-white rounded-md py-2 mt-10"
      >
        {{ error }}
      </div>
      <!-- Passign through props -->
      <div v-if="posts.length">
        <BlogPost :posts="posts" />
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
    </main>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import getPosts from '../composables/getPosts';

export default {
  name: 'Home',
  components: {
    BlogPost,
  },
  setup() {
    // Destructing the function to get values
    const { posts, error, load } = getPosts();

    // after running load we can have posts
    load();

    return { posts, error };
  },
};
</script>
