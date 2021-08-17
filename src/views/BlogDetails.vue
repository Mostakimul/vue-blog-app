<template>
  <div>
    <!-- The Page Title -->
    <ThePageTitle :page="page" />

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
        <router-link :to="{ name: 'BlogTag', params: { tag: tag } }">{{
          tag
        }}</router-link>
      </p>
      <p class="text-base text-gray-700">{{ blog.body }}</p>
    </div>
    <!-- loading -->
    <TheLoader v-else />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import TheLoader from '@/components/TheLoader.vue';
import TheError from '@/components/TheError.vue';
import TheHeader from '@/components/TheHeader.vue';
import ThePageTitle from '@/components/ThePageTitle.vue';
// import { useRoute } from 'vue-router';

export default {
  props: {
    id: {
      type: String,
    },
  },
  components: {
    TheLoader,
    TheError,
    TheHeader,
    ThePageTitle,
  },
  setup(props) {
    // useRoute (we can have different things like params)
    // const route = useRoute();
    // console.log(route.params.id);

    const page = 'Blog Details';
    // we can use useRoute to get id or feom props as well
    const { blog, error, load } = getPost(props.id);

    load();

    return { blog, error, page };
  },
};
</script>

<style lang="scss" scoped></style>
