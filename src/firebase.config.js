// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU3ucAt44XhEBJNtxCgvGlSk9YzYfl9y4",
  authDomain: "house-marketplace-app-76a0f.firebaseapp.com",
  projectId: "house-marketplace-app-76a0f",
  storageBucket: "house-marketplace-app-76a0f.appspot.com",
  messagingSenderId: "392999977279",
  appId: "1:392999977279:web:7e25fd0cffe67ee6b0d38a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()