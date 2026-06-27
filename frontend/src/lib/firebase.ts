import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// TODO: Replace these with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyAO_F4ARxkfiFVIJK-P4m-08MtGKuYRGmI",
  authDomain: "abhyys-food.firebaseapp.com",
  projectId: "abhyys-food",
  storageBucket: "abhyys-food.firebasestorage.app",
  messagingSenderId: "246723817276",
  appId: "1:246723817276:web:d5322a485ca3a38aebf839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
