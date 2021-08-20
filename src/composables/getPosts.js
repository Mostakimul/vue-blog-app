import { ref } from 'vue';
import { vueBlogFirestore } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  // fetching data
  const load = async () => {
    try {
      // For realtime update from firebase
      const response = await vueBlogFirestore
        .collection('posts')
        .orderBy('created_at', 'desc')
        .onSnapshot((snap) => {
          posts.value = snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        });

      /*
      // connection to firebase database
      const response = await vueBlogFirestore
        .collection('posts')
        .orderBy('created_at', 'desc')
        .get();
      // console.log(response.docs);
      posts.value = response.docs.map((doc) => {
        // console.log(doc.data());
        // spreading the data will get all different propertise
        return { ...doc.data(), id: doc.id };
      });
      */
    } catch (err) {
      error.value = err.message;
      // console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
