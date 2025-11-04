import React from "react";

const Appointments = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">
        Appointments
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
        <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
        <p>You have no upcoming appointments.</p>
        {/* Placeholder for appointments list */}
      </div>
    </div>
  );
};

export default Appointments;
