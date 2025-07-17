import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
   withCredentials: true, // Add this line for CORS with credentials
   timeout: 10000,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      console.error('Network Error:', error);
      // Handle network errors (backend down, CORS issues, etc.)
      return Promise.reject({ 
        message: 'Unable to connect to server. Please try again later.' 
      });
    }
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
// User API endpoints
export const userAPI = {
  // Service Requests
  createServiceRequest: (data) => api.post('/users/requests', data),
  getPreviousRequests: () => api.get('/users/requests/previous'),
  
  // Domains
  getDomains: () => api.get('/users/domains'),
  
  // User Profile
  getUserById: (userId) => api.get(`/users/${userId}`),
};
=======
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5

// Admin API endpoints
export const adminAPI = {
  // Test endpoints (no auth required)
  testConnection: () => api.get('api/admin/test'),
  healthCheck: () => api.get('api/admin/health'),

  // Dashboard stats
  getDashboardStats: () => api.get('api/admin/dashboard/stats'),

  // Domains    
  getDomains: () => api.get('api/admin/domains'),
  createDomain: (data) => api.post('api/admin/domains', data),
  deleteDomain: (domainId) => api.delete(`api/admin/domains/${domainId}`),

  // Members
  getMembers: () => api.get('api/admin/members'),
  createMember: (data) => api.post('api/admin/members', data),
  deleteMember: (memberId) => api.delete(`api/admin/members/${memberId}`),

  // Service Requests
  getRequests: () => api.get('api/admin/requests'),
  respondToRequest: (reqId, data) => api.post(`api/admin/requests/${reqId}/respond`, data),

  // Services
  getServices: (params) => api.get('api/admin/services', { params }),

  // Recent Activity
  getRecentActivity: () => api.get('api/admin/activity'),
};

export default api; 