import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMarketData = async () => {
  try {
    const response = await axios.get(`${API_URL}/market-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

export const fetchMarketDataBySymbol = async (symbol: string) => {
  try {
    const response = await axios.get(`${API_URL}/market-data/${symbol}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching market data for symbol ${symbol}:`, error);
    throw error;
  }
};
