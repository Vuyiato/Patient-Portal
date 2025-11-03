// Firestore Database Service
// Handles all database operations for the patient portal

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  QueryConstraint,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "./firebase-config";

// ==================== APPOINTMENTS ====================

export interface Appointment {
  id?: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  doctorId?: string;
  doctorName?: string;
  notes?: string;
  createdAt?: any;
}

/**
 * Get all appointments for a patient
 */
export const getPatientAppointments = async (
  patientId: string
): Promise<Appointment[]> => {
  try {
    const q = query(
      collection(db, "appointments"),
      where("patientId", "==", patientId),
      orderBy("date", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Appointment)
    );
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

/**
 * Get upcoming appointments for a patient
 */
export const getUpcomingAppointments = async (
  patientId: string
): Promise<Appointment[]> => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const q = query(
      collection(db, "appointments"),
      where("patientId", "==", patientId),
      where("date", ">=", today),
      where("status", "in", ["Pending", "Confirmed"]),
      orderBy("date", "asc"),
      limit(5)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Appointment)
    );
  } catch (error) {
    console.error("Error fetching upcoming appointments:", error);
    throw error;
  }
};

/**
 * Book a new appointment
 */
export const bookAppointment = async (
  appointmentData: Omit<Appointment, "id">
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "appointments"), {
      ...appointmentData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error booking appointment:", error);
    throw error;
  }
};

/**
 * Update appointment
 */
export const updateAppointment = async (
  appointmentId: string,
  data: Partial<Appointment>
): Promise<void> => {
  try {
    await updateDoc(doc(db, "appointments", appointmentId), data);
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw error;
  }
};

/**
 * Cancel appointment
 */
export const cancelAppointment = async (
  appointmentId: string
): Promise<void> => {
  try {
    await updateDoc(doc(db, "appointments", appointmentId), {
      status: "Cancelled",
    });
  } catch (error) {
    console.error("Error cancelling appointment:", error);
    throw error;
  }
};

/**
 * Listen to appointments in real-time
 */
export const subscribeToAppointments = (
  patientId: string,
  callback: (appointments: Appointment[]) => void
) => {
  const q = query(
    collection(db, "appointments"),
    where("patientId", "==", patientId),
    orderBy("date", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const appointments = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Appointment)
    );
    callback(appointments);
  });
};

// ==================== DOCUMENTS ====================

export interface Document {
  id?: string;
  patientId: string;
  name: string;
  type: string;
  date: string;
  url?: string;
  fileUrl?: string; // ADD THIS
  storagePath?: string; // ADD THIS
  size?: string;
  sizeBytes?: number; // ADD THIS
  category?: string; // ADD THIS
  uploadedAt?: any;
}

/**
 * Get all documents for a patient
 */
export const getPatientDocuments = async (
  patientId: string
): Promise<Document[]> => {
  try {
    const q = query(
      collection(db, "documents"),
      where("patientId", "==", patientId),
      orderBy("date", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Document)
    );
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

/**
 * Upload a document with progress tracking
 */
export const uploadDocument = async (
  patientId: string,
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  try {
    // Create unique filename
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const fileName = `${timestamp}_${sanitizedFileName}`;

    // Create storage reference
    const fileRef = ref(storage, `documents/${patientId}/${fileName}`);

    // Use resumable upload for progress tracking
    const uploadTask = uploadBytesResumable(fileRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) {
            onProgress(Math.round(progress));
          }
        },
        (error) => {
          console.error("Upload error:", error);
          reject(new Error("Upload failed: " + error.message));
        },
        async () => {
          try {
            // Get download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Determine file type
            const ext = file.name.split(".").pop()?.toLowerCase() || "";
            let fileType = "PDF";
            if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) {
              fileType = "Image";
            } else if (["doc", "docx"].includes(ext)) {
              fileType = "Document";
            }

            // Calculate readable file size
            const sizeKB = Math.round(file.size / 1024);
            const fileSize =
              sizeKB < 1024
                ? `${sizeKB} KB`
                : `${(sizeKB / 1024).toFixed(2)} MB`;

            // Determine category
            const category = determineCategory(file.name);

            // Save to Firestore
            const docRef = await addDoc(collection(db, "documents"), {
              patientId,
              name: file.name,
              type: fileType,
              size: fileSize,
              sizeBytes: file.size,
              fileUrl: downloadURL,
              url: downloadURL, // Keep for backwards compatibility
              storagePath: `documents/${patientId}/${fileName}`,
              date: new Date().toISOString().split("T")[0],
              uploadedAt: serverTimestamp(),
              category,
            });

            console.log("Document uploaded successfully:", docRef.id);
            resolve(docRef.id);
          } catch (error: any) {
            console.error("Error saving document metadata:", error);
            reject(new Error("Failed to save document: " + error.message));
          }
        }
      );
    });
  } catch (error: any) {
    console.error("Upload initialization error:", error);
    throw new Error("Failed to initialize upload: " + error.message);
  }
};

