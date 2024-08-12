// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "adelante-7c7d7.firebaseapp.com",
  projectId: "adelante-7c7d7",
  storageBucket: "adelante-7c7d7.appspot.com",
  messagingSenderId: "49610296350",
  appId: "1:49610296350:web:a1f9ed6ea6c96d806f320f",
  measurementId: "G-HSCSVHME3K",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);