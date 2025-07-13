import { useState, useEffect, useCallback } from 'react';
import { userAPI } from '../services/api.js';

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userRequests, setUserRequests] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [domains, setDomains] = useState([]);

  // Create service request
  const createServiceRequest = useCallback(async (requestData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await userAPI.createServiceRequest(requestData);
      
      // Add the new request to the existing requests
      setUserRequests(prev => [response.data, ...prev]);
      
      return response.data;
    } catch (err) {
      console.error('Create service request error:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Authentication error - redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
        return;
      }
      setError(err.response?.data?.error || err.message || 'Failed to create service request');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch user's previous requests
  const fetchUserRequests = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await userAPI.getPreviousRequests();
      setUserRequests(response.data);
    } catch (err) {
      console.error('Fetch user requests error:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Authentication error - redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
        return;
      }
      setError(err.response?.data?.error || err.message || 'Failed to fetch user requests');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch user profile
  const fetchUserProfile = useCallback(async (userId) => {
    try {
      setLoading(true);
      setError(null);
      
      // For now, we'll use a mock profile since we don't have a specific endpoint
      // In a real app, you'd get the user ID from the token or pass it as parameter
      const mockProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      setUserProfile(mockProfile);
    } catch (err) {
      console.error('Fetch user profile error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch user profile');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch domains
  const fetchDomains = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await userAPI.getDomains();
      setDomains(response.data);
    } catch (err) {
      console.error('Fetch domains error:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Authentication error - redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
        return;
      }
      setError(err.response?.data?.error || err.message || 'Failed to fetch domains');
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => setError(null), []);

  return {
    // State
    loading,
    error,
    userRequests,
    userProfile,
    domains,
    
    // Actions
    createServiceRequest,
    fetchUserRequests,
    fetchUserProfile,
    fetchDomains,
    clearError
  };
}; 