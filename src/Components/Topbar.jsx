import React from "react";
import { FiMenu, FiUser, FiLogOut } from "react-icons/fi";

const Topbar = ({ toggleSidebar, onProfileClick, onLogout }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16 flex items-center justify-between px-4 md:px-6">
      <button onClick={toggleSidebar} className="md:hidden text-gray-700 text-2xl">
        <FiMenu />
      </button>

      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={onProfileClick}
          className="text-gray-600 hover:text-blue-600 transition text-xl"
          title="View Profile"
        >
          <FiUser />
        </button>
        <button
          onClick={onLogout}
          className="text-gray-600 hover:text-red-500 transition text-xl"
          title="Logout"
        >
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
