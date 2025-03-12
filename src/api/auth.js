import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/auth/login'; 

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      console.log('Login successful! Token saved.');
      return response.data;
    } else {
      throw new Error('No token received');
    }
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
    localStorage.removeItem('authToken');
    console.log('Logged out. Token removed.');
  };