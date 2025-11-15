# Firestore Security Rules - Patient Portal

## 🔒 Required Security Rules

Add these rules to your Firebase Console → Firestore Database → Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }

    // Helper function to check if user is admin
    function isAdmin() {
      return isAuthenticated() &&
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Helper function to check if user is the owner
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    // ==================== NOTIFICATIONS ====================
    // Patients can read and update their own notifications
    // Admins can create notifications
    match /notifications/{notificationId} {
      allow read: if isAuthenticated() &&
        resource.data.userId == request.auth.uid;

      allow update: if isAuthenticated() &&
        resource.data.userId == request.auth.uid &&
        request.resource.data.userId == resource.data.userId; // Can't change userId

      allow create: if isAuthenticated(); // Admins create notifications

      allow delete: if isAdmin();
    }

    // ==================== APPOINTMENTS ====================
    // Patients can read their own appointments
    // Patients can create new appointments
    // Only admins can update/delete appointments
    match /appointments/{appointmentId} {
      allow read: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );

      allow create: if isAuthenticated() &&
        request.resource.data.patientId == request.auth.uid;

      allow update: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid || // Patient can update own
        isAdmin() // Admin can update any
      );

      allow delete: if isAdmin();
    }

    // ==================== INVOICES ====================
    // Patients can read their own invoices
    // Admins can create/update invoices
    match /invoices/{invoiceId} {
      allow read: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );

      allow create: if isAdmin();

      allow update: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid || // Patient can update payment status
        isAdmin()
      );

      allow delete: if isAdmin();
    }

    // ==================== DOCUMENTS ====================
    // Patients can read their own documents
    // Patients can upload documents
    // Admins can manage all documents
    match /documents/{documentId} {
      allow read: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );

      allow create: if isAuthenticated() &&
        request.resource.data.patientId == request.auth.uid;

      allow update, delete: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );
    }

    // ==================== CHATS ====================
    // Users can read chats they're part of
    match /chats/{chatId} {
      allow read: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );

      allow create: if isAuthenticated();

      allow update: if isAuthenticated() && (
        resource.data.patientId == request.auth.uid ||
        isAdmin()
      );
    }

    // ==================== MESSAGES ====================
    // Users can read messages in chats they're part of
    match /messages/{messageId} {
      allow read: if isAuthenticated();

      allow create: if isAuthenticated() &&
        request.resource.data.senderId == request.auth.uid;

      allow update: if isAuthenticated();
    }

    // ==================== USERS ====================
    // Users can read and update their own profile
    // Admins can read all profiles
    match /users/{userId} {
      allow read: if isAuthenticated() && (
        userId == request.auth.uid ||
        isAdmin()
      );

      allow create: if isAuthenticated() && userId == request.auth.uid;

      allow update: if isAuthenticated() && userId == request.auth.uid;

      allow delete: if isAdmin();
    }

    // ==================== EMAIL NOTIFICATIONS LOG ====================
    // Users can read their own email logs
    // System can create email logs
    match /email_notifications/{notificationId} {
      allow read: if isAuthenticated() && (
        resource.data.recipientEmail == request.auth.token.email ||
        isAdmin()
      );

      allow create: if isAuthenticated();
    }

    // ==================== PAYMENT INTENTS ====================
    // Users can read their own payment intents
    match /payment_intents/{intentId} {
      allow read: if isAuthenticated() && (
        resource.data.patientEmail == request.auth.token.email ||
        isAdmin()
      );

      allow create: if isAuthenticated();

      allow update: if isAuthenticated();
    }
  }
}
```

---

## 📋 Deployment Steps

### 1. Open Firebase Console

Navigate to: https://console.firebase.google.com/

### 2. Select Your Project

Select: **dermaglareapp**

### 3. Go to Firestore Database

- Click **Firestore Database** in left sidebar
- Click **Rules** tab at the top

### 4. Replace Current Rules

- Copy the rules above
- Paste into the rules editor
- Click **Publish**

### 5. Test the Rules

```javascript
// Test reading notifications
match /notifications/{notificationId} {
  // Allow read if authenticated and notification belongs to user
  allow read: if request.auth.uid == resource.data.userId;
}

// Test in Firebase Console:
// 1. Go to Rules playground
// 2. Select GET operation
// 3. Enter path: /notifications/test_notif_id
// 4. Authenticate as test user
// 5. Should return ALLOW if userId matches
```

---

## ⚠️ Security Notes

### What These Rules Protect:

1. **Notifications**

   - Patients can only see their own notifications
   - Patients can mark their own notifications as read
   - Only admins can create new notifications

2. **Appointments**

   - Patients can only see their own appointments
   - Patients can create appointments for themselves
   - Only admins can approve/decline/modify appointments

3. **Invoices**

   - Patients can only see their own invoices
   - Patients can update payment status (when paying)
   - Only admins can create/modify invoices

4. **Documents**
   - Patients can only see their own documents
   - Patients can upload documents
   - Only admins can delete documents

---

## 🧪 Testing Security Rules

### Test 1: Patient Reading Own Notification

```javascript
// Should ALLOW
Authentication: user123
Operation: GET
Path: /notifications/notif_abc
Document data: { userId: "user123", ... }
Result: ✅ ALLOW
```

### Test 2: Patient Reading Another Patient's Notification

```javascript
// Should DENY
Authentication: user123
Operation: GET
Path: /notifications/notif_xyz
Document data: { userId: "user456", ... }
Result: ❌ DENY
```

### Test 3: Admin Reading Any Notification

```javascript
// Should ALLOW
Authentication: admin_user
Operation: GET
Path: /notifications/notif_abc
User document: { role: "admin" }
Result: ✅ ALLOW
```

---

## 🔍 Common Issues

### Issue: "Missing or insufficient permissions"

**Cause**: User trying to access data they don't own
**Solution**: Check that `userId` in notification matches `request.auth.uid`

### Issue: "Notifications not appearing"

**Cause**: Security rules blocking legitimate reads
**Solution**:

1. Check Firebase Console → Firestore → Rules
2. Verify user is authenticated (`request.auth != null`)
3. Verify notification has correct `userId` field

### Issue: "Can't create notification"

**Cause**: Rules too restrictive for notification creation
**Solution**: Ensure admin portal has proper authentication token

---

## 📊 Rule Breakdown

### Read Rules (GET)

- Patient can read their own data
- Admin can read all data

### Write Rules (CREATE)

- Patient can create appointments for themselves
- Admin can create notifications, invoices, etc.

### Update Rules (UPDATE)

- Patient can update their own data (read status, payment status)
- Admin can update all data

### Delete Rules (DELETE)

- Only admin can delete data

---

## 🚀 Next Steps After Deploying Rules

1. ✅ Test patient login → Check notifications work
2. ✅ Test admin login → Check can create notifications
3. ✅ Test booking appointment → Check gets created
4. ✅ Test payment → Check can update payment status
5. ✅ Monitor Firebase Console → Usage & Errors tabs

---

## 📞 Support

If you encounter issues:

1. Check Firebase Console → Firestore → Usage tab
2. Look for "Permission Denied" errors
3. Use Rules playground to test specific operations
4. Verify user authentication tokens are valid

**Last Updated**: November 15, 2025
