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
import { BillingPage } from "./BillingPage";

// ==================== END FIREBASE IMPORTS ====================

// ============================================================
// CUSTOM HOOKS - Data Fetching from Firebase
// ============================================================

// ==================== COPY THIS CODE ====================
// Add this right after your Firebase imports (around line 158)
// This replaces all MOCK_* data with real Firebase data

// ==================== DATA FETCHING HOOKS ====================

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
        size: "0 KB", // We'll fix this in the next section
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
  const { ref: statsRef, isInView: statsInView } = useInView();

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
            onClick={() => showToast("View all appointments", "info")}
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
            onClick={() => showToast("View all documents", "info")}
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

// ==================== END DASHBOARD ====================

// ==================== LOGO COMPONENT ====================

// ============================================================
// LOGO & BRAND ASSETS
// ============================================================
const DERMAGLARE_LOGO_BASE64 =
  "data:image/webp;base64,UklGRsIRAABXRUJQVlA4WAoAAAAgAAAAjQEAfQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg1A8AAPBJAJ0BKo4BfgA+USaQRaOiIZLrHMw4BQS0t34+TOR0uRLqu1KGl25vO9WTzkE3i7+i/i/3//2/8kPP3xHeOvZT+ucwWJZ8h+wH2z8ofzB+Jv9T+M345e0fqy9QL8Z/jf9m/Jn+4/sz7fP8h2tsy3qBeqfzr/Mf3T9r/8L6R38t6EeIB/Lf6r/kvy6/f/okqAX8p/sX+f/w37W/8L46P7v/RflV7Wfzz/B/8n/F/vR/kfsH/k39E/1X92/zP/k/yX///9H3Uewr9pPYq/X3/wkchT+VC4UOFjBR7A230/65/KhcKHCxgo9ga2XhLUGupNBYv+MYdfL/xzgcW5MbCdptZnN5yHp0dAoyNjVZqKUs/WaPLn6Ag8suXVWubZo1oL+xg4B+7zmMvYQ/MedUIrdbiCh1Mq/bewmC1tS9/Yo6VcDuP50MXO7o65csfU+3mbKxJxNZz+Ao/gG/ZkEYeyxcuz0wMvaZqYerX3yZABhGM2NVrt3T/2ITVVlhuT6BIBtm/senBgfEfb00R6YwujMSLJlTX1wvdMmUZYqwZ+dPTujCxI0Tx6bzyclGHd6xTy7F7DGxmqdYH8zyAO3cFdSsrBP72TYCgnSIOmhvdvrI65kDR5MCDoWhfDCsg8sf9Y8rX6cNqFEHzWcM1RKtq8/65/Khy5Epo64M2R9FaCxMR9koR+SBCY9s6tzTRY0xTSKsbHCiPwuU5FR6vKlGz6jf01eocX/+bKi42EMh4JNyLLmN/jB2nCKb2QLSEjz/rn8qFwocLGCm3jYG2+n/XP5ULhQ4WMFF4AD+/+cSgAAei4w+cmZr/roXYE3hpv7ttb40snFIZ4kPdhUTj0NgrgjCKF2Jp/YGjvn57GNYE64DFPI6Z7lA64ZfDdZMnKnZQ1/IZOzO+gLMEhUsay6RkyDMCCABXGM7no6VvAAbm1iRccfBechc9n79CB8LVxBAUIBXJloM7xRUmrcxGDgcJdpe/EG+HvijdvpLnd+2vuhy79xkpyFQMqOrVyrfE6n1BTxzSwSmRqrP2SwudR9ly0C2vM7hxJ+ss/8vV9g7F3eJlg0thYaWS8z04YIOfsmql5EtthW2Irm7ANqm/i0LVJgX/htBf28R+6rOaUXNnIp4jt5tl4gJfycuJGeZJ17MsKFOgqhx3CJP6yxYudpo78OglqCSVpdh9kV1HTRUVyUyIOy8LPbnFPyam5BUPxaqGx5zvCvQibW57wnYzYIMsl2NwRrbSd55I//3n/OOBfKCpJ4V/yCELWMRUOh5v/pVAvhBYdGPA2vps/pidIJnjZ7CYCsO2aCmujmkE57n3z+fNCKIF5N8UatqfAsDPUhIbCAuI3Dq8UuUJmSqbOCVQZ+m4Ta7xKQVe5QPhvyfvqreXe+UhOS3pyv0KXuF69H/E08pQ1T6Q7fg25ehOFDzNixn/diyY1U6AhzRCMnWrVymw+eyIJcUkt2+MrHovfqVp0HKx0TZAqSbtXtIJMiUvzd8c+/OMN0y4pzeap/3bUwJB5nTVOrQ7zQGzmXFjFl2OJV9/+5Lmp78SnxzGqebJJuTIXhWDUyNSyju5IN+TaqA5lerCpgutFO3C4EngLlRA4osmxrrMGEQa2k5H43HJCYeAmOXTN/EvwSru8bw9bKINTrkz+2jSqUWE8eWuUKMSDagcu2YIR6OXFiZscOfXvV446/LzUOuXFn/+nfFDkSVc0kHl1ffdtaBXlSpuNLhKwXNDf2wtAr+F6VTJiKvcF0OucHZd783JyYsxYZBUGq7HEdcHrcDPtaUCXwWMT38WsPYxVsBEyTdeRYnRzbnE+pK83rvtbPxuWmd+8sL3G1KQddqpclDaPmgn8RrusXkLHFOFSv9syNPExijSc+Qw+cqX/WqT0L5kAjRJDbWZjYDPPn2MJX7EsfqXmAwSjQr//yD/ccAkVi/1px9p3/t+6aJeB69SCgQ7Zxcu2CaSGnJHexLOyAGJZ7P00FxDhad2r//veayYHILZvGP/T1mdrpUfEqT9AGSBpJkpZ8bIkoPl5jcUlr7PUGGMkP/vPlZxP+nKvtgecBXojQXi3L1vC+ok7UrbG8P75ZiXFYBYvbDKN9u9XwHtgEzCpVW9RXPvn7kGT9+kJq0/08+hN3gxNGTMwB6bqJbTP9k+PVo5qH55AkcfozQKWfCb8FJQnbk6c3jLl6s2D3hhCLLV6hnHeTv1rpEfzT0J9o5uXOp5t+yKqRZbbqhuYX1v6IejSObpu1FZ/VvZTmXQKqqQJ7RZMr8yEqaYLiSaMS+Uqu250hekdUQDyDQ0vPapJgUQegKGnj2JUg+P74VEIW0d192u5/pHHsZ+8KB2yyICVvWWmhGjUEf5jo+T/8Quy/rf8VSTWf9VPqbAH1R4QUArIlYreHLtbc2cYSbn/j0b9pEZfP+3T8IwVhLOrfEJcHlgEhaCda83q8v33Ga3uZtnNzSrPmwFFURp1rHF8g8VOqb1qLC051UpccPXjuuuXnLtcThMAZ6JMvvSj/wufuc0dl4vW5uqNenY3Jd0186bck1u/h/pCGhNBYyxFs0SP8E2sk+HugppoQLQ2UcOVB2tL4Jvm3TdXw+FYXTalv5O6eYwA8voLkHLKqcGqLfGOOqhFg5oYb7LryPb9zpjYuDUe7J4DYpaUSf4vpt98+htDLGn/F2LOdFJQQTW6B717jlqqHS3mOee5URgTD+7A941vtOJgyzjkVDfgRMxSaJkK4O2M1wQscyNgOi8Dawg2720H/GZzgjqgJbEGqOJPSVgwsM0m0LZun3fxWhqJu4DSEZXK7GX4ZXHZqPJlOsy79YjK/vfunHOD+9f2OPPQGdwKl80DXA75scCi9QU2AyB65Q4SSdiT4zzqUFYm44o0CIgt5IQXsk/KCG+rlWvs24oaiIyRwawre2nwMOJeibsPcbuFSHDENbFk0DyrNH6eC1kkma4Om5KpSCOg3suLex08pAGKc964+KPgNcizRXnTzn0BuyrIPVgnfLhPCOQQtxv8iD9hxwJWEO8WnhmojFzUUZ4/4qlJKyVU8IqoSxwbjRrJ/PoHqt8q0zox5mNSNA3ZRGh+NUAXKHgmQCswVpmZgzikxYFwhRtbtZ1pUyBoDcLxIJXxX/13VHjzAhGSj1qMWvU9RgAlNRga7eioPifQcujJIG0rpgHTuPt+GmgPDX7o39iKafOl5ROwb++gjReGe/FEE/BQ8z2/Lm0CTdrhevUeSBZrDbHdd4pWoLorvFFiUd1NE4ssufyT0fkSGrQQkfXCBSUx4EP3e3Z4cg/bKgZe/sqNahCQXKAJVPGQp2MNzAtCT2ZeXep4r8tledbHAbIXwmuVIdrSB/ucR161t3fSeetfzG5tQZCDjmrgZLPNhuk9VRUCGQZREacwpQ7D+gcIQsU8ikbpdwqEVC2/wWGhCC34erVpoAdXbA7ycxRhdjAzAfGVUot3LBNONL9HfBAUZMcrgsoz26dI6x+7ChPJZFedN5EZpuuXt9s8em+3MZ2HTC84jVdy5ev9nxe601hPQUuIKUeBFKAH4xjgGvRd44cnwWYCS8LSQcTDHY8kP0TTJj9912OeKcgQN7DSzLRTgjtBlORQxMxWiYWqx5c7s/NjD0CRq9w4Uviba/FOCBtX9azO3meMicUsjutdAx+2C5BjHEu8vnKyxLzbdqW28uIEgN3CheUVl2cZn5os/CY7j/5tLGO4IVDTMwVYkztImtm5SyVbMKJPFjkANjxzV8ppTmwzN5XyQsceKKtsQl6plEPjkD4f/0JXvmniHY1MCrXjz516R1ykbHgEM9KIgKn4UGN+PHaQioBtHfm46Aw/9F+8enO9PLxqUgRGnrHeJ0WeL1abVyXVfaiIZ8VQzzDA7N3LRrOlyb2w7/DiuJxXtgRD8Fy6iTw7hyprQUifpy/EuaWh5jqzzAdDF5l5h5F96wI9ajXjaRL63e8MLO/JFmCwmLLR2kU4XQEqUbmv5G7dh5MTR6jtAW4LCjJrkwOYO4d1ZOe0Nuw/rlmM1BIvnWtCuDRiZntQigOSfL1UQDimnNltQH98gJ2UMX1uQGgiK3gNJe/tb0c7Nv0w4lgWqonwC5vpjbnBIr1KTfZAFtDGi/xeeKvNpg2Ip9SUEHPNv+FXY43qrUy6KGhjqKvQqweGXCkf4WL5VBdxIjuG9R0vwIkMy6XMexUasQ0aSJYFba06pV/JwiYm2nbsCQcbj6DkbULkNksnSoUw6c+GSJBwbWc7ialvL9rJzJ9B8uD43Ndo+/W/haCavEuuffM5FhJPmYkFu/8CyLUYGjx/aY9ybxeL0eMo5AZt1vRvgYYgdl6eydBCy2HTjdXSuzdST/s17Vh7yXLR93AKrM3ZxduoLFZTFB1KfEGqkETtfQXyZprQIOWWtn9E7u7IfZUmJTGC0MPgsGwPDv3nUgNhuNV8cgE0K340y14jcTxl+8xGXuanPXU/CJE5/AOdG5GjHXu5r0JooKap84Bh2yB9zU5N2zht5TOjgYkeDfvSU/yW1XVxaW4IRsWBZQuPYaSHAB4JXF/4wTHq2cUOkIebSU0PLgYfMDjs0+nC7BCUWoqt5mernU64tRQ2R8scOr6KpYvC21P/1b6m8/JQioEdYfsDx6fm3nGmli4182RoWF3HyEnGW0Vfa5KeNGBtJfdU6D5jbkC+m2LYewb46/bS/FlF7LvIUs2eYQ7q6n5Iw2ffJ2Zz558MVfoF6dvgbFe1hKSZE+jzvkuBBBzKd6KR+nSSWKBYbi+cLvY/xidhcsm3Ds9Ni07eciXW6Fen1G6U9qvn93pK9P5Gd5aZn6iFTW3bR3Jq6iJK9l7Mtkmn5UEGya0mf3M7TDm7J/s3xRj1g30OnSpcIUNla8SSKGZWZlyRnTfWoqRl0S5I7zNLVvmxfySneKO7oGHyysXtEe2Fle+R/9oG4+hWj12o1clj7BhuG1HtBvyZNvtE5ldxJROpIajHKiqDEGZZ37/LnFJQ60u+pVYF/dILvwqRhMKErJ92EntZa4gfVKg7N0iRlZs9r2H5fSD3mLayiTiLFtzPhc8AtVhqyQ7jBNHkaMB2Wpmjn/ncnqwKD26+hK9npWyG+LUngbi+z9gQ5Jdpn7jaLRM11QHMlNFD3PSnefqTPcsSvi0hE5xwwscyU+G0R4f198Jq3V3KzstqHQ3ZlVlrYJt3+Z9L+hIfTsoyLPMkNzkNBeVARjwzPRfQWY+6shmOMo0u//0GynaMaVXzkz1bPLEqsAoGMf+53wXhnGogeKmS2rdXIPfJ/xis/F70jGeX9SHuQyFY7k99xmSZPlYxFKSxiWK7+FKBsDSjf/5KhrEzI6YlExZULsgWPv2i/rUYxGV6t3OiUrkdNf27x+b9JlEU38grwYeHmlPP2GOwbhFGy/mb++H5GTpqSveggAAAAA";

