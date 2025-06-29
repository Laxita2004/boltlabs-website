import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Adjust based on your backend URL

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
