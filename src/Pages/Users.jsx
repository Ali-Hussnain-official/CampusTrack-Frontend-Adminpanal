import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Ali Khan', email: 'ali@example.com', role: 'User' },
    { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', role: 'User' },
    { id: 3, name: 'Admin John', email: 'admin@example.com', role: 'Admin' },
  ];

  return (
    <div className="w-full px-4 md:px-6 pt-2 md:pl-0">
      <div className="border border-blue-600 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Registered Users</h2>

        {/* ---------- Desktop Table ---------- */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Role</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{user.id}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.role}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button className="text-blue-600 hover:underline text-sm">Edit</button>
                    <button className="text-red-600 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------- Mobile Card View ---------- */}
        <div className="md:hidden space-y-4">
          {users.map((user) => (
            <div key={user.id} className="border rounded p-4 shadow-sm">
              <div className="font-semibold text-blue-600 mb-1">{user.name}</div>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Email: </span>{user.email}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Role: </span>{user.role}
              </p>
              <div className="mt-3 space-x-3 text-sm">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
