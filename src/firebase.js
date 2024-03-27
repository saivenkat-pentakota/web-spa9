import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBoGTgex8xY2SVLm-a7o5AyC2-VZCACz-Y",
    authDomain: "web-spa9.firebaseapp.com",
    projectId: "web-spa9",
    storageBucket: "web-spa9.appspot.com",
    messagingSenderId: "331604924625",
    appId: "1:331604924625:web:3c344c2ceab3e88eaacdf0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
