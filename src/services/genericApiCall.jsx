// src/utils/api.js
import axios from 'axios';
import {TMDB_BASE_API_URL, TMDB_TOKEN} from '../utils/constants/tmdbApi'


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: TMDB_BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TMDB_TOKEN}`,
  },
});

// Function for making GET requests
export const getApi = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return { data: response.data, error: null };
  } catch (error) {
    // Check if the error is due to a response (404, 500, etc.)
    const errorMessage = error.response
      ? `Error: ${error.response.status} - ${error.response.data}`
      : `Error: ${error.message}`;
    return { data: null, error: new Error(errorMessage) };
  }
};
