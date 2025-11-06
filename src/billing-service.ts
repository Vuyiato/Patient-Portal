// Billing Service for Patient Portal
// Handles service-based pricing, invoice generation, and payment processing

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  Timestamp,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./services/firebase-config";
import {
  sendPaymentSuccessEmail,
  sendPaymentFailedEmail,
  sendInvoiceCreatedEmail,
  sendCancellationFeeEmail,
} from "./services/email-service";

// ============================================================
// SERVICE PRICING CONFIGURATION
// ============================================================

export interface ServicePrice {
  id: string;
  name: string;
  basePrice: number;
  duration: string;
  description: string;
  category: "medical" | "cosmetic" | "surgical" | "specialty";
}

export const SERVICE_PRICES: ServicePrice[] = [
  {
    id: "consultation",
    name: "Standard Consultation",
    basePrice: 999,
    duration: "30 min",
    description: "Comprehensive skin assessment and treatment plan",
    category: "medical",
  },
  {
    id: "medical_dermatology",
    name: "Medical Dermatology",
    basePrice: 500,
    duration: "30 min",
    description: "Treatment of skin conditions",
    category: "medical",
  },
  {
    id: "cosmetic_dermatology",
    name: "Cosmetic Dermatology",
    basePrice: 600,
    duration: "30-60 min",
    description: "Aesthetic treatments and procedures",
    category: "cosmetic",
  },
  {
    id: "laser_treatment",
    name: "Laser Treatment",
    basePrice: 1500,
    duration: "45-60 min",
    description: "Advanced laser procedures",
    category: "cosmetic",
  },
  {
    id: "chemical_peel",
    name: "Chemical Peel",
    basePrice: 800,
    duration: "30-45 min",
    description: "Chemical peels for skin renewal",
    category: "cosmetic",
  },
  {
    id: "microneedling",
    name: "Microneedling",
    basePrice: 900,
    duration: "45 min",
    description: "Collagen induction therapy",
    category: "cosmetic",
  },
  {
    id: "botox",
    name: "Botox Injections",
    basePrice: 2500,
    duration: "20-30 min",
    description: "Anti-aging wrinkle treatment",
    category: "cosmetic",
  },
  {
    id: "prp_therapy",
    name: "Platelet-Rich Plasma (PRP)",
    basePrice: 1200,
    duration: "45-60 min",
    description: "PRP therapy for skin rejuvenation",
    category: "specialty",
  },
  {
    id: "skin_tightening",
    name: "Skin Tightening",
    basePrice: 1200,
    duration: "45-60 min",
    description: "Non-surgical skin firming",
    category: "cosmetic",
  },
  {
    id: "mole_removal",
    name: "Mole Removal",
    basePrice: 800,
    duration: "30 min",
    description: "Surgical removal of moles",
    category: "surgical",
  },
  {
    id: "skin_cancer_screening",
    name: "Skin Cancer Screening",
    basePrice: 750,
    duration: "30 min",
    description: "Comprehensive skin cancer examination",
    category: "medical",
  },
  {
    id: "acne_treatment",
    name: "Acne Treatment",
    basePrice: 650,
    duration: "30 min",
    description: "Specialized acne management",
    category: "medical",
  },
  {
    id: "paediatric_dermatology",
    name: "Paediatric Dermatology",
    basePrice: 450,
    duration: "30-45 min",
    description: "Specialized skin care for children",
    category: "specialty",
  },
];

// ============================================================
// TYPES
// ============================================================

export interface Invoice {
  id: string;
  patientId: string;
  patientName: string;
  amount: number;
  status: "pending" | "paid" | "overdue" | "cancelled";
  date: string;
  dueDate: string;
  services: InvoiceService[];
  description?: string;
  appointmentId?: string;
  paymentMethod?: string;
  transactionId?: string;
  paidAt?: string;
  createdAt: any;
  updatedAt: any;
}

export interface InvoiceService {
  serviceId: string;
  serviceName: string;
  price: number;
  quantity: number;
  total: number;
}

