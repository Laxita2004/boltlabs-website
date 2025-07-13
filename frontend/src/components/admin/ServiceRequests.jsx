import React, { useState, useEffect } from "react";
import { useAdmin } from "../../hooks/useAdmin.js";

const ServiceRequests = () => {
  const { 
    requests, 
    services,
    loading, 
    error, 
    fetchRequests, 
    fetchServices,
    respondToRequest,
    clearError 
  } = useAdmin();

  const [processingRequest, setProcessingRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
    fetchServices();
  }, [fetchRequests, fetchServices]);

  useEffect(() => {
    // Filter requests based on status
    if (statusFilter === "all") {
      setFilteredRequests(requests);
    } else {
      setFilteredRequests(requests.filter(req => req.status === statusFilter));
    }
    
    // Debug: Log the current requests and counts
    console.log('Current requests:', requests);
    console.log('Total requests:', requests.length);
    console.log('Pending requests:', requests.filter(r => r.status === 'pending').length);
    console.log('Approved requests:', requests.filter(r => r.status === 'approved').length);
    console.log('Rejected requests:', requests.filter(r => r.status === 'rejected').length);
  }, [requests, statusFilter]);

  const handleApprove = async (reqId) => {
    try {
      setProcessingRequest(reqId);
      console.log('Approving request:', reqId);
      
      const response = await respondToRequest(reqId, { status: 'approved' });
      console.log('Approval response:', response);
      
      // Refresh the requests list after approval
      await fetchRequests();
      console.log('Requests refreshed after approval');
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request. Please try again.');
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleReject = async (reqId) => {
    try {
      setProcessingRequest(reqId);
      console.log('Rejecting request:', reqId);
      
      const response = await respondToRequest(reqId, { status: 'rejected' });
      console.log('Rejection response:', response);
      
      // Refresh the requests list after rejection
      await fetchRequests();
      console.log('Requests refreshed after rejection');
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request. Please try again.');
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

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'yellow', text: 'Pending' },
      approved: { color: 'green', text: 'Approved' },
      rejected: { color: 'red', text: 'Rejected' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full border border-${config.color}-400 text-${config.color}-300 bg-transparent`}>
        {config.text}
      </span>
    );
  };

  const getServiceName = (serviceId) => {
    const service = services.find(s => s.service_id === serviceId);
    return service ? service.service : 'Unknown Service';
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Service Requests</h1>
          <p className="text-gray-300">Review and manage incoming service requests</p>
        </div>
        
        {/* Status Filter */}
        <div className="mt-4 md:mt-0">
          <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-300 mb-2">
            Filter by Status
          </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#232f3e] border border-[#3a4656] text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#232f3e] rounded-lg p-4 border border-[#3a4656]">
          <div className="text-2xl font-bold text-white">{requests.length}</div>
          <div className="text-gray-400 text-sm">Total Requests</div>
        </div>
        <div className="bg-[#232f3e] rounded-lg p-4 border border-[#3a4656]">
          <div className="text-2xl font-bold text-yellow-400">
            {requests.filter(r => r.status === 'pending').length}
          </div>
          <div className="text-gray-400 text-sm">Pending</div>
        </div>
        <div className="bg-[#232f3e] rounded-lg p-4 border border-[#3a4656]">
          <div className="text-2xl font-bold text-green-400">
            {requests.filter(r => r.status === 'approved').length}
          </div>
          <div className="text-gray-400 text-sm">Approved</div>
        </div>
        <div className="bg-[#232f3e] rounded-lg p-4 border border-[#3a4656]">
          <div className="text-2xl font-bold text-red-400">
            {requests.filter(r => r.status === 'rejected').length}
          </div>
          <div className="text-gray-400 text-sm">Rejected</div>
        </div>
      </div>
      
      {filteredRequests.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No service requests found</div>
          <p className="text-gray-500">
            {statusFilter === 'all' 
              ? 'All requests have been processed or there are no pending requests.'
              : `No ${statusFilter} requests found.`
            }
          </p>
        </div>
      ) : (
        <div className="bg-[#232f3e] rounded-xl border border-[#3a4656] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-[#1a2530] border-b border-[#3a4656] font-semibold text-gray-300">
            <div className="col-span-1">ID</div>
            <div className="col-span-3">User</div>
            <div className="col-span-3">Service</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#3a4656]">
            {filteredRequests.map((req) => (
              <div key={req.req_id} className="grid grid-cols-12 gap-4 p-4 hover:bg-[#1a2530] transition-colors">
                <div className="col-span-1 text-sm text-gray-400">#{req.req_id}</div>
                
                <div className="col-span-3">
                  <div className="font-medium text-white">{req.user?.name || 'Unknown User'}</div>
                  <div className="text-sm text-gray-400">{req.user?.email || 'No email'}</div>
                </div>
                
                                 <div className="col-span-3">
                   <div className="font-medium text-white">{req.service}</div>
                   <div className="text-sm text-gray-400">{req.domain?.name || 'Unknown Domain'}</div>
                 </div>
                
                <div className="col-span-2">
                  {getStatusBadge(req.status)}
                </div>
                
                <div className="col-span-2 text-sm text-gray-400">
                  {formatDate(req.request_date)}
                </div>
                
                <div className="col-span-1">
                  {req.status === 'pending' && (
                    <div className="flex gap-2">
                      <button
                        className="p-2 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white rounded-md transition"
                        onClick={() => handleApprove(req.req_id)}
                        disabled={processingRequest === req.req_id}
                        title="Approve Request"
                      >
                        {processingRequest === req.req_id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          '✓'
                        )}
                      </button>
                      <button
                        className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white rounded-md transition"
                        onClick={() => handleReject(req.req_id)}
                        disabled={processingRequest === req.req_id}
                        title="Reject Request"
                      >
                        {processingRequest === req.req_id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          '✕'
                        )}
                      </button>
                    </div>
                  )}
                  {req.status === 'approved' && (
                    <span className="text-green-400 text-sm font-medium">✓ Approved</span>
                  )}
                  {req.status === 'rejected' && (
                    <span className="text-red-400 text-sm font-medium">✕ Rejected</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceRequests; 