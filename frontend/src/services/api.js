import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8080',
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