const DermагlareLogo: FC<{ className?: string; showText?: boolean }> = ({
  className = "h-12",
  showText = true,
}) => (
  <img
    src={DERMAGLARE_LOGO_BASE64}
    alt="Dermaglare Skin - Dr Jabu Nkehli"
    className={className}
  />
);

// --- INLINE SVG ICONS (Replaced lucide-react) ---

const IconBase: FC<{ className?: string; children: ReactNode }> = ({
  className = "w-6 h-6",
  children,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// ============================================================
// ICON COMPONENTS
// All SVG icons used throughout the application
// ============================================================

const IconUser: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconBase>
);
const IconCalendar: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconBase>
);
const IconMessageSquare: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconBase>
);
export const IconFileText: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </IconBase>
);
export const IconCreditCard: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </IconBase>
);
const IconSettings: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);
const IconLogOut: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </IconBase>
);
const IconChevronRight: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <polyline points="9 18 15 12 9 6" />
  </IconBase>
);
const IconChevronLeft: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <polyline points="15 18 9 12 15 6" />
  </IconBase>
);
export const IconX: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </IconBase>
);
export const IconCheckCircle: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconBase>
);
const IconBell: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </IconBase>
);
const IconMenu: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </IconBase>
);
const IconArrowRight: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);
const IconPlus: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <line x1="12" x2="12" y1="5" y2="19" />
    <line x1="5" x2="19" y1="12" y2="12" />
  </IconBase>
);
export const IconLoader2: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={`${className} animate-spin`}>
    <line x1="12" x2="12" y1="2" y2="6" />
    <line x1="12" x2="12" y1="18" y2="22" />
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
    <line x1="2" x2="6" y1="12" y2="12" />
    <line x1="18" x2="22" y1="12" y2="12" />
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  </IconBase>
);

export const IconAlertCircle: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <circle cx="12" cy="16" r="1" />
  </IconBase>
);

export const IconBuilding2: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </IconBase>
);

export const IconBanknote: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </IconBase>
);

export const IconDownload: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </IconBase>
);

// Added IconClock to fix missing icon usage (used in BookingModal time slots)
export const IconClock: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 7 12 12 15 14" />
  </IconBase>
);

const IconLock: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconBase>
);
const IconMail: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </IconBase>
);
export const IconHome: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconBase>
);
const IconCheck: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <polyline points="20 6 9 17 4 12" />
  </IconBase>
);
const IconArrowUpRight: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <line x1="7" x2="17" y1="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </IconBase>
);
const IconRefreshCcw: FC<{ className?: string }> = ({ className }) => (
  <IconBase className={className}>
    <path d="M3 2v6h6" />
    <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
    <path d="M21 22v-6h-6" />
    <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
  </IconBase>
);
// --- END INLINE SVG ICONS ---

