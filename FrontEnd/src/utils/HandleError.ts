import axios from 'axios';

export const handleError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            return error.response.data?.detail 
            || error.response.data.message 
            || `Ошибка ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            return 'Сервер недоступен. Проверьте подключение к интернету.';
        }
        return error.message;
    }
    if (error instanceof Error) {
        return error.message;
    }
return 'Произошла неизвестная ошибка';
}