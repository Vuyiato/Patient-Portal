// Enhanced Billing Page with Payment Gateway
// Integrated with service-based pricing and sandbox payment processing

import React, { useState, useEffect } from "react";
import {
  IconCreditCard,
  IconBuilding2,
  IconBanknote,
  IconDownload,
  IconCheckCircle,
  IconX,
  IconClock,
  IconAlertCircle,
  IconLoader2,
} from "./components/Icons"; // Import from your main portal file
import {
  getPatientInvoices,
  getPendingInvoices,
  Invoice,
  PaymentResult,
  processCardPayment,
  processEFTPayment,
  processCashPayment,
  formatCurrency,
} from "./billing-service";
import { useAuth } from "./contexts/AuthContext";

// Mock Data Generator
const generateMockInvoices = (patientId: string): Invoice[] => {
  const mockInvoices: Invoice[] = [];
  const statuses: Array<"pending" | "paid" | "overdue"> = [
    "paid",
    "pending",
    "paid",
    "overdue",
  ];
  const services = [
    {
      serviceId: "consultation",
      serviceName: "Standard Consultation",
      price: 999,
      quantity: 1,
      total: 999,
    },
    {
      serviceId: "laser_treatment",
      serviceName: "Laser Treatment",
      price: 1500,
      quantity: 1,
      total: 1500,
    },
    {
      serviceId: "acne_treatment",
      serviceName: "Acne Treatment",
      price: 650,
      quantity: 1,
      total: 650,
    },
    {
      serviceId: "mole_removal",
      serviceName: "Mole Removal",
      price: 800,
      quantity: 1,
      total: 800,
    },
  ];

  for (let i = 0; i < 4; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const dueDate = new Date(date);
    dueDate.setDate(dueDate.getDate() + 30);

    mockInvoices.push({
      id: `INV-20240${7 - i}-00${i + 1}`,
      patientId: patientId,
      patientName: "Mock Patient",
      amount: services[i].total,
      status: statuses[i],
      date: date.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
      services: [services[i]],
      description: services[i].serviceName,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    });
  }
  return mockInvoices;
};

interface BillingPageProps {
  patientId: string;
}