// --- CUSTOM HOOKS FOR ANIMATIONS ---

// Hook for staggered list animations

// ============================================================
// CUSTOM HOOKS - Animations & UI
// ============================================================
const useStaggerAnimation = (itemCount: number, delay = 50) => {
  return Array.from({ length: itemCount }, (_, i) => ({
    style: {
      animationDelay: `${i * delay}ms`,
    },
  }));
};

// Hook for intersection observer (scroll animations)
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
};

// --- TYPE DEFINITIONS (TypeScript) ---

// ============================================================
// TYPE DEFINITIONS
// ============================================================
type AuthUser = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
};

type Page =
  | "dashboard"
  | "appointments"
  | "documents"
  | "chat"
  | "billing"
  | "profile"
  | "settings";

interface AppContextType {
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// Note: Appointment, Document, Message, Invoice, and Patient types
// are now imported from './services/database-service'

// --- TOAST NOTIFICATION SYSTEM ---

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

// ============================================================
// TOAST NOTIFICATION COMPONENT
// ============================================================
const ToastContainer: FC<{
  toasts: Toast[];
  removeToast: (id: string) => void;
}> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg
            animate-slide-in-right backdrop-blur-sm
            ${
              toast.type === "success"
                ? "bg-green-50 border-2 border-green-400 text-green-800"
                : toast.type === "error"
                ? "bg-red-50 border-2 border-red-400 text-red-800"
                : "bg-blue-50 border-2 border-blue-400 text-blue-800"
            }
            transform transition-all duration-300 hover:scale-105
          `}
        >
          {toast.type === "success" && <IconCheckCircle className="w-5 h-5" />}
          {toast.type === "error" && <IconX className="w-5 h-5" />}
          {toast.type === "info" && <IconBell className="w-5 h-5" />}
          <p className="font-medium">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-auto hover:scale-110 transition-transform"
          >
            <IconX className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

// --- CONTEXT PROVIDERS ---

// ============================================================
// CONTEXT PROVIDERS
// Application state management using React Context
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "info") => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <AppContext.Provider
      value={{ page, setPage, isSidebarOpen, setSidebarOpen, showToast }}
    >
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </AppContext.Provider>
  );
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        // User is logged in - get patient data
        try {
          const patientData = await getPatientProfile(firebaseUser.uid);

          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || "",
            displayName:
              patientData?.name || firebaseUser.displayName || "Patient",
            photoURL: patientData?.photoURL || firebaseUser.photoURL || "",
          });
        } catch (error) {
          console.error("Error loading patient profile AFTER login:", error);
          // Set user with basic info even if profile load fails
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || "",
            displayName: firebaseUser.displayName || "Patient",
            photoURL: firebaseUser.photoURL || "",
          });
        }
      } else {
        // User is logged out
        setUser(null);
      }
      setIsLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      await loginWithEmail(email, password);
      // User state will be updated by onAuthChange listener
    } catch (error: any) {
      throw error;
    }
  };

  // Signup function
  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      await signupWithEmail(email, password, displayName);
      // User state will be updated by onAuthChange listener
    } catch (error: any) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await firebaseLogout();
      // User state will be updated by onAuthChange listener
    } catch (error: any) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- REUSABLE UI COMPONENTS (Enhanced with Animations) ---

// ============================================================
// UI COMPONENTS - Reusable Elements
// ============================================================

// --- BUTTON COMPONENT ---
const Button: FC<{
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  type = "button",
}) => {
  const baseClasses =
    "relative overflow-hidden font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";

  const variantClasses = {
    primary:
      "bg-brand-teal text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:shadow-brand-teal/30",
    secondary:
      "bg-brand-yellow text-brand-dark hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:shadow-brand-yellow/30",
    ghost:
      "bg-transparent text-brand-dark hover:bg-brand-teal/10 hover:text-brand-teal",
    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:shadow-red-600/30",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add(
      "absolute",
      "bg-white/30",
      "rounded-full",
      "pointer-events-none",
      "animate-ping"
    );

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    onClick?.();
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

// --- CARD COMPONENT ---
const Card: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    style?: React.CSSProperties;
  }
> = ({ children, className = "", hover = true, style, ...rest }) => {
  return (
    <div
      {...rest}
      className={`
        bg-white rounded-xl shadow-md p-6 
        transition-all duration-300
        ${
          hover
            ? "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
            : ""
        }
        ${className}
        animate-scale-in
      `}
      style={style}
    >
      {children}
    </div>
  );
};

// --- INPUT COMPONENT ---
const Input: FC<{
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactElement;
  disabled?: boolean;
  defaultValue?: string;
  error?: string;
  required?: boolean;
}> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  disabled,
  defaultValue,
  error,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`
          block text-sm font-medium mb-2 transition-all duration-300
          ${isFocused ? "text-brand-teal" : "text-gray-700"}
        `}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-brand-teal">
            {React.cloneElement(
              icon as React.ReactElement<{ className?: string }>,
              {
                className: "w-5 h-5",
              }
            )}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border-2 rounded-lg
            ${icon ? "pl-11" : ""}
            transition-all duration-300
            focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
            disabled:bg-gray-100 disabled:cursor-not-allowed
            hover:border-brand-teal/50
            ${isFocused ? "shadow-lg scale-[1.02]" : ""}
            ${error ? "border-red-400 focus:ring-red-200" : ""}
          `}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// --- LAYOUT COMPONENTS (Enhanced with Animations) ---

// --- NAV ITEM COMPONENT (for Sidebar) ---
const NavItem: FC<{
  icon: React.ReactElement;
  label: string;
  pageKey: Page;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, pageKey, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-4 px-4 py-3 rounded-xl
        transition-all duration-300 group relative overflow-hidden
        ${
          isActive
            ? "bg-brand-teal text-white shadow-lg scale-105"
            : "text-gray-600 hover:bg-brand-teal/10 hover:text-brand-teal hover:scale-105"
        }
      `}
    >
      {/* Animated background on hover */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-yellow/20
        transform transition-transform duration-300
        ${
          isActive
            ? "translate-x-0"
            : "-translate-x-full group-hover:translate-x-0"
        }
      `}
      />

      <div className="relative z-10 flex items-center gap-4 w-full">
        <div
          className={`transition-transform duration-300 ${
            isActive ? "animate-bounce-subtle" : "group-hover:scale-110"
          }`}
        >
          {React.cloneElement(
            icon as React.ReactElement<{ className?: string }>,
            {
              className: "w-6 h-6",
            }
          )}
        </div>
        <span className="font-medium">{label}</span>
      </div>

      {isActive && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-yellow rounded-l-full animate-pulse" />
      )}
    </button>
  );
};

// ============================================================
// LAYOUT COMPONENTS
// ============================================================

