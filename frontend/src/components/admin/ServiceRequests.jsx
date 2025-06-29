import React, { useState } from "react";

const initialRequests = [
  {
    id: 1,
    title: "E-commerce Website Development",
    client: "RedStart Solutions",
    domain: "Web Development",
    date: "Jan 15, 2024, 04:00 PM",
    email: "contact@redstart.com",
    status: "Pending",
  },
  {
    id: 2,
    title: "Mobile App for iOS",
    client: "TechCorp Inc",
    domain: "Mobile Apps",
    date: "Jan 14, 2024, 07:50 PM",
    email: "tech@techcorp.com",
    status: "Pending",
  },
  {
    id: 3,
    title: "SEO Optimization Package",
    client: "Digital Marketing Pro",
    domain: "Digital Marketing",
    date: "Jan 13, 2024, 02:45 PM",
    email: "info@digitalmarketing.com",
    status: "Pending",
  },
];

const ServiceRequests = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleApprove = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: "Approved" } : r));
  };
  const handleReject = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: "Rejected" } : r));
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">Service Requests</h1>
      <p className="mb-6 text-gray-300">Review and manage incoming service requests</p>
      <div className="space-y-8">
        {requests.map((req) => (
          <div key={req.id} className="bg-[#232f3e] rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between border border-[#3a4656]">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold">{req.title}</span>
                <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full border border-yellow-400 text-yellow-300 bg-transparent">
                  {req.status === "Pending" && "Pending"}
                  {req.status === "Approved" && <span className="text-green-400">Approved</span>}
                  {req.status === "Rejected" && <span className="text-red-400">Rejected</span>}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {req.client}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
                  {req.domain}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
                  {req.date}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Client Email:</span> {req.email}
              </div>
              <div>
                <span className="font-bold">Service Domain:</span> {req.domain}
              </div>
            </div>
            {req.status === "Pending" && (
              <div className="flex flex-row gap-3 mt-4 md:mt-0 md:ml-8">
                <button
                  className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition"
                  onClick={() => handleApprove(req.id)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Approve
                </button>
                <button
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition"
                  onClick={() => handleReject(req.id)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRequests; 