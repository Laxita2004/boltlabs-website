import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const fetchDomainMembers = async (domain) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team/${domain}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching domain members:', error);
    throw error;
  }
};

export const fetchMemberDetails = async (domain, memberId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team/${domain}/${memberId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching member details:', error);
    throw error;
  }
};