import { ref } from 'vue';

const getPost = (id) => {
  const blog = ref(null);
  const error = ref(null);

  // fetching data
  const load = async () => {
    try {
      let blogPost = await fetch(`http://localhost:3000/posts/${id}`);
      // console.log(data);
      if (!blogPost.ok) {
        throw Error('Can not fetch blog details!!!');
      }
      blog.value = await blogPost.json();
      // console.log(posts.value);
    } catch (err) {
      error.value = err.message;
      // console.log(error.value);
    }
  };

  return { blog, error, load };
};

export default getPost;
