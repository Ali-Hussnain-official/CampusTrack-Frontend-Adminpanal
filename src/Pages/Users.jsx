// src/Pages/Users.jsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  /* --- Dummy user list (blocked flag) --- */
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali Khan',   email: 'ali@example.com',   role: 'User',  registered: '2024‑05‑10', blocked: false },
    { id: 2, name: 'Sara Ahmed', email: 'sara@example.com',  role: 'User',  registered: '2024‑05‑12', blocked: true  },
    { id: 3, name: 'Admin John', email: 'admin@example.com', role: 'Admin', registered: '2024‑05‑15', blocked: false },
  ]);

  /* --- URL param: ?blocked=true --- */
  const [params] = useSearchParams();
  const onlyBlocked = params.get('blocked') === 'true';

  /* --- Profile modal state --- */
  const [selected, setSelected] = useState(null);

  /* --- Toggle block status --- */
  const toggleBlock = (id) => {
    setUsers(prev =>
      prev.map(u => u.id === id ? { ...u, blocked: !u.blocked } : u)
    );
  };

  /* --- List after filtering (if onlyBlocked) --- */
  const visibleUsers = onlyBlocked ? users.filter(u => u.blocked) : users;

  return (
    <div className="w-full px-4 md:px-6 pt-6">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4 text-blue-600">
          {onlyBlocked ? 'Blocked Users' : 'Registered Users'}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Role</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.length ? (
                visibleUsers.map((u, i) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{i + 1}</td>
                    <td className="py-2 px-4 border">{u.name}</td>
                    <td className="py-2 px-4 border">{u.email}</td>
                    <td className="py-2 px-4 border">{u.role}</td>
                    <td className="py-2 px-4 border">
                      {u.blocked ? (
                        <span className="text-red-600 font-medium">Blocked</span>
                      ) : (
                        <span className="text-green-600 font-medium">Active</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border space-x-2">
                      <button
                        onClick={() => setSelected(u)}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </button>
                      <button
                        onClick={() => toggleBlock(u.id)}
                        className={u.blocked
                          ? 'text-green-600 hover:underline'
                          : 'text-red-600 hover:underline'}
                      >
                        {u.blocked ? 'Unblock' : 'Block'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Profile Modal --- */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-600">User Profile</h2>
            <p className="mb-2"><span className="font-medium">Name:</span> {selected.name}</p>
            <p className="mb-2"><span className="font-medium">Email:</span> {selected.email}</p>
            <p className="mb-2"><span className="font-medium">Role:</span> {selected.role}</p>
            <p className="mb-2"><span className="font-medium">Registered:</span> {selected.registered}</p>
            <p className="mb-2">
              <span className="font-medium">Status:</span>{' '}
              {selected.blocked ? 'Blocked' : 'Active'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
