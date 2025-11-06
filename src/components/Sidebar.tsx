import React, { useState, ReactNode } from "react";
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
} from "./Icons";
import { useAuth } from "../contexts/AuthContext";

interface SidebarProps {
  children: ReactNode;
}

const SidebarLayout: React.FC<SidebarProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { logout, user } = useAuth();

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
          <button className="relative p-2.5 text-brand-dark hover:text-brand-teal transition-colors rounded-xl hover:bg-brand-teal/10 group">
            <IconBell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></span>
          </button>

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
