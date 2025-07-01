// src/Layout/AdminLayouts.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar  from "../Components/Topbar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ─── Sidebar (fixed on both mobile & desktop) ─── */}
      <div
        className={`fixed md:fixed z-40 transform transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 w-64 bg-white shadow-lg
                    top-16 md:top-0 h-[calc(100%-4rem)] md:h-screen overflow-y-auto`}
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* ─── Mobile overlay (dim rest of screen) ─── */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          // className="fixed top-16 left-64 right-0 bottom-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* ─── Main content area ─── */}
      <div className="flex flex-col flex-1 md:ml-64">
        <Topbar toggleSidebar={toggleSidebar} />
        {/* push content below fixed topbar */}
        <main className="mt-16 px-4 pt-4 pb-6 md:px-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
