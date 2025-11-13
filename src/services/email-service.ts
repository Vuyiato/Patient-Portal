// Email Service for Patient Portal
// Simulates email notifications for payments and invoices

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config";

export interface EmailNotification {
  id?: string;
  to: string;
  subject: string;
  body: string;
  type:
    | "payment_success"
    | "payment_failed"
    | "invoice_created"
    | "cancellation_fee"
    | "welcome"
    | "password_reset";
  patientId: string;
  relatedId?: string; // invoiceId or appointmentId
  sentAt: any;
  status: "sent" | "failed";
}

/**
 * Send payment success email
 */
export const sendPaymentSuccessEmail = async (
  patientEmail: string,
  patientName: string,
  patientId: string,
  invoiceNumber: string,
  amount: number,
  transactionId: string,
  paymentMethod: string
): Promise<boolean> => {
  try {
    const subject = "Payment Successful - Dermaglare Skin & Laser Clinic";
    const body = `
Dear ${patientName},

Thank you for your payment!

Payment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice Number: ${invoiceNumber}
Amount Paid: R${amount.toFixed(2)}
Payment Method: ${paymentMethod}
Transaction ID: ${transactionId}
Date: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}

Your payment has been successfully processed and your invoice has been marked as paid.

You can view your invoice and payment history in your patient portal at any time.

If you have any questions about this payment, please don't hesitate to contact us at:
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678

Thank you for choosing Dermaglare Skin & Laser Clinic!

Best regards,
Dermaglare Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    // Store email notification in Firebase
    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "payment_success",
      patientId,
      relatedId: transactionId,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    // In a production environment, this would integrate with an email service like SendGrid, Mailgun, etc.
    console.log("✅ Payment success email sent to:", patientEmail);
    console.log("Subject:", subject);
    console.log("\nEmail body:\n", body);

    return true;
  } catch (error) {
    console.error("Error sending payment success email:", error);
    return false;
  }
};

/**
 * Send payment failed email
 */
export const sendPaymentFailedEmail = async (
  patientEmail: string,
  patientName: string,
  patientId: string,
  invoiceNumber: string,
  amount: number,
  reason: string
): Promise<boolean> => {
  try {
    const subject = "Payment Failed - Dermaglare Skin & Laser Clinic";
    const body = `
Dear ${patientName},

We were unable to process your payment.

Payment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice Number: ${invoiceNumber}
Amount: R${amount.toFixed(2)}
Reason: ${reason}
Date: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}

Please try again or use a different payment method. Your invoice remains unpaid and can be accessed in your patient portal.

If you continue to experience issues, please contact us:
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678

Thank you for your understanding.

Best regards,
Dermaglare Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "payment_failed",
      patientId,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    console.log("✅ Payment failed email sent to:", patientEmail);
    return true;
  } catch (error) {
    console.error("Error sending payment failed email:", error);
    return false;
  }
};

/**
 * Send invoice created email
 */
export const sendInvoiceCreatedEmail = async (
  patientEmail: string,
  patientName: string,
  patientId: string,
  invoiceNumber: string,
  amount: number,
  dueDate: string,
  services: string[]
): Promise<boolean> => {
  try {
    const subject = "New Invoice - Dermaglare Skin & Laser Clinic";
    const body = `
Dear ${patientName},

A new invoice has been generated for your recent visit.

Invoice Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice Number: ${invoiceNumber}
Amount Due: R${amount.toFixed(2)}
Due Date: ${new Date(dueDate).toLocaleDateString("en-ZA")}

Services:
${services.map((service, index) => `${index + 1}. ${service}`).join("\n")}

You can view and pay your invoice online through your patient portal.

Payment Options:
• Credit/Debit Card (Instant)
• EFT (1-3 business days)
• Cash (In-person)

Please ensure payment is made by the due date to avoid any additional charges.

Questions? Contact us:
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678

Thank you for choosing Dermaglare!

Best regards,
Dermaglare Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "invoice_created",
      patientId,
      relatedId: invoiceNumber,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    console.log("✅ Invoice created email sent to:", patientEmail);
    return true;
  } catch (error) {
    console.error("Error sending invoice created email:", error);
    return false;
  }
};

/**
 * Send cancellation fee email
 */
export const sendCancellationFeeEmail = async (
  patientEmail: string,
  patientName: string,
  patientId: string,
  appointmentDate: string,
  appointmentTime: string,
  consultationFee: number,
  cancellationFee: number,
  invoiceNumber: string
): Promise<boolean> => {
  try {
    const subject =
      "Appointment Cancellation Fee - Dermaglare Skin & Laser Clinic";
    const body = `
Dear ${patientName},

Your appointment has been cancelled and a cancellation fee has been applied.

Cancellation Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Original Appointment: ${new Date(appointmentDate).toLocaleDateString(
      "en-ZA"
    )} at ${appointmentTime}
Consultation Fee: R${consultationFee.toFixed(2)}
Cancellation Fee (10%): R${cancellationFee.toFixed(2)}
Invoice Number: ${invoiceNumber}

As per our cancellation policy, a 10% cancellation fee of the consultation fee has been applied.

This fee helps cover administrative costs and the reserved appointment slot. An invoice has been generated and can be viewed in your patient portal.

To avoid cancellation fees in the future, please:
• Cancel at least 24 hours in advance when possible
• Contact us if you need to reschedule

Payment can be made through:
• Credit/Debit Card (Instant)
• EFT (1-3 business days)
• Cash (In-person)

Questions about our cancellation policy? Contact us:
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678

We look forward to serving you in the future.

Best regards,
Dermaglare Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "cancellation_fee",
      patientId,
      relatedId: invoiceNumber,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    console.log("✅ Cancellation fee email sent to:", patientEmail);
    return true;
  } catch (error) {
    console.error("Error sending cancellation fee email:", error);
    return false;
  }
};

