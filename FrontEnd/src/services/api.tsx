import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.warn('No acess token found');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
