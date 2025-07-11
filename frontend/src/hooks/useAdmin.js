import { useState, useEffect } from 'react';
import { adminAPI } from '../services/api.js';

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dashboard data
  const [dashboardStats, setDashboardStats] = useState({
    totalClients: 0,
    activeProjects: 0,
    teamMembers: 0,
    completedProjects: 0
  });

  // Domain data
  const [domains, setDomains] = useState([]);
  const [members, setMembers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [services, setServices] = useState([]);

  // Test connection
  const testConnection = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.testConnection();
      console.log('Connection test successful:', response.data);
      return response.data;
    } catch (err) {
      console.error('Connection test failed:', err);
      setError(err.response?.data?.error || err.message || 'Failed to connect to server');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch dashboard stats
  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First test the connection
      await testConnection();
      
      // For now, we'll calculate stats from existing data
      // In a real app, you'd have a dedicated endpoint for this
      const [domainsRes, membersRes, requestsRes, servicesRes] = await Promise.all([
        adminAPI.getDomains(),
        adminAPI.getMembers(),
        adminAPI.getRequests(),
        adminAPI.getServices()
      ]);

      const stats = {
        totalClients: domainsRes.data.length,
        activeProjects: servicesRes.data.filter(s => s.status === 'ACTIVE').length,
        teamMembers: membersRes.data.length,
        completedProjects: servicesRes.data.filter(s => s.status === 'COMPLETED').length
      };

      setDashboardStats(stats);
    } catch (err) {
      console.error('Dashboard stats error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  // Fetch domains
  const fetchDomains = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getDomains();
      setDomains(response.data);
    } catch (err) {
      console.error('Fetch domains error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch domains');
    } finally {
      setLoading(false);
    }
  };

  // Create domain
  const createDomain = async (domainData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.createDomain(domainData);
      setDomains(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error('Create domain error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to create domain');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete domain
  const deleteDomain = async (domainId) => {
    try {
      setLoading(true);
      setError(null);
      await adminAPI.deleteDomain(domainId);
      setDomains(prev => prev.filter(domain => domain.domain_id !== domainId));
    } catch (err) {
      console.error('Delete domain error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to delete domain');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch members
  const fetchMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getMembers();
      setMembers(response.data);
    } catch (err) {
      console.error('Fetch members error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch members');
    } finally {
      setLoading(false);
    }
  };

  // Create member
  const createMember = async (memberData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.createMember(memberData);
      setMembers(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error('Create member error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to create member');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete member
  const deleteMember = async (memberId) => {
    try {
      setLoading(true);
      setError(null);
      await adminAPI.deleteMember(memberId);
      setMembers(prev => prev.filter(member => member.member_id !== memberId));
    } catch (err) {
      console.error('Delete member error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to delete member');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch requests
  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getRequests();
      setRequests(response.data.requests || response.data);
    } catch (err) {
      console.error('Fetch requests error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch requests');
    } finally {
      setLoading(false);
    }
  };

  // Respond to request
  const respondToRequest = async (reqId, responseData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.respondToRequest(reqId, responseData);
      setRequests(prev => prev.filter(req => req.req_id !== reqId));
      return response.data;
    } catch (err) {
      console.error('Respond to request error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to respond to request');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch services
  const fetchServices = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getServices(params);
      setServices(response.data.services || response.data);
    } catch (err) {
      console.error('Fetch services error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  // Clear error
  const clearError = () => setError(null);

  return {
    // State
    loading,
    error,
    dashboardStats,
    domains,
    members,
    requests,
    services,
    
    // Actions
    testConnection,
    fetchDashboardStats,
    fetchDomains,
    createDomain,
    deleteDomain,
    fetchMembers,
    createMember,
    deleteMember,
    fetchRequests,
    respondToRequest,
    fetchServices,
    clearError
  };
}; 