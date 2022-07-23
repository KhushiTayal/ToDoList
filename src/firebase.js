
import firebase from 'firebase/compat/app';
import "firebase/auth";
 import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNgEx6Z9vL4xRXZXmZZLQOlpq1W1bwQts",
  authDomain: "todolist-14eed.firebaseapp.com",
  projectId: "todolist-14eed",
  storageBucket: "todolist-14eed.appspot.com",
  messagingSenderId: "547780430546",
  appId: "1:547780430546:web:963666a66ae97127217b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default app;
export const auth = firebase.auth( );