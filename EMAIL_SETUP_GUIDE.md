# 📧 Email Setup Guide - Welcome & Password Reset Emails

## Current Status ✅

Your Patient Portal successfully sends:

- ✅ **Welcome emails** when new users sign up (via Firebase Email Verification)
- ✅ **Password reset emails** when users request password reset

## 🚨 Preventing Emails from Going to Spam

Firebase's default emails often end up in spam because:

- Generic sender address (`noreply@dermaglareapp.firebaseapp.com`)
- No custom domain authentication
- No SPF/DKIM records
- Lack of email engagement history

### Quick Fixes (Immediate)

#### 1. **Customize Firebase Email Templates**

Make emails look more professional and less like spam:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select **dermaglareapp** project
3. Navigate to **Authentication** → **Templates**
4. Customize each template:
   - **Email verification** (Welcome email)
   - **Password reset**

#### 2. **Ask Users to Whitelist Your Email**

Add this to your welcome message or signup confirmation:

- "To ensure you receive all emails, add `noreply@dermaglareapp.firebaseapp.com` to your contacts"
- Display this message in the dashboard or after signup

#### 3. **User Education**

Add a banner after signup/password reset:

```
📧 Email sent! Please check your spam folder if you don't see it in your inbox.
Add noreply@dermaglareapp.firebaseapp.com to your contacts to prevent this in the future.
```

---

## ✅ Solution 1: Check Firebase Console Configuration

### Step 1: Verify Email Templates

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **dermaglareapp**
3. Navigate to: **Authentication** → **Templates** tab
4. Check **Password reset** template

### Step 2: Customize Email Template (Recommended)

In the Firebase Console:

1. Click **Password reset** template
2. Customize:
   - **From name**: Dermaglare Patient Portal
   - **Reply-to email**: info@dermaglareskin.co.za
   - **Subject**: Reset your Dermaglare Patient Portal password
   - **Body**: Customize the message

**Example Template:**

```
Hello,

We received a request to reset your password for your Dermaglare Patient Portal account.

Click the link below to reset your password:
%LINK%

This link will expire in 1 hour.

If you didn't request this, please ignore this email.

Best regards,
Dermaglare Team
```

### Step 3: Test with Your Own Email

1. Go to your Patient Portal: https://patient-portal-snowy.vercel.app
2. Click "Forgot Password"
3. Enter your email address
4. Check BOTH inbox AND spam folder
5. Check console logs in browser (F12 → Console tab)

---

## ✅ Solution 2: Custom Email Domain (Professional)

### Option A: Use Firebase with Custom Domain

1. In Firebase Console → **Authentication** → **Templates**
2. Click **Customize domain** (requires Firebase Blaze plan)
3. Add your domain: `dermaglareskin.co.za`
4. Verify domain ownership (add DNS TXT record)
5. Configure SPF/DKIM records

**DNS Records Needed:**

```
TXT: v=spf1 include:_spf.firebasemail.com ~all
DKIM: (provided by Firebase after domain verification)
```

### Option B: Use Third-Party Email Service (Recommended)

Use **SendGrid**, **Mailgun**, or **Postmark** for professional emails.

#### SendGrid Integration Example:

**1. Install SendGrid:**

```bash
npm install @sendgrid/mail
```

**2. Get SendGrid API Key:**

- Sign up at https://sendgrid.com
- Free tier: 100 emails/day
- Get API key from Settings → API Keys

**3. Create Email Service:**

Create `src/services/sendgrid-service.ts`:

```typescript
import sgMail from "@sendgrid/mail";

// Set API key (store in environment variable)
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export const sendPasswordResetEmail = async (
  toEmail: string,
  resetLink: string,
  patientName: string
) => {
  const msg = {
    to: toEmail,
    from: "noreply@dermaglareskin.co.za", // Your verified sender
    subject: "Reset Your Dermaglare Password",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .button { 
              background: #14b8a6; 
              color: white; 
              padding: 12px 24px; 
              text-decoration: none; 
              border-radius: 8px;
              display: inline-block;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Reset Your Password</h2>
            <p>Hi ${patientName},</p>
            <p>We received a request to reset your password for your Dermaglare Patient Portal account.</p>
            <p>Click the button below to reset your password:</p>
            <p>
              <a href="${resetLink}" class="button">Reset Password</a>
            </p>
            <p><small>This link expires in 1 hour.</small></p>
            <p>If you didn't request this, please ignore this email.</p>
            <hr>
            <p><small>Dermaglare Patient Portal | info@dermaglareskin.co.za</small></p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Password reset email sent via SendGrid");
    return true;
  } catch (error) {
    console.error("❌ SendGrid error:", error);
    throw error;
  }
};
```

**4. Update auth-service.ts:**

```typescript
// After Firebase sends the reset email
import { sendPasswordResetEmail as sendCustomEmail } from "./sendgrid-service";

// Generate Firebase reset link
const resetLink = `https://dermaglareapp.firebaseapp.com/__/auth/action?mode=resetPassword&oobCode=...`;

