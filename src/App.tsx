import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import BillingPage from "./pages/Billing";
import LoginPage from "./pages/LoginPage";
import SidebarLayout from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import AppointmentsPage from "./pages/Appointments";
import DocumentsPage from "./pages/Documents";
import ChatPage from "./pages/Chat";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";

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
        <Route path="billing" element={<BillingPage />} />
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
  const [showLoadingScreen, setShowLoadingScreen] = useState(() => {
    // Check sessionStorage safely with try-catch
    try {
      const hasShown = sessionStorage.getItem("hasShownLoading");
      return !hasShown; // Show if hasn't been shown yet
    } catch (error) {
      console.error("SessionStorage error:", error);
      return false; // Skip loading screen if error
    }
  });

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    try {
      sessionStorage.setItem("hasShownLoading", "true");
    } catch (error) {
      console.error("SessionStorage error:", error);
    }
  };

  // Show custom loading screen on initial load
  if (showLoadingScreen && !loading) {
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
    <ErrorBoundary>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/*" element={<ProtectedRoute />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
