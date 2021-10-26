import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace with your project's customized code snippet
var firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID",
  appId: "YOUR APP ID"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;