import React from 'react';
import { X, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const navigate = useNavigate();

  const admin = {
    name: "Ali Hussnain",
    email: "admin@campustrack.com",
    role: "Super Admin",
    image: "https://i.pravatar.cc/300?img=12",
    joined: "Joined: Jan 1, 2024",
  };

  const handleClose = () => {
    navigate(-1); // go back
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
      <div className="relative bg-white/30 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-6 w-full max-w-md sm:max-w-lg">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition"
          onClick={handleClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <img
              src={admin.image}
              alt="Admin"
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-md hover:scale-105 transition"
            />
            <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full shadow">
              <Pencil size={14} />
            </span>
          </div>

          {/* Name */}
          <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow">
            {admin.name}
          </h2>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3 text-sm sm:text-base text-white/90">
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold">Email:</span>
            <span>{admin.email}</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold">Role:</span>
            <span>{admin.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Joined:</span>
            <span>{admin.joined}</span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => alert("Edit functionality coming soon...")}
          className="mt-6 w-full bg-white/80 text-blue-700 font-semibold py-2 rounded-xl hover:bg-white hover:text-blue-800 transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
