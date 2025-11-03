import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// 1. Import your auth hook and layout components
import {
  useAuth,
  Sidebar,
  Header,
  PageWrapper,
  // --- ADD THESE IMPORTS ---
  Dashboard,
  AppointmentsPage,
  DocumentsPage,
  ChatPage,
  ProfilePage,
  SettingsPage,
} from "./patientPortal";

// 2. Import your page components
import { BillingPage } from "./BillingPage";

function App() {
  // 3. Get the real user and loading state
  const { user: currentUser, isLoading } = useAuth();

  // 4. Handle the auth loading state
  if (isLoading) {
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
            <Route path="/profile" element={<ProfilePage />} />
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
