import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchWatchlist = async () => {
  try {
    const response = await axios.get(`${API_URL}/watchlist`);
    return response.data;
  } catch (error) {
    console.error('Error fetching watchlist:', error);
    throw error;
  }
};

export const addItemToWatchlist = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/watchlist/items`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding item to watchlist:', error);
    throw error;
  }
};

export const removeItemFromWatchlist = async (itemId) => {
  try {
    const response = await axios.delete(`${API_URL}/watchlist/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing item from watchlist:', error);
    throw error;
  }
};
