import axios from "axios";

// ✅ Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  timeout: 10000,
});

// ✅ Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK") {
      console.error("Network Error:", error);
      // Handle network errors (backend down, CORS issues, etc.)
      return Promise.reject({
        message: "Unable to connect to server. Please try again later.",
      });
    }
    console.error("API Error:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// 👤 User API
export const userAPI = {
  // Service Requests
  createServiceRequest: (data) => api.post("/users/requests", data),
  getPreviousRequests: () => api.get("/users/requests/previous"),

  getDomains: () => api.get("/users/domains"),
  getUserById: (userId) => api.get(`/users/${userId}`),
};

// Admin API
export const adminAPI = {
  // Test & Health
  testConnection: () => api.get('/api/admin/test'),
  healthCheck: () => api.get('/api/admin/health'),

  // Dashboard
  getDashboardStats: () => api.get('/api/admin/dashboard/stats'),

  // Domains
  getDomains: () => api.get('/api/admin/domains'),
  createDomain: (data) => api.post('/api/admin/domains', data),
  deleteDomain: (domainId) => api.delete(`/api/admin/domains/${domainId}`),
  getDomainMembers: (domainId) => api.get(`/api/admin/domains/${domainId}/members`),

  // Members
  getMembers: () => api.get('/api/admin/members'),
  createMember: (data) => api.post('/api/admin/members', data),
  deleteMember: (memberId) => api.delete(`/api/admin/members/${memberId}`),
  getMemberById: (memberId) => api.get(`/api/admin/members/${memberId}`), 
  // Requests
  getRequests: () => api.get('/api/admin/requests'),
  respondToRequest: (reqId, data) => api.post(`/api/admin/requests/${reqId}/respond`, data),

  // Services
  getServices: (params) => api.get('/api/admin/services', { params }),

  // Clients
  createClient: (data) => api.post('api/admin/clients', data),

  // Admin Profile
  getProfile: () => api.get('api/admin/profile'),
  updateProfile: (data) => api.put('api/admin/profile', data),
  updatePassword: (data) => api.put('api/admin/password', data),

  // Activity
  getRecentActivity: () => api.get('/api/admin/activity'),
};

export default api;