await sendCustomEmail(email, resetLink, patientName);
```

---

## ✅ Solution 3: Backend Email Service (Most Professional)

### Use Firebase Cloud Functions + SendGrid

**1. Create Backend Function:**

```typescript
// functions/src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";

admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.key);

export const sendPasswordResetEmail = functions.https.onCall(
  async (data, context) => {
    const { email } = data;

    // Generate password reset link
    const resetLink = await admin.auth().generatePasswordResetLink(email);

    // Get patient info
    const userDoc = await admin
      .firestore()
      .collection("patients")
      .where("email", "==", email)
      .limit(1)
      .get();

    const patientName = userDoc.docs[0]?.data().name || "Patient";

    // Send email via SendGrid
    await sgMail.send({
      to: email,
      from: "noreply@dermaglareskin.co.za",
      subject: "Reset Your Dermaglare Password",
      html: `
        <h2>Reset Your Password</h2>
        <p>Hi ${patientName},</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
      `,
    });

    return { success: true };
  }
);
```

**2. Call from Frontend:**

```typescript
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
const sendReset = httpsCallable(functions, "sendPasswordResetEmail");

await sendReset({ email: userEmail });
```

---

## 🔧 Debugging Steps

### Check Browser Console

1. Open Patient Portal
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Click "Forgot Password" and submit
5. Look for these logs:
   - `🔄 Attempting to send password reset email to: [email]`
   - `✅ Firebase password reset email sent successfully to: [email]`
   - OR `❌ Password reset error: [error]`

### Check Firebase Console Logs

1. Go to Firebase Console
2. **Authentication** → **Users** tab
3. Search for the user's email
4. Check if user exists in authentication

### Check Firestore Records

1. Firebase Console → **Firestore Database**
2. Navigate to `email_notifications` collection
3. Check for recent `password_reset` entries
4. Verify the `sentAt` timestamp

### Check Email Spam Folder

Firebase's default emails often go to spam:

1. Check **Spam/Junk** folder
2. Mark as "Not Spam"
3. Add `noreply@dermaglareapp.firebaseapp.com` to contacts

---

## 📊 Current Implementation

Your code currently:

1. ✅ Validates email format
2. ✅ Calls `sendPasswordResetEmail(auth, email)` - **Firebase sends email**
3. ✅ Logs notification to `email_notifications` collection
4. ✅ Shows success message to user

**The Firebase email IS being sent**, but it might be:

- In spam folder
- Taking time to arrive (up to 10 minutes)
- Blocked by email provider (some corporate emails block Firebase)

---

## 🎯 Quick Test Checklist

- [ ] Test with **Gmail** account (most reliable)
- [ ] Test with **Outlook/Hotmail** account
- [ ] Test with your **work email** (corporate)
- [ ] Check **spam folder** immediately
- [ ] Check **browser console** for errors (F12)
- [ ] Verify user exists in Firebase Authentication
- [ ] Wait **5-10 minutes** for email to arrive
- [ ] Check `email_notifications` in Firestore

---

## 📱 Alternative: Use Firebase App Check

Firebase App Check prevents abuse and can improve email delivery:

1. Firebase Console → **App Check**
2. Enable **reCAPTCHA v3**
3. Add to your app:

```typescript
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_SITE_KEY"),
  isTokenAutoRefreshEnabled: true,
});
```

---

## 🚀 Recommended Next Steps

### Immediate (Free):

1. ✅ Check spam folder
2. ✅ Test with multiple email providers
3. ✅ Customize Firebase email template
4. ✅ Check browser console for errors

### Short-term (Professional):

1. 📧 Set up SendGrid (free tier: 100 emails/day)
2. 🌐 Verify custom domain (dermaglareskin.co.za)
3. 📝 Create branded email templates

### Long-term (Enterprise):

1. ☁️ Implement Firebase Cloud Functions
2. 🔒 Add Firebase App Check
3. 📊 Set up email analytics
4. 🎨 Professional HTML email templates

---

## ❓ Need Help?

### Common Error Messages:

**"auth/user-not-found"**

- User doesn't exist in Firebase Authentication
- They need to sign up first

**"auth/invalid-email"**

- Email format is invalid
- Already validated in code, shouldn't happen

**"auth/too-many-requests"**

- Too many reset attempts
- Wait 1-2 hours or try different email

**No error but no email received**

- Check spam folder (90% of issues)
- Email provider blocking Firebase
- Try Gmail for testing

---

## 📞 Support

- Firebase Docs: https://firebase.google.com/docs/auth/web/manage-users
- SendGrid Docs: https://docs.sendgrid.com/
- Your email: info@dermaglareskin.co.za

**Current Firebase Project:** dermaglareapp
**Auth Domain:** dermaglareapp.firebaseapp.com
**Default Sender:** noreply@dermaglareapp.firebaseapp.com
