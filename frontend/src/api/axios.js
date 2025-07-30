import axios from 'axios';
import { BACKEND_URL } from '../../config/config';


const BASE_URL = import.meta.env.MODE === 'development' ? `${BACKEND_URL}/api` : '/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
