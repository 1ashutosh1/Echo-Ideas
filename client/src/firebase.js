// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-96024.firebaseapp.com",
  projectId: "mern-blog-96024",
  storageBucket: "mern-blog-96024.appspot.com",
  messagingSenderId: "524637867075",
  appId: "1:524637867075:web:3a8db45a8cd69eecc3d8f6",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