/**
 * Delete a document from both Storage and Firestore
 */
export const deleteDocument = async (
  documentId: string,
  storagePath: string
): Promise<void> => {
  try {
    // Delete from Storage using storagePath
    const fileRef = ref(storage, storagePath);
    await deleteObject(fileRef);

    // Delete from Firestore
    await deleteDoc(doc(db, "documents", documentId));

    console.log("Document deleted successfully");
  } catch (error: any) {
    console.error("Error deleting document:", error);
    throw new Error("Failed to delete document: " + error.message);
  }
};

/**
 * Listen to documents in real-time
 */
export const subscribeToDocuments = (
  patientId: string,
  callback: (documents: Document[]) => void
) => {
  const q = query(
    collection(db, "documents"),
    where("patientId", "==", patientId),
    orderBy("date", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const documents = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Document)
    );
    callback(documents);
  });
};

/**
 * Helper function to determine document category based on filename
 */
const determineCategory = (filename: string): string => {
  const lower = filename.toLowerCase();

  if (lower.includes("report")) {
    return "Report";
  } else if (lower.includes("lab") || lower.includes("test")) {
    return "Lab Result";
  } else if (lower.includes("prescription") || lower.includes("rx")) {
    return "Prescription";
  } else if (
    lower.includes("imaging") ||
    lower.includes("scan") ||
    lower.includes("xray")
  ) {
    return "Imaging";
  }

  return "General";
};

// ==================== CHAT / MESSAGES ====================

export interface Chat {
  id?: string;
  patientId: string;
  patientName: string;
  lastMessageText: string;
  lastMessageTimestamp: any;
  unreadByPatient?: number;
  unreadByAdmin?: boolean;
}

export interface Message {
  id?: string;
  chatId?: string;
  senderId: string;
  text: string;
  timestamp: any;
  read?: boolean;
}

/**
 * Get or create chat for patient
 */
export const getOrCreateChat = async (
  patientId: string,
  patientName: string
): Promise<string> => {
  try {
    // Check if chat exists
    const q = query(
      collection(db, "chats"),
      where("patientId", "==", patientId),
      limit(1)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return snapshot.docs[0].id;
    }

    // Create new chat
    const chatRef = await addDoc(collection(db, "chats"), {
      patientId,
      patientName,
      lastMessageText: "",
      lastMessageTimestamp: serverTimestamp(),
      unreadByPatient: 0,
      unreadByAdmin: false,
    });

    return chatRef.id;
  } catch (error) {
    console.error("Error getting/creating chat:", error);
    throw error;
  }
};

/**
 * Get messages for a chat
 */
