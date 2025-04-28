import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const get = async (endpoint: string, params = {}) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const post = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const put = async (endpoint: string, data: any) => {
  try {
    const response = await axios.put(`${API_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const del = async (endpoint: string) => {
  try {
    const response = await axios.delete(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
