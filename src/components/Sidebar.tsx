import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconLogOut,
  IconMenu,
  DermагlareLogo,
  IconBell,
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
    },
    {
      to: "/profile",
      icon: <IconUser className="w-6 h-6" />,
      label: "Profile",
    },
    {
      to: "/settings",
      icon: <IconSettings className="w-6 h-6" />,
      label: "Settings",
    },
  ];

  const Sidebar = () => (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out shadow-2xl ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 h-20 border-b border-gray-800">
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${
            isSidebarOpen ? "w-32" : "w-0"
          }`}
        >
          <DermагlareLogo />
        </div>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-400 hover:text-white focus:outline-none rounded-full hover:bg-gray-800"
        >
          <IconMenu className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map((item) => (
            <li key={item.to} className="px-4 mb-2">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out group ${
                    isActive
                      ? "bg-brand-500 text-white shadow-lg"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <div className="relative">{item.icon}</div>
                <span
                  className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                    isSidebarOpen ? "opacity-100" : "opacity-0 -translate-x-4"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center p-3 w-full text-gray-400 hover:bg-red-700 hover:text-white rounded-lg transition-colors duration-200 group"
        >
          <IconLogOut className="w-6 h-6" />
          <span
            className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 -translate-x-4"
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
      className={`fixed top-0 right-0 h-20 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 z-30 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "left-64" : "left-20"
      }`}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-white text-lg font-semibold">
          Welcome, {user?.email || "Guest"}
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-400 hover:text-white">
            <IconBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
            {user?.email ? user.email.charAt(0).toUpperCase() : "G"}
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <Header />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out pt-20 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default SidebarLayout;
