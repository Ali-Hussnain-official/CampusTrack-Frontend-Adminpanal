import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileSearch, ShieldCheck, Home } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Lost Posts', path: '/lost-posts', icon: <FileSearch size={20} /> },
    { name: 'Found Posts', path: '/found-posts', icon: <ShieldCheck size={20} /> },
    { name: 'All Posts', path: '/all-posts', icon: <Home size={20} /> },
    { name: 'Users', path: '/users', icon: <Users size={20} /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          // className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
  className={`fixed z-40 left-0 w-64 bg-gray-100 lg:bg-white shadow-md transform transition-transform duration-300 ease-in-out
              top-0 h-[calc(100%)]
              lg:top-0 lg:h-full
              ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
>


        <div className="p-4 border-b text-xl font-bold text-blue-600">
          CampusTrack Admin
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition
              ${location.pathname === link.path
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              onClick={toggleSidebar}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
