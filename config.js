import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDqf1zieslT9avMOJVWaSL_YUWQTUodZqs",
  authDomain: "barter-system-6b737.firebaseapp.com",
  projectId: "barter-system-6b737",
  storageBucket: "barter-system-6b737.appspot.com",
  messagingSenderId: "589072376099",
  appId: "1:589072376099:web:60e3caaeb6ca6011f9ac96",
  measurementId: "G-XQD7GHMNFF"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
