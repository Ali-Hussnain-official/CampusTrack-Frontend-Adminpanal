import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearch, ShieldCheck, Layers, Hourglass, XCircle, Users,
  Ban, Trash2, CalendarDays, Calendar, CalendarClock, CalendarCheck
} from 'lucide-react';

const Dashboard = () => {
  // dummy counts – swap with API data later
  const stats = [
    { title: 'Total Lost Posts',   count: 125, icon: <FileSearch   className="text-red-500"     />, link: '/posts?type=lost' },
    { title: 'Total Found Posts',  count: 97,  icon: <ShieldCheck  className="text-green-500"   />, link: '/posts?type=found' },
    { title: 'All Posts',          count: 222, icon: <Layers       className="text-purple-500"  />, link: '/posts' },
    { title: 'Pending Approvals',  count: 8,   icon: <Hourglass    className="text-yellow-500"  />, link: '/posts?status=pending' },
    { title: 'Rejected Posts',     count: 5,   icon: <XCircle      className="text-gray-500"    />, link: '/posts?status=rejected' },
    { title: 'Deleted Posts',      count: 12,  icon: <Trash2       className="text-rose-600"    />, link: '/posts?status=deleted' },
    { title: 'Registered Users',   count: 54,  icon: <Users        className="text-blue-600"    />, link: '/users' },
    { title: 'Blocked Users',      count: 3,   icon: <Ban          className="text-orange-600"  />, link: '/users?blocked=true' },
    { title: 'Today’s Reports',    count: 10,  icon: <CalendarDays className="text-teal-600"    />, link: '/posts?date=today' },
    { title: 'Weekly Reports',     count: 46,  icon: <Calendar     className="text-indigo-500"  />, link: '/posts?date=week' },
    { title: 'Monthly Reports',    count: 123, icon: <CalendarClock className="text-cyan-600"   />, link: '/posts?date=month' },
    { title: 'Yearly Reports',     count: 540, icon: <CalendarCheck className="text-emerald-600"/>, link: '/posts?date=year' },
  ];

  return (
    <div className="w-full px-4 md:px-6 pt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stats.map((card, idx) => (
          <Link
            key={idx}
            to={card.link}
            className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4
                       hover:shadow-lg transition"
          >
            <div className="p-3 bg-gray-100 rounded-full">{card.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-2xl font-bold">{card.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
