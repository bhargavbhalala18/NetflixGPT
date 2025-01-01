// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzI1V6zW6Hr2q3pPImY3mefc0Vgvgio6Y",
  authDomain: "netflixgpt-c8759.firebaseapp.com",
  projectId: "netflixgpt-c8759",
  storageBucket: "netflixgpt-c8759.firebasestorage.app",
  messagingSenderId: "748862456397",
  appId: "1:748862456397:web:77e8192fe2b95228709204",
  measurementId: "G-JRB826XEV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
