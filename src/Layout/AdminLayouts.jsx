import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AdminProfileModal from "../Components/AdminProfileModal";
import { useNavigate } from "react-router-dom";


const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // default closed on mobile
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* ─── Topbar ─── */}
      <Topbar
        toggleSidebar={toggleSidebar}
        onProfileClick={() => setShowProfile(true)}
        onLogout={handleLogout}
      />

      <div className="flex flex-1 pt-16">
        {/* ─── Sidebar ─── */}
        <div
          className={`fixed md:relative z-40 transform transition-transform duration-300 
                      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                      md:translate-x-0 w-64 bg-white shadow-lg h-full md:h-auto`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            onProfileClick={() => setShowProfile(true)}
            onLogout={handleLogout}
          />
        </div>

        {/* ─── Main Content ─── */}
        {/* <main className="flex-1 p-4 md:ml-64">{children}</main> */}
        <main className="mt- p-4 md:p-6 w-full max-w-[1400px] mx-auto">{children}</main>

      </div>

      {/* ─── Profile Modal ─── */}
      <AdminProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};

export default AdminLayout;
