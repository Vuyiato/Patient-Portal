import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import {
  Dashboard,
  ChatPage,
  ProfilePage,
  SettingsPage,
} from "./patientPortal";
import {
  Sidebar,
  Header,
  PageWrapper,
  AppointmentsPage,
  DocumentsPage,
} from "./components/Icons";

import BillingPage from "./BillingPage";
import LoginPage from "./pages/LoginPage";

const AppLayout = () => {
  const { currentUser } = useAuth();
  if (!currentUser) return null; // Should not happen if routes are correct

  return (
    <div className="flex h-screen bg-brand-light">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route
              path="billing"
              element={<BillingPage patientId={currentUser.uid} />}
            />
            <Route
              path="profile"
              element={<ProfilePage patientId={currentUser.uid} />}
            />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </PageWrapper>
      </div>
    </div>
  );
};

const ProtectedRoute: React.FC = () => {
  const { currentUser } = useAuth();
  return currentUser ? <AppLayout /> : <Navigate to="/login" replace />;
};

const PublicRoute: React.FC = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading user data...</div>;
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
