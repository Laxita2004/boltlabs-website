<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';
import { userAPI } from '../services/api.js';
=======
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5

export const useUser = () => {
  // ✅ Immediately available info from localStorage
  const [currentUser, setCurrentUser] = useState({
    id: localStorage.getItem('user_id'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
  });

<<<<<<< HEAD
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
=======
  // ✅ Existing state you had
  const [domains, setDomains] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [userRequests, setUserRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  // ✅ Now you have currentUser immediately
  //    AND can still fetch full fresh user profile from server
  const fetchUserProfile = async (id = currentUser.id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/user/${id}`, authHeader());
      setUserProfile(res.data);

      // 🪄 Also update local state with fresh data
      setCurrentUser(prev => ({
        ...prev,
        name: res.data.name,
        email: res.data.email
      }));
    } catch (err) {
      console.error("Fetch profile error:", err);
      setError('Failed to fetch profile.');
    } finally {
      setLoading(false);
    }
  };

  const fetchDomains = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/user/domains`, authHeader());
      setDomains(res.data);
    } catch (err) {
      console.error("Fetch domains error:", err);
      setError('Failed to fetch domains.');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserRequests = async (id = currentUser.id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/user/requests/previous`, authHeader());
      setUserRequests(res.data);
    } catch (err) {
      console.error("Fetch requests error:", err);
      setError('Failed to fetch requests.');
    } finally {
      setLoading(false);
    }
  };

  const createServiceRequest = async (payload) => {
    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/api/user/requests`, payload, authHeader());
      await fetchUserRequests(); // Refresh
    } catch (err) {
      console.error("Create request error:", err);
      setError('Failed to create service request.');
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

<<<<<<< HEAD
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
=======
  const clearError = () => setError('');

  return {
    // 🔥 Instantly available
    currentUser,

    // ✅ Your existing data
    userProfile,
    userRequests,
    domains,

    // ✅ Loading / errors
    loading,
    error,
    clearError,

    // ✅ Functions
    fetchUserProfile,
    fetchDomains,
    fetchUserRequests,
    createServiceRequest,
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5
  };
};