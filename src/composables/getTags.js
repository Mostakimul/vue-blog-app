import { ref } from 'vue';

const getTags = (posts) => {
  const tags = ref([]);
  const allTags = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      allTags.add(tag);
    });
  });

  // converted set into a array by destrucring
  tags.value = [...allTags];

  return { tags };
};

export default getTags;
