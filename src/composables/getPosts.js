import { ref } from 'vue';
import { vueBlogFirestore } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  // fetching data
  const load = async () => {
    try {
      // connection to firebase database
      const response = await vueBlogFirestore.collection('posts').get();
      // console.log(response.docs);
      posts.value = response.docs.map((doc) => {
        // console.log(doc.data());
        // spreading the data will get all different propertise
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      // console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
