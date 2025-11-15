// Notifications Page
// Full page view of all notifications with filtering and management

import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  getUserNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  getNotificationIcon,
  formatNotificationTime,
  Notification,
} from "../services/notification-service";
import { useNavigate } from "react-router-dom";

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [loading, setLoading] = useState(true);
  const { user, showToast } = useAuth();
  const navigate = useNavigate();

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user?.uid) return;

      try {
        setLoading(true);
        const notifs = await getUserNotifications(user.uid);
        setNotifications(notifs);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        showToast("Failed to load notifications", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [user, showToast]);

  const filteredNotifications =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleNotificationClick = async (notification: Notification) => {
    try {
      // Mark as read
      if (!notification.read) {
        await markNotificationAsRead(notification.id);
        // Update local state
        setNotifications(
          notifications.map((n) =>
            n.id === notification.id ? { ...n, read: true } : n
          )
        );
      }

      // Navigate if actionUrl exists
      if (notification.actionUrl) {
        navigate(notification.actionUrl);
      } else if (notification.relatedTo?.appointmentId) {
        navigate("/appointments");
      }
    } catch (error) {
      console.error("Error handling notification click:", error);
      showToast("Failed to mark notification as read", "error");
    }
  };

  const handleMarkAllAsRead = async () => {
    if (!user?.uid) return;

    try {
      await markAllNotificationsAsRead(user.uid);
      // Update local state
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
      showToast("All notifications marked as read", "success");
    } catch (error) {
      console.error("Error marking all as read:", error);
      showToast("Failed to mark all as read", "error");
    }
  };

  const getPriorityColor = (priority: Notification["priority"]) => {
    switch (priority) {
      case "urgent":
        return "border-red-500 bg-red-50";
      case "high":
        return "border-orange-500 bg-orange-50";
      case "medium":
        return "border-blue-500 bg-blue-50";
      case "low":
        return "border-gray-300 bg-gray-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getPriorityBadge = (priority: Notification["priority"]) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              filter === "all"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All
            <span className="ml-2 text-sm text-gray-500">
              ({notifications.length})
            </span>
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-6 py-3 font-medium transition-colors relative ${
              filter === "unread"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {filter === "unread"
                ? "No unread notifications"
                : "No notifications yet"}
            </h3>
            <p className="text-gray-500">
              {filter === "unread"
                ? "You're all caught up! All notifications have been read."
                : "You'll see notifications here when you receive them."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleNotificationClick(notif)}
              className={`bg-white rounded-xl shadow-sm border-l-4 cursor-pointer hover:shadow-md transition-all ${
                !notif.read
                  ? getPriorityColor(notif.priority)
                  : "border-gray-300"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Icon and Content */}
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <div className="text-4xl flex-shrink-0">
                      {getNotificationIcon(notif.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {notif.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {/* Priority Badge */}
                          {notif.priority !== "low" && (
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadge(
                                notif.priority
                              )}`}
                            >
                              {notif.priority.toUpperCase()}
                            </span>
                          )}
                          {/* Unread Indicator */}
                          {!notif.read && (
                            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-700 whitespace-pre-line mb-3">
                        {notif.message}
                      </p>

                      {/* Timestamp */}
                      <p className="text-sm text-gray-500">
                        {formatNotificationTime(notif.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Empty State Helper */}
      {notifications.length === 0 && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-2">
            📬 How Notifications Work
          </h4>
          <p className="text-sm text-blue-700">
            You'll receive notifications when:
          </p>
          <ul className="mt-2 text-sm text-blue-700 space-y-1 list-disc list-inside">
            <li>Your appointment is approved or declined</li>
            <li>Payment is confirmed</li>
            <li>Important updates about your account</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