// --- SIDEBAR COMPONENT ---
export const Sidebar: FC = () => {
  // We only need these from useAppContext
  const { isSidebarOpen, setSidebarOpen, showToast } = useAppContext();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    showToast("Logged out successfully", "success");
  };

  const navItems = [
    { icon: <IconHome />, label: "Dashboard", to: "/dashboard" },
    { icon: <IconCalendar />, label: "Appointments", to: "/appointments" },
    { icon: <IconFileText />, label: "Documents", to: "/documents" },
    { icon: <IconMessageSquare />, label: "Chat", to: "/chat" },
    { icon: <IconCreditCard />, label: "Billing", to: "/billing" },
    { icon: <IconUser />, label: "Profile", to: "/profile" },
    { icon: <IconSettings />, label: "Settings", to: "/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 bg-white border-r border-gray-200
          transform transition-all duration-300 ease-out
          ${
            isSidebarOpen
              ? "translate-x-0 shadow-2xl"
              : "-translate-x-full lg:translate-x-0"
          }
          flex flex-col h-screen
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 animate-slide-in-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DermагlareLogo className="h-14" />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-brand-teal transition-all hover:rotate-90 duration-300"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Patient Portal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <div
                key={item.to}
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* THIS IS THE NEW NAVIGATION LINK */}
                <NavLink
                  to={item.to}
                  onClick={() => setSidebarOpen(false)} // Close on mobile
                  className={({ isActive }) => `
                    w-full flex items-center gap-4 px-4 py-3 rounded-xl
                    transition-all duration-300 group relative overflow-hidden
                    ${
                      isActive
                        ? "bg-brand-teal text-white shadow-lg scale-105"
                        : "text-gray-600 hover:bg-brand-teal/10 hover:text-brand-teal hover:scale-105"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Animated background on hover (from your old NavItem) */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-yellow/20
                        transform transition-transform duration-300
                        ${
                          isActive
                            ? "translate-x-0"
                            : "-translate-x-full group-hover:translate-x-0"
                        }
                      `}
                      />

                      <div className="relative z-10 flex items-center gap-4 w-full">
                        <div
                          className={`transition-transform duration-300 ${
                            isActive
                              ? "animate-bounce-subtle"
                              : "group-hover:scale-110"
                          }`}
                        >
                          {React.cloneElement(
                            item.icon as React.ReactElement<{
                              className?: string;
                            }>,
                            { className: "w-6 h-6" }
                          )}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>

                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-yellow rounded-l-full animate-pulse" />
                      )}
                    </>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 animate-slide-up">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <IconLogOut className="w-5 h-5" />
            Log Out
          </Button>
        </div>
      </aside>
    </>
  );
};

// --- HEADER COMPONENT ---
export const Header: FC = () => {
  const { setSidebarOpen, showToast } = useAppContext();
  const { user } = useAuth();
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 backdrop-blur-lg bg-white/90 animate-slide-in-right">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-brand-teal transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <IconMenu className="w-6 h-6" />
          </button>

          {/* Logo visible on mobile */}
          <div className="lg:hidden">
            <DermагlareLogo className="h-8" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4 relative group">
          <input
            type="search"
            placeholder="Search appointments, documents..."
            className="w-full px-4 py-2 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-teal transition-all duration-300 focus:shadow-lg focus:scale-[1.02]"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-brand-teal group-focus-within:scale-110">
            <IconFileText className="w-5 h-5" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button
            className="relative p-2 text-gray-600 hover:text-brand-teal transition-all duration-300 hover:scale-110 group"
            onClick={() => {
              showToast("No new notifications", "info");
              setHasNotification(false);
            }}
          >
            <IconBell className="w-6 h-6 group-hover:animate-wiggle" />
            {hasNotification && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            )}
            {hasNotification && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-brand-yellow transition-all duration-300 group-hover:scale-110 group-hover:border-brand-teal group-hover:shadow-lg"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/100x100/F4E48E/4E747B?text=JD")
                }
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-brand-dark group-hover:text-brand-teal transition-colors">
                {user?.displayName}
              </p>
              <p className="text-xs text-gray-500">Patient</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- PAGE WRAPPER COMPONENT ---
export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto p-6 lg:p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
};

// --- ANIMATED PARTICLES COMPONENT ---

// --- ANIMATED PARTICLES (Background Effect) ---
const AnimatedParticles: FC = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-brand-teal/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

// --- GOOGLE ICON COMPONENT ---
const IconGoogle: FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// --- AUTH PAGES (Ultra Creative Redesign) ---

// ============================================================
// AUTHENTICATION PAGES
// ============================================================

