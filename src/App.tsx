import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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

// 2. Import your page components
import BillingPage from "./BillingPage";

function App() {
  // 3. Get the real user and loading state
  const { currentUser, loading } = useAuth();

  // 4. Handle the auth loading state
  if (loading) {
    return <div>Loading user data...</div>;
  }

  // 5. Handle the logged-out state
  if (!currentUser) {
    return <div>Please log in. (Login page not routed yet)</div>;
  }

  // 6. User is logged in. Render the app layout.
  return (
    <div className="flex h-screen bg-brand-light">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <PageWrapper>
          <Routes>
            {/* --- ADD ALL YOUR ROUTES --- */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route
              path="/billing"
              element={<BillingPage patientId={currentUser.uid} />}
            />
            <Route
              path="/profile"
              element={<ProfilePage patientId={currentUser.uid} />}
            />
            <Route path="/settings" element={<SettingsPage />} />

            {/* Default route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </PageWrapper>
      </div>
    </div>
  );
}

export default App;
