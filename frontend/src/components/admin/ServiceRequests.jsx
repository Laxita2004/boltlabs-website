import React, { useState, useEffect } from "react";
import { useAdmin } from "../../hooks/useAdmin.js";

const ServiceRequests = () => {
  const {
    requests,
    loading,
    error,
    fetchRequests,
    respondToRequest,
    clearError
  } = useAdmin();

  const [processingRequest, setProcessingRequest] = useState(null);

  useEffect(() => {
    console.log("Fetching service requests...");
    fetchRequests();
  }, []);


  const handleApprove = async (reqId) => {
    try {
      setProcessingRequest(reqId);
      await respondToRequest(reqId, { status: 'approved' });
      // Refresh the requests list after approval
      fetchRequests();
    } catch (error) {
      console.error('Error approving request:', error);
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleReject = async (reqId) => {
    try {
      setProcessingRequest(reqId);
      await respondToRequest(reqId, { status: 'rejected' });
      // Refresh the requests list after rejection
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
    } finally {
      setProcessingRequest(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && requests.length === 0) {
    return (
      <div className="min-h-screen bg-[#0e1a24] text-white p-8">
        <h1 className="text-3xl font-bold mb-1">Service Requests</h1>
        <p className="mb-6 text-gray-300">Review and manage incoming service requests</p>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0e1a24] text-white p-8">
        <h1 className="text-3xl font-bold mb-1">Service Requests</h1>
        <p className="mb-6 text-gray-300">Review and manage incoming service requests</p>
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
          <p className="text-red-400">Error: {error}</p>
          <button
            onClick={clearError}
            className="mt-2 text-sm text-red-300 hover:text-red-200 underline"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">Service Requests</h1>
      <p className="mb-6 text-gray-300">Review and manage incoming service requests</p>

      {requests.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No service requests found</div>
          <p className="text-gray-500">All requests have been processed or there are no pending requests.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {requests.filter((req) => req.status === "PENDING").map((req) => (
            <div key={req.req_id} className="bg-[#232f3e] rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between border border-[#3a4656]">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl font-bold">{req.service}</span>
                  <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full border border-yellow-400 text-yellow-300 bg-transparent">
                    Pending
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {req.user?.name || 'Unknown User'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
                    {req.domain?.name || 'Unknown Domain'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
                    {formatDate(req.request_date)}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-bold">Client Email:</span> {req.user?.email || 'No email provided'}
                </div>
                <div>
                  <span className="font-bold">Service Domain:</span> {req.domain?.name || 'Unknown Domain'}
                </div>
                <div className="mt-2">
                  <span className="font-bold">Request ID:</span> {req.req_id}
                </div>
              </div>
              <div className="flex flex-row gap-3 mt-4 md:mt-0 md:ml-8">
                <button
                  className="flex items-center bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-2 rounded-md transition"
                  onClick={() => handleApprove(req.req_id)}
                  disabled={processingRequest === req.req_id}
                >
                  {processingRequest === req.req_id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  )}
                  {processingRequest === req.req_id ? 'Processing...' : 'Approve'}
                </button>
                <button
                  className="flex items-center bg-red-500 hover:bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-2 rounded-md transition"
                  onClick={() => handleReject(req.req_id)}
                  disabled={processingRequest === req.req_id}
                >
                  {processingRequest === req.req_id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  )}
                  {processingRequest === req.req_id ? 'Processing...' : 'Reject'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceRequests; 