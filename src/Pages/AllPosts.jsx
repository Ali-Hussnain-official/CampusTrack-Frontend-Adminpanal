import React, { useState } from 'react';
import SearchFilterBar from '../Components/SearchFilterBar';

const AllPosts = () => {
  const postsData = [
    {
      id: 1,
      title: 'Lost Wallet',
      type: 'lost',
      status: 'pending',
      userName: 'Ali Khan',
      userEmail: 'ali@example.com',
      date: '2024-05-10',
      desc: 'Brown leather wallet with ID and ATM cards.',
      img: 'https://placehold.co/120x120?text=Wallet',
    },
    {
      id: 2,
      title: 'Found Phone',
      type: 'found',
      status: 'approved',
      userName: 'Sara Ahmed',
      userEmail: 'sara@example.com',
      date: '2024-05-12',
      desc: 'Black iPhone 12 found near cafeteria.',
      img: 'https://placehold.co/120x120?text=Phone',
    },
    {
      id: 2,
      title: 'Found Phone',
      type: 'found',
      status: 'pending',
      userName: 'Sara Ahmed',
      userEmail: 'sara@example.com',
      date: '2024-05-12',
      desc: 'Black iPhone 12 found near cafeteria.',
      img: 'https://placehold.co/120x120?text=Phone',
    },
    {
      id: 3,
      title: 'Lost Bag',
      type: 'lost',
      status: 'rejected',
      userName: 'Zain Haider',
      userEmail: 'zain@example.com',
      date: '2024-05-14',
      desc: 'Black laptop bag with Dell logo.',
      img: 'https://placehold.co/120x120?text=Bag',
    },
    {
      id: 4,
      title: 'Found Watch',
      type: 'found',
      status: 'deleted',
      userName: 'Ayesha Noor',
      userEmail: 'ayesha@example.com',
      date: '2024-05-15',
      desc: 'Silver wrist‑watch (Fossil).',
      img: 'https://placehold.co/120x120?text=Watch',
    },
    {
      id: 5,
      title: 'Lost ID Card',
      type: 'lost',
      status: 'pending',
      userName: 'Bilal Shah',
      userEmail: 'bilal@example.com',
      date: '2024-05-16',
      desc: 'University ID card.',
      img: 'https://placehold.co/120x120?text=ID',
    },
    {
      id: 6,
      title: 'Found Book',
      type: 'found',
      status: 'approved',
      userName: 'Hina Tariq',
      userEmail: 'hina@example.com',
      date: '2024-05-17',
      desc: 'Mathematics textbook found in library.',
      img: 'https://placehold.co/120x120?text=Book',
    },
  ];

  const [searchTerm, setSearchTerm]     = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterType, setFilterType]     = useState('');
  const [selected, setSelected]         = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Filter logic
  const filtered = postsData.filter((p) => {
    const term = searchTerm.toLowerCase();
    const matchText =
      term
        ? p.title.toLowerCase().includes(term) || p.userEmail.toLowerCase().includes(term)
        : true;
    const matchStatus = filterStatus ? p.status === filterStatus : true;
    const matchType = filterType ? p.type === filterType : true;
    return matchText && matchStatus && matchType;
  });

  // Pagination logic
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <div className="w-full px-4 md:px-6 pt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">All Posts</h2>

      <SearchFilterBar
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        filterStatus={filterStatus} setFilterStatus={setFilterStatus}
        filterType={filterType} setFilterType={setFilterType}
      />

      {/* Table View */}
      <div className="hidden md:block overflow-x-auto mt-4 bg-white p-4 rounded shadow-md">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">User Email</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.length ? currentPosts.map((p, idx) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{indexOfFirst + idx + 1}</td>
                <td className="px-4 py-2 border">
                  <img src={p.img} alt={p.title} className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border">{p.title}</td>
                <td className="px-4 py-2 border capitalize">{p.type}</td>
                <td className="px-4 py-2 border capitalize">{p.status}</td>
                <td className="px-4 py-2 border">{p.date}</td>
                <td className="px-4 py-2 border">{p.userEmail}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => setSelected(p)} className="text-blue-600 hover:underline">View</button>
                  {p.status === 'pending' && <button className="text-green-600 hover:underline">Approve</button>}
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="8" className="py-4 text-center text-gray-500">No matching posts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 mt-4">
        {currentPosts.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow-md">
            <div className="flex gap-3">
              <img src={p.img} alt={p.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 capitalize">{p.type} • {p.status}</p>
                <p className="text-sm text-gray-600">{p.date}</p>
                <p className="text-sm text-gray-600">{p.userEmail}</p>
              </div>
            </div>
            <div className="flex space-x-4 text-sm mt-3">
              <button onClick={() => setSelected(p)} className="text-blue-600 hover:underline">View</button>
              {p.status === 'pending' && <button className="text-green-600 hover:underline">Approve</button>}
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded shadow-lg relative">
            <button onClick={() => setSelected(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
            <img src={selected.img} alt={selected.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selected.title}</h3>
            <p><span className="font-medium">Type:</span> {selected.type}</p>
            <p><span className="font-medium">Status:</span> {selected.status}</p>
            <p><span className="font-medium">Date:</span> {selected.date}</p>
            <p><span className="font-medium">User Name:</span> {selected.userName}</p>
            <p><span className="font-medium">User Email:</span> {selected.userEmail}</p>
            <p className="mt-3 text-gray-700">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
