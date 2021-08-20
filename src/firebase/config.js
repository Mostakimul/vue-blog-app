import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEgghwaYdLGo2diAfmndG6-PI3RYRYNwI',
  authDomain: 'vue-blog-1e5a4.firebaseapp.com',
  projectId: 'vue-blog-1e5a4',
  storageBucket: 'vue-blog-1e5a4.appspot.com',
  messagingSenderId: '856712566049',
  appId: '1:856712566049:web:d96774668c39f5bf54da60',
};

// initializing firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore
const vueBlogFirestore = firebase.firestore();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { vueBlogFirestore, timestamp };
