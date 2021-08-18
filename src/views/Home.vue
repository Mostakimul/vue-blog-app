<template>
  <!-- The Page Title -->
  <ThePageTitle :page="page" />
  <!-- Main Content -->
  <main>
    <!-- error div -->
    <TheError :error="error" />
    <!-- Passign through props -->
    <div v-if="posts.length" class="grid grid-cols-4 gap-4">
      <BlogList :posts="posts" class="col-span-full lg:col-span-3" />
      <BlogTags :posts="posts" class="col-span-full lg:col-span-1" />
    </div>
    <!-- loading -->
    <TheLoader v-else />
  </main>
</template>

<script>
import BlogList from '@/components/BlogList.vue';
import getPosts from '../composables/getPosts';
import TheLoader from '../components/TheLoader.vue';
import TheError from '../components/TheError.vue';
import TheHeader from '../components/TheHeader.vue';
import ThePageTitle from '../components/ThePageTitle.vue';
import BlogTags from '@/components/BlogTags.vue';

export default {
  name: 'Home',
  components: {
    BlogList,
    TheLoader,
    TheError,
    TheHeader,
    ThePageTitle,
    BlogTags,
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
