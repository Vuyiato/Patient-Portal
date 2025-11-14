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
  sendEmailVerification,
  User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase-config";

/**
 * EMAIL VALIDATION
 * Validates email format and domain
 */
export const validateEmail = (
  email: string
): {
  isValid: boolean;
  error?: string;
} => {
  // Check if email is empty
  if (!email || email.trim() === "") {
    return {
      isValid: false,
      error: "Email is required.",
    };
  }

  // Check for @ symbol
  if (!email.includes("@")) {
    return {
      isValid: false,
      error: "Email must contain @ symbol.",
    };
  }

  // Basic email format regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Please enter a valid email address.",
    };
  }

  // Check for valid domain (must have .com, .co.za, .net, .org, etc.)
  const domainRegex = /\.(com|net|org|edu|gov|co\.za|za|io|me|info|biz)$/i;
  if (!domainRegex.test(email)) {
    return {
      isValid: false,
      error: "Email must have a valid domain (.com, .net, .org, .co.za, etc.).",
    };
  }

  // Check for common typos in popular domains
  const domain = email.split("@")[1].toLowerCase();
  const commonDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
  ];
  const typos: { [key: string]: string } = {
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "yahooo.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "outlok.com": "outlook.com",
    "hotmial.com": "hotmail.com",
  };

  if (typos[domain]) {
    return {
      isValid: false,
      error: `Did you mean ${typos[domain]}?`,
    };
  }

  return { isValid: true };
};

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
    // Validate email format
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.error);
    }

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

    // Validate email format
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.error);
    }

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

    // Send email verification (welcome email)
    console.log("Sending verification/welcome email...");
    await sendEmailVerification(userCredential.user);
    console.log("✅ Welcome/verification email sent successfully to:", email);

    // Update profile with display name
    console.log("Updating user profile...");
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
    console.log("Profile updated successfully");

    // Extract firstName and lastName from additionalData or displayName
    const firstName =
      additionalData?.firstName || displayName.split(" ")[0] || displayName;
    const lastName =
      additionalData?.lastName ||
      displayName.split(" ").slice(1).join(" ") ||
      "";

    // Create patient record in Firestore (patients collection)
    console.log("Creating patient record in Firestore...");
    const patientData = {
      name: displayName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      createdAt: serverTimestamp(),
      lastVisit: serverTimestamp(),
      role: "patient",
      status: "active",
      emailVerified: false,
      ...additionalData,
    };

    await setDoc(doc(db, "patients", userCredential.user.uid), patientData);
    console.log("Patient record created successfully");

    // ALSO create user record in users collection (for Admin App compatibility)
    console.log("Creating user record in users collection...");
    const userData = {
      id: userCredential.user.uid,
      uid: userCredential.user.uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      displayName: displayName,
      role: "patient",
      isActive: true,
      authMethod: "email",
      createdAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", userCredential.user.uid), userData);
    console.log("✅ User record created in users collection for Admin App");

    // Verify the document was created
    const verifyDoc = await getDoc(
      doc(db, "patients", userCredential.user.uid)
    );
    if (!verifyDoc.exists()) {
      console.error("CRITICAL: Patient document not found after creation!");
      throw new Error("Failed to create patient record. Please try again.");
    }
    console.log("Patient record verified in database");

    // Send welcome email
    try {
      const { sendWelcomeEmail } = await import("./email-service");
      await sendWelcomeEmail(email, displayName, userCredential.user.uid);
      console.log("Welcome email sent successfully");
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't throw error, signup was successful
    }

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
    // Validate email format
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      throw new Error(emailValidation.error);
    }

    console.log("🔄 Attempting to send password reset email to:", email);

    // Send Firebase password reset email (using default settings)
    await sendPasswordResetEmail(auth, email);

    console.log(
      "✅ Firebase password reset email sent successfully to:",
      email
    );

    // Try to get user info and send notification email
    try {
      const { sendPasswordResetNotification } = await import("./email-service");
      // Query Firestore to get patient name and ID
      const patientsRef = collection(db, "patients");
      const q = query(patientsRef, where("email", "==", email), limit(1));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const patientData = snapshot.docs[0].data();
        const patientId = snapshot.docs[0].id;
        const patientName = patientData.name || "Patient";

        await sendPasswordResetNotification(email, patientName, patientId);
        console.log("✅ Password reset notification logged to Firestore");
      } else {
        console.log("⚠️ No patient record found for email:", email);
      }
    } catch (emailError) {
      console.error(
        "⚠️ Failed to log password reset notification to Firestore:",
        emailError
      );
      // Don't throw error, Firebase password reset was successful
    }

    return {
      success: true,
      message: `Password reset email sent to ${email}. Please check your inbox and spam folder.`,
    };
  } catch (error: any) {
    console.error("❌ Password reset error:", error);
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
