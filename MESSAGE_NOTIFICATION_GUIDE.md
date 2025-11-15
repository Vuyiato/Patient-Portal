# Message Notification System - Implementation Guide

## Overview

This guide explains how the **real-time message notification system** works across both the **Patient Portal** and **Admin WebApp**. When a message is sent in the chat, the recipient automatically receives a notification in real-time.

---

## 🎯 How It Works

### Architecture Flow

```
Patient sends message → Firebase saves message → Notification created in Firestore
                                                        ↓
Admin listening via onSnapshot → Notification appears in bell icon → Click to open chat
```

```
Admin/Doctor sends message → Firebase saves message → Notification created in Firestore
                                                             ↓
Patient listening via onSnapshot → Notification appears in bell icon → Click to open chat
```

---

## 📁 Files Created/Modified

### Patient Portal

1. **`src/services/message-notification-service.ts`** ✨ NEW

   - Sends notifications when messages are received
   - Determines recipient based on chat participants
   - Maps patientId → userId for correct notification delivery

2. **`src/services/database-service.ts`** 📝 MODIFIED

   - Updated `sendMessage()` function to accept `senderName` parameter
   - Automatically calls notification service after message is sent
   - Notification failures don't break message sending

3. **`src/pages/Chat.tsx`** 📝 MODIFIED

   - Updated `handleSendMessage()` to pass sender name
   - Uses `user.displayName` or email prefix as sender name

4. **`src/services/notification-service.ts`** 📝 MODIFIED
   - Added `"new_message"` to notification types
   - Added message icon (💬) to `getNotificationIcon()`
   - Extended `relatedTo` interface with `senderId` and `senderRole`

### Admin WebApp

1. **`src/services/message-notification-service.ts`** ✨ NEW

   - Same service as Patient Portal (copied)
   - Handles admin/doctor → patient notifications

2. **`src/components/chat/EnhancedChatManagement.tsx`** 📝 MODIFIED
   - Updated `handleSendMessage()` to call notification service
   - Sends notification after successfully adding message to Firestore
   - Uses sender role (admin/doctor) and sender name

---

## 🔧 Technical Details

### Message Notification Data Structure

```typescript
{
  userId: "hgSPkwYXq1cICQuYaLjg9g8IS2Z2",  // Recipient's Firebase Auth UID
  type: "new_message",
  title: "New message from Dr. Jabu",      // Sender's name
  message: "Your appointment is confirmed", // Message preview (max 100 chars)
  priority: "medium",
  read: false,
  readAt: null,
  createdAt: serverTimestamp(),
  relatedTo: {
    chatId: "chat_doc_id",                 // Chat document ID
    senderId: "admin",                     // Message sender ID
    senderRole: "doctor"                   // Sender role
  },
  actionUrl: "/chat"                       // Where to navigate on click
}
```

### Recipient Detection Logic

```typescript
// If sender is patient → recipient is admin
if (senderId === chatData.patientId || senderId === chatData.userId) {
  return {
    recipientId: "admin",
    recipientRole: "admin",
  };
}

// If sender is admin/doctor → recipient is patient
if (senderId === "admin" || senderId === "doctor") {
  return {
    recipientId: chatData.patientId || chatData.userId,
    recipientRole: "patient",
  };
}
```

---

## 🚀 Usage Examples

### Patient Portal - Sending a Message

```typescript
// In Chat.tsx
const handleSendMessage = async (e: React.FormEvent) => {
  e.preventDefault();

  const senderName = user.displayName || user.email?.split("@")[0] || "Patient";

  // This automatically sends notification to admin
  await sendMessage(chatId, user.uid, messageText, senderName);
};
```

### Admin WebApp - Sending a Message

```typescript
// In EnhancedChatManagement.tsx
const handleSendMessage = async (e: React.FormEvent) => {
  e.preventDefault();

  // Add message to Firestore
  await addDoc(messagesRef, messageData);

  // This automatically sends notification to patient
  const { notifyMessageRecipient } = await import(
    "../../services/message-notification-service"
  );
  await notifyMessageRecipient(
    selectedChatId,
    senderRole, // "admin" or "doctor"
    senderName, // "Support Team" or "Dr. Jabu"
    senderRole, // Role type
    newMessage.trim() // Message text
  );
};
```

---

## ✅ Testing Instructions

### Test 1: Patient → Admin Message Notification

1. **Patient Portal**: Log in as patient (UID: `hgSPkwYXq1cICQuYaLjg9g8IS2Z2`)
2. Navigate to **Chat** page (`/chat`)
3. Send a message: `"Hello, I need help with my appointment"`
4. **Admin WebApp**: Open console (F12)
5. Check for console logs:
   ```
   💬 Preparing message notification
   ✅ Message notification sent successfully
   🎯 Notification ID: <doc_id>
   ```
