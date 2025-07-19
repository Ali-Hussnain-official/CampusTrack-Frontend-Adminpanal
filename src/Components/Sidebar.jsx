import React from "react";
import { FiHome, FiUsers, FiUser, FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onProfileClick, onLogout }) => {
  return (
    <div className="h-full p-4 space-y-4 text-gray-800 bg-white">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition ${
            isActive ? "bg-gray-200 font-semibold" : ""
          }`
        }
      >
        <FiHome /> Dashboard
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition ${
            isActive ? "bg-gray-200 font-semibold" : ""
          }`
        }
      >
        <FiUsers /> Users
      </NavLink>

      <button
        onClick={onProfileClick}
        className="flex items-center gap-3 p-2 w-full text-left rounded-md hover:bg-gray-100 transition"
      >
        <FiUser /> View Profile
      </button>

      <button
        onClick={onLogout}
        className="flex items-center gap-3 p-2 w-full text-left rounded-md hover:bg-red-100 text-red-600 transition"
      >
        <FiLogOut /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
