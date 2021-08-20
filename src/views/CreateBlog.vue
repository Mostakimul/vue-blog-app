<template>
  <div>
    <!-- The Page Title -->
    <div class="text-center mb-3">
      <ThePageTitle :page="page" />
    </div>

    <!-- Main content -->
    <main>
      <form
        @submit.prevent="handleBlog"
        class="bg-gradient-to-r from-green-400 to-green-600 w-full md:w-3/4 lg:w-1/2 mx-auto p-5 rounded-md"
      >
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
          class="block w-full bg-green-800 py-2 rounded-full text-white font-semibold my-3"
        >
          Add Blog
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import ThePageTitle from '@/components/ThePageTitle.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { timestamp, vueBlogFirestore } from '../firebase/config';
export default {
  name: 'CreateBlog',
  components: {
    TheHeader,
    ThePageTitle,
  },
  setup() {
    const page = 'Add New Blog';
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);
    const router = useRouter();

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

    // Adding blog
    const handleBlog = async () => {
      const blog = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        created_at: timestamp(),
      };
      // blog data to firebase
      const response = await vueBlogFirestore.collection('posts').add(blog);

      router.push({
        name: 'Home',
      });
    };

    return { title, body, tag, handleTag, tags, handleBlog, page };
  },
};
</script>

<style lang="scss" scoped></style>
