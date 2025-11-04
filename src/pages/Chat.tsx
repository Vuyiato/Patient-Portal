import React from "react";

const Chat = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">Chat</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
        <h2 className="text-2xl font-semibold mb-4">
          Chat with a representative
        </h2>
        <p>Our chat is currently unavailable.</p>
        {/* Placeholder for chat interface */}
      </div>
    </div>
  );
};

export default Chat;
