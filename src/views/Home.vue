<template>
  <div class="lg:container mx-auto">
    <!-- Header -->
    <TheHeader :page="page" />
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
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'Home',
  components: {
    BlogList,
    TheLoader,
    TheError,
    TheHeader,
  },
  setup() {
    const page = 'Vue Blog Home';
    // Destructing the function to get values
    const { posts, error, load } = getPosts();

    // after running load we can have posts
    load();

    return { posts, error, page };
  },
};
</script>