/**
 * Send welcome email on signup
 */
export const sendWelcomeEmail = async (
  patientEmail: string,
  patientName: string,
  patientId: string
): Promise<boolean> => {
  try {
    const subject = "Welcome to Dermaglare Skin & Laser Clinic!";
    const body = `
Dear ${patientName},

Welcome to Dermaglare Skin & Laser Clinic! 🎉

Thank you for registering with us. We're excited to have you as part of our community dedicated to exceptional skin health and beauty care.

Your Patient Portal Account
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: ${patientEmail}
Portal: ${window.location.origin}

With your patient portal, you can:
✓ Book and manage appointments 24/7
✓ View and pay invoices online
✓ Access your medical documents
✓ Message our support team
✓ Update your profile information
✓ Track your health records

Getting Started:
1. Verify your email address (check your inbox)
2. Complete your profile with medical information
3. Book your first appointment
4. Explore the dashboard features

Our Services:
• Medical Dermatology
• Cosmetic Dermatology
• Laser Treatments
• Skin Surgery
• Anti-Aging Treatments
• Acne & Scar Treatment

Need Help?
Our team is here to assist you with any questions or concerns.
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678
🌐 www.dermaglareskin.co.za

Office Hours:
Monday - Friday: 8:00 AM - 5:00 PM
Saturday: 9:00 AM - 1:00 PM
Sunday: Closed

We look forward to serving you and helping you achieve your skin health goals!

Best regards,
Dr. Jabu Nkehli & The Dermaglare Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "welcome",
      patientId,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    console.log("✅ Welcome email sent to:", patientEmail);
    return true;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return false;
  }
};

/**
 * Send password reset email
 */
export const sendPasswordResetNotification = async (
  patientEmail: string,
  patientName: string,
  patientId: string
): Promise<boolean> => {
  try {
    const subject = "Password Reset Request - Dermaglare Patient Portal";
    const body = `
Dear ${patientName},

We received a request to reset your password for your Dermaglare Patient Portal account.

Account Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: ${patientEmail}
Request Time: ${new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg",
    })}

A password reset email has been sent to your email address from Firebase Authentication. Please check your inbox and follow the instructions to reset your password.

If you didn't request this password reset:
• Your account is still secure
• No changes have been made
• You can safely ignore this email
• Consider changing your password if you're concerned

Security Tips:
✓ Use a strong, unique password
✓ Never share your password
✓ Enable two-factor authentication
✓ Log out from shared devices
✓ Keep your email secure

If you have any concerns about your account security, please contact us immediately:
📧 info@dermaglareskin.co.za
📞 +27 11 234 5678

Best regards,
Dermaglare Security Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated email. Please do not reply.
    `.trim();

    const emailData: Partial<EmailNotification> = {
      to: patientEmail,
      subject,
      body,
      type: "password_reset",
      patientId,
      sentAt: serverTimestamp(),
      status: "sent",
    };

    await addDoc(collection(db, "email_notifications"), emailData);

    console.log("✅ Password reset notification email sent to:", patientEmail);
    return true;
  } catch (error) {
    console.error("Error sending password reset notification email:", error);
    return false;
  }
};
