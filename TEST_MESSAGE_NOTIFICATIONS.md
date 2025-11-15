# Test Message Notifications - Step by Step

## 🧪 Test Scenario 1: Patient Sends Message to Admin

### Step 1: Patient Portal Setup

1. Open Patient Portal in browser: `http://localhost:5173`
2. Login with patient account (UID: `hgSPkwYXq1cICQuYaLjg9g8IS2Z2`)
3. Open Browser Console (F12)
4. Navigate to **Chat** page

### Step 2: Send Message

1. Type message: `"Hello, I need help with my appointment"`
2. Press Enter or click Send
3. **Check Console** for:
   ```
   📤 Sending message: { text: "Hello, I need help..." }
   💬 Preparing message notification: { from: "Jane Doe", to: "admin" }
   ✅ Message notification sent successfully
   🎯 Notification ID: <doc_id>
   ```

### Step 3: Verify Admin Receives Notification

1. Open Admin WebApp in **another browser/incognito**: `http://localhost:3000`
2. Login as admin
3. **Look at bell icon** (top right) - should show **(1)** badge
4. **Check Admin Console** for:
   ```
   📬 Notification snapshot received: { size: 1 }
   ✅ Notifications found: 1
   📄 First notification: { type: "new_message", title: "New message from Jane Doe" }
   ```
5. Click bell icon → See notification in dropdown
6. Click notification → Should navigate to Chat Management

### Step 4: Verify Firebase Data

1. Open Firebase Console: https://console.firebase.google.com/project/dermaglareapp/firestore/data/notifications
2. Find latest notification document
3. Verify fields:
   - ✓ `userId: "admin"`
   - ✓ `type: "new_message"`
   - ✓ `title: "New message from Jane Doe"`
   - ✓ `message: "Hello, I need help..."`
   - ✓ `read: false`
   - ✓ `relatedTo.chatId: <chat_doc_id>`

---

## 🧪 Test Scenario 2: Admin Replies to Patient

### Step 1: Admin Sends Reply

1. In Admin WebApp, open **Chat Management**
2. Select patient chat (Jane Doe)
3. Type message: `"Hi Jane, your appointment is confirmed"`
4. Press Enter or click Send
5. **Check Console** for:
   ```
   📤 Sending message: { text: "Hi Jane, your appointment..." }
   💬 Preparing message notification: { from: "Support Team", to: "hgSPkwYXq1cICQuYaLjg9g8IS2Z2" }
   ✅ Message notification sent successfully
   ```

### Step 2: Verify Patient Receives Notification

1. Switch to Patient Portal browser window
2. **Look at bell icon** - should show **(1)** badge
3. **Check Console** for:
   ```
   📬 Notification snapshot received: { size: 1 }
   ✅ Notifications found: 1
   📄 First notification: { type: "new_message", title: "New message from Support Team" }
   ```
4. Click bell icon → See notification with 💬 icon
5. Click notification → Should navigate to Chat page

### Step 3: Verify Firebase Data

1. Open Firebase Console notifications collection
2. Find latest notification
3. Verify:
   - ✓ `userId: "hgSPkwYXq1cICQuYaLjg9g8IS2Z2"` (Patient's UID)
   - ✓ `type: "new_message"`
   - ✓ `title: "New message from Support Team"`
   - ✓ `read: false`
   - ✓ `actionUrl: "/chat"`

---

## 🧪 Test Scenario 3: Doctor Sends Message

### Step 1: Admin Sets Role to Doctor

1. In Admin WebApp, ensure "Dr. Jabu Nkehli" is selected in sender dropdown
2. Send message to patient: `"Your test results are ready"`
3. **Check Console** for:
   ```
   💬 Preparing message notification: { from: "Dr. Jabu Nkehli", to: "hgSPkwYXq1cICQuYaLjg9g8IS2Z2" }
   ✅ Message notification sent successfully
   ```

### Step 2: Patient Receives Doctor Notification

1. Switch to Patient Portal
2. Bell icon shows **(1)** badge
3. Click bell → Notification says **"New message from Dr. Jabu Nkehli"**
4. Firebase shows:
   - `relatedTo.senderRole: "doctor"`
   - `title: "New message from Dr. Jabu Nkehli"`

---

## ✅ Success Criteria

### Patient Portal

- [x] Send message triggers notification creation
- [x] Console shows "✅ Message notification sent successfully"
- [x] No errors in console
- [x] Message appears in chat immediately

### Admin WebApp

- [x] Bell icon shows unread badge when patient sends message
- [x] Notification dropdown displays message notification
- [x] Click notification navigates to Chat Management
- [x] Send reply creates notification for patient

### Firebase

- [x] Notifications collection has new documents
- [x] `userId` field matches recipient's Firebase Auth UID
- [x] `type: "new_message"`
- [x] `read: false` initially
- [x] `relatedTo.chatId` points to correct chat

---

## 🐛 Common Issues & Solutions

### Issue: No notification appears

**Solution:**

1. Check console for errors
2. Verify Firebase security rules allow read/write
3. Ensure user is logged in
4. Refresh page and check again

### Issue: Wrong recipient gets notification

**Solution:**

1. Check chat document has correct `patientId`
2. Verify Admin uses `senderId: "admin"` or `"doctor"`
3. Check `getChatRecipient()` logs in console

### Issue: Notification appears but doesn't navigate

**Solution:**

1. Check `actionUrl: "/chat"` in Firebase document
2. Verify routing is set up correctly
3. Check browser console for navigation errors

---

## 📊 Expected Console Output

### Patient Portal (When Sending Message)

```
📤 Sending message to chat: chat_abc123
💬 Preparing message notification: {
  from: "Jane Doe",
  to: "admin",
  role: "admin"
}
✅ Message notification sent successfully
🎯 Notification ID: notif_xyz789
📍 Firestore URL: https://console.firebase.google.com/...
```

### Admin WebApp (When Receiving Notification)

```
🔔 Subscribing to notifications for user: admin
📬 Notification snapshot received: {
  docs: 1,
  empty: false,
  size: 1
}
✅ Notifications found: 1
📄 First notification: {
  id: "notif_xyz789",
  type: "new_message",
  title: "New message from Jane Doe",
  message: "Hello, I need help with my appointment",
  read: false,
  priority: "medium"
}
```

---

## 🎯 Final Checklist

- [ ] Patient Portal builds without errors (`npm run build`)
- [ ] Admin WebApp builds without errors
- [ ] Patient can send message
- [ ] Admin receives notification in bell icon
- [ ] Admin can reply to message
- [ ] Patient receives notification in bell icon
- [ ] Click notification navigates to chat
- [ ] Firebase shows correct notification documents
- [ ] No console errors in either platform
- [ ] Bell badge counts are accurate

---

## 🚀 Ready to Test!

Follow the scenarios above in order. Each test should take **2-3 minutes**.

**Expected Result**: Real-time message notifications working perfectly on both platforms! 🎉
