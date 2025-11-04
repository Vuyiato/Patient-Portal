/*
 * Dermaglare Skin - Patient Portal (React + TypeScript)
 *
 * v3.0 - PREMIUM ANIMATIONS & TRANSITIONS
 * - Added smooth page transitions with fade/slide effects
 * - Staggered list animations
 * - Advanced hover effects with scale, glow, and shadows
 * - Loading skeleton animations
 * - Micro-interactions on all interactive elements
 * - Toast notification system with animations
 * - Parallax effects
 * - Smooth scroll behaviors
 * - Card lift effects
 * - Ripple effects on clicks
 * - Gradient animations
 * - And much more!
 *
 * COLORS PRESERVED:
 * - Teal: #4E747B
 * - Yellow: #F4E48E
 * - Light: #F9F7F0
 * - Dark: #3A565B
 *
 * ============================================================
 * 📑 TABLE OF CONTENTS - Quick Navigation Guide
 * ============================================================
 *
 * 1. IMPORTS & SETUP
 *    • React Imports ................................. line ~103
 *    • Firebase Services ............................. line ~126
 *    • Custom Data Hooks ............................. line ~168
 *
 * 2. BRANDING & ICONS
 *    • Logo Component ................................ line ~591
 *    • Icon Library .................................. line ~628
 *
 * 3. UTILITIES & HOOKS
 *    • Animation Hooks ............................... line ~782
 *    • Type Definitions .............................. line ~825
 *
 * 4. STATE MANAGEMENT
 *    • Toast Notifications ........................... line ~876
 *    • Context Providers ............................. line ~920
 *
 * 5. REUSABLE UI COMPONENTS
 *    • Button ........................................ line ~1056
 *    • Card .......................................... line ~1136
 *    • Input ......................................... line ~1162
 *    • NavItem ....................................... line ~1234
 *
 * 6. LAYOUT STRUCTURE
 *    • Sidebar ....................................... line ~1304
 *    • Header ........................................ line ~1432
 *    • PageWrapper ................................... line ~1513
 *
 * 7. AUTHENTICATION
 *    • Login Page .................................... line ~1574
 *
 * 8. DASHBOARD PAGE
 *    • Dashboard Components .......................... line ~1893
 *    • Main Dashboard ................................ line ~2115
 *
 * 9. FEATURE PAGES
 *    • Appointments .................................. line ~2685
 *    • Documents ..................................... line ~3075
 *    • Chat .......................................... line ~3495
 *    • Billing ....................................... line ~3630
 *    • Profile ....................................... line ~3735
 *    • Settings ...................................... line ~3867
 *
 * 10. APPLICATION ROOT
 *     • App Component (Router) ....................... line ~3927
 *     • Root Entry Point ............................. line ~4000
 *
 * 💡 TIP: Use Ctrl+G (or Cmd+G) to jump to specific line numbers
 * ============================================================
 *
 * --- Tailwind Config (Reminder) ---
 * Add these animations to your tailwind.config.js:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       colors: {
 *         'brand-teal': '#4E747B',
 *         'brand-yellow': '#F4E48E',
 *         'brand-light': '#F9F7F0',
 *         'brand-dark': '#3A565B',
 *       },
 *       fontFamily: {
 *         sans: ['Inter', 'sans-serif'],
 *       },
 *       animation: {
 *         'fade-in': 'fadeIn 0.5s ease-in-out',
 *         'slide-in-right': 'slideInRight 0.4s ease-out',
 *         'slide-in-left': 'slideInLeft 0.4s ease-out',
 *         'slide-up': 'slideUp 0.4s ease-out',
 *         'scale-in': 'scaleIn 0.3s ease-out',
 *         'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
 *         'shimmer': 'shimmer 2s infinite',
 *         'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
 *         'float': 'float 3s ease-in-out infinite',
 *         'wiggle': 'wiggle 0.5s ease-in-out',
 *       },
 *       keyframes: {
 *         fadeIn: {
 *           '0%': { opacity: '0' },
 *           '100%': { opacity: '1' },
 *         },
 *         slideInRight: {
 *           '0%': { transform: 'translateX(100%)', opacity: '0' },
 *           '100%': { transform: 'translateX(0)', opacity: '1' },
 *         },
 *         slideInLeft: {
 *           '0%': { transform: 'translateX(-100%)', opacity: '0' },
 *           '100%': { transform: 'translateX(0)', opacity: '1' },
 *         },
 *         slideUp: {
 *           '0%': { transform: 'translateY(20px)', opacity: '0' },
 *           '100%': { transform: 'translateY(0)', opacity: '1' },
 *         },
 *         scaleIn: {
 *           '0%': { transform: 'scale(0.9)', opacity: '0' },
 *           '100%': { transform: 'scale(1)', opacity: '1' },
 *         },
 *         bounceSubtle: {
 *           '0%, 100%': { transform: 'translateY(0)' },
 *           '50%': { transform: 'translateY(-10px)' },
 *         },
 *         shimmer: {
 *           '0%': { backgroundPosition: '-200% 0' },
 *           '100%': { backgroundPosition: '200% 0' },
 *         },
 *         pulseGlow: {
 *           '0%, 100%': { boxShadow: '0 0 20px rgba(78, 116, 123, 0.3)' },
 *           '50%': { boxShadow: '0 0 40px rgba(78, 116, 123, 0.6)' },
 *         },
 *         float: {
 *           '0%, 100%': { transform: 'translateY(0px)' },
 *           '50%': { transform: 'translateY(-10px)' },
 *         },
 *         wiggle: {
 *           '0%, 100%': { transform: 'rotate(0deg)' },
 *           '25%': { transform: 'rotate(-5deg)' },
 *           '75%': { transform: 'rotate(5deg)' },
 *         },
 *       },
 *     },
 *   },
 *   plugins: [
 *     require('@tailwindcss/forms'),
 *   ],
 * }
 */

