// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO8TYTWzSGEfy8XBCSH74pYrYvLH8ER8Q",
  authDomain: "portfolio-7fbe4.firebaseapp.com",
  projectId: "portfolio-7fbe4",
  storageBucket: "portfolio-7fbe4.appspot.com",
  messagingSenderId: "477783925693",
  appId: "1:477783925693:web:fcac5d93c6e5cb6baf68d4",
  measurementId: "G-PGE91G4CSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);