import React, { useState, useEffect } from "react";
import {
  IconCreditCard,
  IconDownload,
  IconClock,
  IconCheck,
  IconAlertCircle,
  IconDollarSign,
  IconTrendingUp,
  IconFileText,
  IconX,
  IconBuilding,
  IconCash,
} from "../components/Icons";
import { useAuth } from "../contexts/AuthContext";
import {
  getPatientInvoices,
  processCardPayment,
  Invoice as BillingInvoice,
} from "../billing-service";

interface Invoice extends BillingInvoice {
  invoiceNumber?: string;
  service?: string;
}

interface PaymentModalProps {
  invoice: Invoice | null;
  onClose: () => void;
  onSuccess: () => void;
}

interface PaymentModalProps {
  invoice: Invoice | null;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  invoice,
  onClose,
  onSuccess,
}) => {
  const { user, showToast } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "eft" | "cash">(
    "card"
  );
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // Card details
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  // EFT details
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchCode, setBranchCode] = useState("");

  // Cash details
  const [cashAmount, setCashAmount] = useState("");

  if (!invoice) return null;

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s+/g, "");
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(value);
    }
  };

  const handleProcessPayment = async () => {
    console.log("=== Payment Process Started ===");
    console.log("Invoice:", invoice);
    console.log("User email:", user?.email);
    console.log("Payment method:", paymentMethod);

    if (!invoice.id || !user?.email) {
      console.log("Missing invoice ID or user email");
      showToast("Missing payment information", "error");
      return;
    }

    setProcessing(true);
    setProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      if (paymentMethod === "card") {
        console.log("Processing card payment...");
        console.log("Card details:", {
          cardNumber,
          cardName,
          expiryMonth,
          expiryYear,
          cvv,
        });

        // Validate card fields
        if (!cardNumber || !cardName || !expiryMonth || !expiryYear || !cvv) {
          console.log("Validation failed - missing fields");
          showToast("Please fill in all card details", "error");
          setProcessing(false);
          clearInterval(progressInterval);
          return;
        }

        console.log("Calling processCardPayment...");
        const result = await processCardPayment(
          invoice.id,
          {
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv,
            cardholderName: cardName,
          },
          user.email
        );
        console.log("Payment result:", result);

        clearInterval(progressInterval);
        setProgress(100);

        if (result.success) {
          showToast(
            `✅ Payment successful! Confirmation email sent to ${user.email}`,
            "success"
          );
          setTimeout(() => {
            onSuccess();
            onClose();
          }, 1000);
        } else {
          showToast(result.message, "error");
          setProcessing(false);
          setProgress(0);
        }
      } else if (paymentMethod === "eft") {
        console.log("Processing EFT payment...");
        console.log("EFT details:", {
          accountHolder,
          accountNumber,
          bankName,
          branchCode,
        });

        // Validate EFT fields
        if (!accountHolder || !accountNumber || !bankName || !branchCode) {
          console.log("Validation failed - missing EFT fields");
          showToast("Please fill in all EFT details", "error");
          setProcessing(false);
          clearInterval(progressInterval);
          return;
        }

        clearInterval(progressInterval);
        setProgress(100);

        console.log("EFT payment initiated");
        showToast(
          "EFT payment initiated. Please allow 1-3 business days for processing.",
          "success"
        );
        setTimeout(() => {
          onClose();
        }, 2000);
      } else if (paymentMethod === "cash") {
        if (!cashAmount || parseFloat(cashAmount) < invoice.amount) {
          showToast("Insufficient cash amount", "error");
          setProcessing(false);
          clearInterval(progressInterval);
          return;
        }

        clearInterval(progressInterval);
        setProgress(100);

        showToast("Cash payment recorded successfully", "success");
        setTimeout(() => {
          onSuccess();
          onClose();
        }, 1000);
      }
    } catch (error) {
      console.error("Payment error:", error);
      showToast("Payment processing failed. Please try again.", "error");
      setProcessing(false);
      setProgress(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-teal to-brand-dark text-white p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold">Payment Gateway</h2>
            <p className="text-white/80 mt-1">
              Secure payment processing for Invoice #{invoice.id?.slice(-8)}
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={processing}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
          >
            <IconX className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Invoice Summary */}
          <div className="bg-gradient-to-br from-brand-light to-white border border-brand-teal/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 font-medium">Amount Due:</span>
              <span className="text-3xl font-bold text-brand-dark">
                R{invoice.amount.toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Service:</strong>{" "}
                {invoice.description || invoice.service || "Medical Services"}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(invoice.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Payment Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "card", icon: IconCreditCard, label: "Card" },
                { id: "eft", icon: IconBuilding, label: "EFT" },
                { id: "cash", icon: IconCash, label: "Cash" },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() =>
                    setPaymentMethod(method.id as "card" | "eft" | "cash")
                  }
                  disabled={processing}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    paymentMethod === method.id
                      ? "border-brand-teal bg-brand-light text-brand-teal shadow-lg"
                      : "border-gray-200 hover:border-brand-teal/50"
                  } disabled:opacity-50`}
                >
                  <method.icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-semibold">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === "card" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  value={formatCardNumber(cardNumber)}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  disabled={processing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="John Doe"
                  disabled={processing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Month
                  </label>
                  <input
                    type="text"
                    value={expiryMonth}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}$/.test(val) && parseInt(val || "0") <= 12) {
                        setExpiryMonth(val);
                      }
                    }}
                    placeholder="MM"
                    disabled={processing}
                    maxLength={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 text-center font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    value={expiryYear}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}$/.test(val)) {
                        setExpiryYear(val);
                      }
                    }}
                    placeholder="YY"
                    disabled={processing}
                    maxLength={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 text-center font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,4}$/.test(val)) {
                        setCvv(val);
                      }
                    }}
                    placeholder="123"
                    disabled={processing}
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 text-center font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* EFT Payment Form */}
          {paymentMethod === "eft" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value)}
                  placeholder="John Doe"
                  disabled={processing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="1234567890"
                  disabled={processing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Standard Bank"
                    disabled={processing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Branch Code
                  </label>
                  <input
                    type="text"
                    value={branchCode}
                    onChange={(e) => setBranchCode(e.target.value)}
                    placeholder="051001"
                    disabled={processing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 font-mono"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> EFT payments typically take 1-3
                  business days to process. You will receive a confirmation
                  email once the payment is verified.
                </p>
              </div>
            </div>
          )}

          {/* Cash Payment Form */}
          {paymentMethod === "cash" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cash Amount (R)
                </label>
                <input
                  type="number"
                  value={cashAmount}
                  onChange={(e) => setCashAmount(e.target.value)}
                  placeholder={invoice.amount.toFixed(2)}
                  disabled={processing}
                  min={invoice.amount}
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent disabled:bg-gray-100 font-mono text-lg"
                />
              </div>

              {cashAmount && parseFloat(cashAmount) > invoice.amount && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>Change Due:</strong> R
                    {(parseFloat(cashAmount) - invoice.amount).toFixed(2)}
                  </p>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Cash payments must be made in person at
                  our clinic. This form records the payment for our records.
                </p>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {processing && (
            <div className="space-y-2 animate-fade-in">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Processing payment...</span>
                <span className="font-semibold text-brand-teal">
                  {progress}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-teal to-brand-dark transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              disabled={processing}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert("Button was clicked!"); // This should always show
                console.log("🔴 BUTTON CLICKED!");
                console.log("Processing state:", processing);
                console.log("Invoice:", invoice);
                handleProcessPayment();
              }}
              disabled={processing}
              type="button"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-dark text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <IconCheck className="w-5 h-5" />
                  Pay R{invoice.amount.toFixed(2)}
                </>
              )}
            </button>
          </div>

          {/* Security Notice */}
          <div className="text-center text-xs text-gray-500 pt-2">
            🔒 Secure payment processing powered by Dermaglare Payment Gateway
          </div>
        </div>
      </div>
    </div>
  );
};

interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

const Billing = () => {
  const { user, showToast } = useAuth();
  const [selectedTab, setSelectedTab] = useState<"invoices" | "history">(
    "invoices"
  );
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Fetch invoices from Firebase
  const fetchInvoices = async () => {
    if (!user?.uid) return;

    try {
      setLoading(true);
      const fetchedInvoices = await getPatientInvoices(user.uid);

      // Transform invoices to include invoice number
      const transformedInvoices = fetchedInvoices.map((inv) => ({
        ...inv,
        invoiceNumber: `INV-${inv.id?.slice(-8).toUpperCase()}`,
        service:
          inv.description ||
          inv.services?.[0]?.serviceName ||
          "Medical Service",
      }));

      setInvoices(transformedInvoices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching invoices:", error);
      showToast("Failed to load invoices", "error");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [user]);

  const getStatusColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case "paid":
        return "from-green-500 to-emerald-600";
      case "pending":
        return "from-yellow-500 to-orange-600";
      case "overdue":
        return "from-red-500 to-rose-600";
      case "cancelled":
        return "from-gray-500 to-slate-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  const getStatusIcon = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case "paid":
        return <IconCheck className="w-5 h-5" />;
      case "pending":
        return <IconClock className="w-5 h-5" />;
      case "overdue":
        return <IconAlertCircle className="w-5 h-5" />;
      case "cancelled":
        return <IconX className="w-5 h-5" />;
      default:
        return null;
    }
  };

  // Calculate totals
  const totalPaid = invoices
    .filter((inv) => inv.status.toLowerCase() === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalPending = invoices
    .filter(
      (inv) =>
        inv.status.toLowerCase() === "pending" ||
        inv.status.toLowerCase() === "overdue"
    )
    .reduce((sum, inv) => sum + inv.amount, 0);

  // Calculate this month total
  const thisMonth = invoices
    .filter((inv) => {
      const invDate = new Date(inv.date);
      const now = new Date();
      return (
        invDate.getMonth() === now.getMonth() &&
        invDate.getFullYear() === now.getFullYear()
      );
    })
    .reduce((sum, inv) => sum + inv.amount, 0);

  const handlePayInvoice = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    fetchInvoices();
  };

  const handleDownloadInvoice = (invoice: Invoice) => {
    // Simulate invoice download
    const invoiceData = `