export const getChatMessages = async (chatId: string): Promise<Message[]> => {
  try {
    const q = query(
      collection(db, `chats/${chatId}/messages`),
      orderBy("timestamp", "asc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          chatId,
          ...doc.data(),
        } as Message)
    );
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

/**
 * Send a message
 */
export const sendMessage = async (
  chatId: string,
  senderId: string,
  text: string
): Promise<string> => {
  try {
    // Add message to subcollection
    const messageRef = await addDoc(
      collection(db, `chats/${chatId}/messages`),
      {
        senderId,
        text,
        timestamp: serverTimestamp(),
        read: false,
      }
    );

    // Update chat's last message
    await updateDoc(doc(db, "chats", chatId), {
      lastMessageText: text,
      lastMessageTimestamp: serverTimestamp(),
      unreadByAdmin: senderId !== "admin",
    });

    return messageRef.id;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

/**
 * Mark messages as read
 */
export const markMessagesAsRead = async (chatId: string): Promise<void> => {
  try {
    await updateDoc(doc(db, "chats", chatId), {
      unreadByPatient: 0,
    });
  } catch (error) {
    console.error("Error marking messages as read:", error);
    throw error;
  }
};

/**
 * Listen to messages in real-time
 */
export const subscribeToMessages = (
  chatId: string,
  callback: (messages: Message[]) => void
) => {
  const q = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy("timestamp", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          chatId,
          ...doc.data(),
        } as Message)
    );
    callback(messages);
  });
};

// ==================== INVOICES ====================

export interface Invoice {
  id?: string;
  patientId?: string;
  patientName: string;
  amount: number;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
  service?: string;
  dueDate?: string;
}

/**
 * Get invoices for a patient
 */
export const getPatientInvoices = async (
  patientId: string
): Promise<Invoice[]> => {
  try {
    const q = query(
      collection(db, "invoices"),
      where("patientId", "==", patientId),
      orderBy("date", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Invoice)
    );
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
};

/**
 * Get pending invoices
 */
export const getPendingInvoices = async (
  patientId: string
): Promise<Invoice[]> => {
  try {
    const q = query(
      collection(db, "invoices"),
      where("patientId", "==", patientId),
      where("status", "in", ["Pending", "Overdue"]),
      orderBy("date", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Invoice)
    );
  } catch (error) {
    console.error("Error fetching pending invoices:", error);
    throw error;
  }
};

/**
 * Update invoice status
 */
export const updateInvoiceStatus = async (
  invoiceId: string,
  status: string
): Promise<void> => {
  try {
    await updateDoc(doc(db, "invoices", invoiceId), {
      status,
    });
  } catch (error) {
    console.error("Error updating invoice:", error);
    throw error;
  }
};

// ==================== PATIENT PROFILE ====================

export interface Patient {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  dob?: string;
  address?: string;
  lastVisit?: string;
  vitals?: {
    bloodPressure?: string;
    pulse?: number;
    weightKg?: number;
    heightCm?: number;
  };
  medicalHistory?: string[];
  allergies?: string[];
  photoURL?: string;
}

/**
 * Get patient profile
 */
export const getPatientProfile = async (
  patientId: string
): Promise<Patient | null> => {
  try {
    const docSnap = await getDoc(doc(db, "patients", patientId));

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Patient;
    }

    return null;
  } catch (error) {
    console.error("Error fetching patient profile:", error);
    throw error;
  }
};

/**
 * Update patient profile
 */
export const updatePatientProfile = async (
  patientId: string,
  data: Partial<Patient>
): Promise<void> => {
  try {
    await updateDoc(doc(db, "patients", patientId), data);
  } catch (error) {
    console.error("Error updating patient profile:", error);
    throw error;
  }
};

/**
 * Upload profile picture
 */
export const uploadProfilePicture = async (
  patientId: string,
  file: File
): Promise<string> => {
  try {
    const fileRef = ref(storage, `profile-pictures/${patientId}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    // Update patient profile with new photo URL
    await updateDoc(doc(db, "patients", patientId), {
      photoURL: url,
    });

    return url;
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    throw error;
  }
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Format Firestore timestamp to readable date
 */
export const formatTimestamp = (timestamp: any): string => {
  if (!timestamp) return "";

  if (timestamp.toDate) {
    return timestamp.toDate().toLocaleString();
  }

  return new Date(timestamp).toLocaleString();
};

/**
 * Get date string from timestamp
 */
export const getDateString = (timestamp: any): string => {
  if (!timestamp) return "";

  if (timestamp.toDate) {
    return timestamp.toDate().toISOString().split("T")[0];
  }

  return new Date(timestamp).toISOString().split("T")[0];
};
