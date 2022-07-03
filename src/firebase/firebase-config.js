// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACWio4CFcvSHKxscTWHaTEOZR_TV1XJ-A",
  authDomain: "booksy-ee334.firebaseapp.com",
  projectId: "booksy-ee334",
  storageBucket: "booksy-ee334.appspot.com",
  messagingSenderId: "109697274485",
  appId: "1:109697274485:web:8e1899fe315b574bd61e3c",
  measurementId: "G-SE8DWSVZ5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
