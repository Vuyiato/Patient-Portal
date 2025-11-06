import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  IconCalendar,
  IconClock,
  IconUser,
  IconMapPin,
  IconPlus,
  IconFilter,
  IconSearch,
  IconCheck,
  IconX,
} from "../components/Icons";
import {
  getPatientAppointments,
  updateAppointment,
  cancelAppointment,
  Appointment as FirebaseAppointment,
} from "../services/database-service";

interface Appointment {
  id: number | string;
  title: string;
  doctor: string;
  date: string;
  time: string;
  location: string;
  type: string;
  status: "upcoming" | "completed" | "cancelled";
}

const Appointments = () => {
  const { user, showToast } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch appointments from Firebase
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const data = await getPatientAppointments(user.uid);

        // Transform Firebase data to match our interface
        const transformedData: Appointment[] = data.map((apt) => {
          let status: "upcoming" | "completed" | "cancelled" = "upcoming";

          if (apt.status === "Completed") status = "completed";
          else if (apt.status === "Cancelled") status = "cancelled";
          else status = "upcoming";

          return {
            id: apt.id || "",
            title: apt.type,
            doctor: apt.doctorName || "Dr. Jabu Nkehli",
            date: apt.date,
            time: apt.time,
            location: "Dermaglare Clinic - Main Branch",
            type: apt.type,
            status: status,
          };
        });

        setAppointments(transformedData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        showToast("Failed to load appointments", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user, showToast]);

  const handleCancelAppointment = async (appointmentId: string | number) => {
    try {
      await cancelAppointment(String(appointmentId));

      // Update local state
      setAppointments(
        appointments.map((apt) =>
          apt.id === appointmentId
            ? { ...apt, status: "cancelled" as const }
            : apt
        )
      );

      showToast("Appointment cancelled successfully", "success");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      showToast("Failed to cancel appointment", "error");
    }
  };

  const filteredAppointments =
    selectedFilter === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "from-green-500 to-emerald-600";
      case "completed":
        return "from-blue-500 to-cyan-600";
      case "cancelled":
        return "from-red-500 to-rose-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "upcoming":
        return <IconClock className="w-5 h-5" />;
      case "completed":
        return <IconCheck className="w-5 h-5" />;
      case "cancelled":
        return <IconX className="w-5 h-5" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8">
      {/* Header with animated gradient */}
      <div className="mb-8 animate-fade-in-down">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
              Appointments
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your healthcare appointments
            </p>
          </div>
          <button
            onClick={() => setShowBookingModal(true)}
            className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-scale-in"
          >
            <IconPlus className="w-5 h-5" />
            Book Appointment
          </button>
        </div>

        {/* Filters */}
        <div
          className="flex gap-4 items-center animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex gap-2">
            {["all", "upcoming", "completed", "cancelled"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <IconFilter className="w-5 h-5 text-brand-teal" />
            </button>
            <button className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <IconSearch className="w-5 h-5 text-brand-teal" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Upcoming",
            count: 2,
            color: "from-green-500 to-emerald-600",
            delay: "0.2s",
          },
          {
            label: "Completed",
            count: 2,
            color: "from-blue-500 to-cyan-600",
            delay: "0.3s",
          },
          {
            label: "This Month",
            count: 4,
            color: "from-purple-500 to-violet-600",
            delay: "0.4s",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: stat.delay }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 animate-pulse-glow`}
            >
              <IconCalendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {stat.count}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAppointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-slide-in-up"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            {/* Status Banner */}
            <div
              className={`h-2 bg-gradient-to-r ${getStatusColor(
                appointment.status
              )} animate-shimmer`}
            />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-brand-teal transition-colors duration-300">
                    {appointment.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-teal">
                    {appointment.type}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${getStatusColor(
                    appointment.status
                  )} text-white text-sm font-semibold`}
                >
                  {getStatusIcon(appointment.status)}
                  {appointment.status}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center">
                    <IconUser className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Doctor</p>
                    <p className="font-semibold">{appointment.doctor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-yellow to-orange-400 flex items-center justify-center">
                    <IconCalendar className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-semibold">
                      {new Date(appointment.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      at {appointment.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <IconMapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{appointment.location}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                {appointment.status === "upcoming" && (
                  <>
                    <button className="flex-1 bg-gradient-to-r from-brand-teal to-brand-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="px-6 bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transform hover:scale-105 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </>
                )}
                {appointment.status === "completed" && (
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 && (
        <div className="text-center py-16 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-teal to-brand-dark rounded-full flex items-center justify-center animate-float">
            <IconCalendar className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No appointments found
          </h3>
          <p className="text-gray-600 mb-6">
            {selectedFilter === "all"
              ? "You don't have any appointments scheduled yet."
              : `No ${selectedFilter} appointments.`}
          </p>
          <button
            onClick={() => setShowBookingModal(true)}
            className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Book Your First Appointment
          </button>
        </div>
      )}

      {/* Booking Modal (simplified for now) */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Book Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Booking functionality coming soon! Please call our clinic to
              schedule.
            </p>
            <button
              onClick={() => setShowBookingModal(false)}
              className="w-full bg-gradient-to-r from-brand-teal to-brand-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
