import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  IconCalendar,
  IconFileText,
  IconMessageSquare,
  IconCheckCircle,
  IconClock,
  IconArrowRight,
  IconTrendingUp,
  IconActivity,
} from "../components/Icons";
import {
  getPatientAppointments,
  getPatientDocuments,
  Appointment,
  Document,
} from "../services/database-service";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  trend?: string;
  color: string;
  delay: number;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  trend,
  color,
  delay,
  onClick,
}) => {
  const [count, setCount] = useState(0);
  const targetValue = typeof value === "number" ? value : 0;

  useEffect(() => {
    if (typeof value === "number") {
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [targetValue]);

  return (
    <div
      className="group animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-brand-yellow/50">
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            >
              <div className="text-white">{icon}</div>
            </div>
            {trend && (
              <div className="flex items-center space-x-1 text-green-600 text-sm font-semibold">
                <IconTrendingUp className="w-4 h-4" />
                <span>{trend}</span>
              </div>
            )}
          </div>

          <h3 className="text-4xl font-bold text-brand-dark mb-2 group-hover:scale-105 transition-transform duration-300">
            {typeof value === "number" ? count : value}
          </h3>
          <p className="text-gray-600 font-medium">{label}</p>
        </div>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [timeOfDay, setTimeOfDay] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<
    Array<{
      id: string;
      action: string;
      detail: string;
      time: string;
      icon: React.ReactNode;
      color: string;
      onClick: () => void;
    }>
  >([]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good Morning");
    else if (hour < 18) setTimeOfDay("Good Afternoon");
    else setTimeOfDay("Good Evening");
  }, []);

  // Fetch real data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        // Fetch appointments
        const appointmentsData = await getPatientAppointments(user.uid);
        setAppointments(appointmentsData);

        // Fetch documents
        const documentsData = await getPatientDocuments(user.uid);
        setDocuments(documentsData);
        setDocumentCount(documentsData.length);

        // Build recent activity from real data
        const activities: Array<{
          id: string;
          action: string;
          detail: string;
          time: string;
          icon: React.ReactNode;
          color: string;
          onClick: () => void;
          timestamp: Date;
        }> = [];

        // Add recent documents
        documentsData.slice(0, 2).forEach((doc) => {
          const uploadDate = doc.uploadedAt
            ? new Date(doc.uploadedAt)
            : new Date();
          activities.push({
            id: doc.id || "",
            action: "New document uploaded",
            detail: doc.name,
            time: getTimeAgo(uploadDate),
            icon: <IconFileText className="w-5 h-5" />,
            color: "bg-brand-yellow",
            onClick: () => navigate("/documents"),
            timestamp: uploadDate,
          });
        });

        // Add recent appointments
        appointmentsData
          .filter((apt) => apt.status === "Confirmed")
          .slice(0, 2)
          .forEach((apt) => {
            const aptDate = apt.createdAt
              ? new Date(apt.createdAt)
              : new Date();
            activities.push({
              id: apt.id || "",
              action: "Appointment confirmed",
              detail: `${apt.type} - ${new Date(
                apt.date
              ).toLocaleDateString()}`,
              time: getTimeAgo(aptDate),
              icon: <IconCheckCircle className="w-5 h-5" />,
              color: "bg-green-500",
              onClick: () => navigate("/appointments"),
              timestamp: aptDate,
            });
          });

        // Sort by most recent and take top 3
        activities.sort(
          (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
        );
        setRecentActivity(activities.slice(0, 3));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  // Helper function to calculate time ago
  const getTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    const months = Math.floor(days / 30);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  };

  // Calculate stats from real data
  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === "Pending" || apt.status === "Confirmed"
  );
  const completedVisits = appointments.filter(
    (apt) => apt.status === "Completed"
  ).length;

  const stats = [
    {
      icon: <IconCalendar className="w-8 h-8" />,
      label: "Upcoming Appointments",
      value: upcomingAppointments.length,
      trend:
        upcomingAppointments.length > 0
          ? `+${upcomingAppointments.length}`
          : undefined,
      color: "from-brand-teal to-brand-dark",
      onClick: () => navigate("/appointments"),
    },
    {
      icon: <IconFileText className="w-8 h-8" />,
      label: "Documents",
      value: documentCount,
      color: "from-brand-yellow to-orange-400",
      onClick: () => navigate("/documents"),
    },
    {
      icon: <IconMessageSquare className="w-8 h-8" />,
      label: "Unread Messages",
      value: 0, // TODO: Implement message count
      color: "from-purple-500 to-brand-teal",
      onClick: () => navigate("/chat"),
    },
    {
      icon: <IconCheckCircle className="w-8 h-8" />,
      label: "Completed Visits",
      value: completedVisits,
      color: "from-green-500 to-brand-teal",
      onClick: () => navigate("/appointments"),
    },
  ];

  // Format appointments for display (show next 3)
  const displayAppointments = upcomingAppointments.slice(0, 3).map((apt) => {
    const aptDate = new Date(apt.date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dateDisplay = "";
    if (aptDate.toDateString() === today.toDateString()) {
      dateDisplay = "Today";
    } else if (aptDate.toDateString() === tomorrow.toDateString()) {
      dateDisplay = "Tomorrow";
    } else {
      dateDisplay = aptDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }

    return {
      id: apt.id || "",
      title: apt.type,
      doctor: apt.doctorName || "Dr. Jabu Nkehli",
      date: dateDisplay,
      time: apt.time,
      type: "In-Person",
      color: "from-brand-teal to-brand-dark",
    };
  });

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-brand-dark to-brand-teal p-8 md:p-12 shadow-2xl animate-fade-in-down">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/30 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Dermaglare Logo - Bigger and More Visible */}
            <div className="flex items-center gap-6">
              <div className="bg-white/95 p-4 rounded-2xl shadow-2xl backdrop-blur-sm">
                <img
                  src="https://dermaglareskin.co.za/wp-content/uploads/2023/07/Dermaglare-Skin.png"
                  alt="Dermaglare Logo"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<span class="text-4xl font-bold text-brand-teal px-4">DERMAGLARE</span>';
                    }
                  }}
                />
              </div>
              <div className="border-l-2 border-brand-yellow/50 pl-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-slide-in-left flex items-center gap-3">
                  {timeOfDay},{" "}
                  {user?.displayName || user?.email?.split("@")[0] || "there"}!
                  <span className="text-brand-yellow">✦</span>
                </h1>
                <p
                  className="text-brand-yellow text-lg animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  Your skin health journey continues.{" "}
                  {upcomingAppointments.length > 0
                    ? `You have ${upcomingAppointments.length} upcoming ${
                        upcomingAppointments.length === 1
                          ? "appointment"
                          : "appointments"
                      }.`
                    : "Book your next appointment today."}
                </p>
              </div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                onClick={() => navigate("/appointments")}
                className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <IconCalendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 100} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-teal to-brand-dark bg-clip-text text-transparent animate-slide-in-right">
              Upcoming Appointments
            </h2>
            <Button
              onClick={() => navigate("/appointments")}
              variant="ghost"
              className="text-brand-teal hover:text-brand-dark"
            >
              View All <IconArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            {displayAppointments.length > 0 ? (
              displayAppointments.map((appointment, index) => (
                <div
                  key={appointment.id}
                  className="group animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-brand-yellow/30">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${appointment.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconCalendar className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors duration-300">
                              {appointment.title}
                            </h3>
                            <p className="text-gray-600">
                              {appointment.doctor}
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal">
                            {appointment.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <IconCalendar className="w-4 h-4 mr-2" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center">
                            <IconClock className="w-4 h-4 mr-2" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => navigate("/appointments")}
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-teal to-brand-dark text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                No upcoming appointments
              </p>
            )}
          </div>
        </div>

        {/* Recent Activity Sidebar */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-teal to-brand-dark bg-clip-text text-transparent mb-6 animate-slide-in-left">
            Recent Activity
          </h2>

          <Card className="bg-gradient-to-br from-white to-brand-light/50 backdrop-blur-sm animate-scale-in">
            <div className="space-y-4">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <div
                    key={activity.id}
                    onClick={activity.onClick}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300 cursor-pointer group animate-slide-in-right"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`${activity.color} p-2.5 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-brand-dark group-hover:text-brand-teal transition-colors duration-300">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.detail}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No recent activity
                </p>
              )}
            </div>

            <Button
              onClick={() => navigate("/appointments")}
              variant="ghost"
              className="w-full mt-4 text-brand-teal hover:text-brand-dark"
            >
              View All Activity <IconArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Quick Actions */}
          <div
            className="mt-6 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold text-brand-dark mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "Book",
                  icon: <IconCalendar className="w-5 h-5" />,
                  color: "from-brand-teal to-brand-dark",
                  onClick: () => navigate("/appointments"),
                },
                {
                  label: "Upload",
                  icon: <IconFileText className="w-5 h-5" />,
                  color: "from-brand-yellow to-orange-400",
                  onClick: () => navigate("/documents"),
                },
                {
                  label: "Message",
                  icon: <IconMessageSquare className="w-5 h-5" />,
                  color: "from-purple-500 to-brand-teal",
                  onClick: () => navigate("/chat"),
                },
                {
                  label: "History",
                  icon: <IconActivity className="w-5 h-5" />,
                  color: "from-green-500 to-brand-teal",
                  onClick: () => navigate("/appointments"),
                },
              ].map((action, index) => (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className={`p-4 rounded-xl bg-gradient-to-br ${action.color} text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-scale-in`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {action.icon}
                  <span className="block mt-2 text-sm">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
