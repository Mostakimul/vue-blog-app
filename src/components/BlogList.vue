<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <BlogPost :post="post" />
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
export default {
  props: {
    posts: {
      type: Object,
    },
  },
  components: {
    BlogPost,
  },
  setup() {
    return {};
  },
};
</script>
