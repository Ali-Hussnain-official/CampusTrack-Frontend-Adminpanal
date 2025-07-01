import React from 'react';
import {
  FileSearch,       // lost icon
  ShieldCheck,      // found icon
  Hourglass,        // pending icon
  Users             // user icon
} from 'lucide-react';

const StatsCards = () => {
  // ── dummy stats (replace with real data later) ──
  const stats = [
    { title: 'Total Lost Posts',       count: 125, icon: <FileSearch  className="text-red-500"   /> },
    { title: 'Total Found Posts',      count: 97,  icon: <ShieldCheck className="text-green-500" /> },
    { title: 'Pending Approvals',      count: 8,   icon: <Hourglass   className="text-yellow-500"/> },
    { title: 'Registered Users',       count: 54,  icon: <Users       className="text-blue-600"  /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((card, idx) => (
        <div key={idx} className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4">
          <div className="p-3 bg-gray-100 rounded-full">{card.icon}</div>
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-2xl font-bold">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
