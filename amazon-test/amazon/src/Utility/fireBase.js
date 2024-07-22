import firebase from "firebase/compat/app";
//auth
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5o8xG3W7JH-w41h5PjRQuLRihsXuKBhg",
  authDomain: "fir-cef2f.firebaseapp.com",
  projectId: "fir-cef2f",
  storageBucket: "fir-cef2f.appspot.com",
  messagingSenderId: "189652924417",
  appId: "1:189652924417:web:45bacdf22c4883040d2800",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();