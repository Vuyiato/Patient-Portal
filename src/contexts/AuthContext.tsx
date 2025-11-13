import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { User } from "firebase/auth";
import {
  onAuthChange,
  loginWithEmail,
  signupWithEmail,
  logout as firebaseLogout,
} from "../services/auth-service";
import { getPatientProfile } from "../services/database-service";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface AuthContextType {
  user: (User & { displayName: string; photoURL: string }) | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<
    (User & { displayName: string; photoURL: string }) | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const patientData = await getPatientProfile(firebaseUser.uid);
          setUser({
            ...firebaseUser,
            displayName:
              patientData?.name || firebaseUser.displayName || "Patient",
            photoURL:
              patientData?.photoURL ||
              firebaseUser.photoURL ||
              `https://ui-avatars.com/api/?name=${
                patientData?.name || "P"
              }&background=F4E48E&color=3A565B`,
          });
        } catch (error) {
          console.error("Failed to fetch patient profile", error);
          setUser({
            ...firebaseUser,
            displayName: firebaseUser.displayName || "Patient",
            photoURL:
              firebaseUser.photoURL ||
              `https://ui-avatars.com/api/?name=${
                firebaseUser.displayName || "P"
              }&background=F4E48E&color=3A565B`,
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Auto-logout when browser/tab is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user) {
        // Sign out when closing browser/tab
        firebaseLogout();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  const login = async (email: string, password: string) => {
    await loginWithEmail(email, password);
  };

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    await signupWithEmail(email, password, displayName);
  };

  const logout = async () => {
    await firebaseLogout();
  };

  const refreshUser = async () => {
    if (!user) return;

    try {
      const patientData = await getPatientProfile(user.uid);
      if (patientData) {
        setUser({
          ...user,
          displayName: patientData.name || user.displayName || "Patient",
          photoURL:
            patientData.photoURL ||
            user.photoURL ||
            `https://ui-avatars.com/api/?name=${
              patientData.name || "P"
            }&background=F4E48E&color=3A565B`,
        });
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    }
  };

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "info") => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
      setTimeout(() => removeToast(id), 5000);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    refreshUser,
    showToast,
    toasts,
    removeToast,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
