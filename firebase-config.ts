/* Firebase configuration and initialization */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Use environment variables for keys and IDs (create a .env.local with REACT_APP_... entries)
// Example .env.local entries:
// REACT_APP_FIREBASE_API_KEY=your_api_key
// REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
// REACT_APP_FIREBASE_PROJECT_ID=your_project_id
// REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
// REACT_APP_FIREBASE_APP_ID=your_app_id

const firebaseConfig = {
  apiKey: "AIzaSyBWw_FjAs09WYaP-dIeNUE6SNaDOXgY_Tk",
  authDomain: "dermaglare-web-app.firebaseapp.com",
  projectId: "dermaglare-web-app",
  storageBucket: "dermaglare-web-app.firebasestorage.app",
  messagingSenderId: "67529503663",
  appId: "1:67529503663:web:f5080744b553ac9ff0b55a",
  measurementId: "G-QRJFW9XB4Q",
};

const app = initializeApp(firebaseConfig);

// Exports used by auth-service.ts
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
