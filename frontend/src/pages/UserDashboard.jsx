import React from 'react';
import { Calendar, Eye, CheckCircle2, Loader, Clock, Star } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
    'In-Progress': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  };
  const statusIcons = {
    Completed: <CheckCircle2 size={14} />,
    'In-Progress': <Loader size={14} className="animate-spin" />,
    Pending: <Clock size={14} />,
  };
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status]}`}>
      {statusIcons[status]}
      {status}
    </span>
  );
};

const ServiceRequestCard = ({ request }) => (
  <div className="bg-[#1F2937]/50 rounded-2xl p-6 border border-gray-700/50 hover:border-teal-400/50 transition-all duration-300">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold text-white">{request.title}</h3>
      <StatusBadge status={request.status} />
    </div>
    <div className="mt-4 space-y-3 text-sm text-gray-400">
      <p className="flex items-center gap-2"><Calendar size={16} /> <span>{request.date}</span></p>
      <p>Provider: {request.provider}</p>
      <p>Cost: ${request.cost}</p>
    </div>
    <div className="mt-4 text-right">
      <a href="#" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-sm">
        <Eye size={16} /> View Details
      </a>
    </div>
  </div>
);

const UserDashboard = () => {
  const serviceRequests = [
    { title: 'Plumbing Repair', date: '2024-06-20', provider: 'Mike Johnson', cost: 150, status: 'Completed' },
    { title: 'Electrical Installation', date: '2024-06-18', provider: 'Sarah Wilson', cost: 300, status: 'In-Progress' },
    { title: 'AC Maintenance', date: '2024-06-15', provider: 'David Brown', cost: 120, status: 'Pending' },
  ];

  const recentWork = [
    { title: 'Home Cleaning', client: 'Alice Cooper', date: '2024-06-19', cost: 80, rating: 5 },
    { title: 'Garden Maintenance', client: 'Bob Smith', date: '2024-06-17', cost: 120, rating: 4 },
  ];

  return (
    <div className="bg-[#0e1a24] text-white min-h-screen pt-32 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">User Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your services and track your activity</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Requests</h2>
              <div className="space-y-6">
                {serviceRequests.map(req => <ServiceRequestCard key={req.title} request={req} />)}
              </div>
            </section>
          </main>

          <aside className="space-y-8">
            <section className="bg-[#1F2937]/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Current Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Active Requests</span>
                  <span className="font-bold text-blue-400 text-lg">2</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Completed This Month</span>
                  <span className="font-bold text-green-400 text-lg">5</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Total Spent</span>
                  <span className="font-bold text-white text-lg">$570</span>
                </div>
              </div>
            </section>

            <section className="bg-[#1F2937]/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Work Provided</h2>
              <div className="space-y-6">
                {recentWork.map(work => (
                  <div key={work.title} className="flex items-start gap-4">
                    <div className="w-1 bg-teal-400 rounded-full h-16 mt-1"></div>
                    <div>
                      <div className="flex justify-between items-center">
                         <h3 className="font-semibold text-white">{work.title}</h3>
                         <p className="font-bold text-green-400">${work.cost}</p>
                      </div>
                      <p className="text-sm text-gray-400">Client: {work.client}</p>
                      <p className="text-xs text-gray-500">{work.date}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < work.rating ? 'text-yellow-400' : 'text-gray-600'} fill={i < work.rating ? 'currentColor' : 'none'} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 