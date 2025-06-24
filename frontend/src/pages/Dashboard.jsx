import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e1a24] overflow-auto flex flex-col pt-24 px-2 md:px-8 font-inter">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6">
        {/* Left: Service Requests */}
        <div className="flex-1">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">User Dashboard</h2>
            <p className="text-gray-400 mb-6">Manage your services and track your activity</p>
            <div className="bg-[#101c29] rounded-xl p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Service Requests</h3>
              <div className="space-y-4">
                {/* Mock service requests */}
                {[
                  {
                    id: 1,
                    name: 'Plumbing Repair',
                    date: '2024-06-20',
                    cost: 150,
                    provider: 'Mike Johnson',
                    status: 'Completed',
                  },
                  {
                    id: 2,
                    name: 'Electrical Installation',
                    date: '2024-06-18',
                    cost: 300,
                    provider: 'Sarah Wilson',
                    status: 'In-Progress',
                  },
                  {
                    id: 3,
                    name: 'AC Maintenance',
                    date: '2024-06-15',
                    cost: 120,
                    provider: 'David Brown',
                    status: 'Pending',
                  },
                ].map((req) => (
                  <div key={req.id} className="bg-gray-900 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-700">
                    <div>
                      <div className="font-semibold text-white text-lg">{req.name}</div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-1">
                        <span className="flex items-center gap-1"><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> {req.date}</span>
                        <span>Provider: {req.provider}</span>
                      </div>
                      <div className="mt-2 text-gray-300 text-sm">Cost: <span className="font-semibold text-white">${req.cost}</span></div>
                      <button className="mt-2 text-blue-400 flex items-center gap-1 text-sm hover:underline"><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> View Details</button>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                      {req.status === 'Completed' && <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>}
                      {req.status === 'In-Progress' && <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">In-Progress</span>}
                      {req.status === 'Pending' && <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right: Status and Recent Work */}
        <div className="flex flex-col gap-6 w-full md:w-80">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Current Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-300">Active Requests</span> <span className="text-blue-400 font-semibold">2</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Completed This Month</span> <span className="text-green-400 font-semibold">5</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Total Spent</span> <span className="text-white font-bold">$570</span></div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Work Provided</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-blue-400 font-semibold">Home Cleaning</div>
                  <div className="text-gray-300">Client: Alice Cooper</div>
                  <div className="text-gray-400 text-xs">2024-06-19</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">$80</div>
                  <div className="text-yellow-400 flex items-center gap-1 justify-end"><svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>5</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-blue-400 font-semibold">Garden Maintenance</div>
                  <div className="text-gray-300">Client: Bob Smith</div>
                  <div className="text-gray-400 text-xs">2024-06-17</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">$120</div>
                  <div className="text-yellow-400 flex items-center gap-1 justify-end"><svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 