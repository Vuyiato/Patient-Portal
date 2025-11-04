// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWw_FjAs09WYaP-dIeNUE6SNaDOXgY_Tk",
  authDomain: "dermaglare-web-app.firebaseapp.com",
  projectId: "dermaglare-web-app",
  storageBucket: "dermaglare-web-app.firebasestorage.app",
  messagingSenderId: "67529503663",
  appId: "1:67529503663:web:f5080744b553ac9ff0b55a",
  measurementId: "G-QRJFW9XB4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export default app;
