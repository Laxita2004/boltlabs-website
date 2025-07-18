

import React, { useEffect, useState } from 'react';
import { adminAPI } from '../../services/api';

const DomainManagement = () => {
  const [domains, setDomains] = useState([]);
  const [newDomain, setNewDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch all domains
  const fetchDomains = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await adminAPI.getDomains();
      setDomains(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to fetch domains');
      setDomains([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  // createe domain
  const handleAddDomain = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!newDomain.trim()) return;
    try {
      await adminAPI.createDomain({ name: newDomain });
      setSuccess('Domain added successfully!');
      setNewDomain('');
      fetchDomains();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to add domain');
    }
  };

  // Delete domain
  const handleDelete = async (domain_id) => {
    setError('');
    setSuccess('');
    try {
      await adminAPI.deleteDomain(domain_id);
      setSuccess('Domain deleted successfully!');
      fetchDomains();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to delete domain');
    }
  };

  return (
    <div className="bg-[#19202A] rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-white">Domain Management</h2>
      <form onSubmit={handleAddDomain} className="flex gap-4 mb-8">
        <input
          type="text"
          value={newDomain}
          onChange={e => setNewDomain(e.target.value)}
          placeholder="Enter new domain name"
          className="flex-1 bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2 rounded-lg"
        >
          Add Domain
        </button>
      </form>

      {error && <div className="text-red-400 mb-4">{error}</div>}
      {success && <div className="text-green-400 mb-4">{success}</div>}

      {loading ? (
        <div className="text-gray-400">Loading domains...</div>
      ) : (
        <ul className="space-y-4">
          {Array.isArray(domains) && domains.length === 0 ? (
            <li className="text-gray-400">No domains found.</li>
          ) : (
            domains.map(domain => (
              <li key={domain.domain_id} className="flex justify-between items-center bg-[#232B39] rounded-lg px-4 py-3 border border-gray-700/50">
                <span className="text-white font-medium">{domain.name}</span>
                <button
                  onClick={() => handleDelete(domain.domain_id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm font-semibold"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default DomainManagement;