// ============================================================
// REACT IMPORTS
// ============================================================
import React, {
  useState,
  useContext,
  createContext,
  useReducer,
  useMemo,
  memo,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useCallback,
  FormEvent,
  ChangeEvent,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import {
  IconLoader2,
  IconCalendar,
  IconFileText,
  IconMessageSquare,
  IconCheckCircle,
  IconArrowUpRight,
  IconPlus,
  IconChevronRight,
  IconX,
  DermагlareLogo,
  Sidebar,
  Header,
  PageWrapper,
  AppointmentsPage,
  DocumentsPage,
  LoginPage,
} from "./components/Icons";
// ==================== FIREBASE IMPORTS ====================

// ============================================================
// FIREBASE SERVICE IMPORTS
// ============================================================
import {
  loginWithEmail,
  signupWithEmail,
  loginWithGoogle,
  logout as firebaseLogout,
  onAuthChange,
  resetPassword,
} from "./services/auth-service";

import {
  getPatientAppointments,
  getUpcomingAppointments,
  bookAppointment,
  updateAppointment,
  cancelAppointment,
  subscribeToAppointments,
  getPatientDocuments,
  uploadDocument,
  deleteDocument,
  subscribeToDocuments,
  getOrCreateChat,
  getChatMessages,
  sendMessage,
  subscribeToMessages,
  markMessagesAsRead,
  getPatientInvoices,
  getPendingInvoices,
  getPatientProfile,
  updatePatientProfile,
  uploadProfilePicture,
  type Appointment,
  type Document as FirebaseDocument,
  type Message,
  type Invoice,
  type Patient,
} from "./services/database-service";
import { validatePassword, validatePasswordMatch } from "../auth-service";
import BillingPage from "./BillingPage";
import { useInView } from "react-intersection-observer";
import { nanoid } from "nanoid";
import firebase from "firebase/compat/app";
import { User } from "firebase/auth";

// ============================================================
// REUSABLE UI COMPONENTS
// ============================================================

// All UI components have been moved to the src/components directory.

// ============================================================
// TYPE DEFINITIONS
// ============================================================
type Page =
  | "dashboard"
  | "appointments"
  | "documents"
  | "chat"
  | "billing"
  | "profile"
  | "settings";

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  duration?: number;
}

interface AppContextType {
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
  showToast: (
    message: string,
    type?: "success" | "error" | "info",
    duration?: number
  ) => void;
  toast: Toast | null;
  setToast: Dispatch<SetStateAction<Toast | null>>;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
}

