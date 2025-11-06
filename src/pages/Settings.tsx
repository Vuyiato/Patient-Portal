import React, { useState, useEffect } from "react";
import {
  IconBell,
  IconLock,
  IconShield,
  IconMoon,
  IconGlobe,
  IconMail,
  IconPhone,
  IconEye,
  IconDownload,
  IconTrash,
  IconLogOut,
} from "../components/Icons";
import { useAuth } from "../contexts/AuthContext";
import {
  getPatientProfile,
  updatePatientProfile,
} from "../services/database-service";

interface ToggleSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const Settings = () => {
  const { user, showToast, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<ToggleSetting[]>([
    {
      id: "email_notifications",
      label: "Email Notifications",
      description:
        "Receive email updates about appointments and health reminders",
      enabled: true,
    },
    {
      id: "sms_notifications",
      label: "SMS Notifications",
      description: "Get text messages for appointment reminders",
      enabled: false,
    },
    {
      id: "push_notifications",
      label: "Push Notifications",
      description: "Receive push notifications on your devices",
      enabled: true,
    },
    {
      id: "marketing_emails",
      label: "Marketing Emails",
      description: "Receive newsletters and promotional content",
      enabled: false,
    },
  ]);

  const [privacy, setPrivacy] = useState<ToggleSetting[]>([
    {
      id: "profile_visibility",
      label: "Profile Visibility",
      description: "Make your profile visible to healthcare providers",
      enabled: true,
    },
    {
      id: "share_data",
      label: "Share Anonymous Data",
      description: "Help improve our services with anonymous usage data",
      enabled: false,
    },
    {
      id: "two_factor",
      label: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      enabled: true,
    },
  ]);

  const [appearance, setAppearance] = useState({
    theme: "light",
    language: "English",
    fontSize: "medium",
  });

  // Load settings from Firebase
  useEffect(() => {
    const loadSettings = async () => {
      if (!user?.uid) return;

      try {
        const profile = await getPatientProfile(user.uid);

        // Load notification preferences if they exist
        if (profile?.settings?.notifications) {
          setNotifications(profile.settings.notifications);
        }

        // Load privacy preferences if they exist
        if (profile?.settings?.privacy) {
          setPrivacy(profile.settings.privacy);
        }

        // Load appearance preferences if they exist
        if (profile?.settings?.appearance) {
          setAppearance(profile.settings.appearance);
        }
      } catch (error) {
        console.error("Error loading settings:", error);
      }
    };

    loadSettings();
  }, [user]);

  // Save settings to Firebase
  const saveSettings = async () => {
    if (!user?.uid) return;

    try {
      setLoading(true);
      await updatePatientProfile(user.uid, {
        settings: {
          notifications,
          privacy,
          appearance,
        },
      });
      showToast("Settings saved successfully!", "success");
      setLoading(false);
    } catch (error) {
      console.error("Error saving settings:", error);
      showToast("Failed to save settings", "error");
      setLoading(false);
    }
  };

  const toggleNotification = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    );
    // Auto-save after a short delay
    setTimeout(saveSettings, 500);
  };

  const togglePrivacy = (id: string) => {
    setPrivacy(
      privacy.map((priv) =>
        priv.id === id ? { ...priv, enabled: !priv.enabled } : priv
      )
    );
    // Auto-save after a short delay
    setTimeout(saveSettings, 500);
  };

  const ToggleSwitch: React.FC<{ enabled: boolean; onToggle: () => void }> = ({
    enabled,
    onToggle,
  }) => (
    <button
      onClick={onToggle}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
        enabled
          ? "bg-gradient-to-r from-brand-teal to-brand-dark"
          : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
          enabled ? "transform translate-x-7" : ""
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-down">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
          Settings
        </h1>
        <p className="text-gray-600 text-lg">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 animate-slide-in-left">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Quick Navigation
            </h3>
            <nav className="space-y-2">
              {[
                {
                  icon: IconBell,
                  label: "Notifications",
                  href: "#notifications",
                },
                {
                  icon: IconShield,
                  label: "Privacy & Security",
                  href: "#privacy",
                },
                { icon: IconMoon, label: "Appearance", href: "#appearance" },
                {
                  icon: IconGlobe,
                  label: "Language & Region",
                  href: "#language",
                },
                { icon: IconLock, label: "Account", href: "#account" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-light transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-brand-teal transition-colors duration-300">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notifications Section */}
          <div
            id="notifications"
            className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-right"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <IconBell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Notifications
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage how you receive notifications
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.map((notif, index) => (
                <div
                  key={notif.id}
                  className="flex items-center justify-between p-4 bg-brand-light rounded-xl hover:bg-brand-light/70 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {notif.label}
                    </h4>
                    <p className="text-sm text-gray-600">{notif.description}</p>
                  </div>
                  <ToggleSwitch
                    enabled={notif.enabled}
                    onToggle={() => toggleNotification(notif.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Security Section */}
          <div
            id="privacy"
            className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <IconShield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Privacy & Security
                </h3>
                <p className="text-gray-600 text-sm">
                  Control your privacy and security settings
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {privacy.map((priv, index) => (
                <div
                  key={priv.id}
                  className="flex items-center justify-between p-4 bg-brand-light rounded-xl hover:bg-brand-light/70 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {priv.label}
                    </h4>
                    <p className="text-sm text-gray-600">{priv.description}</p>
                  </div>
                  <ToggleSwitch
                    enabled={priv.enabled}
                    onToggle={() => togglePrivacy(priv.id)}
                  />
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <IconLock className="w-5 h-5" />
                Change Password
              </button>
            </div>
          </div>

          {/* Appearance Section */}
          <div
            id="appearance"
            className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <IconMoon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Appearance</h3>
                <p className="text-gray-600 text-sm">
                  Customize how the app looks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["light", "dark", "auto"].map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setAppearance({ ...appearance, theme })}
                      className={`p-3 rounded-xl border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                        appearance.theme === theme
                          ? "border-brand-teal bg-brand-light text-brand-teal"
                          : "border-gray-200 bg-white text-gray-700 hover:border-brand-teal"
                      }`}
                    >
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Font Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["small", "medium", "large"].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setAppearance({ ...appearance, fontSize: size })
                      }
                      className={`p-3 rounded-xl border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                        appearance.fontSize === size
                          ? "border-brand-teal bg-brand-light text-brand-teal"
                          : "border-gray-200 bg-white text-gray-700 hover:border-brand-teal"
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div
            id="account"
            className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-right"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                <IconLock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Account Actions
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage your account data
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-3">
                  <IconDownload className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">
                      Download Your Data
                    </h4>
                    <p className="text-sm text-gray-600">
                      Export all your health records and data
                    </p>
                  </div>
                </div>
                <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </button>

              <button
                className="w-full flex items-center justify-between p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-3">
                  <IconEye className="w-5 h-5 text-yellow-600" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">
                      Privacy Policy
                    </h4>
                    <p className="text-sm text-gray-600">
                      Review how we protect your data
                    </p>
                  </div>
                </div>
                <div className="text-yellow-600 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </button>

              <button
                className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="flex items-center gap-3">
                  <IconTrash className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">
                      Delete Account
                    </h4>
                    <p className="text-sm text-gray-600">
                      Permanently delete your account and data
                    </p>
                  </div>
                </div>
                <div className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-brand-teal to-brand-dark text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <IconLogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
