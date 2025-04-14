// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMnqwi5jvfo1DmeDVg-Ra-3kmWyiaISo",
  authDomain: "proyecto-bbf.firebaseapp.com",
  projectId: "proyecto-bbf",
  storageBucket: "proyecto-bbf.firebasestorage.app",
  messagingSenderId: "389986751693",
  appId: "1:389986751693:web:708d05fd1bddebd7f7c584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)