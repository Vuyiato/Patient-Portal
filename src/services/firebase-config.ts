// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHyhsDtZABqCEgmPdVHsA8r4vqTQIBJSs",
  authDomain: "dermaglareapp.firebaseapp.com",
  projectId: "dermaglareapp",
  storageBucket: "dermaglareapp.firebasestorage.app",
  messagingSenderId: "462818904186",
  appId: "1:462818904186:web:2040dcd437664d563bd3c3",
  measurementId: "G-3XLGD4G27R",
};

// Initialize Firebase - Check if app already exists
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export default app;
