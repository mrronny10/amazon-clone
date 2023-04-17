import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaJ-mAYwAdgliqSkqMXgVatuEcmTYJ2aA",
    authDomain: "clone-17c2c.firebaseapp.com",
    projectId: "clone-17c2c",
    storageBucket: "clone-17c2c.appspot.com",
    messagingSenderId: "523425138309",
    appId: "1:523425138309:web:54ffb0a9e1c0fe8dd00bec",
    measurementId: "G-J82FHWYSHT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};