import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in-up">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-4xl">
            {user?.email ? user.email.charAt(0).toUpperCase() : "G"}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {user?.displayName || "Patient Name"}
            </h2>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