6. **Admin WebApp**: Check bell icon - should show unread badge `(1)`
7. Click bell → Should see notification: **"New message from Jane Doe"**
8. Click notification → Should navigate to Chat Management page

### Test 2: Admin → Patient Message Notification

1. **Admin WebApp**: Select patient chat
2. Send message: `"Hi Jane, your appointment is confirmed for tomorrow"`
3. Check console for:
   ```
   💬 Preparing message notification
   ✅ Message notification sent successfully
   ```
4. **Patient Portal**: Check bell icon - should show unread badge `(1)`
5. Click bell → Should see notification: **"New message from Support Team"**
6. Click notification → Should navigate to Chat page (`/chat`)

### Test 3: Verify Firebase Data

1. Open **Firebase Console**: https://console.firebase.google.com/project/dermaglareapp/firestore/data/notifications
2. Find the newest notification document
3. Verify fields:
   ```
   ✓ userId: matches recipient's Firebase Auth UID
   ✓ type: "new_message"
   ✓ title: "New message from <Sender Name>"
   ✓ message: <Message preview>
   ✓ read: false
   ✓ relatedTo.chatId: <chat_doc_id>
   ✓ actionUrl: "/chat"
   ```

---

## 🔍 Console Log Reference

### Successful Message Notification

```
💬 Preparing message notification: {
  from: "Jane Doe",
  to: "admin",
  role: "admin"
}
✅ Message notification sent successfully
🎯 Notification ID: xyz123abc
📍 Firestore URL: https://console.firebase.google.com/...
```

### Notification Delivery (Patient Portal)

```
🔔 Subscribing to notifications for user: hgSPkwYXq1cICQuYaLjg9g8IS2Z2
📬 Notification snapshot received: { size: 1, empty: false }
✅ Notifications found: 1
📄 First notification: {
  type: "new_message",
  title: "New message from Dr. Jabu",
  read: false
}
```

---

## 🐛 Troubleshooting

### Problem: Notifications not appearing

**Check:**

1. ✓ Sender name is passed to `sendMessage()` function
2. ✓ Firebase Console shows notification with correct `userId`
3. ✓ Recipient is logged in and bell icon is mounted
4. ✓ Browser console shows "🔔 Subscribing to notifications"
5. ✓ Firestore security rules allow read access:
   ```javascript
   allow read: if request.auth.uid == resource.data.userId;
   ```

### Problem: Wrong recipient receives notification

**Check:**

1. ✓ Chat document has correct `patientId` field
2. ✓ Admin messages use senderId = "admin" or "doctor"
3. ✓ Patient messages use senderId = user.uid (Firebase Auth UID)
4. ✓ `getChatRecipient()` function correctly maps sender → recipient

### Problem: Notification sent but error in console

**Reason:** Notification failures are non-blocking by design

```typescript
try {
  await notifyMessageRecipient(...);
} catch (notifError) {
  console.warn("⚠️ Failed to send message notification:", notifError);
  // Message still sent successfully - notification is optional
}
```

---

## 🎨 UI Updates

### Patient Portal Bell Icon

- Shows **unread badge** when new message notification arrives
- Dropdown displays notification with 💬 icon
- Click navigates to `/chat` page
- Auto-marks notification as read on click

### Admin WebApp Bell Icon

- Shows **unread badge** for patient messages
- Click opens notification dropdown
- Navigate to Chat Management to view message
- Badge clears when notification is marked as read

---

## 🔐 Security Rules

Add to Firestore security rules:

```javascript
match /notifications/{notificationId} {
  // Users can only read their own notifications
  allow read: if request.auth != null &&
                 request.auth.uid == resource.data.userId;

  // Only authenticated users can create notifications
  allow create: if request.auth != null;

  // Users can only update their own notifications (mark as read)
  allow update: if request.auth != null &&
                   request.auth.uid == resource.data.userId;
}
```

---

## 📊 Performance Notes

- **Real-time delivery**: Uses Firestore `onSnapshot` listener (instant)
- **No polling**: Notifications appear immediately without refresh
- **Efficient queries**: Only fetches notifications for specific user
- **Error resilient**: Notification failures don't break chat functionality

---

## 🎯 Next Steps

1. ✅ Test patient → admin message notifications
2. ✅ Test admin → patient message notifications
3. ✅ Verify Firebase data structure
4. ✅ Deploy Firestore security rules
5. ✅ Monitor console logs during testing
6. 🔄 Consider adding sound/desktop notifications for new messages

---

## 📝 Summary

✅ **Patient Portal**: Sends notifications to admin when patient sends message  
✅ **Admin WebApp**: Sends notifications to patient when admin/doctor replies  
✅ **Real-time**: Uses Firestore onSnapshot for instant delivery  
✅ **Bell icon**: Shows unread badge immediately  
✅ **Navigation**: Click notification → opens chat page  
✅ **Error handling**: Notification failures don't break chat

**Both platforms now have complete message notification integration!** 🎉
