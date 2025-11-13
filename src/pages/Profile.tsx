import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCalendar,
  IconEdit,
  IconCamera,
  IconCheck,
  IconActivity,
  IconHeart,
  IconLock,
  IconX,
} from "../components/Icons";
import {
  getPatientProfile,
  updatePatientProfile,
  getPatientAppointments,
} from "../services/database-service";
import {
  updatePassword,
  updateEmail,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, auth } from "../services/firebase-config";

const Profile = () => {
  const { user, showToast, refreshUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingMedical, setIsEditingMedical] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    bloodType: "",
    height: "",
    weight: "",
    allergies: "",
    emergencyContact: "",
    photoURL: "",
  });
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [completedVisits, setCompletedVisits] = useState(0);
  const [upcomingVisits, setUpcomingVisits] = useState(0);

  // Fetch profile data from Firebase
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const profile = await getPatientProfile(user.uid);
        const appointments = await getPatientAppointments(user.uid);

        if (profile) {
          setProfileData({
            name: profile.name || user.displayName || "",
            email: profile.email || user.email || "",
            phone: profile.phone || "",
            address: profile.address || "",
            dateOfBirth: profile.dob || "",
            bloodType: (profile as any).bloodType || "",
            height: profile.vitals?.heightCm?.toString() || "",
            weight: profile.vitals?.weightKg?.toString() || "",
            allergies: Array.isArray(profile.allergies)
              ? profile.allergies.join(", ")
              : "",
            emergencyContact: (profile as any).emergencyContact || "",
            photoURL: (profile as any).photoURL || user.photoURL || "",
          });
        } else {
          // Set default values from auth user
          setProfileData((prev) => ({
            ...prev,
            name: user.displayName || "",
            email: user.email || "",
            photoURL: user.photoURL || "",
          }));
        }

        // Calculate appointment stats
        const upcoming = appointments.filter(
          (apt) => apt.status === "Pending" || apt.status === "Confirmed"
        ).length;
        const completed = appointments.filter(
          (apt) => apt.status === "Completed"
        ).length;

        setAppointmentCount(appointments.length);
        setCompletedVisits(completed);
        setUpcomingVisits(upcoming);
      } catch (error) {
        console.error("Error fetching profile:", error);
        showToast("Failed to load profile data", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user, showToast]);

  const handleSave = async () => {
    if (!user) return;

    try {
      // Transform the data to match Patient interface
      const updateData: any = {
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        address: profileData.address,
        dob: profileData.dateOfBirth,
        allergies: profileData.allergies
          ? profileData.allergies.split(",").map((a) => a.trim())
          : [],
        vitals: {
          heightCm: profileData.height
            ? parseFloat(profileData.height)
            : undefined,
          weightKg: profileData.weight
            ? parseFloat(profileData.weight)
            : undefined,
        },
        bloodType: profileData.bloodType,
        emergencyContact: profileData.emergencyContact,
        photoURL: profileData.photoURL,
      };

      // Update Firestore patient profile
      await updatePatientProfile(user.uid, updateData);

      // Update Firebase Auth displayName if name changed
      if (
        auth.currentUser &&
        profileData.name &&
        profileData.name !== user.displayName
      ) {
        await updateProfile(auth.currentUser, {
          displayName: profileData.name,
        });
      }

      setIsEditing(false);

      // Refresh user data in AuthContext to update display name
      await refreshUser();

      showToast("Profile updated successfully! ✅", "success");
    } catch (error) {
      console.error("Error saving profile:", error);
      showToast("Failed to update profile", "error");
    }
  };

  const handleSaveMedical = async () => {
    if (!user) return;

    try {
      const updateData: any = {
        bloodType: profileData.bloodType,
        allergies: profileData.allergies
          ? profileData.allergies.split(",").map((a) => a.trim())
          : [],
        vitals: {
          heightCm: profileData.height
            ? parseFloat(profileData.height)
            : undefined,
          weightKg: profileData.weight
            ? parseFloat(profileData.weight)
            : undefined,
        },
        emergencyContact: profileData.emergencyContact,
      };

      await updatePatientProfile(user.uid, updateData);
      setIsEditingMedical(false);

      // Refresh user data in AuthContext
      await refreshUser();

      showToast("Medical information updated successfully! ✅", "success");
    } catch (error) {
      console.error("Error saving medical info:", error);
      showToast("Failed to update medical information", "error");
    }
  };

  const handleProfilePictureUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files || !e.target.files[0] || !user) return;

    const file = e.target.files[0];

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showToast("Please select an image file", "error");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast("Image size must be less than 5MB", "error");
      return;
    }

    try {
      setUploading(true);

      // Create storage reference
      const storageRef = ref(
        storage,
        `profile-pictures/${user.uid}/${Date.now()}_${file.name}`
      );

      // Upload file
      await uploadBytes(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile with new photo URL
      const updateData: any = {
        photoURL: downloadURL,
      };

      await updatePatientProfile(user.uid, updateData);

      setProfileData((prev) => ({ ...prev, photoURL: downloadURL }));

      // Refresh user data in AuthContext to update avatar
      await refreshUser();

      showToast("Profile picture updated successfully! 📸", "success");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      showToast("Failed to upload profile picture", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!user || !user.email) return;

    // Validate inputs
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      showToast("Please fill in all password fields", "error");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showToast("New passwords do not match", "error");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }

    try {
      // Re-authenticate user
      const credential = EmailAuthProvider.credential(
        user.email,
        passwordData.currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, passwordData.newPassword);

      setShowPasswordModal(false);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      showToast("Password changed successfully! 🔐", "success");
    } catch (error: any) {
      console.error("Error changing password:", error);
      if (error.code === "auth/wrong-password") {
        showToast("Current password is incorrect", "error");
      } else {
        showToast("Failed to change password", "error");
      }
    }
  };

  // Calculate health score based on profile completeness and appointment attendance
  const calculateHealthScore = () => {
    let score = 0;
    const fields = [
      profileData.name,
      profileData.email,
      profileData.phone,
      profileData.address,
      profileData.dateOfBirth,
      profileData.bloodType,
      profileData.height,
      profileData.weight,
      profileData.emergencyContact,
    ];

    // Profile completeness (60%)
    const filledFields = fields.filter(
      (field) => field && field.trim() !== ""
    ).length;
    score += (filledFields / fields.length) * 60;

    // Appointment attendance rate (40%)
    if (appointmentCount > 0) {
      const attendanceRate = (completedVisits / appointmentCount) * 40;
      score += attendanceRate;
    }

    return Math.round(score);
  };

  const healthScore = calculateHealthScore();
  const healthStatus =
    healthScore >= 80
      ? "Excellent"
      : healthScore >= 60
      ? "Good"
      : healthScore >= 40
      ? "Fair"
      : "Needs Attention";

  const healthStats = [
    {
      label: "Total Appointments",
      value: appointmentCount.toString(),
      change: `${upcomingVisits} upcoming`,
      icon: IconCalendar,
      color: "from-blue-500 to-cyan-600",
    },
    {
      label: "Health Score",
      value: `${healthScore}%`,
      change: healthStatus,
      icon: IconHeart,
      color:
        healthScore >= 80
          ? "from-green-500 to-emerald-600"
          : healthScore >= 60
          ? "from-yellow-500 to-orange-500"
          : "from-red-500 to-rose-600",
    },
    {
      label: "Completed Visits",
      value: completedVisits.toString(),
      change: `${Math.round(
        (completedVisits / (appointmentCount || 1)) * 100
      )}% attendance`,
      icon: IconActivity,
      color: "from-purple-500 to-violet-600",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-down">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
          My Profile
        </h1>
        <p className="text-gray-600 text-lg">
          Manage your personal information and health records
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in-left">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal relative">
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Profile Picture */}
            <div className="px-6 pb-6">
              <div className="relative -mt-16 mb-4">
                {profileData.photoURL ? (
                  <img
                    src={profileData.photoURL}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mx-auto animate-scale-in"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-yellow to-orange-400 flex items-center justify-center text-brand-dark font-bold text-5xl border-4 border-white shadow-xl mx-auto animate-scale-in">
                    {profileData.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="absolute bottom-0 right-1/2 translate-x-16 w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-dark rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Upload profile picture"
                >
                  {uploading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <IconCamera className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {profileData.name}
                </h2>
                <p className="text-gray-600">{profileData.email}</p>
                <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold">
                  Active Patient
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                {healthStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-3 bg-gradient-to-br from-brand-light to-white rounded-xl animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                      >
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="font-bold text-gray-800">{stat.value}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-6">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isEditing ? (
                    <>
                      <IconCheck className="w-5 h-5" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <IconEdit className="w-5 h-5" />
                      Edit Profile
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <IconLock className="w-5 h-5" />
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center">
                  <IconUser className="w-5 h-5 text-white" />
                </div>
                Personal Information
              </h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-brand-teal hover:text-brand-dark transition-colors duration-300"
                >
                  <IconEdit className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium">
                    {profileData.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium flex items-center gap-2">
                    <IconMail className="w-4 h-4 text-brand-teal" />
                    {profileData.email}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium flex items-center gap-2">
                    <IconPhone className="w-4 h-4 text-brand-teal" />
                    {profileData.phone}
                  </div>
                )}
              </div>

              {/* Date of Birth */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        dateOfBirth: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium flex items-center gap-2">
                    <IconCalendar className="w-4 h-4 text-brand-teal" />
                    {new Date(profileData.dateOfBirth).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                )}
              </div>

              {/* Address */}
              <div
                className="md:col-span-2 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        address: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium flex items-center gap-2">
                    <IconMapPin className="w-4 h-4 text-brand-teal" />
                    {profileData.address}
                  </div>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 flex gap-4 animate-fade-in">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-gradient-to-r from-brand-teal to-brand-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-8 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Medical Information */}
          <div
            className="bg-white rounded-2xl shadow-xl p-6 animate-slide-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <IconHeart className="w-5 h-5 text-white" />
                </div>
                Medical Information
              </h3>
              {!isEditingMedical && (
                <button
                  onClick={() => setIsEditingMedical(true)}
                  className="text-brand-teal hover:text-brand-dark transition-colors duration-300"
                >
                  <IconEdit className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blood Type */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Blood Type
                </label>
                {isEditingMedical ? (
                  <select
                    value={profileData.bloodType}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        bloodType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                ) : (
                  <div className="px-4 py-3 bg-red-50 rounded-xl text-red-800 font-bold">
                    {profileData.bloodType || "Not specified"}
                  </div>
                )}
              </div>

              {/* Allergies */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Allergies (comma-separated)
                </label>
                {isEditingMedical ? (
                  <input
                    type="text"
                    value={profileData.allergies}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        allergies: e.target.value,
                      })
                    }
                    placeholder="e.g., Penicillin, Peanuts"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-orange-50 rounded-xl text-orange-800 font-medium">
                    {profileData.allergies || "None"}
                  </div>
                )}
              </div>

              {/* Height */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Height (cm)
                </label>
                {isEditingMedical ? (
                  <input
                    type="number"
                    value={profileData.height}
                    onChange={(e) =>
                      setProfileData({ ...profileData, height: e.target.value })
                    }
                    placeholder="e.g., 170"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium">
                    {profileData.height
                      ? `${profileData.height} cm`
                      : "Not specified"}
                  </div>
                )}
              </div>

              {/* Weight */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weight (kg)
                </label>
                {isEditingMedical ? (
                  <input
                    type="number"
                    value={profileData.weight}
                    onChange={(e) =>
                      setProfileData({ ...profileData, weight: e.target.value })
                    }
                    placeholder="e.g., 70"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium">
                    {profileData.weight
                      ? `${profileData.weight} kg`
                      : "Not specified"}
                  </div>
                )}
              </div>

              {/* Emergency Contact */}
              <div
                className="md:col-span-2 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Emergency Contact
                </label>
                {isEditingMedical ? (
                  <input
                    type="text"
                    value={profileData.emergencyContact}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        emergencyContact: e.target.value,
                      })
                    }
                    placeholder="Name and phone number"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  />
                ) : (
                  <div className="px-4 py-3 bg-brand-light rounded-xl text-gray-800 font-medium">
                    {profileData.emergencyContact || "Not specified"}
                  </div>
                )}
              </div>
            </div>

            {isEditingMedical && (
              <div className="mt-6 flex gap-4 animate-fade-in">
                <button
                  onClick={handleSaveMedical}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Save Medical Info
                </button>
                <button
                  onClick={() => setIsEditingMedical(false)}
                  className="px-8 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <IconLock className="w-5 h-5 text-white" />
                </div>
                Change Password
              </h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300"
                  placeholder="Confirm new password"
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleChangePassword}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Change Password
                </button>
                <button
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                  }}
                  className="px-8 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
