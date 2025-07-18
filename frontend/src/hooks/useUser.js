/////useuser 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/config';

export const useUser = () => {
  // ✅ Immediately available info from localStorage
  const [currentUser, setCurrentUser] = useState({
    id: localStorage.getItem('user_id'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
  });

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
      throw err;
    } finally {
      setLoading(false);
    }
  };

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
  };
};
