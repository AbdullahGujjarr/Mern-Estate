// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cc2da.firebaseapp.com",
  projectId: "mern-estate-cc2da",
  storageBucket: "mern-estate-cc2da.appspot.com",
  messagingSenderId: "1003262563958",
  appId: "1:1003262563958:web:38fc275dc35215b0e1f157"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);