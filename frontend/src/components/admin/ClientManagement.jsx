
import React, { useState } from "react";
import { FiSearch, FiCheck, FiStar, FiMoreVertical, FiPlus, FiX, FiChevronDown } from "react-icons/fi";

const ClientManagement = () => {
  // Sample initial client data
  const initialClients = [
    {
      id: 1,
      company: "TechStart Solutions",
      contact: "John Smith",
      email: "john@techstart.com",
      phone: "+1-555-0123",
      status: "active",
      projects: 3,
      satisfaction: 4.95,
      lastContact: "2024-01-15"
    },
    {
      id: 2,
      company: "Digital Marketing Pro",
      contact: "Sarah Johnson",
      email: "sarah@digitalmp.com",
      phone: "+1-555-0124",
      status: "active",
      projects: 1,
      satisfaction: 4.95,
      lastContact: "2024-01-14"
    },
    {
      id: 3,
      company: "ABC Restaurant Chain",
      contact: "Mike Wilson",
      email: "mike@abcrestaurant.com",
      phone: "+1-555-0125",
      status: "amplified",
      projects: 5,
      satisfaction: 4.95,
      lastContact: "2024-01-10"
    }
  ];

  // State management
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    status: "active",
    projects: 0,
    satisfaction: 0,
    lastContact: new Date().toISOString().split('T')[0]
  });

  // Filter clients based on search and status
  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Handle adding new client
  const handleAddClient = () => {
    const newId = Math.max(...clients.map(c => c.id), 0) + 1;
    setClients([...clients, { ...newClient, id: newId }]);
    setIsModalOpen(false);
    setNewClient({
      company: "",
      contact: "",
      email: "",
      phone: "",
      status: "active",
      projects: 0,
      satisfaction: 0,
      lastContact: new Date().toISOString().split('T')[0]
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient(prev => ({ ...prev, [name]: value }));
  };

  // Handle status change for existing client
  const handleStatusChange = (id, newStatus) => {
    setClients(clients.map(client => 
      client.id === id ? { ...client, status: newStatus } : client
    ));
  };

  // Handle delete client
  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">BoltLabs Admin</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Client Management</h2>
        <p className="text-gray-500">Manage your clients and their projects</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Clients ({filteredClients.length})</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Client
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
              placeholder="Search clients..."
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
              <option value="active">Active ($100)</option>
              <option value="amplified">Amplified</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Clients Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact info</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-gray-900">{client.company}</div>
                    <div className="text-gray-500">{client.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-1">@</span>
                      <span className="text-gray-900">{client.email}</span>
                    </div>
                    <div className="text-gray-500">{client.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={client.status}
                      onChange={(e) => handleStatusChange(client.id, e.target.value)}
                      className={`px-2 py-1 text-xs font-medium rounded-full focus:outline-none focus:ring ${
                        client.status === "amplified" 
                          ? "bg-purple-100 text-purple-800" 
                          : client.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <option value="active">Active ($100)</option>
                      <option value="amplified">Amplified</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="font-bold text-gray-900">{client.satisfaction}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.lastContact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => handleStatusChange(client.id, "active")}
                        className="text-green-600 hover:text-green-800"
                        title="Mark as active"
                      >
                        <FiCheck />
                      </button>
                      <button
                        onClick={() => handleDeleteClient(client.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete client"
                      >
                        <FiX />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FiMoreVertical />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Add New Client</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={newClient.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                  <input
                    type="text"
                    name="contact"
                    value={newClient.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newClient.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={newClient.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={newClient.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active ($100)</option>
                    <option value="amplified">Amplified</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Projects</label>
                    <input
                      type="number"
                      name="projects"
                      value={newClient.projects}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Satisfaction</label>
                    <input
                      type="number"
                      name="satisfaction"
                      value={newClient.satisfaction}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                  </div>
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
                  onClick={handleAddClient}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  disabled={!newClient.company || !newClient.contact || !newClient.email}
                >
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientManagement;