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
} from "../components/Icons";
import { useAuth } from "../contexts/AuthContext";
import {
  getPatientInvoices,
  getPendingInvoices,
  updateInvoiceStatus,
  Invoice as FirebaseInvoice,
} from "../services/database-service";

interface Invoice {
  id?: string;
  invoiceNumber?: string;
  date: string;
  dueDate?: string;
  service?: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  patientId?: string;
  patientName?: string;
}

interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

const Billing = () => {
  const { user, showToast } = useAuth();
  const [selectedTab, setSelectedTab] = useState<"invoices" | "payments">(
    "invoices"
  );
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch invoices from Firebase
  useEffect(() => {
    const fetchInvoices = async () => {
      if (!user?.uid) return;

      try {
        setLoading(true);
        const fetchedInvoices = await getPatientInvoices(user.uid);
        setInvoices(fetchedInvoices);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching invoices:", error);
        showToast("Failed to load invoices", "error");
        setLoading(false);
      }
    };

    fetchInvoices();
  }, [user]);

  const [mockInvoices] = useState<Invoice[]>([
    {
      id: "1",
      invoiceNumber: "INV-2024-001",
      date: "2024-10-28",
      dueDate: "2024-11-28",
      service: "Annual Skin Checkup",
      amount: 250.0,
      status: "Paid",
    },
    {
      id: "2",
      invoiceNumber: "INV-2024-002",
      date: "2024-10-20",
      dueDate: "2024-11-20",
      service: "Laser Treatment Session",
      amount: 450.0,
      status: "Pending",
    },
    {
      id: "3",
      invoiceNumber: "INV-2024-003",
      date: "2024-09-15",
      dueDate: "2024-10-15",
      service: "Consultation",
      amount: 150.0,
      status: "Overdue",
    },
    {
      id: "4",
      invoiceNumber: "INV-2024-004",
      date: "2024-09-01",
      dueDate: "2024-10-01",
      service: "Acne Treatment",
      amount: 320.0,
      status: "Paid",
    },
  ]);

  const paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "08/26",
      isDefault: false,
    },
  ];

  const getStatusColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case "paid":
        return "from-green-500 to-emerald-600";
      case "pending":
        return "from-yellow-500 to-orange-600";
      case "overdue":
        return "from-red-500 to-rose-600";
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

  // Handle payment
  const handlePayInvoice = async (invoiceId: string) => {
    try {
      await updateInvoiceStatus(invoiceId, "Paid");
      showToast("Payment processed successfully!", "success");

      // Refresh invoices
      if (user?.uid) {
        const fetchedInvoices = await getPatientInvoices(user.uid);
        setInvoices(fetchedInvoices);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      showToast("Failed to process payment", "error");
    }
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
              Manage your invoices and payment methods
            </p>
          </div>
          <button className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-scale-in">
            <IconCreditCard className="w-5 h-5" />
            Add Payment Method
          </button>
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
            onClick={() => setSelectedTab("payments")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedTab === "payments"
                ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            Payment Methods
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
              {stat.isCount ? stat.amount : `$${stat.amount.toFixed(2)}`}
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
                                  "en-US",
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
                                    ).toLocaleDateString("en-US", {
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
                                ${invoice.amount.toFixed(2)}
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
                            <button className="px-4 py-2 bg-brand-light text-brand-teal rounded-lg hover:bg-brand-teal hover:text-white font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                              <IconDownload className="w-4 h-4" />
                              Download
                            </button>
                            {invoice.status.toLowerCase() !== "paid" &&
                              invoice.id && (
                                <button
                                  onClick={() => handlePayInvoice(invoice.id!)}
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
          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                className="group bg-gradient-to-br from-brand-teal to-brand-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <IconCreditCard className="w-7 h-7 text-white" />
                  </div>
                  {method.isDefault && (
                    <span className="px-3 py-1 bg-brand-yellow text-brand-dark rounded-full text-xs font-bold">
                      Default
                    </span>
                  )}
                </div>

                <div className="text-white mb-6">
                  <p className="text-sm opacity-80 mb-2">{method.type}</p>
                  <p className="text-2xl font-bold tracking-wider mb-4">
                    •••• •••• •••• {method.last4}
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <p className="opacity-60 mb-1">Expires</p>
                      <p className="font-semibold">{method.expiry}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {!method.isDefault && (
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-semibold transition-all duration-300">
                      Set as Default
                    </button>
                  )}
                  <button className="px-4 bg-red-500/20 hover:bg-red-500/30 text-white py-2 rounded-lg font-semibold transition-all duration-300">
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Card */}
            <div
              className="group bg-white border-2 border-dashed border-gray-300 hover:border-brand-teal rounded-2xl p-6 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center group-hover:animate-pulse-glow">
                  <IconCreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Add New Card
                </h3>
                <p className="text-gray-600">Add a new payment method</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
