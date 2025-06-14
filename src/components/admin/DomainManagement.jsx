
import React, { useState } from "react";
import { FiSearch, FiPlus, FiChevronDown, FiEdit2, FiCheck, FiX, FiGlobe } from "react-icons/fi";

const DomainManagement = () => {
  // Sample initial domain data
  const initialDomains = [
    {
      id: 1,
      domain: "example.com",
      status: "verified",
      owner: "jsmb@example.com",
      expiryDate: "2004-12-15"
    },
    {
      id: 2,
      domain: "myelite.org",
      status: "pending",
      owner: "jsmb@example.com",
      expiryDate: "2004-11-20"
    },
    {
      id: 3,
      domain: "testdomain.net",
      status: "verified",
      owner: "book@example.com",
      expiryDate: "2004-01-10"
    },
    {
      id: 4,
      domain: "businessapp.io",
      status: "expired",
      owner: "contact@business.com",
      expiryDate: "2003-05-22"
    },
    {
      id: 5,
      domain: "startup.dev",
      status: "verified",
      owner: "hello@startup.dev",
      expiryDate: "2025-08-30"
    }
  ];

  // State management
  const [domains, setDomains] = useState(initialDomains);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDomain, setNewDomain] = useState({
    domain: "",
    owner: "",
    expiryDate: ""
  });

  // Filter domains based on search and status
  const filteredDomains = domains.filter(domain => {
    const matchesSearch = 
      domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.owner.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || domain.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Handle adding new domain
  const handleAddDomain = () => {
    const newId = Math.max(...domains.map(d => d.id), 0) + 1;
    setDomains([...domains, { 
      ...newDomain, 
      id: newId,
      status: "pending" // Default status for new domains
    }]);
    setIsModalOpen(false);
    setNewDomain({
      domain: "",
      owner: "",
      expiryDate: ""
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDomain(prev => ({ ...prev, [name]: value }));
  };

  // Handle verify domain
  const handleVerifyDomain = (id) => {
    setDomains(domains.map(domain => 
      domain.id === id ? { ...domain, status: "verified" } : domain
    ));
  };

  // Handle delete domain
  const handleDeleteDomain = (id) => {
    setDomains(domains.filter(domain => domain.id !== id));
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      verified: { color: "bg-green-100 text-green-800", text: "Verified" },
      pending: { color: "bg-yellow-100 text-yellow-800", text: "Pending" },
      expired: { color: "bg-red-100 text-red-800", text: "Expired" }
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusConfig[status].color}`}>
        {statusConfig[status].text}
      </span>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">BoltLabs Admin</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Domain Management</h2>
        <p className="text-gray-500">Manage and verify domain ownership</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Domains ({filteredDomains.length})</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Domain
          </button>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search domains..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Domains Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDomains.map((domain) => (
                <tr key={domain.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    <div className="flex items-center">
                      <FiGlobe className="mr-2 text-blue-500" />
                      {domain.domain}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={domain.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {domain.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {domain.expiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      {domain.status === "pending" && (
                        <button 
                          onClick={() => handleVerifyDomain(domain.id)}
                          className="text-green-600 hover:text-green-800"
                          title="Verify domain"
                        >
                          <FiCheck />
                        </button>
                      )}
                      <button 
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit domain"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteDomain(domain.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete domain"
                      >
                        <FiX />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Domain Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Add New Domain</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Domain Name</label>
                  <input
                    type="text"
                    name="domain"
                    value={newDomain.domain}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner Email</label>
                  <input
                    type="email"
                    name="owner"
                    value={newDomain.owner}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="owner@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={newDomain.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddDomain}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  disabled={!newDomain.domain || !newDomain.owner || !newDomain.expiryDate}
                >
                  Add Domain
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DomainManagement;