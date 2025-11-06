import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import BillingPage from "./BillingPage";
import LoginPage from "./pages/LoginPage";
import SidebarLayout from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import AppointmentsPage from "./pages/Appointments";
import DocumentsPage from "./pages/Documents";
import ChatPage from "./pages/Chat";
import LoadingScreen from "./components/LoadingScreen";

const AppLayout = () => {
  const { user } = useAuth();
  if (!user) return null; // Should not happen if routes are correct

  return (
    <SidebarLayout>
      <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="billing" element={<BillingPage patientId={user.uid} />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </SidebarLayout>
  );
};

const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();
  return user ? <AppLayout /> : <Navigate to="/login" replace />;
};

const PublicRoute: React.FC = () => {
  const { user } = useAuth();
  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  const { loading } = useAuth();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  // Show loading screen on first mount
  useEffect(() => {
    // This ensures the loading screen shows once per session
    const hasShownLoading = sessionStorage.getItem("hasShownLoading");
    if (hasShownLoading) {
      setShowLoadingScreen(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    sessionStorage.setItem("hasShownLoading", "true");
  };

  // Show custom loading screen on initial load
  if (showLoadingScreen) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Show auth loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-xl font-semibold animate-pulse">
          Loading Patient Portal...
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/*" element={<ProtectedRoute />} />
    </Routes>
  );
}

export default App;
