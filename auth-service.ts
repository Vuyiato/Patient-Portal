// Authentication Service
// Handles all authentication operations for the patient portal

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase-config";

/**
 * PASSWORD VALIDATION
 * Validates password meets requirements before signup
 */
export const validatePassword = (
  password: string
): {
  isValid: boolean;
  error?: string;
} => {
  if (password.length < 8) {
    return {
      isValid: false,
      error: "Password must be at least 8 characters long.",
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one uppercase letter.",
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one lowercase letter.",
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one number.",
    };
  }

  return { isValid: true };
};

/**
 * CONFIRM PASSWORD MATCH
 * Validates that password and confirm password match
 */
export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): { isValid: boolean; error?: string } => {
  if (password !== confirmPassword) {
    return {
      isValid: false,
      error: "Passwords do not match.",
    };
  }
  return { isValid: true };
};

/**
 * Sign in with email and password
 */
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Get patient data from Firestore
    const patientDoc = await getDoc(
      doc(db, "patients", userCredential.user.uid)
    );

    if (!patientDoc.exists()) {
      throw new Error("Patient record not found. Please contact support.");
    }

    return {
      user: userCredential.user,
      patientData: patientDoc.data(),
    };
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
};

/**
 * Sign up with email and password
 * FIXED VERSION with better error handling and logging
 */
export const signupWithEmail = async (
  email: string,
  password: string,
  displayName: string,
  additionalData?: any
) => {
  try {
    console.log("Starting signup process for:", email);

    // Validate password before attempting signup
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      throw new Error(passwordValidation.error);
    }

    // Create user account
    console.log("Creating user account...");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User account created with UID:", userCredential.user.uid);

    // Update profile with display name
    console.log("Updating user profile...");
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
    console.log("Profile updated successfully");

    // Create patient record in Firestore
    console.log("Creating patient record in Firestore...");
    const patientData = {
      name: displayName,
      email: email,
      createdAt: serverTimestamp(),
      lastVisit: serverTimestamp(),
      role: "patient",
      status: "active",
      ...additionalData,
    };

    await setDoc(doc(db, "patients", userCredential.user.uid), patientData);
    console.log("Patient record created successfully");

    // Verify the document was created
    const verifyDoc = await getDoc(
      doc(db, "patients", userCredential.user.uid)
    );
    if (!verifyDoc.exists()) {
      console.error("CRITICAL: Patient document not found after creation!");
      throw new Error("Failed to create patient record. Please try again.");
    }
    console.log("Patient record verified in database");

    return userCredential.user;
  } catch (error: any) {
    console.error("Signup error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);

    // If user was created but Firestore write failed, we should handle cleanup
    if (error.code === "permission-denied") {
      throw new Error(
        "Database permission error. Please contact support. " +
          "Your account may have been created but needs verification."
      );
    }

    throw new Error(getAuthErrorMessage(error.code));
  }
};

/**
 * Sign in with Google
 * FIXED VERSION with better error handling
 */
export const loginWithGoogle = async () => {
  try {
    console.log("Starting Google sign-in...");
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google sign-in successful, UID:", result.user.uid);

    // Check if patient record exists
    const patientDoc = await getDoc(doc(db, "patients", result.user.uid));
    console.log("Patient document exists:", patientDoc.exists());

    // If patient doesn't exist, create a new record
    if (!patientDoc.exists()) {
      console.log("Creating new patient record for Google user...");
      const newPatientData = {
        name: result.user.displayName || "Google User",
        email: result.user.email,
        photoURL: result.user.photoURL,
        createdAt: serverTimestamp(),
        lastVisit: serverTimestamp(),
        role: "patient",
        status: "active",
      };

      await setDoc(doc(db, "patients", result.user.uid), newPatientData);
      console.log("New patient record created");

      // Verify the document was created
      const verifyDoc = await getDoc(doc(db, "patients", result.user.uid));
      if (!verifyDoc.exists()) {
        console.error("CRITICAL: Patient document not found after creation!");
        throw new Error("Failed to create patient record. Please try again.");
      }
      console.log("Patient record verified in database");

      return {
        user: result.user,
        patientData: newPatientData,
      };
    } else {
      // Update last visit
      console.log("Updating last visit for existing user...");
      await setDoc(
        doc(db, "patients", result.user.uid),
        { lastVisit: serverTimestamp() },
        { merge: true }
      );
      console.log("Last visit updated");

      return {
        user: result.user,
        patientData: patientDoc.data(),
      };
    }
  } catch (error: any) {
    console.error("Google login error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);

    if (error.code === "permission-denied") {
      throw new Error(
        "Database permission error. Please contact support. " +
          "Your account may have been created but needs verification."
      );
    }

    throw new Error(getAuthErrorMessage(error.code));
  }
};

/**
 * Sign out
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Logout error:", error);
    throw new Error("Failed to logout. Please try again.");
  }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    console.error("Password reset error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
};

/**
 * Listen to auth state changes
 */
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Get user-friendly error messages
 */
const getAuthErrorMessage = (errorCode: string): string => {
  const errorMessages: { [key: string]: string } = {
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/invalid-email": "Invalid email address.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed":
      "Network error. Please check your connection.",
    "auth/popup-closed-by-user": "Sign-in popup was closed.",
    "auth/cancelled-popup-request":
      "Only one popup request is allowed at a time.",
    "auth/operation-not-allowed":
      "This sign-in method is not enabled. Please contact support.",
    "permission-denied": "Database permission error. Please contact support.",
  };

  return errorMessages[errorCode] || "An error occurred. Please try again.";
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return auth.currentUser !== null;
};

/**
 * Get user ID token
 */
export const getUserToken = async (): Promise<string | null> => {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }
  return null;
};
