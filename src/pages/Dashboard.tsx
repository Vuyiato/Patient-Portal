import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for dashboard widgets */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
          <p>No upcoming appointments.</p>
        </div>
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Recent Documents</h2>
          <p>No recent documents.</p>
        </div>
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Messages</h2>
          <p>No new messages.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
