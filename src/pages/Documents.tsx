import React from "react";

const Documents = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">
        Documents
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
        <h2 className="text-2xl font-semibold mb-4">Your Documents</h2>
        <p>You have no documents.</p>
        {/* Placeholder for documents list */}
      </div>
    </div>
  );
};

export default Documents;
