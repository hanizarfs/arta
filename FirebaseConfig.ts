// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZ1pnWzDAyVwRaM-93qEb5kL9ad6eH1V0",
  authDomain: "arta-14291.firebaseapp.com",
  projectId: "arta-14291",
  storageBucket: "arta-14291.appspot.com",
  messagingSenderId: "995849798653",
  appId: "1:995849798653:web:aaa039d4b170ac828bcf94",
  measurementId: "G-EJ2DGNX0Z5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);