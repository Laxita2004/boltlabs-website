import axios from "axios";
import { BACKEND_URL } from "../config/config";


const BASE_URL = `${BACKEND_URL}/api/member`; // 👈 use /api/member to match backend

export const getCurrentTask = (token) =>
  axios.get(`${BASE_URL}/tasks/current`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getTaskHistory = (token, cursor = null, limit = 10) =>
  axios.get(`${BASE_URL}/tasks/history`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { cursor, limit },
  });

export const getTaskStats = (token, dateRange = 30) =>
  axios.get(`${BASE_URL}/tasks/stats`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { dateRange },
  });