// ============================================================
// CONTEXT & PROVIDERS
// ============================================================

const AppContext = createContext<AppContextType | undefined>(undefined);
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<Page>("dashboard");
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info",
    duration: number = 3000
  ) => {
    const id = nanoid();
    setToast({ id, message, type, duration });

    setTimeout(() => {
      setToast((currentToast) =>
        currentToast && currentToast.id === id ? null : currentToast
      );
    }, duration);
  };

  const value = useMemo(
    () => ({
      page,
      setPage,
      showToast,
      toast,
      setToast,
    }),
    [page, toast]
  );

  return (
    <AppContext.Provider value={value as AppContextType}>
      {children}
    </AppContext.Provider>
  );
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user as User | null);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = async () => {
    await firebaseLogout();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isLoading,
      logout,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ============================================================
// CUSTOM HOOKS - Data Fetching from Firebase
// ============================================================

/**
 * Hook to fetch and manage appointments data from Firebase
 */
const useAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth(); // <-- 1. GET THE USER

  // 2. MODIFY fetchAppointments TO ACCEPT patientId
  const fetchAppointments = async (patientId: string) => {
    try {
      setLoading(true);
      // 3. PASS THE patientId TO THE SERVICE
      const data = await getPatientAppointments(patientId);
      setAppointments(data);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching appointments:", err);
      setError(err.message);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  // 4. UPDATE useEffect TO USE THE USER'S ID
  useEffect(() => {
    if (user) {
      // Only fetch if the user is loaded
      fetchAppointments(user.uid);
    }
  }, [user]); // Re-run when the user logs in

  return {
    appointments,
    loading,
    error,
    refetch: () => (user ? fetchAppointments(user.uid) : undefined),
  };
};

type UIDocument = {
  id: string;
  name: string;
  date: string;
  type: string;
  size: string; // The UI expects a string
  fileUrl?: string;
  category?: string;
};

/**
 * Hook to fetch and manage documents data from Firebase
 */
const useDocuments = () => {
  const [documents, setDocuments] = useState<UIDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth(); // <-- 1. GET THE USER

  // 2. MODIFY fetchDocuments TO ACCEPT patientId
  const fetchDocuments = async (patientId: string) => {
    try {
      setLoading(true);
      // 3. PASS THE patientId TO THE SERVICE
      const data = await getPatientDocuments(patientId);

      // ... (your transform logic)
      const transformed = data.map((doc) => ({
        id: doc.id,
        name: doc.name,
        date: doc.date,
        type: doc.type || "PDF",
        size: doc.size ? `${(Number(doc.size) / 1024).toFixed(2)} KB` : "0 KB",
        fileUrl: doc.fileUrl,
        category: doc.category,
      }));
      setDocuments(transformed as any);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching documents:", err);
      setError(err.message);
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  // 4. UPDATE useEffect TO USE THE USER'S ID
  useEffect(() => {
    if (user) {
      // Only fetch if the user is loaded
      fetchDocuments(user.uid);
    }
  }, [user]); // Re-run when the user logs in

  return {
    documents,
    loading,
    error,
    refetch: () => (user ? fetchDocuments(user.uid) : undefined),
  };
};

type UIInvoice = {
  id: string;
  service: string; // UI expects 'service'
  amount: number;
  date: string;
  status: string;
};

type UIMessage = {
  id: string;
  sender: "user" | "doctor";
  text: string;
  timestamp: string; // UI expects string
};

/**
 * Hook to fetch and manage chat messages from Firebase with real-time updates
 */
const useChatMessages = (chatId: string | null) => {
  const [messages, setMessages] = useState<UIMessage[]>([]); // Using UIMessage type from previous fix
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth(); // <-- 1. Get the authenticated user

  useEffect(() => {
    // 2. Wait for BOTH chatId and user to be loaded
    if (!chatId || !user) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToMessages(chatId, (newMessages) => {
      const transformed: UIMessage[] = newMessages
        .filter((msg): msg is Message & { id: string } => !!msg.id) // Filters out any messages without an ID
        .map((msg) => ({
          id: msg.id, // 'msg.id' is now guaranteed to be a string
          sender: msg.senderId === user.uid ? "user" : "doctor",
          text: msg.text,
          timestamp:
            msg.timestamp?.toDate?.()?.toISOString() ||
            new Date().toISOString(),
        }));
      setMessages(transformed);
      setLoading(false);
      setError(null);
    });

    return () => {
      unsubscribe();
    };
  }, [chatId, user]); // <-- 4. Add 'user' to the dependency array

  return { messages, loading, error };
};

// ==================== END OF HOOKS ====================

// ==================== UPDATED DASHBOARD COMPONENT ====================
// Replace your existing Dashboard component with this:

// ============================================================
// MOCK DATA (Will be replaced by Firebase data)
// ============================================================
export const Dashboard: FC = () => {
  const { showToast } = useAppContext();
  const [statsRef, statsInView] = useInView();

  // Use real data from Firebase
  const { appointments, loading: appointmentsLoading } = useAppointments();
  const { documents, loading: documentsLoading } = useDocuments();

  // Filter upcoming appointments
  const upcomingAppointments = appointments
    .filter((apt) => apt.status === "Pending" || apt.status === "Confirmed")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const recentDocuments = documents.slice(0, 3);

  // Show loading state while data is being fetched
  if (appointmentsLoading || documentsLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <IconLoader2 className="w-8 h-8 text-brand-teal animate-spin" />
        <span className="ml-3 text-gray-600">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-brand-dark mb-8 animate-slide-in-right">
        Welcome Back! 👋
      </h2>

      {/* Stats Grid */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {[
          {
            icon: <IconCalendar className="w-8 h-8" />,
            label: "Upcoming Appointments",
            value: upcomingAppointments.length,
            color: "brand-teal",
          },
          {
            icon: <IconFileText className="w-8 h-8" />,
            label: "Documents",
            value: documents.length,
            color: "brand-yellow",
          },
          {
            icon: <IconMessageSquare className="w-8 h-8" />,
            label: "Unread Messages",
            value: 0,
            color: "brand-dark",
          },
          {
            icon: <IconCheckCircle className="w-8 h-8" />,
            label: "Completed Visits",
            value: appointments.filter((a) => a.status === "Completed").length,
            color: "brand-teal",
          },
        ].map((stat, index) => (
          <Card
            key={stat.label}
            className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
              statsInView ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-brand-dark">
                  {stat.value}
                </p>
              </div>
              <div className={`text-${stat.color}`}>{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-brand-dark animate-slide-in-left">
            Upcoming Appointments
          </h3>
          <Button
            variant="ghost"
            onClick={() => showToast("Navigating to appointments...", "info")}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingAppointments.length === 0 ? (
            <Card className="col-span-full text-center py-12">
              <p className="text-gray-600 mb-4">No upcoming appointments</p>
            </Card>
          ) : (
            upcomingAppointments.map((appointment, index) => (
              <Card
                key={appointment.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconCalendar className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-dark group-hover:text-brand-teal transition-colors duration-300">
                      {appointment.type}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {appointment.doctorName || "Doctor"}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <IconCalendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>{appointment.time}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {appointment.status}
                  </span>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Recent Documents */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-brand-dark animate-slide-in-left">
            Recent Documents
          </h3>
          <Button
            variant="ghost"
            onClick={() => showToast("Navigating to documents...", "info")}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentDocuments.length === 0 ? (
            <Card className="col-span-full text-center py-12">
              <p className="text-gray-600">No documents available</p>
            </Card>
          ) : (
            recentDocuments.map((doc, index) => (
              <Card
                key={doc.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconFileText className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-brand-dark group-hover:text-brand-teal transition-colors duration-300 truncate">
                      {doc.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {new Date(doc.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{doc.type}</span>
                  {doc.category && (
                    <span className="px-2 py-1 bg-brand-teal/10 text-brand-teal rounded text-xs">
                      {doc.category}
                    </span>
                  )}
                </div>

                {doc.fileUrl && (
                  <Button
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => window.open(doc.fileUrl, "_blank")}
                  >
                    View Document
                  </Button>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// CHAT PAGE
// ============================================================
export const ChatPage: FC = () => {
  const { showToast } = useAppContext();
  const { user } = useAuth();
  // Use Firebase chat hook
  const [chatId, setChatId] = useState<string | null>(null);
  const [isChatLoading, setIsChatLoading] = useState(true);
  const {
    messages,
    loading: messagesLoading,
    error: messagesError,
  } = useChatMessages(chatId);

  // Get or create chat on mount
  useEffect(() => {
    const initChat = async (patientId: string, patientName: string) => {
      try {
        setIsChatLoading(true);
        const chat = await getOrCreateChat(patientId, patientName);
        setChatId(chat);
      } catch (err) {
        console.error("Error initializing chat:", err);
      } finally {
        setIsChatLoading(false);
      }
    };

    if (user) {
      // <-- FIX 4: Only run this logic *after* the user is loaded
      initChat(user.uid, user.displayName || "User");
    }
  }, [user, showToast]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatId || !user || isChatLoading) return;

    try {
      await sendMessage(chatId, inputValue, "patient");
      setInputValue("");
      showToast("Message sent!", "success");
    } catch (err) {
      console.error("Error sending message:", err);
      showToast("Failed to send message", "error");
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-brand-dark mb-6 animate-slide-in-right">
        Chat with Your Doctor
      </h2>

      <Card className="h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 animate-slide-in-left">
          <div className="relative">
            <img
              src="https://placehold.co/40x40/4E747B/FFFFFF?text=DS"
              alt="Doctor"
              className="w-10 h-10 rounded-full border-2 border-brand-yellow"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div>
            <p className="font-semibold text-brand-dark">Dr. Jabu Nkehli</p>
            <p className="text-xs text-green-600">● Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`
                flex
                ${msg.sender === "user" ? "justify-end" : "justify-start"}
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`
                  max-w-xs lg:max-w-md px-4 py-3 rounded-2xl
                  transition-all duration-300 hover:scale-105
                  ${
                    msg.sender === "user"
                      ? "bg-brand-teal text-white rounded-tr-none shadow-lg"
                      : "bg-gray-100 text-brand-dark rounded-tl-none"
                  }
                `}
              >
                <p className="text-sm">{msg.text}</p>
                <p
                  className={`
                    text-xs mt-1
                    ${msg.sender === "user" ? "text-white/70" : "text-gray-500"}
                  `}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 animate-slide-up">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-teal transition-all duration-300 focus:shadow-lg"
            />
            <Button
              variant="primary"
              className="rounded-full !p-3.5"
              onClick={handleSend}
            >
              <IconArrowUpRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

// ============================================================
// PROFILE PAGE
// ============================================================
export const ProfilePage: FC<{ patientId: string }> = ({ patientId }) => {
  const { logout } = useAuth();
  const { showToast } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!patientId) {
      setLoading(false);
      setError("Patient ID not found. Please log in again.");
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getPatientProfile(patientId);
        if (data) {
          setProfile(data);
        } else {
          setError("Could not find patient profile.");
        }
      } catch (err: any) {
        console.error("Error fetching profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [patientId]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    if (!profile || !patientId) return;

    setIsEditing(false);
    showToast("Updating profile...", "info");

    try {
      await updatePatientProfile(patientId, profile);
      showToast("Profile updated successfully!", "success");
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (profile) {
      setProfile({ ...profile, [name]: value });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <IconLoader2 className="w-8 h-8 text-brand-teal animate-spin" />
        <span className="ml-3 text-gray-600">Loading profile...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No profile data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-slide-in-right">
        <div>
          <h2 className="text-4xl font-bold text-brand-dark mb-2">
            Your Profile
          </h2>
          <p className="text-gray-600">
            View and manage your personal information
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={isEditing ? "primary" : "secondary"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
          {isEditing && <Button type="submit">Save Changes</Button>}
        </div>
      </div>

      <Card className="animate-scale-in">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Header */}
            <div className="md:col-span-2 flex flex-col items-center md:flex-row gap-6 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-yellow/5 rounded-xl">
              <div className="relative">
                <img
                  src={profile.photoURL}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-brand-yellow shadow-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/100x100/F4E48E/4E747B?text=JD")
                  }
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 p-2 bg-brand-teal text-white rounded-full hover:scale-110 transition-transform"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-dark">
                  {profile.name}
                </h3>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-dark border-b-2 border-brand-yellow pb-2">
                Personal Information
              </h4>
              <Input
                id="name"
                label="Full Name"
                value={profile.name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <Input
                id="email"
                label="Email Address"
                type="email"
                value={profile.email}
                disabled // Email is usually not editable
              />
              <Input
                id="phone"
                label="Phone Number"
                value={profile.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <Input
                id="dob"
                label="Date of Birth"
                type="date"
                value={profile.dob}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-dark border-b-2 border-brand-yellow pb-2">
                Address
              </h4>
              <Input
                id="address"
                label="Street Address"
                value={profile.address}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="city"
                  label="City"
                  value={profile.city}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <Input
                  id="state"
                  label="State"
                  value={profile.state}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <Input
                id="zip"
                label="ZIP Code"
                value={profile.zip}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

// --- SETTINGS PAGE (Enhanced with Animations) ---

// --- SETTINGS ITEM COMPONENT ---
const SettingsItem: FC<{ text: string; index: number }> = ({ text, index }) => (
  <button
    className="w-full flex justify-between items-center py-5 text-left group animate-slide-up"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <span className="text-lg text-brand-dark group-hover:text-brand-teal transition-all duration-300 group-hover:translate-x-2">
      {text}
    </span>
    <IconChevronRight className="w-6 h-6 text-gray-400 group-hover:text-brand-teal transition-all duration-300 group-hover:translate-x-2" />
  </button>
);

// ============================================================
// SETTINGS PAGE
// ============================================================
export const SettingsPage: FC = () => {
  const { showToast } = useAppContext();

  const settingsItems = [
    "Manage Notifications",
    "View Social Media Pages",
    "Terms & Conditions",
    "Privacy Policy",
    "Contact Technical Support",
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-brand-dark mb-8 animate-slide-in-right">
        Settings
      </h2>

      <Card className="animate-scale-in">
        <div className="divide-y divide-gray-200">
          {settingsItems.map((item, index) => (
            <SettingsItem key={item} text={item} index={index} />
          ))}
        </div>
      </Card>

      <Card
        className="mt-8 border-2 border-red-300 relative overflow-hidden animate-scale-in"
        style={{ animationDelay: "300ms" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-red-700 mb-3 flex items-center gap-2">
            <IconX className="w-6 h-6" />
            Delete Account
          </h3>
          <p className="text-gray-600 mb-6">
            Permanently delete your account and all associated data. This action
            is irreversible.
          </p>
          <Button
            variant="danger"
            onClick={() =>
              showToast("Account deletion requires confirmation", "error")
            }
          >
            <IconX className="w-5 h-5 mr-2" />
            Delete My Account
          </Button>
        </div>
      </Card>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

// ============================================================
// MAIN APP COMPONENT
// Handles routing and renders correct page based on state
// ============================================================
const App: FC = () => {
  const { user, isLoading } = useAuth();
  const { page } = useAppContext();

  // Show a global app loader while checking auth
  if (isLoading && !user) {
    return (
      <div className="flex min-h-screen bg-brand-light items-center justify-center relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="flex flex-col items-center relative z-10">
          <div className="mb-8 p-6 bg-white rounded-3xl shadow-2xl animate-pulse-glow">
            <DermагlareLogo className="h-20" />
          </div>
          <IconLoader2 className="w-16 h-16 text-brand-teal animate-spin mb-4" />
          <p className="text-brand-dark text-lg font-medium animate-pulse">
            Loading your portal...
          </p>
        </div>
      </div>
    );
  }

  // Show Auth pages if no user
  if (!user) {
    return <LoginPage />;
  }

  // Render the correct page component
  // ... inside your App component ...

  // Show main app layout if user is logged in
  return (
    <div className="flex h-screen bg-brand-light">
      {" "}
      {/* <-- Main opening div */}
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />

        {/* This is the new routing logic */}
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route
              path="/billing"
              element={<BillingPage patientId={user.uid} />}
            />
            <Route
              path="/profile"
              element={<ProfilePage patientId={user.uid} />}
            />
            <Route path="/settings" element={<SettingsPage />} />

            {/* Default route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </PageWrapper>
      </div>
    </div>
  );
};

// --- ROOT COMPONENT (Render) ---

// ============================================================
// ROOT COMPONENT (Application Entry Point)
// ============================================================
export default function Root() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
