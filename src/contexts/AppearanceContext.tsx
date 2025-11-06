import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getPatientProfile } from "../services/database-service";

interface AppearanceSettings {
  theme: "light" | "dark" | "auto";
  fontSize: "small" | "medium" | "large";
}

interface AppearanceContextType {
  appearance: AppearanceSettings;
  setAppearance: (appearance: AppearanceSettings) => void;
}

const AppearanceContext = createContext<AppearanceContextType | undefined>(
  undefined
);

export const useAppearance = () => {
  const context = useContext(AppearanceContext);
  if (!context) {
    throw new Error("useAppearance must be used within AppearanceProvider");
  }
  return context;
};

export const AppearanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [appearance, setAppearanceState] = useState<AppearanceSettings>({
    theme: "light",
    fontSize: "medium",
  });

  // Load appearance settings from Firebase when user logs in
  useEffect(() => {
    const loadAppearance = async () => {
      if (!user?.uid) return;

      try {
        const profile = await getPatientProfile(user.uid);
        if (profile?.settings?.appearance) {
          setAppearanceState(profile.settings.appearance);
        }
      } catch (error) {
        console.error("Error loading appearance settings:", error);
      }
    };

    loadAppearance();
  }, [user?.uid]);

  // Apply theme changes to document
  useEffect(() => {
    const root = document.documentElement;

    // Handle theme
    let effectiveTheme = appearance.theme;
    if (appearance.theme === "auto") {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      effectiveTheme = prefersDark ? "dark" : "light";
    }

    // Apply theme class
    if (effectiveTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Apply font size
    switch (appearance.fontSize) {
      case "small":
        root.style.fontSize = "13px";
        break;
      case "medium":
        root.style.fontSize = "14px";
        break;
      case "large":
        root.style.fontSize = "15px";
        break;
    }
  }, [appearance]);

  const setAppearance = (newAppearance: AppearanceSettings) => {
    setAppearanceState(newAppearance);
  };

  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance }}>
      {children}
    </AppearanceContext.Provider>
  );
};
