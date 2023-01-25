import {useAuthContext} from "./useAuthContext";

export const useCourseData = () => {
    const auth = useAuthContext();
    const token = auth.user?.token;

    const getCourseId = async(department, number) => {
        return await (await fetch('http://localhost:5000/course/get-id', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({department, number, token})
        })).json();
    }

    const getCourseData = async(courseId) => {
        return await (await fetch('http://localhost:5000/course/get-data', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({courseId, token})
        })).json();
    }

    return {getCourseId, getCourseData};
}