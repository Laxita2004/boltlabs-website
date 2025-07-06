import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
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
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// User API endpoints (removed - using mock data instead)
// export const userAPI = {
//   // Service Requests
//   createServiceRequest: (data) => api.post('/users/requests', data),
//   getPreviousRequests: () => api.get('/users/requests/previous'),
//   
//   // Domains
//   getDomains: () => api.get('/users/domains'),
//   
//   // User Profile
//   getUserById: (userId) => api.get(`/users/${userId}`),
// };

// Admin API endpoints
export const adminAPI = {
  // Test endpoints (no auth required)
  testConnection: () => api.get('/admin/test'),
  healthCheck: () => api.get('/admin/health'),
  
  // Dashboard stats
  getDashboardStats: () => api.get('/admin/dashboard/stats'),
  
  // Domains
  getDomains: () => api.get('/admin/domains'),
  createDomain: (data) => api.post('/admin/domains', data),
  deleteDomain: (domainId) => api.delete(`/admin/domains/${domainId}`),
  
  // Members
  getMembers: () => api.get('/admin/members'),
  createMember: (data) => api.post('/admin/members', data),
  deleteMember: (memberId) => api.delete(`/admin/members/${memberId}`),
  
  // Service Requests
  getRequests: () => api.get('/admin/requests'),
  respondToRequest: (reqId, data) => api.post(`/admin/requests/${reqId}/respond`, data),
  
  // Services
  getServices: (params) => api.get('/admin/services', { params }),
  
  // Recent Activity
  getRecentActivity: () => api.get('/admin/activity'),
};

export default api; 