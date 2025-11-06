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
  IconChevronLeft,
  IconChevronRight,
} from "../components/Icons";
import {
  getPatientAppointments,
  updateAppointment,
  cancelAppointment,
  bookAppointment,
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
  const [bookingLoading, setBookingLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: "",
    type: "",
    notes: "",
    doctorName: "Dr. Jabu Nkehli",
  });

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

  const handleBookAppointment = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== Booking Appointment ===");
    console.log("User:", user);
    console.log("Form data:", bookingForm);

    if (!user) {
      showToast("Please login to book an appointment", "error");
      return;
    }

    // Validate form
    if (!bookingForm.date || !bookingForm.time || !bookingForm.type) {
      console.log("Validation failed - missing fields");
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      setBookingLoading(true);

      // Create appointment data
      const appointmentData = {
        patientId: user.uid,
        patientName: user.displayName || user.email || "Patient",
        patientEmail: user.email || "",
        date: bookingForm.date,
        time: bookingForm.time,
        type: bookingForm.type,
        status: "Pending" as const,
        doctorName: bookingForm.doctorName,
        notes: bookingForm.notes,
      };

      console.log("Appointment data to save:", appointmentData);

      // Book appointment in Firebase
      const appointmentId = await bookAppointment(appointmentData);
      console.log("Appointment booked with ID:", appointmentId);

      // Refresh appointments list
      const data = await getPatientAppointments(user.uid);
      console.log("Fetched appointments:", data);

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

      console.log("Transformed appointments:", transformedData);
      setAppointments(transformedData);

      // Reset form and close modal
      setBookingForm({
        date: "",
        time: "",
        type: "",
        notes: "",
        doctorName: "Dr. Jabu Nkehli",
      });
      setShowBookingModal(false);
      setBookingLoading(false);

      showToast("Appointment booked successfully! 🎉", "success");
    } catch (error) {
      console.error("Error booking appointment:", error);
      showToast(`Failed to book appointment: ${error}`, "error");
      setBookingLoading(false);
    }
  };

  const filteredAppointments =
    selectedFilter === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === selectedFilter);

  // Calculate real stats from data
  const upcomingCount = appointments.filter(
    (apt) => apt.status === "upcoming"
  ).length;
  const completedCount = appointments.filter(
    (apt) => apt.status === "completed"
  ).length;

  // Calculate this month's appointments
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const thisMonthCount = appointments.filter((apt) => {
    const aptDate = new Date(apt.date);
    return (
      aptDate.getMonth() === currentMonth &&
      aptDate.getFullYear() === currentYear
    );
  }).length;

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter((apt) => {
      const aptDate = new Date(apt.date);
      return (
        aptDate.getDate() === date.getDate() &&
        aptDate.getMonth() === date.getMonth() &&
        aptDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSameDate = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

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
            count: upcomingCount,
            color: "from-green-500 to-emerald-600",
            delay: "0.2s",
          },
          {
            label: "Completed",
            count: completedCount,
            color: "from-blue-500 to-cyan-600",
            delay: "0.3s",
          },
          {
            label: "This Month",
            count: thisMonthCount,
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

      {/* View Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-md">
          <button
            onClick={() => setViewMode("list")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              viewMode === "list"
                ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                : "text-gray-600 hover:text-brand-teal"
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              viewMode === "calendar"
                ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                : "text-gray-600 hover:text-brand-teal"
            }`}
          >
            Calendar View
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 animate-fade-in">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-brand-light rounded-lg transition-colors"
              >
                <IconChevronLeft className="w-6 h-6 text-brand-teal" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-brand-light rounded-lg transition-colors"
              >
                <IconChevronRight className="w-6 h-6 text-brand-teal" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-bold text-gray-600 py-2"
              >
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {(() => {
              const { daysInMonth, startingDayOfWeek, year, month } =
                getDaysInMonth(currentDate);
              const days = [];

              // Empty cells for days before month starts
              for (let i = 0; i < startingDayOfWeek; i++) {
                days.push(
                  <div key={`empty-${i}`} className="aspect-square"></div>
                );
              }

              // Days of the month
              for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                const dayAppointments = getAppointmentsForDate(date);
                const isCurrentDay = isToday(date);
                const isSelected = isSameDate(selectedDate, date);

                days.push(
                  <div
                    key={day}
                    onClick={() => setSelectedDate(date)}
                    className={`aspect-square p-2 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      isCurrentDay
                        ? "border-brand-yellow bg-brand-yellow/10 ring-2 ring-brand-yellow ring-offset-2"
                        : isSelected
                        ? "border-brand-teal bg-brand-teal/10"
                        : "border-gray-200 hover:border-brand-teal/50"
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <span
                        className={`text-sm font-semibold ${
                          isCurrentDay ? "text-brand-teal" : "text-gray-700"
                        }`}
                      >
                        {day}
                      </span>
                      {dayAppointments.length > 0 && (
                        <div className="flex-1 flex flex-col gap-1 mt-1">
                          {dayAppointments.slice(0, 2).map((apt, idx) => (
                            <div
                              key={idx}
                              className={`text-xs px-1 py-0.5 rounded truncate ${
                                apt.status === "upcoming"
                                  ? "bg-green-100 text-green-700"
                                  : apt.status === "completed"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                              title={`${apt.time} - ${apt.title}`}
                            >
                              {apt.time}
                            </div>
                          ))}
                          {dayAppointments.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{dayAppointments.length - 2} more
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return days;
            })()}
          </div>

          {/* Selected Date Appointments */}
          {selectedDate && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Appointments on{" "}
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h4>
              {getAppointmentsForDate(selectedDate).length > 0 ? (
                <div className="space-y-3">
                  {getAppointmentsForDate(selectedDate).map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 bg-brand-light rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            apt.status === "upcoming"
                              ? "bg-green-500"
                              : apt.status === "completed"
                              ? "bg-blue-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {apt.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {apt.time} • {apt.doctor}
                          </p>
                        </div>
                      </div>
                      {apt.status === "upcoming" && (
                        <button
                          onClick={() => handleCancelAppointment(apt.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-semibold hover:underline transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No appointments on this date
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Appointments Grid */}
      {viewMode === "list" && (
        <>
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
                          {new Date(appointment.date).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}{" "}
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
                          onClick={() =>
                            handleCancelAppointment(appointment.id)
                          }
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
        </>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-brand-teal to-brand-dark p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Book New Appointment
                  </h2>
                  <p className="text-brand-yellow">
                    Schedule your visit with us
                  </p>
                </div>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-white hover:text-brand-yellow transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <IconX className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleBookAppointment} className="p-6 space-y-6">
              {/* Appointment Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Appointment Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={bookingForm.type}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, type: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-teal focus:outline-none transition-colors text-gray-700"
                  required
                >
                  <option value="">Select appointment type</option>
                  <option value="Standard Consultation">
                    Standard Consultation - R1,300
                  </option>
                  <option value="Medical Dermatology">
                    Medical Dermatology - R1,500
                  </option>
                  <option value="Cosmetic Dermatology">
                    Cosmetic Dermatology - R1,600
                  </option>
                  <option value="Laser Treatment">
                    Laser Treatment - R3,500
                  </option>
                  <option value="Chemical Peel">Chemical Peel - R1,800</option>
                  <option value="Microneedling">Microneedling - R1,900</option>
                  <option value="Botox Injections">
                    Botox Injections - R4,500
                  </option>
                  <option value="Platelet-Rich Plasma (PRP)">
                    PRP Therapy - R3,200
                  </option>
                  <option value="Skin Tightening">
                    Skin Tightening - R2,200
                  </option>
                  <option value="Mole Removal">Mole Removal - R1,800</option>
                  <option value="Skin Cancer Screening">
                    Skin Cancer Screening - R1,750
                  </option>
                  <option value="Acne Treatment">
                    Acne Treatment - R1,650
                  </option>
                  <option value="Paediatric Dermatology">
                    Paediatric Dermatology - R1,450
                  </option>
                </select>
              </div>

              {/* Doctor Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Doctor <span className="text-red-500">*</span>
                </label>
                <select
                  value={bookingForm.doctorName}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      doctorName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-teal focus:outline-none transition-colors text-gray-700"
                  required
                >
                  <option value="Dr. Jabu Nkehli">
                    Dr. Jabu Nkehli - Dermatologist
                  </option>
                  <option value="Dr. Sarah Johnson">
                    Dr. Sarah Johnson - Specialist
                  </option>
                  <option value="Dr. Michael Chen">
                    Dr. Michael Chen - Cosmetic Dermatology
                  </option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IconCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-teal focus:outline-none transition-colors text-gray-700"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IconClock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={bookingForm.time}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, time: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-teal focus:outline-none transition-colors text-gray-700"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="08:00 AM">08:00 AM</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={bookingForm.notes}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, notes: e.target.value })
                  }
                  rows={4}
                  placeholder="Please provide any additional information about your condition or concerns..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-teal focus:outline-none transition-colors resize-none text-gray-700"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <IconCalendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Important Information:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        Appointments are subject to availability and
                        confirmation
                      </li>
                      <li>
                        You will receive a confirmation email within 24 hours
                      </li>
                      <li>Please arrive 10 minutes before your appointment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  disabled={bookingLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="flex-1 bg-gradient-to-r from-brand-teal to-brand-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {bookingLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <IconCheck className="w-5 h-5" />
                      <span>Confirm Booking</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
