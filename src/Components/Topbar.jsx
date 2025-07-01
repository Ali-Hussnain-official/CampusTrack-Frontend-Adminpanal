import React from 'react';
import { Menu } from 'lucide-react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <header
      className="fixed top-0 right-0 h-15 bg-white shadow-md px-4 flex justify-between items-center z-10 w-full md:w-[calc(100%-16rem)] md:ml-64"
    >
      {/* Toggle Sidebar Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-semibold text-blue-600">CampusTrack Admin</h1>

      {/* Admin Title or Logo */}

      {/* Right Side - Can be expanded with Profile/Logout later */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-sm text-gray-600">Welcome, Admin</span>
      </div>
    </header>
  );
};

export default Topbar;
