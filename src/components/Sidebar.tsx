import React, { useState, useEffect, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconLogOut,
  IconMenu,
  IconBell,
  IconCalendar,
  IconFileText,
  IconMessageSquare,
  IconCreditCard,
  IconX,
  IconCheck,
} from "./Icons";
import { useAuth } from "../contexts/AuthContext";
import {
  getPatientAppointments,
  getPatientInvoices,
  getChatMessages,
  getOrCreateChat,
} from "../services/database-service";

interface SidebarProps {
  children: ReactNode;
}

interface Notification {
  id: string;
  type: "appointment" | "payment" | "message" | "document";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const SidebarLayout: React.FC<SidebarProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { logout, user } = useAuth();

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user?.uid) return;

      try {
        const newNotifications: Notification[] = [];

        // Get confirmed appointments (within next 7 days)
        const appointments = await getPatientAppointments(user.uid);
        const confirmedAppointments = appointments.filter(
          (apt: any) =>
            apt.status === "Confirmed" &&
            new Date(apt.date) > new Date() &&
            new Date(apt.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        );

        confirmedAppointments.forEach((apt: any) => {
          newNotifications.push({
            id: `apt-${apt.id}`,
            type: "appointment",
            title: "Appointment Confirmed",
            message: `Your ${apt.type} appointment on ${new Date(
              apt.date
            ).toLocaleDateString()} at ${apt.time}`,
            timestamp: apt.createdAt?.toDate() || new Date(),
            read: false,
          });
        });

        // Get paid invoices (last 30 days)
        const invoices = await getPatientInvoices(user.uid);
        const paidInvoices = invoices.filter(
          (inv: any) =>
            inv.status === "Paid" &&
            inv.paidAt &&
            new Date(inv.paidAt.toDate()) >
              new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        );

        paidInvoices.forEach((inv: any) => {
          newNotifications.push({
            id: `pay-${inv.id}`,
            type: "payment",
            title: "Payment Confirmed",
            message: `Payment of R${inv.amount.toFixed(2)} received for ${
              inv.description
            }`,
            timestamp: inv.paidAt?.toDate() || new Date(),
            read: false,
          });
        });

        // Get unread messages
        try {
          const patientName =
            user.displayName || user.email?.split("@")[0] || "Patient";
          const chatId = await getOrCreateChat(user.uid, patientName);
          if (chatId) {
            const messages = await getChatMessages(chatId);
            const unreadMessages = messages.filter(
              (msg: any) => msg.senderId !== user.uid && !msg.read
            );

            if (unreadMessages.length > 0) {
              newNotifications.push({
                id: `msg-${chatId}`,
                type: "message",
                title: "New Messages",
                message: `You have ${unreadMessages.length} unread message${
                  unreadMessages.length > 1 ? "s" : ""
                }`,
                timestamp: unreadMessages[0].timestamp?.toDate() || new Date(),
                read: false,
              });
            }
          }
        } catch (error) {
          console.log("No chat messages yet");
        }

        // Sort by timestamp (newest first)
        newNotifications.sort(
          (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
        );

        setNotifications(newNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    // Refresh notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [user?.uid]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        showNotifications &&
        !target.closest(".notification-panel-container")
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications]);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "appointment":
        return <IconCalendar className="w-5 h-5" />;
      case "payment":
        return <IconCreditCard className="w-5 h-5" />;
      case "message":
        return <IconMessageSquare className="w-5 h-5" />;
      case "document":
        return <IconFileText className="w-5 h-5" />;
    }
  };

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "appointment":
        return "from-blue-500 to-cyan-600";
      case "payment":
        return "from-green-500 to-emerald-600";
      case "message":
        return "from-purple-500 to-violet-600";
      case "document":
        return "from-orange-500 to-amber-600";
    }
  };

  const navItems = [
    {
      to: "/dashboard",
      icon: <IconHome className="w-6 h-6" />,
      label: "Dashboard",
      color: "from-brand-teal to-brand-dark",
    },
    {
      to: "/appointments",
      icon: <IconCalendar className="w-6 h-6" />,
      label: "Appointments",
      color: "from-brand-yellow to-brand-teal",
    },
    {
      to: "/documents",
      icon: <IconFileText className="w-6 h-6" />,
      label: "Documents",
      color: "from-brand-teal to-brand-yellow",
    },
    {
      to: "/chat",
      icon: <IconMessageSquare className="w-6 h-6" />,
      label: "Chat",
      color: "from-brand-dark to-brand-teal",
    },
    {
      to: "/billing",
      icon: <IconCreditCard className="w-6 h-6" />,
      label: "Billing",
      color: "from-brand-yellow to-brand-dark",
    },
    {
      to: "/profile",
      icon: <IconUser className="w-6 h-6" />,
      label: "Profile",
      color: "from-brand-teal to-brand-yellow",
    },
    {
      to: "/settings",
      icon: <IconSettings className="w-6 h-6" />,
      label: "Settings",
      color: "from-brand-dark to-brand-teal",
    },
  ];

  const Sidebar = () => (
    <div
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-brand-dark via-brand-teal to-brand-dark text-white transition-all duration-500 ease-in-out shadow-2xl z-50 ${
        isSidebarOpen ? "w-72" : "w-20"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 h-28 border-b border-white/10 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/10 to-transparent animate-gradient-x"></div>

        <div
          className={`flex items-center justify-center overflow-hidden transition-all duration-500 relative z-10 ${
            isSidebarOpen ? "w-full" : "w-0"
          }`}
        >
          <div className="bg-white/95 px-4 py-2 rounded-xl shadow-lg">
            <img
              src="https://dermaglareskin.co.za/wp-content/uploads/2023/07/Dermaglare-Skin.png"
              alt="Dermaglare Skin"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<span class="text-2xl font-bold text-brand-teal">DERMAGLARE</span>';
                }
              }}
            />
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2.5 text-brand-yellow hover:text-white focus:outline-none rounded-xl hover:bg-white/10 transition-all duration-300 relative z-10 group"
        >
          <IconMenu className="w-6 h-6 transform group-hover:rotate-180 transition-transform duration-300" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li
              key={item.to}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r " +
                        item.color +
                        " text-white shadow-2xl shadow-brand-yellow/20 scale-105"
                      : "text-white/70 hover:bg-white/10 hover:text-white hover:scale-105"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Animated background for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer"></div>
                    )}

                    {/* Icon with hover animation */}
                    <div
                      className={`relative transition-transform duration-300 ${
                        isActive
                          ? "animate-bounce-subtle"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Label */}
                    <span
                      className={`ml-4 font-semibold whitespace-nowrap transition-all duration-500 relative ${
                        isSidebarOpen
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-brand-yellow rounded-l-full animate-pulse"></div>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section & Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-gradient-to-t from-black/20 to-transparent">
        {/* User Info */}
        {isSidebarOpen && user && (
          <div className="mb-3 p-2.5 rounded-xl bg-white/5 backdrop-blur-sm animate-fade-in-up">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-yellow to-brand-teal flex items-center justify-center text-brand-dark font-bold shadow-lg flex-shrink-0">
                {user.email?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs font-semibold text-white truncate leading-tight">
                  {user.displayName || "Patient"}
                </p>
                <p className="text-[10px] text-white/60 truncate leading-tight">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center p-2.5 w-full text-white/70 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
          <IconLogOut className="w-5 h-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
          <span
            className={`ml-3 font-semibold text-sm whitespace-nowrap transition-all duration-500 relative z-10 ${
              isSidebarOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <header
      className={`fixed top-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-40 transition-all duration-500 ease-in-out shadow-lg ${
        isSidebarOpen ? "left-72" : "left-20"
      }`}
    >
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-teal to-brand-dark bg-clip-text text-transparent">
            Welcome Back!
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <div className="relative notification-panel-container">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 text-brand-dark hover:text-brand-teal transition-colors rounded-xl hover:bg-brand-teal/10 group"
            >
              <IconBell className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Panel */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-scale-in z-50">
                <div className="p-4 bg-gradient-to-r from-brand-teal to-brand-dark text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Notifications</h3>
                    <p className="text-xs text-white/80">
                      {unreadCount} unread notification
                      {unreadCount !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        title="Mark all as read"
                      >
                        <IconCheck className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <IconX className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <IconBell className="w-12 h-12 mx-auto mb-2 opacity-30" />
                      <p className="text-sm">No notifications yet</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          onClick={() => markAsRead(notification.id)}
                          className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                            !notification.read ? "bg-brand-light/30" : ""
                          }`}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getNotificationColor(
                                notification.type
                              )} flex items-center justify-center text-white flex-shrink-0`}
                            >
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-gray-800 text-sm">
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-brand-teal rounded-full flex-shrink-0 mt-1"></div>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                {notification.message}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1">
                                {notification.timestamp.toLocaleDateString()}{" "}
                                {notification.timestamp.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div className="flex items-center space-x-3 p-2 pr-4 rounded-full bg-gradient-to-r from-brand-teal/10 to-brand-yellow/10 hover:from-brand-teal/20 hover:to-brand-yellow/20 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-yellow to-brand-teal flex items-center justify-center text-brand-dark font-bold shadow-lg">
              {user?.email ? user.email.charAt(0).toUpperCase() : "G"}
            </div>
            <span className="text-sm font-semibold text-brand-dark">
              {user?.email?.split("@")[0] || "Guest"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-yellow/10">
      <Sidebar />
      <Header />
      <main
        className={`transition-all duration-500 ease-in-out pt-20 ${
          isSidebarOpen ? "ml-72" : "ml-20"
        }`}
      >
        <div className="p-8 animate-fade-in-up">{children}</div>
      </main>
    </div>
  );
};

export default SidebarLayout;
