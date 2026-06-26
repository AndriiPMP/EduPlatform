import axios from "axios";
import { useNavigate } from "react-router-dom";


const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
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

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;
        const navigate = useNavigate();
        
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

        try{ 
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/token/refresh/`,
                {},
                { withCredentials: true}
            );
            localStorage.setItem('access_token', data.acess);
            originalRequest.headers.Authorization = `Bearer ${data.acess}`;
            return api(originalRequest);
        } catch (refreshError) {
            console.error('Refresh failed', refreshError);
            localStorage.removeItem('accessToken');
            navigate('/login');
            return Promise.reject(refreshError);
        }
        }
    }
)