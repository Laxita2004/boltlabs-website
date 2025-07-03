import { useState, useCallback } from 'react';
import { userAPI } from '../services/api.js';

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userRequests, setUserRequests] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [domains, setDomains] = useState([]);

  // Create service request
  const createServiceRequest = async (requestData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await userAPI.createServiceRequest(requestData);
      // Refresh the requests list after creating a new request
      await fetchUserRequests();
      return response.data;
    } catch (err) {
      console.error('Create service request error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to create service request');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's previous requests
  const fetchUserRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userAPI.getPreviousRequests();
      setUserRequests(response.data);
    } catch (err) {
      console.error('Fetch user requests error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch user requests');
    } finally {
      setLoading(false);
    }
  };

  // Fetch available domains
  const fetchDomains = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userAPI.getDomains();
      setDomains(response.data);
    } catch (err) {
      console.error('Fetch domains error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch domains');
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile
  const fetchUserProfile = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await userAPI.getUserById(userId);
      setUserProfile(response.data);
    } catch (err) {
      console.error('Fetch user profile error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch user profile');
    } finally {
      setLoading(false);
    }
  };

  // Clear error
  const clearError = useCallback(() => setError(null), []);

  return {
    loading,
    error,
    userRequests,
    userProfile,
    domains,
    createServiceRequest,
    fetchUserRequests,
    fetchDomains,
    fetchUserProfile,
    clearError,
  };
}; 