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
      <TheError :error="error" />
      <!-- Passign through props -->
      <div v-if="posts.length">
        <BlogList :posts="posts" />
      </div>
      <!-- loading -->
      <TheLoader v-else />
    </main>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';
import getPosts from '../composables/getPosts';
import TheLoader from '../components/TheLoader.vue';
import TheError from '../components/TheError.vue';

export default {
  name: 'Home',
  components: {
    BlogList,
    TheLoader,
    TheError,
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
