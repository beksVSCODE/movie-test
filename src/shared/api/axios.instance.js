import axios from 'axios';
import { API_CONFIG } from '../config/api.config';

export const axiosInstance = axios.create({
    baseURL: API_CONFIG.baseURL,
    params: {
        api_key: API_CONFIG.apiKey,
    },
});

// Interceptors для обработки ошибок
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);
