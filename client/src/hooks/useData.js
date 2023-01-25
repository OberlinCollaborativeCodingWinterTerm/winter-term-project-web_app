import {useAuthContext} from "./useAuthContext";

export const useData = () => {
    const auth = useAuthContext();
    const token = auth.user?.token;

    const getCourseList = async(userId) => {
        if (!userId) {
            userId = auth.user?._id;
        }
        return await (await fetch('http://localhost:5000/user/course/list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId, token})
        })).json();
    }

    const getUserData = async(userId) => {
        if (!userId) {
            userId = auth.user?._id;
        }
        return await (await fetch('http://localhost:5000/user/data', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId, token})
        })).json();
    }

    const getPostData = async(id) => {
        return await (await fetch('http://localhost:5000/post/get', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, token})
        })).json();
    }

    const getPostList = async(filters) => {
        return await (await fetch('http://localhost:5000/post/get-list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...filters, token})
        })).json();
    }

    return {getUserData, getPostData, getPostList, getCourseList};
}