<template>
  <div class="lg:container mx-auto">
    <!-- header -->
    <TheHeader />

    <!-- Main content -->
    <main>
      <form class="bg-purple-700 w-1/2 mx-auto p-5 rounded-md">
        <label class="block text-base text-white font-medium p-2 "
          >Title:
        </label>
        <input
          v-model="title"
          type="text"
          required
          class="block w-full p-1 px-3 rounded-md bg-gray-100 focus:outline-none"
        />

        <label class="block text-base text-white font-medium p-2"
          >Content:</label
        >
        <textarea
          v-model="body"
          cols="30"
          rows="5"
          required
          class="block w-full p-1 px-3 rounded-md bg-gray-100 focus:outline-none resize-none"
        ></textarea>

        <label class="block text-base text-white font-medium p-2">Tags:</label>
        <input
          @keydown.enter.prevent="handleTag"
          v-model="tag"
          type="text"
          class="block w-full p-1 px-3 rounded-md bg-gray-100 focus:outline-none"
        />

        <p
          v-for="tag in tags"
          :key="tag"
          class="inline-block bg-purple-600 text-gray-200 my-2 mr-2 py-1 px-2 text-xs font-semibold rounded-full"
        >
          {{ tag }}
        </p>

        <button
          class="block w-full bg-indigo-400 py-2 rounded-full text-white font-semibold my-3"
        >
          Add Blog
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import { ref } from 'vue';
export default {
  name: 'CreateBlog',
  components: {
    TheHeader,
  },
  setup() {
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);

    // Tag
    const handleTag = () => {
      if (!tags.value.includes(tag.value)) {
        // remove all white space
        tag.value = tag.value.replace(/\s/, '');
        // push all tag into tags
        tags.value.push(tag.value);
      }
      // clear input value
      tag.value = '';
    };

    return { title, body, tag, handleTag, tags };
  },
};
</script>

<style lang="scss" scoped></style>