// --- LOGIN PAGE ---
const LoginPage: FC = () => {
  const { login, signup } = useAuth();
  const { showToast } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        showToast("Welcome back! 🎉", "success");
      } else {
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
          setErrors({ password: passwordValidation.error });
          setIsLoading(false);
          return;
        }

        const matchValidation = validatePasswordMatch(
          password,
          confirmPassword
        );
        if (!matchValidation.isValid) {
          setErrors({ confirmPassword: matchValidation.error });
          setIsLoading(false);
          return;
        }

        await signup(email, password, displayName);
        showToast("Account created successfully! 🎊", "success");
      }
    } catch (error: any) {
      console.error("Login/Signup Error:", error);
      setErrors({ general: error.message || "Authentication failed" });
      showToast(error.message || "Authentication failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      showToast("Connecting to Google... 🔐", "info");
      await loginWithGoogle();
      showToast("Google login successful! ✨", "success");
    } catch (error: any) {
      console.error("Google Login Error:", error);
      showToast(error.message || "Google login failed", "error");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      showToast("Please enter your email address", "error");
      return;
    }

    try {
      await resetPassword(email);
      showToast("Password reset email sent! 📧", "success");
    } catch (error: any) {
      showToast(error.message || "Failed to send reset email", "error");
    }
  };

  const toggleForm = () => {
    setIsFlipped(!isFlipped);
    setErrors({});
    setTimeout(() => {
      setIsLogin(!isLogin);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-yellow/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedParticles />

      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-teal/5 to-brand-yellow/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Main Card with 3D Flip Effect */}
      <div
        className="w-full max-w-md relative z-10"
        style={{ perspective: "1000px" }}
      >
        <div
          className={`relative w-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Morphism Card */}
          <div className="relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 border border-white/50 animate-scale-in">
            {/* Animated Glow Border */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-yellow/20 to-brand-teal/20 animate-shimmer"
              style={{
                backgroundSize: "200% 100%",
                filter: "blur(20px)",
                zIndex: -1,
              }}
            />

            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6 animate-slide-up">
                {/* Logo with animated effects */}
                <div className="relative p-4 bg-white rounded-3xl shadow-2xl animate-pulse-glow">
                  <DermагlareLogo className="h-16" />
                </div>
                {/* Floating rings around logo */}
                <div className="absolute inset-0 border-4 border-brand-yellow/30 rounded-3xl animate-ping" />
                <div
                  className="absolute inset-0 border-2 border-brand-teal/20 rounded-3xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              <h1
                className="text-4xl font-bold text-brand-dark mb-2 animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                {isLogin ? "Welcome Back!" : "Join Dermaglare"}
              </h1>
              <p
                className="text-gray-600 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                {isLogin
                  ? "Continue your skincare journey"
                  : "Begin your transformation today"}
              </p>
            </div>

            {/* General Error Message Display */}
            {errors.general && (
              <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-slide-up">
                <div className="flex items-center gap-2 text-red-800">
                  <IconAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{errors.general}</p>
                </div>
              </div>
            )}

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="animate-slide-up">
                  <Input
                    id="displayName"
                    label="Full Name"
                    placeholder="Jane Doe"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    icon={<IconUser />}
                  />
                </div>
              )}

              <div
                className="animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<IconMail />}
                />
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<IconLock />}
                  error={errors.password}
                  required
                />
              </div>

              {/* Confirm Password Field (Only for Signup) */}
              {!isLogin && (
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "250ms" }}
                >
                  <Input
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    icon={<IconLock />}
                    error={errors.confirmPassword}
                    required
                  />
                </div>
              )}

              {/* Password Requirements (Only for Signup) */}
              {!isLogin && (
                <div
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 animate-slide-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <p className="text-sm font-medium text-blue-900 mb-2">
                    Password must contain:
                  </p>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One lowercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One number
                    </li>
                  </ul>
                </div>
              )}

              {/* Remember & Forgot Password */}
              {isLogin && (
                <div
                  className="flex items-center justify-between text-sm animate-slide-up"
                  style={{ animationDelay: "250ms" }}
                >
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-brand-teal text-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all group-hover:scale-110"
                    />
                    <span className="text-gray-600 group-hover:text-brand-teal transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-brand-teal hover:text-brand-dark font-medium hover:underline transition-all hover:scale-105"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button with Gradient */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "300ms" }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-teal to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"
                    style={{ backgroundSize: "200% 100%" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {isLogin ? "Log In" : "Create Account"}
                        <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>

            {/* Divider */}
            <div
              className="relative my-6 animate-slide-up"
              style={{ animationDelay: "350ms" }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/70 text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In Button */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-brand-teal hover:shadow-lg transition-all duration-300 group hover:scale-105 active:scale-95"
              >
                <IconGoogle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 group-hover:text-brand-teal transition-colors">
                  Continue with Google
                </span>
              </button>
            </div>

            {/* Toggle Login/Signup */}
            <div
              className="mt-6 text-center animate-slide-up"
              style={{ animationDelay: "450ms" }}
            >
              <p className="text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={toggleForm}
                  className="ml-2 text-brand-teal font-semibold hover:text-brand-dark transition-all hover:scale-105 inline-block relative group"
                >
                  {isLogin ? "Sign Up" : "Log In"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal group-hover:w-full transition-all duration-300" />
                </button>
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 animate-slide-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconLock className="w-3 h-3" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconCheckCircle className="w-3 h-3" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconCheckCircle className="w-3 h-3" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Extra Flair */}
      <div className="absolute bottom-10 left-10 animate-bounce-subtle opacity-50">
        <IconCheckCircle className="w-12 h-12 text-brand-teal" />
      </div>
      <div
        className="absolute top-10 right-10 animate-float opacity-50"
        style={{ animationDelay: "1s" }}
      >
        <IconLock className="w-10 h-10 text-brand-yellow" />
      </div>
    </div>
  );
};

// --- CIRCULAR PROGRESS RING COMPONENT ---

// ============================================================
// DASHBOARD PAGE COMPONENTS
// ============================================================

// --- CIRCULAR PROGRESS COMPONENT ---
const CircularProgress: FC<{
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = "#4E747B",
  label,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F9F7F0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-brand-dark">
          {percentage}%
        </span>
        {label && <span className="text-xs text-gray-500 mt-1">{label}</span>}
      </div>
    </div>
  );
};

// --- STAT CARD WITH ANIMATION ---

// --- STAT CARD COMPONENT ---
const StatCard: FC<{
  icon: React.ReactElement;
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  delay?: number;
}> = ({ icon, label, value, change, changeType = "positive", delay = 0 }) => {
  return (
    <Card
      hover={true}
      className="animate-slide-up relative overflow-hidden group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-yellow/0 group-hover:from-brand-teal/10 group-hover:to-brand-yellow/10 transition-all duration-500" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
            {label}
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
          </p>
          <p className="text-4xl font-bold text-brand-dark mb-2 group-hover:text-brand-teal transition-colors">
            {value}
          </p>
          {change && (
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                changeType === "positive"
                  ? "text-green-600"
                  : changeType === "negative"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {changeType === "positive" && (
                <IconArrowUpRight className="w-4 h-4 animate-bounce-subtle" />
              )}
              {changeType === "negative" && (
                <IconArrowRight className="w-4 h-4 rotate-90" />
              )}
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className="p-4 bg-gradient-to-br from-brand-teal/10 to-brand-yellow/10 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
          {React.cloneElement(
            icon as React.ReactElement<{ className?: string }>,
            {
              className: "w-7 h-7 text-brand-teal",
            }
          )}
        </div>
      </div>

      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </Card>
  );
};

// --- MINI CHART COMPONENT ---

// --- MINI LINE CHART COMPONENT ---
const MiniLineChart: FC<{ data: number[]; color?: string }> = ({
  data,
  color = "#4E747B",
}) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const width = 200;
  const height = 60;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-fade-in"
      />
      <polyline
        points={`0,${height} ${points} ${width},${height}`}
        fill="url(#chartGradient)"
        className="animate-fade-in"
      />
    </svg>
  );
};

// --- DASHBOARD PAGE (Ultra Creative Redesign) ---

// --- DASHBOARD METRIC CARD COMPONENT ---
const DashboardMetricCard: FC<{
  icon: React.ReactElement;
  label: string;
  value: string;
  trend?: string;
  delay?: number;
}> = ({ icon, label, value, trend, delay = 0 }) => {
  return (
    <Card
      hover={true}
      className="animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-3xl font-bold text-brand-dark mb-2">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 flex items-center gap-1">
              <IconArrowUpRight className="w-4 h-4 animate-bounce-subtle" />
              {trend}
            </p>
          )}
        </div>
        <div className="p-3 bg-gradient-to-br from-brand-teal/10 to-brand-yellow/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(
            icon as React.ReactElement<{ className?: string }>,
            {
              className: "w-6 h-6 text-brand-teal",
            }
          )}
        </div>
      </div>
    </Card>
  );
};

// ============================================================
// BOOKING MODAL COMPONENT
// ============================================================
const BookingModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    type: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const appointmentTypes = [
    "General Consultation",
    "Follow-up Visit",
    "Skin Assessment",
    "Acne Treatment",
    "Anti-Aging Consultation",
    "Cosmetic Procedure",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.type) {
      newErrors.type = "Please select an appointment type";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }
    if (!formData.time) {
      newErrors.time = "Please select a time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form
      setFormData({ type: "", date: "", time: "", notes: "" });
      setErrors({});
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ type: "", date: "", time: "", notes: "" });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-teal/10 rounded-lg">
              <IconCalendar className="w-6 h-6 text-brand-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">
                Book Appointment
              </h2>
              <p className="text-sm text-gray-600">
                Schedule your visit with Dr. Jabu Nkehli
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <IconX className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Appointment Type */}
          <div className="animate-slide-up">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className={`
                w-full px-4 py-3 border-2 rounded-lg
                focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
                transition-all duration-300
                ${errors.type ? "border-red-400" : "border-gray-200"}
              `}
            >
              <option value="">Select appointment type...</option>
              {appointmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.type && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <IconAlertCircle className="w-4 h-4" />
                {errors.type}
              </p>
            )}
          </div>

          {/* Date Selection */}
          <div className="animate-slide-up" style={{ animationDelay: "50ms" }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className={`
                  w-full px-4 py-3 pl-11 border-2 rounded-lg
                  focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
                  transition-all duration-300
                  ${errors.date ? "border-red-400" : "border-gray-200"}
                `}
              />
              <IconCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.date && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <IconAlertCircle className="w-4 h-4" />
                {errors.date}
              </p>
            )}
          </div>

          {/* Time Selection */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData({ ...formData, time: slot })}
                  className={`
                    px-4 py-3 rounded-lg border-2 font-medium
                    transition-all duration-300
                    ${
                      formData.time === slot
                        ? "bg-brand-teal text-white border-brand-teal shadow-lg scale-105"
                        : "bg-white text-gray-700 border-gray-200 hover:border-brand-teal hover:bg-brand-teal/5"
                    }
                  `}
                >
                  <IconClock className="w-4 h-4 mx-auto mb-1" />
                  {slot}
                </button>
              ))}
            </div>
            {errors.time && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <IconAlertCircle className="w-4 h-4" />
                {errors.time}
              </p>
            )}
          </div>

          {/* Notes */}
          <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              rows={4}
              placeholder="Any specific concerns or questions you'd like to discuss..."
              className="
                w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
                transition-all duration-300 resize-none
              "
            />
          </div>

          {/* Info Box */}
          <div
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex gap-3">
              <IconCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">What to expect:</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• A reminder will be sent 24 hours before</li>
                  <li>• Virtual appointments include a secure video link</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex gap-3 pt-4 animate-slide-up"
            style={{ animationDelay: "250ms" }}
          >
            <Button
              type="button"
              variant="ghost"
              className="flex-1"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <IconLoader2 className="w-5 h-5 animate-spin" />
                  Booking...
                </>
              ) : (
                <>
                  <IconCheckCircle className="w-5 h-5" />
                  Confirm Booking
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================================
// CALENDAR VIEW COMPONENT
// ============================================================
const CalendarView: FC<{
  appointments: Appointment[];
  onDateClick: (date: string) => void;
  onBookAppointment: () => void;
}> = ({ appointments, onDateClick, onBookAppointment }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Get the first and last day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Get the day of week for the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Get total days in month
  const daysInMonth = lastDayOfMonth.getDate();

  // Previous month navigation
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Next month navigation
  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Today navigation
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Format date as YYYY-MM-DD for comparison (timezone-safe)
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get appointments for a specific date
  const getAppointmentsForDate = (day: number) => {
    const dateStr = formatDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    return appointments.filter((apt) => {
      // Normalize the appointment date to avoid timezone issues
      const aptDate = new Date(apt.date + "T12:00:00"); // Add noon time to avoid timezone shifts
      const aptDateStr = formatDate(aptDate);
      return aptDateStr === dateStr;
    });
  };

  // Check if date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Handle date click
  const handleDateClick = (day: number) => {
    const dateStr = formatDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    setSelectedDate(dateStr);
    onDateClick(dateStr);
  };

  // Generate calendar days
  const calendarDays = [];

  // Add empty cells for days before the first day of month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-2" />);
  }

  // Add actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateAppointments = getAppointmentsForDate(day);
    const dateStr = formatDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    const isSelected = selectedDate === dateStr;
    const isTodayDate = isToday(day);

    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        className={`
          relative p-2 min-h-[80px] rounded-lg border-2 transition-all duration-300
          ${
            isSelected
              ? "bg-brand-teal text-white border-brand-teal shadow-lg scale-105"
              : isTodayDate
              ? "bg-brand-yellow/20 border-brand-yellow text-brand-dark hover:bg-brand-yellow/30"
              : "bg-white border-gray-200 hover:border-brand-teal hover:bg-brand-teal/5"
          }
        `}
      >
        <div className="text-left">
          <span
            className={`
            text-sm font-semibold
            ${isSelected ? "text-white" : "text-brand-dark"}
          `}
          >
            {day}
          </span>

          {dateAppointments.length > 0 && (
            <div className="mt-1 space-y-1">
              {dateAppointments.slice(0, 2).map((apt) => (
                <div
                  key={apt.id}
                  className={`
                    text-xs px-2 py-1 rounded truncate
                    ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : apt.status === "Pending" || apt.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : apt.status === "Completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }
                  `}
                >
                  {apt.time}
                </div>
              ))}
              {dateAppointments.length > 2 && (
                <div
                  className={`
                    text-xs px-2 py-1 rounded
                    ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  +{dateAppointments.length - 2} more
                </div>
              )}
            </div>
          )}
        </div>
      </button>
    );
  }

  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="animate-scale-in">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-brand-dark">{monthYear}</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button variant="ghost" size="sm" onClick={goToPreviousMonth}>
            <IconChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={goToNextMonth}>
            <IconChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-gray-600 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">{calendarDays}</div>

      {/* Selected Date Details */}
      {selectedDate && (
        <div className="mt-6 pt-6 border-t border-gray-200 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-brand-dark">
              Appointments on{" "}
              {new Date(selectedDate + "T12:00:00").toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </h4>
            <Button size="sm" onClick={onBookAppointment}>
              <IconPlus className="w-4 h-4" />
              Book
            </Button>
          </div>

          {getAppointmentsForDate(
            new Date(selectedDate + "T12:00:00").getDate()
          ).length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <IconCalendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No appointments on this date</p>
            </div>
          ) : (
            <div className="space-y-3">
              {getAppointmentsForDate(
                new Date(selectedDate + "T12:00:00").getDate()
              ).map((apt) => (
                <Card
                  key={apt.id}
                  className="group hover:shadow-lg transition-all"
                  hover={true}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          p-3 rounded-lg
                          ${
                            apt.status === "Pending" ||
                            apt.status === "Confirmed"
                              ? "bg-green-100"
                              : apt.status === "Completed"
                              ? "bg-blue-100"
                              : "bg-red-100"
                          }
                        `}
                      >
                        <IconCalendar
                          className={`
                            w-5 h-5
                            ${
                              apt.status === "Pending" ||
                              apt.status === "Confirmed"
                                ? "text-green-600"
                                : apt.status === "Completed"
                                ? "text-blue-600"
                                : "text-red-600"
                            }
                          `}
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-dark">
                          {apt.type}
                        </h5>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <IconClock className="w-4 h-4" />
                          {apt.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          apt.status === "Pending" || apt.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : apt.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }
                      `}
                    >
                      {apt.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand-yellow/20 border-2 border-brand-yellow rounded" />
          <span className="text-gray-600">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-100 rounded" />
          <span className="text-gray-600">Upcoming</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 rounded" />
          <span className="text-gray-600">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 rounded" />
          <span className="text-gray-600">Cancelled</span>
        </div>
      </div>
    </Card>
  );
};

// --- APPOINTMENTS PAGE (Ultra Creative Redesign) ---

// ============================================================
// APPOINTMENTS PAGE
// ============================================================
export const AppointmentsPage: FC = () => {
  const { user } = useAuth();
  const { showToast } = useAppContext();

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    type: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isBooking, setIsBooking] = useState(false);

  // Add this function inside the AppointmentsPage component
  const handleBooking = async (data: any) => {
    if (!user) {
      showToast("Please log in to book an appointment", "error");
      return;
    }

    setIsBooking(true);
    try {
      await bookAppointment({
        patientId: user.uid,
        patientName: user.displayName,
        type: data.type,
        date: data.date,
        time: data.time,
        notes: data.notes || "",
        status: "Pending",
        doctorName: "Dr. Jabu Nkehli", // You can make this dynamic if needed
      });

      showToast("Appointment booked successfully! 🎉", "success");
      setShowBookingModal(false);

      // Refresh appointments list
      if (refetch) {
        refetch();
      }
    } catch (error: any) {
      console.error("Booking error:", error);
      showToast(error.message || "Failed to book appointment", "error");
    } finally {
      setIsBooking(false);
    }
  };

  // Add this handler function
  const handleDateClick = (date: string) => {
    showToast(
      `Viewing appointments for ${new Date(
        date + "T00:00:00"
      ).toLocaleDateString()}`,
      "info"
    );
  };

  // Use Firebase data
  const { appointments, loading, error, refetch } = useAppointments();

  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "upcoming" | "completed" | "cancelled"
  >("all");

  const staggerItems = useStaggerAnimation(appointments.length, 100);

  const filteredAppointments = appointments.filter((apt) => {
    if (filterStatus === "all") return true;
    return apt.status.toLowerCase() === filterStatus;
  });

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <IconLoader2 className="w-8 h-8 text-brand-teal animate-spin" />
        <span className="ml-3 text-gray-600">Loading appointments...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <Button onClick={refetch}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-slide-in-right">
        <div>
          <h2 className="text-4xl font-bold text-brand-dark mb-2">
            Appointments
          </h2>
          <p className="text-gray-600">
            Manage and track all your medical appointments
          </p>
        </div>
        <Button onClick={() => setShowBookingModal(true)}>
          <IconPlus className="w-5 h-5" />
          Book New Appointment
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-scale-in">
        {[
          {
            label: "Total",
            count: appointments.length,
            color: "from-blue-500 to-blue-600",
            icon: <IconCalendar />,
          },
          {
            label: "Upcoming",
            count: appointments.filter(
              (a) => a.status === "Pending" || a.status === "Confirmed"
            ).length,
            color: "from-green-500 to-green-600",
            icon: <IconCheckCircle />,
          },
          {
            label: "Completed",
            count: appointments.filter((a) => a.status === "Completed").length,
            color: "from-purple-500 to-purple-600",
            icon: <IconCheck />,
          },
          {
            label: "This Month",
            count: 3,
            color: "from-orange-500 to-orange-600",
            icon: <IconCalendar />,
          },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="relative p-4 rounded-xl border-2 border-gray-200 hover:border-brand-teal transition-all duration-300 group cursor-pointer overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
            />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                  {stat.count}
                </p>
              </div>
              <div
                className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg text-white group-hover:scale-110 transition-transform`}
              >
                {React.cloneElement(
                  stat.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "w-5 h-5",
                  }
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and View Toggle */}
      <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              {
                key: "all",
                label: "All Appointments",
                count: appointments.length,
              },
              {
                key: "upcoming",
                label: "Upcoming",
                count: appointments.filter(
                  (a) => a.status === "Pending" || a.status === "Confirmed"
                ).length,
              },
              {
                key: "completed",
                label: "Completed",
                count: appointments.filter((a) => a.status === "Completed")
                  .length,
              },
              {
                key: "cancelled",
                label: "Cancelled",
                count: appointments.filter((a) => a.status === "Cancelled")
                  .length,
              },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() =>
                  setFilterStatus(filter.key as typeof filterStatus)
                }
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    filterStatus === filter.key
                      ? "bg-brand-teal text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }
                `}
              >
                {filter.label}
                <span
                  className={`
                  px-2 py-0.5 rounded-full text-xs font-bold
                  ${filterStatus === filter.key ? "bg-white/20" : "bg-gray-200"}
                `}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("list")}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                ${
                  viewMode === "list"
                    ? "bg-white shadow-md text-brand-teal"
                    : "text-gray-600 hover:text-brand-teal"
                }
              `}
            >
              <IconFileText className="w-4 h-4" />
              List
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                ${
                  viewMode === "calendar"
                    ? "bg-white shadow-md text-brand-teal"
                    : "text-gray-600 hover:text-brand-teal"
                }
              `}
            >
              <IconCalendar className="w-4 h-4" />
              Calendar
            </button>
          </div>
        </div>
      </Card>

      {/* Appointments List */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <Card className="text-center py-12 animate-scale-in">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <IconCalendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                No appointments found
              </h3>
              <p className="text-gray-600 mb-6">
                {filterStatus === "all"
                  ? "You don't have any appointments yet."
                  : `No ${filterStatus} appointments to show.`}
              </p>
              <Button onClick={() => setShowBookingModal(true)}>
                <IconPlus className="w-5 h-5" />
                Book Your First Appointment
              </Button>
            </Card>
          ) : (
            filteredAppointments.map((apt, index) => (
              <Card
                key={apt.id}
                className="animate-slide-up group cursor-pointer relative overflow-hidden"
                style={staggerItems[index].style}
                hover={true}
              >
                {/* Status indicator stripe */}
                <div
                  className={`
                  absolute left-0 top-0 bottom-0 w-2
                  ${
                    apt.status === "Pending" || apt.status === "Confirmed"
                      ? "bg-green-500"
                      : apt.status === "Completed"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }
                `}
                />

                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="pl-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`
                      p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg
                      ${
                        apt.status === "Pending" || apt.status === "Confirmed"
                          ? "bg-green-100"
                          : apt.status === "Completed"
                          ? "bg-blue-100"
                          : "bg-red-100"
                      }
                    `}
                    >
                      <IconCalendar
                        className={`
                        w-8 h-8
                        ${
                          apt.status === "Pending" || apt.status === "Confirmed"
                            ? "text-green-600"
                            : apt.status === "Completed"
                            ? "text-blue-600"
                            : "text-red-600"
                        }
                      `}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-teal transition-colors">
                          {apt.type}
                        </h3>
                        <span
                          className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            apt.status === "Pending" ||
                            apt.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : apt.status === "Completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }
                        `}
                        >
                          {apt.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2 font-medium flex items-center gap-2">
                        <IconUser className="w-4 h-4 text-brand-teal" />
                        {apt.doctorName}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <IconCalendar className="w-4 h-4" />
                          {new Date(apt.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-teal rounded-full" />
                          </div>
                          {apt.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                    {(apt.status === "Pending" ||
                      apt.status === "Confirmed") && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() =>
                            showToast("Joining appointment...", "info")
                          }
                        >
                          <IconCheckCircle className="w-4 h-4" />
                          Join Call
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => showToast("Rescheduling...", "info")}
                        >
                          <IconRefreshCcw className="w-4 h-4" />
                          Reschedule
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => showToast("Cancelling...", "error")}
                        >
                          <IconX className="w-4 h-4" />
                          Cancel
                        </Button>
                      </>
                    )}
                    {apt.status === "Completed" && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => showToast("Viewing notes...", "info")}
                        >
                          <IconFileText className="w-4 h-4" />
                          View Notes
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => showToast("Rebooking...", "info")}
                        >
                          <IconRefreshCcw className="w-4 h-4" />
                          Rebook
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <CalendarView
          appointments={appointments}
          onDateClick={handleDateClick}
          onBookAppointment={() => setShowBookingModal(true)}
        />
      )}
      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onSubmit={handleBooking}
      />
    </div>
  );
};

// --- DOCUMENTS PAGE (Ultra Creative Redesign) ---

// ============================================================
// DOCUMENTS PAGE
// ============================================================
export const DocumentsPage: FC = () => {
  const { showToast } = useAppContext();
  const { documents, loading, error, refetch } = useDocuments();
  const { user } = useAuth();
  const staggerItems = useStaggerAnimation(documents.length, 100);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "reports" | "lab" | "prescriptions"
  >("all");
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <IconLoader2 className="w-8 h-8 text-brand-teal animate-spin" />
        <span className="ml-3 text-gray-600">Loading documents...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <Button onClick={() => refetch && refetch()}>Retry</Button>
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No documents found</p>
        <Button onClick={() => refetch && refetch()}>Refresh</Button>
      </div>
    );
  }

  // NEW: File validation
  const validateFile = (file: File): { valid: boolean; error?: string } => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file.size > maxSize) {
      return { valid: false, error: "File size must be less than 10MB" };
    }

    if (!allowedTypes.includes(file.type)) {
      return {
        valid: false,
        error: "Invalid file type. Please upload PDF, JPG, PNG, or DOC files",
      };
    }

    return { valid: true };
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "reports" && doc.name.includes("Report")) ||
      (selectedCategory === "lab" && doc.name.includes("Lab")) ||
      (selectedCategory === "prescriptions" &&
        doc.name.includes("Prescription"));
    return matchesSearch && matchesCategory;
  });

  const categories = [
    {
      key: "all",
      label: "All Documents",
      icon: <IconFileText />,
      count: documents.length,
    },
    {
      key: "reports",
      label: "Reports",
      icon: <IconFileText />,
      count: documents.filter((d) => d.name.includes("Report")).length,
    },
    {
      key: "lab",
      label: "Lab Results",
      icon: <IconCheckCircle />,
      count: documents.filter((d) => d.name.includes("Lab")).length,
    },
    {
      key: "prescriptions",
      label: "Prescriptions",
      icon: <IconFileText />,
      count: documents.filter((d) => d.name.includes("Prescription")).length,
    },
  ];

  // NEW: Handle file upload
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0 || !user) {
      showToast("Please select a file to upload", "error");
      return;
    }

    const file = files[0];
    const validation = validateFile(file);

    if (!validation.valid) {
      showToast(validation.error || "Invalid file", "error");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Import uploadDocument from your database-service
      const { uploadDocument } = await import("./services/database-service");

      // Upload with progress tracking
      await uploadDocument(user.uid, file, (progress) => {
        setUploadProgress(progress);
      });

      showToast("Document uploaded successfully! 🎉", "success");

      // Refresh documents list
      if (refetch) {
        refetch();
      }

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error: any) {
      console.error("Upload error:", error);
      showToast(error.message || "Failed to upload document", "error");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // NEW: Drag and drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      handleFileUpload(files);
    },
    [user]
  );

  // NEW: Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // NEW: Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-slide-in-right">
        <div>
          <h2 className="text-4xl font-bold text-brand-dark mb-2">Documents</h2>
          <p className="text-gray-600">
            Access and manage your medical documents
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleUploadClick} disabled={isUploading}>
            <IconPlus className="w-5 h-5" />
            {isUploading ? "Uploading..." : "Upload New"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => showToast("Downloading all documents...", "success")}
          >
            <IconFileText className="w-5 h-5" />
            Download All
          </Button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Upload Progress Bar */}
      {isUploading && (
        <Card className="animate-scale-in">
          <div className="flex items-center gap-4">
            <IconLoader2 className="w-6 h-6 text-brand-teal animate-spin" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-brand-dark">
                  Uploading document...
                </span>
                <span className="text-sm text-gray-600">{uploadProgress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-teal to-brand-yellow transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Storage Info */}
      <Card className="animate-scale-in bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-brand-teal/20 rounded-2xl">
              <IconFileText className="w-8 h-8 text-brand-teal" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Storage Used</p>
              <p className="text-2xl font-bold text-brand-dark">
                5.2 GB{" "}
                <span className="text-sm font-normal text-gray-500">
                  / 15 GB
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-teal to-brand-yellow rounded-full animate-shimmer"
                style={{ width: "35%", backgroundSize: "200% 100%" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">35% of storage used</p>
          </div>
        </div>
      </Card>

      {/* Search and Filters */}
      <Card className="animate-slide-up" style={{ animationDelay: "100ms" }}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-teal transition-all duration-300 focus:shadow-lg"
            />
            <IconFileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-teal transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* View Controls (require selecting a document from the list) */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              onClick={() =>
                showToast(
                  "Please select a document from the list to view.",
                  "info"
                )
              }
            >
              <IconFileText className="w-4 h-4" />
              View
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                showToast(
                  "Please select a document from the list to download.",
                  "info"
                )
              }
            >
              <IconArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Categories */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up"
        style={{ animationDelay: "200ms" }}
      >
        {categories.map((category, index) => (
          <button
            key={category.key}
            onClick={() =>
              setSelectedCategory(category.key as typeof selectedCategory)
            }
            className={`
              p-4 rounded-xl border-2 transition-all duration-300 group
              ${
                selectedCategory === category.key
                  ? "border-brand-teal bg-brand-teal/5 shadow-lg scale-105"
                  : "border-gray-200 hover:border-brand-teal hover:bg-brand-teal/5 hover:scale-105"
              }
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className={`
                p-2 rounded-lg transition-all
                ${
                  selectedCategory === category.key
                    ? "bg-brand-teal text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-brand-teal group-hover:text-white"
                }
              `}
              >
                {React.cloneElement(
                  category.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "w-5 h-5",
                  }
                )}
              </div>
              <span
                className={`
                px-2 py-1 rounded-full text-xs font-bold
                ${
                  selectedCategory === category.key
                    ? "bg-brand-teal text-white"
                    : "bg-gray-200 text-gray-600"
                }
              `}
              >
                {category.count}
              </span>
            </div>
            <p
              className={`
              text-sm font-medium transition-colors
              ${
                selectedCategory === category.key
                  ? "text-brand-teal"
                  : "text-gray-700 group-hover:text-brand-teal"
              }
            `}
            >
              {category.label}
            </p>
          </button>
        ))}
      </div>

      {/* Documents Display */}
      {filteredDocuments.length === 0 ? (
        <Card className="text-center py-12 animate-scale-in">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <IconFileText className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-brand-dark mb-2">
            No documents found
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery
              ? `No documents match "${searchQuery}"`
              : "You don't have any documents yet."}
          </p>
          {!searchQuery && (
            <Button
              onClick={() => showToast("Upload feature coming soon!", "info")}
            >
              <IconPlus className="w-5 h-5" />
              Upload Your First Document
            </Button>
          )}
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => (
            <Card
              key={doc.id}
              className="group cursor-pointer animate-scale-in relative overflow-hidden"
              style={staggerItems[index].style}
              hover={true}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-yellow/0 group-hover:from-brand-teal/10 group-hover:to-brand-yellow/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <IconFileText className="w-10 h-10 text-red-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (doc.fileUrl) {
                          window.open(doc.fileUrl, "_blank");
                        }
                        showToast(`Downloading ${doc.name}`, "success");
                      }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-brand-teal hover:text-white transition-all hover:scale-110"
                    >
                      <IconFileText className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast("Opening share options...", "info");
                      }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-brand-teal hover:text-white transition-all hover:scale-110"
                    >
                      <IconArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 bg-brand-yellow/30 text-brand-dark text-xs font-medium rounded-full mb-3">
                  {doc.type}
                </span>

                <h3 className="font-semibold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors line-clamp-2 min-h-[3rem]">
                  {doc.name}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <IconCalendar className="w-4 h-4" />
                    {new Date(doc.date).toLocaleDateString()}
                  </span>
                  <span className="font-medium">{doc.size}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      if (doc.fileUrl) {
                        window.open(doc.fileUrl, "_blank");
                      }
                      showToast(`Viewing ${doc.name}`, "info");
                    }}
                  >
                    <IconFileText className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (doc.fileUrl) {
                        const link = document.createElement("a");
                        link.href = doc.fileUrl;
                        link.download = doc.name;
                        link.click();
                      }
                      showToast(`Downloading ${doc.name}`, "success");
                    }}
                  >
                    <IconArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredDocuments.map((doc, index) => (
            <Card
              key={doc.id}
              className="group cursor-pointer animate-slide-up hover:scale-[1.01]"
              style={staggerItems[index].style}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-200 transition-all group-hover:scale-110 group-hover:-rotate-6">
                  <IconFileText className="w-6 h-6 text-red-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-brand-dark group-hover:text-brand-teal transition-colors truncate">
                      {doc.name}
                    </h3>
                    <span className="px-2 py-0.5 bg-brand-yellow/30 text-brand-dark text-xs font-medium rounded-full flex-shrink-0">
                      {doc.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <IconCalendar className="w-3 h-3" />
                      {new Date(doc.date).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      if (doc.fileUrl) {
                        window.open(doc.fileUrl, "_blank");
                      }
                      showToast(`Viewing ${doc.name}`, "info");
                    }}
                  >
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (doc.fileUrl) {
                        const link = document.createElement("a");
                        link.href = doc.fileUrl;
                        link.download = doc.name;
                        link.click();
                      }
                      showToast(`Downloading ${doc.name}`, "success");
                    }}
                  >
                    <IconArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/*  Upload Zone with Drag and Drop */}
      <Card
        className={`
    animate-scale-in border-2 border-dashed transition-all duration-300 cursor-pointer group
    ${
      isDragging
        ? "border-brand-teal bg-brand-teal/10 scale-105"
        : "border-brand-teal/30 hover:border-brand-teal hover:bg-brand-teal/5"
    }
    ${isUploading ? "opacity-50 pointer-events-none" : ""}
  `}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-center py-8" onClick={handleUploadClick}>
          <div
            className={`
      w-16 h-16 bg-brand-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center 
      transition-transform duration-300
      ${isDragging ? "scale-125" : "group-hover:scale-110"}
    `}
          >
            <IconPlus className="w-8 h-8 text-brand-teal" />
          </div>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">
            {isDragging ? "Drop your file here" : "Upload Documents"}
          </h3>
          <p className="text-gray-600 mb-4">
            {isDragging
              ? "Release to upload"
              : "Drag and drop files here or click to browse"}
          </p>
          <p className="text-xs text-gray-500">
            Supported: PDF, JPG, PNG, DOC (Max 10MB)
          </p>
        </div>
      </Card>
    </div>
  );
};

// --- CHAT PAGE (Enhanced with Animations) ---

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
      initChat(user.uid, user.displayName);
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

// --- PROFILE PAGE (Enhanced with Animations) ---

// ============================================================
// PROFILE PAGE
// ============================================================
export const ProfilePage: FC = () => {
  const { user } = useAuth();
  const { showToast } = useAppContext();

  const handleSave = () => {
    showToast("Profile updated successfully!", "success");
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-brand-dark mb-8 animate-slide-in-right">
        My Profile
      </h2>

      <Card className="animate-scale-in">
        <div className="flex items-center gap-6 mb-8 animate-slide-in-left">
          <div className="relative group">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-brand-yellow shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-brand-teal"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/100x100/F4E48E/4E747B?text=JD")
              }
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div>
            <Button
              variant="secondary"
              onClick={() => showToast("Photo upload coming soon!", "info")}
            >
              Change Photo
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <Input
              id="displayName"
              label="Full Name"
              defaultValue={user?.displayName}
              icon={<IconUser />}
            />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
            <Input
              id="email"
              label="Email Address"
              defaultValue={user?.email}
              disabled
              icon={<IconMail />}
            />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Input
              id="phone"
              label="Phone Number"
              placeholder="(012) 345-6789"
            />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "250ms" }}>
            <Input
              id="dob"
              label="Date of Birth"
              type="date"
              placeholder="YYYY-MM-DD"
              icon={<IconCalendar />}
            />
          </div>

          <div
            className="md:col-span-2 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Input
              id="address"
              label="Home Address"
              placeholder="123 Skin St, Pretoria"
              icon={<IconHome />}
            />
          </div>

          <div
            className="pt-4 flex justify-end md:col-span-2 animate-slide-up"
            style={{ animationDelay: "350ms" }}
          >
            <Button size="lg" type="submit">
              <IconCheck className="w-5 h-5 mr-2" />
              Save Changes
            </Button>
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
            <Route path="/profile" element={<ProfilePage />} />
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