const BillingPage: React.FC<BillingPageProps> = ({ patientId }) => {
  const { currentUser } = useAuth(); // Using useAuth hook

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [pendingInvoices, setPendingInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "eft" | "cash">(
    "card"
  );
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(
    null
  );

  // Card details state
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
  });

  // EFT details state
  const [eftDetails, setEftDetails] = useState({
    accountHolder: "",
    accountNumber: "",
    bankName: "",
    branchCode: "",
  });

  // Cash payment state
  const [cashAmount, setCashAmount] = useState("");

  useEffect(() => {
    loadInvoices();
  }, [patientId]);

  const loadInvoices = async (useMockData = false) => {
    if (!currentUser) {
      // setError("You must be logged in to view billing information.");
      setLoading(false);
      return;
    }

    setLoading(true);
    // setError(null);

    try {
      const patientId = currentUser.uid;
      if (useMockData) {
        const mockData = generateMockInvoices(patientId);
        const all = mockData;
        const pending = mockData.filter(
          (inv) => inv.status === "pending" || inv.status === "overdue"
        );
        setInvoices(all);
        setPendingInvoices(pending);
      } else {
        const [all, pending] = await Promise.all([
          getPatientInvoices(patientId),
          getPendingInvoices(patientId),
        ]);
        setInvoices(all);
        setPendingInvoices(pending);
      }
    } catch (err) {
      console.error("Error loading invoices:", err);
      // setError("Failed to load billing information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayNow = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowPaymentModal(true);
    setPaymentResult(null);
  };

  const handlePayment = async () => {
    if (!selectedInvoice) return;

    setProcessing(true);
    setPaymentResult(null);

    try {
      let result: PaymentResult;

      switch (paymentMethod) {
        case "card":
          result = await processCardPayment(selectedInvoice.id, cardDetails);
          break;
        case "eft":
          result = await processEFTPayment(selectedInvoice.id, eftDetails);
          break;
        case "cash":
          result = await processCashPayment(
            selectedInvoice.id,
            parseFloat(cashAmount)
          );
          break;
        default:
          throw new Error("Invalid payment method");
      }

      setPaymentResult(result);

      if (result.success) {
        // Reload invoices after successful payment
        setTimeout(() => {
          loadInvoices();
          setShowPaymentModal(false);
          resetPaymentForm();
        }, 3000);
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setProcessing(false);
    }
  };

  const resetPaymentForm = () => {
    setCardDetails({
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      cardholderName: "",
    });
    setEftDetails({
      accountHolder: "",
      accountNumber: "",
      bankName: "",
      branchCode: "",
    });
    setCashAmount("");
    setPaymentResult(null);
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\s+/g, "");
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "");
    if (/^\d{0,16}$/.test(value)) {
      setCardDetails({ ...cardDetails, cardNumber: value });
    }
  };

  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "overdue":
        return "text-red-600 bg-red-50";
      case "cancelled":
        return "text-gray-600 bg-gray-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return <IconCheckCircle className="w-4 h-4" />;
      case "pending":
        return <IconClock className="w-4 h-4" />;
      case "overdue":
        return <IconAlertCircle className="w-4 h-4" />;
      case "cancelled":
        return <IconX className="w-4 h-4" />;
      default:
        return <IconClock className="w-4 h-4" />;
    }
  };

  const totalOutstanding = pendingInvoices.reduce(
    (acc, inv) => acc + inv.amount,
    0
  );
  const nextPaymentDueDate =
    pendingInvoices.length > 0 ? pendingInvoices[0].dueDate : "N/A";
  const paymentHistory = invoices.filter((inv) => inv.status === "paid");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <IconLoader2 className="w-8 h-8 animate-spin text-[#4E747B]" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Billing & Payments</h1>
        <p className="text-gray-600 mt-2">
          View your invoices, manage payments, and see your transaction history.
        </p>
        <button
          onClick={() => loadInvoices(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load Mock Data
        </button>
      </header>

      {/* Billing Summary */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Outstanding</p>
              <p className="text-2xl font-bold text-[#3A565B] mt-1">
                {formatCurrency(
                  pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0)
                )}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
              <IconAlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Invoices</p>
              <p className="text-2xl font-bold text-[#3A565B] mt-1">
                {pendingInvoices.length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
              <IconClock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Paid</p>
              <p className="text-2xl font-bold text-[#3A565B] mt-1">
                {formatCurrency(
                  invoices
                    .filter((inv) => inv.status === "paid")
                    .reduce((sum, inv) => sum + inv.amount, 0)
                )}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <IconCheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Pending Invoices */}
      {pendingInvoices.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-900 mb-4">
            Outstanding Payments
          </h2>
          <div className="space-y-3">
            {pendingInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="bg-white rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {invoice.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    Due: {invoice.dueDate}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold text-[#3A565B]">
                    {formatCurrency(invoice.amount)}
                  </p>
                  <button
                    onClick={() => handlePayNow(invoice)}
                    className="px-6 py-2 bg-[#4E747B] text-white rounded-lg hover:bg-[#3A565B] transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Invoices */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#3A565B]">
            Invoice History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      #{invoice.id.slice(0, 8)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">
                      {invoice.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {invoice.description}
                    </div>
                    {invoice.services.length > 0 && (
                      <div className="text-xs text-gray-500 mt-1">
                        {invoice.services.map((s) => s.serviceName).join(", ")}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">
                      {formatCurrency(invoice.amount)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {getStatusIcon(invoice.status)}
                      {invoice.status.charAt(0).toUpperCase() +
                        invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {invoice.status === "pending" ||
                    invoice.status === "overdue" ? (
                      <button
                        onClick={() => handlePayNow(invoice)}
                        className="text-[#4E747B] hover:text-[#3A565B] font-medium"
                      >
                        Pay Now
                      </button>
                    ) : (
                      <button className="text-gray-400 hover:text-gray-600">
                        <IconDownload className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#3A565B]">Payment</h2>
                  <p className="text-gray-600 mt-1">
                    Invoice #{selectedInvoice.id.slice(0, 8)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowPaymentModal(false);
                    resetPaymentForm();
                  }}
                  className="text-gray-400 hover:text-gray-600"
                  disabled={processing}
                >
                  <IconX className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Invoice Summary */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Amount Due:</span>
                  <span className="text-3xl font-bold text-[#3A565B]">
                    {formatCurrency(selectedInvoice.amount)}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{selectedInvoice.description}</p>
                  <p>Due Date: {selectedInvoice.dueDate}</p>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    disabled={processing}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-[#4E747B] bg-[#4E747B]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconCreditCard className="w-6 h-6 mx-auto mb-2 text-[#4E747B]" />
                    <p className="text-sm font-medium">Card</p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("eft")}
                    disabled={processing}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "eft"
                        ? "border-[#4E747B] bg-[#4E747B]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconBuilding2 className="w-6 h-6 mx-auto mb-2 text-[#4E747B]" />
                    <p className="text-sm font-medium">EFT</p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("cash")}
                    disabled={processing}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "cash"
                        ? "border-[#4E747B] bg-[#4E747B]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconBanknote className="w-6 h-6 mx-auto mb-2 text-[#4E747B]" />
                    <p className="text-sm font-medium">Cash</p>
                  </button>
                </div>
              </div>

              {/* Payment Forms */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cardholderName}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cardholderName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                      placeholder="John Doe"
                      disabled={processing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={formatCardNumber(cardDetails.cardNumber)}
                      onChange={handleCardNumberChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      disabled={processing}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Month
                      </label>
                      <input
                        type="text"
                        value={cardDetails.expiryMonth}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (
                            value === "" ||
                            (parseInt(value) >= 1 && parseInt(value) <= 12)
                          ) {
                            setCardDetails({
                              ...cardDetails,
                              expiryMonth: value,
                            });
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                        placeholder="MM"
                        maxLength={2}
                        disabled={processing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year
                      </label>
                      <input
                        type="text"
                        value={cardDetails.expiryYear}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setCardDetails({ ...cardDetails, expiryYear: value });
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                        placeholder="YY"
                        maxLength={2}
                        disabled={processing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cardDetails.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setCardDetails({ ...cardDetails, cvv: value });
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                        placeholder="123"
                        maxLength={4}
                        disabled={processing}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "eft" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder
                    </label>
                    <input
                      type="text"
                      value={eftDetails.accountHolder}
                      onChange={(e) =>
                        setEftDetails({
                          ...eftDetails,
                          accountHolder: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                      placeholder="John Doe"
                      disabled={processing}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={eftDetails.accountNumber}
                      onChange={(e) =>
                        setEftDetails({
                          ...eftDetails,
                          accountNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                      placeholder="1234567890"
                      disabled={processing}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        value={eftDetails.bankName}
                        onChange={(e) =>
                          setEftDetails({
                            ...eftDetails,
                            bankName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                        placeholder="First National Bank"
                        disabled={processing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Branch Code
                      </label>
                      <input
                        type="text"
                        value={eftDetails.branchCode}
                        onChange={(e) =>
                          setEftDetails({
                            ...eftDetails,
                            branchCode: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                        placeholder="250655"
                        disabled={processing}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "cash" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      Please pay cash at the clinic reception. Amount will be
                      confirmed upon payment.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cash Amount
                    </label>
                    <input
                      type="number"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E747B] focus:border-transparent"
                      placeholder={selectedInvoice.amount.toString()}
                      min={selectedInvoice.amount}
                      disabled={processing}
                    />
                  </div>
                </div>
              )}

              {/* Payment Result */}
              {paymentResult && (
                <div
                  className={`rounded-xl p-4 ${
                    paymentResult.success
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {paymentResult.success ? (
                      <IconCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <IconX className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          paymentResult.success
                            ? "text-green-900"
                            : "text-red-900"
                        }`}
                      >
                        {paymentResult.success
                          ? "Payment Successful!"
                          : "Payment Failed"}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          paymentResult.success
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {paymentResult.message}
                      </p>
                      {paymentResult.transactionId && (
                        <p className="text-xs text-gray-600 mt-2">
                          Transaction ID: {paymentResult.transactionId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowPaymentModal(false);
                    resetPaymentForm();
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                  disabled={processing}
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  disabled={
                    !!(processing || (paymentResult && paymentResult.success))
                  }
                  className="flex-1 px-6 py-3 bg-[#4E747B] text-white rounded-xl hover:bg-[#3A565B] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {processing ? (
                    <>
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>Pay {formatCurrency(selectedInvoice.amount)}</>
                  )}
                </button>
              </div>

              {/* Test Card Info */}
              {paymentMethod === "card" && !paymentResult && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Test Mode:</strong> Use any 16-digit number (e.g.,
                    4532 1234 5678 9010). 10% of payments will randomly fail for
                    testing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;