DERMAGLARE SKIN & LASER CLINIC
Invoice: ${invoice.invoiceNumber}
Date: ${new Date(invoice.date).toLocaleDateString()}
Due Date: ${
      invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : "N/A"
    }

Patient: ${invoice.patientName}
Service: ${invoice.service}
Amount: R${invoice.amount.toFixed(2)}
Status: ${invoice.status}

Thank you for choosing Dermaglare!
    `.trim();

    const blob = new Blob([invoiceData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${invoice.invoiceNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    showToast("Invoice downloaded successfully", "success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-down">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
              Billing & Payments
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your invoices and make secure payments
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex gap-4 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <button
            onClick={() => setSelectedTab("invoices")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedTab === "invoices"
                ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => setSelectedTab("history")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedTab === "history"
                ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Payment History
          </button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: "Total Paid",
            amount: totalPaid,
            icon: IconCheck,
            color: "from-green-500 to-emerald-600",
            delay: "0.2s",
          },
          {
            label: "Total Pending",
            amount: totalPending,
            icon: IconClock,
            color: "from-yellow-500 to-orange-600",
            delay: "0.3s",
          },
          {
            label: "Total Invoices",
            amount: invoices.length,
            icon: IconFileText,
            color: "from-blue-500 to-cyan-600",
            delay: "0.4s",
            isCount: true,
          },
          {
            label: "This Month",
            amount: 600,
            icon: IconTrendingUp,
            color: "from-purple-500 to-violet-600",
            delay: "0.5s",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: stat.delay }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 animate-pulse-glow`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {stat.isCount ? stat.amount : `R${stat.amount.toFixed(2)}`}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content Area */}
      {selectedTab === "invoices" ? (
        <div className="space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-brand-teal mb-4"></div>
                <p className="text-gray-600 text-lg">Loading invoices...</p>
              </div>
            </div>
          ) : invoices.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <IconFileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Invoices Found
              </h3>
              <p className="text-gray-600">You don't have any invoices yet.</p>
            </div>
          ) : (
            <>
              {/* Invoices List */}
              <div className="grid grid-cols-1 gap-6">
                {invoices.map((invoice, index) => (
                  <div
                    key={invoice.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] animate-slide-in-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {/* Status Bar */}
                    <div
                      className={`h-2 bg-gradient-to-r ${getStatusColor(
                        invoice.status
                      )} animate-shimmer`}
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        {/* Left Side - Invoice Details */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center">
                              <IconFileText className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-brand-teal transition-colors duration-300">
                                {invoice.invoiceNumber}
                              </h3>
                              <p className="text-gray-600">{invoice.service}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 mb-1">Invoice Date</p>
                              <p className="font-semibold text-gray-800">
                                {new Date(invoice.date).toLocaleDateString(
                                  "en-ZA",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">Due Date</p>
                              <p className="font-semibold text-gray-800">
                                {invoice.dueDate
                                  ? new Date(
                                      invoice.dueDate
                                    ).toLocaleDateString("en-ZA", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })
                                  : "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">Amount</p>
                              <p className="font-bold text-2xl text-gray-800">
                                R{invoice.amount.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Status & Actions */}
                        <div className="flex flex-col items-end gap-4">
                          <div
                            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(
                              invoice.status
                            )} text-white font-semibold`}
                          >
                            {getStatusIcon(invoice.status)}
                            {invoice.status.charAt(0).toUpperCase() +
                              invoice.status.slice(1)}
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDownloadInvoice(invoice)}
                              className="px-4 py-2 bg-brand-light text-brand-teal rounded-lg hover:bg-brand-teal hover:text-white font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                              <IconDownload className="w-4 h-4" />
                              Download
                            </button>
                            {invoice.status.toLowerCase() !== "paid" &&
                              invoice.status.toLowerCase() !== "cancelled" &&
                              invoice.id && (
                                <button
                                  onClick={() => handlePayInvoice(invoice)}
                                  className="px-4 py-2 bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                                >
                                  Pay Now
                                </button>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Payment History */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Payment History
            </h2>
            {invoices.filter((inv) => inv.status.toLowerCase() === "paid")
              .length === 0 ? (
              <div className="text-center py-12">
                <IconDollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No payment history yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {invoices
                  .filter((inv) => inv.status.toLowerCase() === "paid")
                  .map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                          <IconCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {invoice.invoiceNumber}
                          </p>
                          <p className="text-sm text-gray-600">
                            {invoice.service}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(invoice.date).toLocaleDateString("en-ZA")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-green-600">
                          R{invoice.amount.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {invoice.paymentMethod || "Card"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          invoice={selectedInvoice}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedInvoice(null);
          }}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Billing;
