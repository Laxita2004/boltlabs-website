import axios from 'axios';
import { BACKEND_URL } from '../../config/config'; // Adjust the import path as needed

const instance = axios.create({
  baseURL: `${BACKEND_URL}/api`, // Update as needed
  headers: {
    'Content-Type': 'application/json'
  }
});

// Automatically include token if present
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
