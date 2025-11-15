// Notification Service for Patient Portal
// Handles listening to and managing notifications from Firestore

import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase-config";

// ==================== INTERFACES ====================

export interface Notification {
  id: string;
  userId: string;
  userEmail?: string;
  userName?: string;
  type:
    | "appointment_approved"
    | "appointment_declined"
    | "appointment_cancelled"
    | "payment_received"
    | "new_message"
    | "general_message";
  title: string;
  message: string;
  priority: "low" | "medium" | "high" | "urgent";
  relatedTo?: {
    appointmentId?: string;
    invoiceId?: string;
    chatId?: string;
    senderId?: string;
    senderRole?: string;
  };
  read: boolean;
  readAt?: Timestamp | null;
  createdAt: Timestamp;
  actionUrl?: string;
}

// ==================== FUNCTIONS ====================

/**
 * Subscribe to notifications for a specific user
 * Returns an unsubscribe function
 */
export const subscribeToNotifications = (
  userId: string,
  onNotificationsUpdate: (notifications: Notification[]) => void,
  limitCount: number = 20
): (() => void) => {
  try {
    console.log("🔔 Subscribing to notifications for user:", userId);

    const notificationsQuery = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const unsubscribe = onSnapshot(
      notificationsQuery,
      (snapshot) => {
        console.log("📬 Notification snapshot received:", {
          size: snapshot.size,
          empty: snapshot.empty,
          docs: snapshot.docs.length,
        });

        const notifications = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Notification[];

        if (notifications.length > 0) {
          console.log("✅ Notifications found:", notifications.length);
          console.log("First notification:", notifications[0]);
        } else {
          console.log("ℹ️ No notifications found for this user");
        }

        onNotificationsUpdate(notifications);
      },
      (error) => {
        console.error("❌ Error listening to notifications:", error);
      }
    );

    console.log("✅ Notification listener setup complete");
    return unsubscribe;
  } catch (error) {
    console.error("❌ Error setting up notifications listener:", error);
    return () => {}; // Return empty function if setup fails
  }
};

/**
 * Get all notifications for a user (one-time fetch)
 */
export const getUserNotifications = async (
  userId: string
): Promise<Notification[]> => {
  try {
    const notificationsQuery = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(notificationsQuery);
    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Notification)
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

/**
 * Get unread notifications count for a user
 */
export const getUnreadNotificationsCount = async (
  userId: string
): Promise<number> => {
  try {
    const notificationsQuery = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      where("read", "==", false)
    );

    const snapshot = await getDocs(notificationsQuery);
    return snapshot.size;
  } catch (error) {
    console.error("Error fetching unread count:", error);
    return 0;
  }
};

/**
 * Mark a notification as read
 */
export const markNotificationAsRead = async (
  notificationId: string
): Promise<void> => {
  try {
    const notifRef = doc(db, "notifications", notificationId);
    await updateDoc(notifRef, {
      read: true,
      readAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

/**
 * Mark all notifications as read for a user
 */
export const markAllNotificationsAsRead = async (
  userId: string
): Promise<void> => {
  try {
    const notificationsQuery = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      where("read", "==", false)
    );

    const snapshot = await getDocs(notificationsQuery);

    // Update all unread notifications
    const updatePromises = snapshot.docs.map((document) =>
      updateDoc(doc(db, "notifications", document.id), {
        read: true,
        readAt: serverTimestamp(),
      })
    );

    await Promise.all(updatePromises);
    console.log(`✅ Marked ${updatePromises.length} notifications as read`);
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    throw error;
  }
};

/**
 * Delete a notification
 */
export const deleteNotification = async (
  notificationId: string
): Promise<void> => {
  try {
    const notifRef = doc(db, "notifications", notificationId);
    await updateDoc(notifRef, {
      read: true,
      readAt: serverTimestamp(),
    });
    console.log(
      `✅ Notification ${notificationId} marked as read (soft delete)`
    );
  } catch (error) {
    console.error("Error deleting notification:", error);
    throw error;
  }
};

/**
 * Get notification icon based on type
 */
export const getNotificationIcon = (type: Notification["type"]): string => {
  switch (type) {
    case "appointment_approved":
      return "✅";
    case "appointment_declined":
      return "❌";
    case "appointment_cancelled":
      return "🗓️";
    case "payment_received":
      return "💰";
    case "new_message":
      return "💬";
    case "general_message":
      return "📩";
    default:
      return "🔔";
  }
};

/**
 * Get notification color based on priority
 */
export const getNotificationColor = (
  priority: Notification["priority"]
): string => {
  switch (priority) {
    case "urgent":
      return "red";
    case "high":
      return "orange";
    case "medium":
      return "blue";
    case "low":
      return "gray";
    default:
      return "gray";
  }
};

/**
 * Format notification time (relative)
 */
export const formatNotificationTime = (timestamp: Timestamp): string => {
  try {
    const date = timestamp.toDate();
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60)
      return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

    return date.toLocaleDateString();
  } catch (error) {
    return "Recently";
  }
};