export interface PaymentIntent {
  id: string;
  invoiceId: string;
  amount: number;
  currency: string;
  status: "pending" | "processing" | "succeeded" | "failed" | "cancelled";
  paymentMethod: "card" | "eft" | "cash";
  createdAt: any;
  updatedAt: any;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  message: string;
  invoice?: Invoice;
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get service price by ID or name
 */
export const getServicePrice = (
  serviceIdentifier: string
): ServicePrice | undefined => {
  return SERVICE_PRICES.find(
    (service) =>
      service.id === serviceIdentifier.toLowerCase().replace(/\s+/g, "_") ||
      service.name.toLowerCase() === serviceIdentifier.toLowerCase()
  );
};

/**
 * Calculate total for multiple services
 */
export const calculateTotal = (services: InvoiceService[]): number => {
  return services.reduce((total, service) => total + service.total, 0);
};

/**
 * Format currency
 */
export const formatCurrency = (amount: number): string => {
  return `R${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

/**
 * Generate invoice number
 */
export const generateInvoiceNumber = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `INV-${year}${month}-${random}`;
};

// ============================================================
// INVOICE OPERATIONS
// ============================================================

/**
 * Create invoice from appointment
 */
export const createInvoiceFromAppointment = async (
  appointmentId: string,
  patientId: string
): Promise<Invoice> => {
  try {
    // Get appointment details
    const appointmentRef = doc(db, "appointments", appointmentId);
    const appointmentSnap = await getDoc(appointmentRef);

    if (!appointmentSnap.exists()) {
      throw new Error("Appointment not found");
    }

    const appointmentData = appointmentSnap.data();
    const serviceType = appointmentData.type || appointmentData.serviceType;

    // Get service pricing
    const servicePrice = getServicePrice(serviceType);

    if (!servicePrice) {
      throw new Error(`Service pricing not found for: ${serviceType}`);
    }

    // Create invoice service item
    const invoiceService: InvoiceService = {
      serviceId: servicePrice.id,
      serviceName: servicePrice.name,
      price: servicePrice.basePrice,
      quantity: 1,
      total: servicePrice.basePrice,
    };

    // Get patient details
    const patientRef = doc(db, "patients", patientId);
    const patientSnap = await getDoc(patientRef);
    const patientName = patientSnap.exists()
      ? patientSnap.data().name
      : appointmentData.patientName || "Unknown Patient";

    // Calculate dates
    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30); // 30 days payment term

    const invoiceData: Partial<Invoice> = {
      patientId,
      patientName,
      amount: invoiceService.total,
      status: "pending",
      date: now.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
      services: [invoiceService],
      description: `${servicePrice.name} - ${appointmentData.date} ${appointmentData.time}`,
      appointmentId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Save invoice to Firestore
    const invoicesRef = collection(db, "invoices");
    const docRef = await addDoc(invoicesRef, invoiceData);

    // Update appointment with invoice reference
    await updateDoc(appointmentRef, {
      invoiceId: docRef.id,
      invoiceCreated: true,
    });

    return {
      id: docRef.id,
      ...invoiceData,
    } as Invoice;
  } catch (error) {
    console.error("Error creating invoice from appointment:", error);
    throw error;
  }
};

/**
 * Create custom invoice with multiple services
 */
export const createCustomInvoice = async (
  patientId: string,
  services: InvoiceService[],
  description?: string
): Promise<Invoice> => {
  try {
    // Get patient details
    const patientRef = doc(db, "patients", patientId);
    const patientSnap = await getDoc(patientRef);

    if (!patientSnap.exists()) {
      throw new Error("Patient not found");
    }

    const patientName = patientSnap.data().name;
    const total = calculateTotal(services);

    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);

    const invoiceData: Partial<Invoice> = {
      patientId,
      patientName,
      amount: total,
      status: "pending",
      date: now.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
      services,
      description: description || "Medical services",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const invoicesRef = collection(db, "invoices");
    const docRef = await addDoc(invoicesRef, invoiceData);

    return {
      id: docRef.id,
      ...invoiceData,
    } as Invoice;
  } catch (error) {
    console.error("Error creating custom invoice:", error);
    throw error;
  }
};

/**
 * Get all invoices for a patient
 */
export const getPatientInvoices = async (
  patientId: string
): Promise<Invoice[]> => {
  try {
    const invoicesRef = collection(db, "invoices");
    const q = query(
      invoicesRef,
      where("patientId", "==", patientId),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Invoice[];
  } catch (error) {
    console.error("Error fetching patient invoices:", error);
    return [];
  }
};

/**
 * Get pending invoices for a patient
 */
export const getPendingInvoices = async (
  patientId: string
): Promise<Invoice[]> => {
  try {
    const invoicesRef = collection(db, "invoices");
    const q = query(
      invoicesRef,
      where("patientId", "==", patientId),
      where("status", "==", "pending"),
      orderBy("dueDate", "asc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Invoice[];
  } catch (error) {
    console.error("Error fetching pending invoices:", error);
    return [];
  }
};

/**
 * Get single invoice
 */
export const getInvoice = async (
  invoiceId: string
): Promise<Invoice | null> => {
  try {
    const invoiceRef = doc(db, "invoices", invoiceId);
    const invoiceSnap = await getDoc(invoiceRef);

    if (!invoiceSnap.exists()) {
      return null;
    }

    return {
      id: invoiceSnap.id,
      ...invoiceSnap.data(),
    } as Invoice;
  } catch (error) {
    console.error("Error fetching invoice:", error);
    return null;
  }
};

// ============================================================
// PAYMENT GATEWAY SANDBOX
// ============================================================

/**
 * Simulate payment processing delay
 */
const simulateProcessingDelay = (ms: number = 2000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Generate transaction ID
 */
const generateTransactionId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 100000);
  return `TXN-${timestamp}-${random}`;
};

/**
 * Validate card number (basic Luhn algorithm)
 */
const validateCardNumber = (cardNumber: string): boolean => {
  const digits = cardNumber.replace(/\s+/g, "");

  if (!/^\d{13,19}$/.test(digits)) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Process card payment (Sandbox)
 */
export const processCardPayment = async (
  invoiceId: string,
  cardDetails: {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    cardholderName: string;
  },
  patientEmail: string
): Promise<PaymentResult> => {
  try {
    // Validate card number
    if (!validateCardNumber(cardDetails.cardNumber)) {
      return {
        success: false,
        message: "Invalid card number",
      };
    }

    // Validate expiry
    const currentDate = new Date();
    const expiryDate = new Date(
      parseInt(`20${cardDetails.expiryYear}`),
      parseInt(cardDetails.expiryMonth) - 1
    );

    if (expiryDate < currentDate) {
      return {
        success: false,
        message: "Card has expired",
      };
    }

    // Validate CVV
    if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
      return {
        success: false,
        message: "Invalid CVV",
      };
    }

    // Get invoice
    const invoice = await getInvoice(invoiceId);
    if (!invoice) {
      return {
        success: false,
        message: "Invoice not found",
      };
    }

    if (invoice.status === "paid") {
      return {
        success: false,
        message: "Invoice already paid",
      };
    }

    // Simulate payment processing
    await simulateProcessingDelay(2000);

    // Simulate random failures (10% chance) for testing
    const shouldFail = Math.random() < 0.1;

    if (shouldFail) {
      // Create failed payment record
      const paymentIntentData: Partial<PaymentIntent> = {
        invoiceId,
        amount: invoice.amount,
        currency: "ZAR",
        status: "failed",
        paymentMethod: "card",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await addDoc(collection(db, "payment_intents"), paymentIntentData);

      // Send failure email
      await sendPaymentFailedEmail(
        patientEmail,
        invoice.patientName,
        invoice.patientId,
        generateInvoiceNumber(),
        invoice.amount,
        "Payment declined by bank"
      );

      return {
        success: false,
        message:
          "Payment declined by bank. Please try again or use a different card.",
      };
    }

    // Generate transaction ID
    const transactionId = generateTransactionId();

    // Create successful payment record
    const paymentIntentData: Partial<PaymentIntent> = {
      invoiceId,
      amount: invoice.amount,
      currency: "ZAR",
      status: "succeeded",
      paymentMethod: "card",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await addDoc(collection(db, "payment_intents"), paymentIntentData);

    // Update invoice
    const invoiceRef = doc(db, "invoices", invoiceId);
    await updateDoc(invoiceRef, {
      status: "paid",
      paymentMethod: "card",
      transactionId,
      paidAt: new Date().toISOString(),
      updatedAt: serverTimestamp(),
    });

    // Get updated invoice
    const updatedInvoice = await getInvoice(invoiceId);

    // Send success email
    await sendPaymentSuccessEmail(
      patientEmail,
      invoice.patientName,
      invoice.patientId,
      generateInvoiceNumber(),
      invoice.amount,
      transactionId,
      "Credit/Debit Card"
    );

    return {
      success: true,
      transactionId,
      message: "Payment processed successfully",
      invoice: updatedInvoice!,
    };
  } catch (error) {
    console.error("Error processing card payment:", error);
    return {
      success: false,
      message: "Payment processing failed. Please try again.",
    };
  }
};

/**
 * Process EFT payment (Sandbox)
 */
export const processEFTPayment = async (
  invoiceId: string,
  bankDetails: {
    accountHolder: string;
    accountNumber: string;
    bankName: string;
    branchCode: string;
  }
): Promise<PaymentResult> => {
  try {
    // Get invoice
    const invoice = await getInvoice(invoiceId);
    if (!invoice) {
      return {
        success: false,
        message: "Invoice not found",
      };
    }

    if (invoice.status === "paid") {
      return {
        success: false,
        message: "Invoice already paid",
      };
    }

    // Simulate processing delay
    await simulateProcessingDelay(1500);

    // Generate transaction ID
    const transactionId = generateTransactionId();

    // Create payment record
    const paymentIntentData: Partial<PaymentIntent> = {
      invoiceId,
      amount: invoice.amount,
      currency: "ZAR",
      status: "processing", // EFT takes time to process
      paymentMethod: "eft",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await addDoc(collection(db, "payment_intents"), paymentIntentData);

    // Update invoice status to processing
    const invoiceRef = doc(db, "invoices", invoiceId);
    await updateDoc(invoiceRef, {
      status: "pending", // Keep as pending until EFT clears
      paymentMethod: "eft",
      transactionId,
      updatedAt: serverTimestamp(),
    });

    return {
      success: true,
      transactionId,
      message:
        "EFT payment initiated. Please allow 1-3 business days for processing.",
    };
  } catch (error) {
    console.error("Error processing EFT payment:", error);
    return {
      success: false,
      message: "EFT payment failed. Please try again.",
    };
  }
};

/**
 * Process cash payment
 */
export const processCashPayment = async (
  invoiceId: string,
  amount: number
): Promise<PaymentResult> => {
  try {
    const invoice = await getInvoice(invoiceId);
    if (!invoice) {
      return {
        success: false,
        message: "Invoice not found",
      };
    }

    if (invoice.status === "paid") {
      return {
        success: false,
        message: "Invoice already paid",
      };
    }

    if (amount < invoice.amount) {
      return {
        success: false,
        message: "Insufficient payment amount",
      };
    }

    // Generate transaction ID
    const transactionId = generateTransactionId();

    // Create payment record
    const paymentIntentData: Partial<PaymentIntent> = {
      invoiceId,
      amount: invoice.amount,
      currency: "ZAR",
      status: "succeeded",
      paymentMethod: "cash",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await addDoc(collection(db, "payment_intents"), paymentIntentData);

    // Update invoice
    const invoiceRef = doc(db, "invoices", invoiceId);
    await updateDoc(invoiceRef, {
      status: "paid",
      paymentMethod: "cash",
      transactionId,
      paidAt: new Date().toISOString(),
      updatedAt: serverTimestamp(),
    });

    const updatedInvoice = await getInvoice(invoiceId);

    return {
      success: true,
      transactionId,
      message: "Cash payment recorded successfully",
      invoice: updatedInvoice!,
    };
  } catch (error) {
    console.error("Error processing cash payment:", error);
    return {
      success: false,
      message: "Cash payment recording failed",
    };
  }
};

/**
 * Cancel invoice
 */
export const cancelInvoice = async (invoiceId: string): Promise<boolean> => {
  try {
    const invoice = await getInvoice(invoiceId);

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    if (invoice.status === "paid") {
      throw new Error("Cannot cancel paid invoice");
    }

    const invoiceRef = doc(db, "invoices", invoiceId);
    await updateDoc(invoiceRef, {
      status: "cancelled",
      updatedAt: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.error("Error cancelling invoice:", error);
    return false;
  }
};

/**
 * Create cancellation fee invoice (10% of consultation fee)
 */
export const createCancellationFeeInvoice = async (
  appointmentId: string,
  patientId: string
): Promise<Invoice> => {
  try {
    // Get appointment details
    const appointmentRef = doc(db, "appointments", appointmentId);
    const appointmentSnap = await getDoc(appointmentRef);

    if (!appointmentSnap.exists()) {
      throw new Error("Appointment not found");
    }

    const appointmentData = appointmentSnap.data();
    const serviceType = appointmentData.type || appointmentData.serviceType;

    // Get service pricing
    const servicePrice = getServicePrice(serviceType);

    if (!servicePrice) {
      throw new Error(`Service pricing not found for: ${serviceType}`);
    }

    // Calculate 10% cancellation fee
    const cancellationFeeAmount = servicePrice.basePrice * 0.1;

    // Create invoice service item
    const invoiceService: InvoiceService = {
      serviceId: "cancellation_fee",
      serviceName: `Cancellation Fee (10% of ${servicePrice.name})`,
      price: cancellationFeeAmount,
      quantity: 1,
      total: cancellationFeeAmount,
    };

    // Get patient details
    const patientRef = doc(db, "patients", patientId);
    const patientSnap = await getDoc(patientRef);
    const patientName = patientSnap.exists()
      ? patientSnap.data().name
      : appointmentData.patientName || "Unknown Patient";

    // Calculate dates
    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7); // 7 days payment term for cancellation fees

    const invoiceData: Partial<Invoice> = {
      patientId,
      patientName,
      amount: cancellationFeeAmount,
      status: "pending",
      date: now.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
      services: [invoiceService],
      description: `Cancellation Fee - Appointment on ${appointmentData.date} at ${appointmentData.time}`,
      appointmentId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Save invoice to Firestore
    const invoicesRef = collection(db, "invoices");
    const docRef = await addDoc(invoicesRef, invoiceData);

    // Update appointment with cancellation fee invoice reference
    await updateDoc(appointmentRef, {
      cancellationFeeInvoiceId: docRef.id,
      cancellationFeeApplied: true,
      cancellationFeeAmount,
    });

    return {
      id: docRef.id,
      ...invoiceData,
    } as Invoice;
  } catch (error) {
    console.error("Error creating cancellation fee invoice:", error);
    throw error;
  }
};
