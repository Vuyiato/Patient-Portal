# Create Test Notification

To test if notifications work with the correct userId, manually create a test notification in Firebase Console:

## Steps:

1. Go to Firebase Console: https://console.firebase.google.com
2. Select project: **dermaglareapp**
3. Go to: **Firestore Database**
4. Click on: **notifications** collection
5. Click: **Add document**
6. Use these fields:

```json
{
  "userId": "hgSPkwYXq1cICQuYaLjg9g8IS2Z2",
  "userEmail": "patient@test.com",
  "userName": "Test Patient",
  "type": "appointment_approved",
  "title": "✅ TEST Notification!",
  "message": "This is a test notification to verify the system works.",
  "priority": "high",
  "read": false,
  "readAt": null,
  "createdAt": "Timestamp (current time)",
  "actionUrl": "/appointments",
  "relatedTo": {
    "appointmentId": "test123"
  }
}
```

7. Click **Save**

**Expected Result**:

- Patient Portal bell icon should IMMEDIATELY show (1) badge
- Click bell → see the test notification
- Console should show: "✅ Notifications found: 1"

If this works, the problem is confirmed: **The Admin WebApp is using the wrong userId when creating notifications for appointments.**

## Fix in Admin WebApp:

The Admin needs to use the EXACT userId from the appointment document when sending notifications.

Check the appointment document in Firestore to see what field contains `hgSPkwYXq1cICQuYaLjg9g8IS2Z2`:

- Is it `userId`?
- Is it `patientId`?
- Is it something else?

Then verify the Admin's `EnhancedAppointmentManagement.tsx` is using the correct field when calling `sendAppointmentApprovedNotification()`.
