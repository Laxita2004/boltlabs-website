import axios from 'axios';
import { BACKEND_URL } from '../config/config';

const BASE_URL = `${BACKEND_URL}/api`;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true //as it is important for CORS and cookies
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
