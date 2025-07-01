// src/components/SearchFilterBar.jsx
import React from 'react';

const SearchFilterBar = ({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  filterType,
  setFilterType,
}) => (
  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
    {/* 🔍 search by title or e‑mail */}
    <input
      type="text"
      placeholder="Search by title or email…"
      className="border px-4 py-2 rounded flex-1 min-w-[160px]"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {/* status dropdown */}
    <select
      className="border px-4 py-2 rounded"
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
    >
      <option value="">All Status</option>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
      <option value="deleted">Deleted</option>
    </select>

    {/* type dropdown */}
    <select
      className="border px-4 py-2 rounded"
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="">All Types</option>
      <option value="lost">Lost</option>
      <option value="found">Found</option>
    </select>
  </div>
);

export default SearchFilterBar;
