import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFilterBar from '../Components/SearchFilterBar';


/* Dummy master list (replace with API data later) */
const allPosts = [
  { id: 1, title: 'Lost Wallet',  type: 'lost',  status: 'pending',  userEmail: 'ali@example.com',   userName: 'Ali',   date:'2024-05-10', img:'https://placehold.co/120x120?text=Wallet',  desc:'Brown wallet...' },
  { id: 2, title: 'Found Phone',  type: 'found', status: 'approved', userEmail: 'sara@example.com',  userName: 'Sara',  date:'2024-05-12', img:'https://placehold.co/120x120?text=Phone',   desc:'Black iPhone...' },
  { id: 3, title: 'Lost Bag',     type: 'lost',  status: 'rejected', userEmail: 'zain@example.com',  userName: 'Zain',  date:'2024-05-14', img:'https://placehold.co/120x120?text=Bag',     desc:'Laptop bag...'  },
  { id: 4, title: 'Found Watch',  type: 'found', status: 'deleted',  userEmail: 'ayesha@example.com',userName: 'Ayesha',date:'2024-05-15', img:'https://placehold.co/120x120?text=Watch',   desc:'Silver watch...' },
];

export default function PostsPage() {
  /* read ?status and ?type from the URL */
  const [params] = useSearchParams();
  const urlStatus = params.get('status') || '';
  const urlType   = params.get('type')   || '';

  /* UI state */
  const [searchTerm, setSearchTerm]   = useState('');
  const [filterStatus, setFilterStatus] = useState(urlStatus);
  const [filterType, setFilterType]     = useState(urlType);
  const [selected, setSelected]       = useState(null);

  /* Filter master list */
  const filtered = allPosts.filter(p => {
    const titleOK  = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const statusOK = filterStatus ? p.status === filterStatus : true;
    const typeOK   = filterType   ? p.type   === filterType   : true;
    return titleOK && statusOK && typeOK;
  });

  /* Dynamic page heading */
  const heading =
    (filterStatus ? `${filterStatus[0].toUpperCase()}${filterStatus.slice(1)} ` : '') +
    (filterType   ? `${filterType[0].toUpperCase()}${filterType.slice(1)} `     : '') +
    'Posts';

  /* ======= JSX ======= */
  return (
    <div className="w-full px-4 md:px-6 pt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{heading.trim() || 'All Posts'}</h2>

      <SearchFilterBar
        searchTerm={searchTerm}       setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}   setFilterStatus={setFilterStatus}
        filterType={filterType}       setFilterType={setFilterType}
      />

      {/* Desktop table */}
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
            {filtered.length ? (
              filtered.map((p, idx) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">
                    <img src={p.img} alt={p.title} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 border">{p.title}</td>
                  <td className="px-4 py-2 border capitalize">{p.type}</td>
                  <td className="px-4 py-2 border capitalize">{p.status}</td>
                  <td className="px-4 py-2 border">{p.date}</td>
                  <td className="px-4 py-2 border">{p.userEmail}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button onClick={() => setSelected(p)} className="text-blue-600 hover:underline">
                      View
                    </button>
                    {p.status === 'pending' && (
                      <button className="text-green-600 hover:underline">Approve</button>
                    )}
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="py-4 text-center text-gray-500">
                  No matching posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden mt-4 space-y-4">
        {filtered.map((p) => (
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
              <button onClick={() => setSelected(p)} className="text-blue-600 hover:underline">
                View
              </button>
              {p.status === 'pending' && (
                <button className="text-green-600 hover:underline">Approve</button>
              )}
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded shadow-lg relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <img src={selected.img} alt={selected.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selected.title}</h3>
            <p><span className="font-semibold">Type:</span> {selected.type}</p>
            <p><span className="font-semibold">Status:</span> {selected.status}</p>
            <p><span className="font-semibold">Date:</span> {selected.date}</p>
            <p><span className="font-semibold">User Name:</span> {selected.userName}</p>
            <p><span className="font-semibold">User Email:</span> {selected.userEmail}</p>
            <p className="mt-3 text-gray-700">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
