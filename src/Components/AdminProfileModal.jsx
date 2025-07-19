import React, { useState } from "react";
import { X, Pencil, Save, XCircle } from "lucide-react";

const AdminProfileModal = ({ isOpen, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "Admin Ali",
    email: "admin@example.com",
    role: "Administrator",
  });

  const [formData, setFormData] = useState({ ...adminData });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setAdminData({ ...formData });
    setEditMode(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white/10 backdrop-blur-md text-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 border border-white/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="w-24 h-24 rounded-full border-4 border-white/30 object-cover shadow-lg"
          />
          {!editMode ? (
            <h2 className="mt-4 text-xl font-bold">{adminData.name}</h2>
          ) : (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-4 text-center bg-white/10 px-4 py-2 rounded-md border border-white/30 focus:outline-none"
            />
          )}
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4 text-sm text-white/90">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            {!editMode ? (
              <p>{adminData.email}</p>
            ) : (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 px-3 py-2 rounded-md border border-white/30 focus:outline-none"
              />
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Role</label>
            <p className="italic text-white/60">{adminData.role}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between items-center gap-4">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="w-full flex items-center justify-center gap-2 bg-blue-500/80 hover:bg-blue-600 transition px-4 py-2 rounded-md font-semibold"
            >
              <Pencil size={18} /> Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 bg-green-500/80 hover:bg-green-600 transition px-4 py-2 rounded-md font-semibold"
              >
                <Save size={18} /> Save
              </button>
              <button
                onClick={() => {
                  setFormData(adminData);
                  setEditMode(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-red-500/70 hover:bg-red-600 transition px-4 py-2 rounded-md font-semibold"
              >
                <XCircle size={18} /> Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfileModal;
