import React from 'react';

const PostTable = ({ title, posts }) => (
  <div className="w-full px-4 md:px-6 pt-6">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>

    {/* ── Desktop/Table View ─────────────────────────────────── */}
    <div className="hidden md:block bg-white p-6 rounded shadow-md overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{p.id}</td>
              <td className="py-2 px-4 border">{p.title}</td>
              <td className="py-2 px-4 border">{p.type}</td>
              <td className="py-2 px-4 border">{p.date}</td>
              <td className="py-2 px-4 border">{p.status}</td>
              <td className="py-2 px-4 border space-x-2 text-sm">
                <button className="text-blue-600 hover:underline">View</button>
                {p.status === 'Pending' && (
                  <button className="text-green-600 hover:underline">Approve</button>
                )}
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Mobile/Card View ───────────────────────────────────── */}
    <div className="md:hidden space-y-4">
      {posts.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <span className="text-xs font-medium px-2 py-1 rounded bg-blue-50 text-blue-600">
              {p.type}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Date: </span>{p.date}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium">Status: </span>{p.status}
          </p>

          <div className="flex space-x-4 text-sm">
            <button className="text-blue-600 hover:underline">View</button>
            {p.status === 'Pending' && (
              <button className="text-green-600 hover:underline">Approve</button>
            )}
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PostTable;
