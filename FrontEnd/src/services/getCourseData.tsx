import api from "./api";

interface CourseDataProps {
    id: string,
    title: string,
    description: string,
    cover: string | null,
}

const getCourseData = {
    getAll: async(): Promise<CourseDataProps[]> => {
        const response = await api.get('get_course_data/');
        return response.data.courses
    }
}

export default getCourseData