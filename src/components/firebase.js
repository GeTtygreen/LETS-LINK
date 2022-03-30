import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDeYOOXYgIT-cbSRXy_ArzbngtEiqYFoqw",
  authDomain: "linkedin-613e3.firebaseapp.com",
  projectId: "linkedin-613e3",
  storageBucket: "linkedin-613e3.appspot.com",
  messagingSenderId: "289557541859",
  appId: "1:289557541859:web:03fc43bba79ae5689fa6d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
