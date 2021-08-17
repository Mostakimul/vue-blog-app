<template>
  <main>
    <!-- The Page Title -->
    <ThePageTitle :page="page" />
    <!-- error div -->
    <TheError :error="error" />

    <!-- Filtered post -->
    <div v-if="posts.length">
      <BlogList :posts="filterTagPost" />
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
