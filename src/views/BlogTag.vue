<template>
  <main>
    <!-- The Page Title -->
    <ThePageTitle :page="page" />
    <!-- error div -->
    <TheError :error="error" />

    <!-- Filtered post -->
    <div v-if="posts.length" class="grid grid-cols-4 gap-4">
      <BlogList :posts="filterTagPost" class="col-span-3" />
      <BlogTags :posts="posts" />
    </div>
    <!-- loading -->
    <TheLoader v-else />
  </main>
</template>

<script>
import { computed } from 'vue';
import getPosts from '../composables/getPosts';
import TheLoader from '../components/TheLoader.vue';
import BlogList from '../components/BlogList.vue';
import TheError from '../components/TheError.vue';
import ThePageTitle from '../components/ThePageTitle.vue';
import { useRoute } from 'vue-router';
import BlogTags from '../components/BlogTags.vue';

export default {
  props: {
    tag: {
      type: String,
    },
  },
  components: {
    TheError,
    TheLoader,
    BlogList,
    ThePageTitle,
    BlogTags,
  },
  setup(props) {
    const page = `All ${props.tag} posts`;
    const route = useRoute();

    // getPosts
    const { posts, error, load } = getPosts();
    load();

    // filter post by tag
    const filterTagPost = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { filterTagPost, error, posts, page };
  },
};
</script>

<style scoped></style>
