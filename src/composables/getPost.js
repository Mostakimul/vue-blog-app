import { ref } from 'vue';
import { vueBlogFirestore } from '../firebase/config';

const getPost = (id) => {
  const blog = ref(null);
  const error = ref(null);

  // fetching data
  const load = async () => {
    try {
      let response = await vueBlogFirestore
        .collection('posts')
        .doc(id)
        .get();
      // console.log(response.data);
      if (!response.exists) {
        throw Error('The blog dose not exist!!!');
      }

      blog.value = { ...response.data(), id: response.id };
      // console.log(posts.value);
    } catch (err) {
      error.value = err.message;
      // console.log(error.value);
    }
  };

  return { blog, error, load };
};

export default getPost;
