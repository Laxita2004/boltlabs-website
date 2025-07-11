import { useState, useCallback } from 'react';

// Mock data for domains
const mockDomains = [
  { domain_id: 1, name: 'Web Development' },
  { domain_id: 2, name: 'Mobile Development' },
  { domain_id: 3, name: 'API Integration' },
  { domain_id: 4, name: 'Database Design' },
  { domain_id: 5, name: 'Cloud Services' },
];

// Mock user profile
const mockUserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Mock user requests
const mockUserRequests = [
  {
    req_id: 1,
    service: 'Website Redesign',
    domain: { name: 'Web Development' },
    request_date: '2024-01-15T10:30:00Z',
    status: 'Pending'
  },
  {
    req_id: 2,
    service: 'Mobile App Development',
    domain: { name: 'Mobile Development' },
    request_date: '2024-01-10T14:20:00Z',
    status: 'In Progress'
  },
  {
    req_id: 3,
    service: 'API Integration',
    domain: { name: 'API Integration' },
    request_date: '2024-01-05T09:15:00Z',
    status: 'Completed'
  }
];

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userRequests, setUserRequests] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [domains, setDomains] = useState([]);

  // Create service request (mock implementation)
  const createServiceRequest = async (requestData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mock request
      const newRequest = {
        req_id: Date.now(),
        service: requestData.service,
        domain: mockDomains.find(d => d.domain_id == requestData.domain_id),
        request_date: new Date().toISOString(),
        status: 'Pending'
      };
      
      // Add to existing requests
      setUserRequests(prev => [newRequest, ...prev]);
      
      return { data: newRequest };
    } catch (err) {
      console.error('Create service request error:', err);
      setError('Failed to create service request');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's previous requests (mock implementation)
  const fetchUserRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setUserRequests(mockUserRequests);
    } catch (err) {
      console.error('Fetch user requests error:', err);
      setError('Failed to fetch user requests');
    } finally {
      setLoading(false);
    }
  };

  // Fetch available domains (mock implementation)
  const fetchDomains = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setDomains(mockDomains);
    } catch (err) {
      console.error('Fetch domains error:', err);
      setError('Failed to fetch domains');
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile (mock implementation)
  const fetchUserProfile = async (userId = null) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setUserProfile(mockUserProfile);
    } catch (err) {
      console.error('Fetch user profile error:', err);
      setError('Failed to fetch user profile');
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