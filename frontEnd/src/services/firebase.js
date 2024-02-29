// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACZ3xBx9CVVZO0fTdjrEe0LX8qWJFMWg0",
  authDomain: "pizzatett.firebaseapp.com",
  projectId: "pizzatett",
  storageBucket: "pizzatett.appspot.com",
  messagingSenderId: "255465524527",
  appId: "1:255465524527:web:dd58b6bd74d9881349e5da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
