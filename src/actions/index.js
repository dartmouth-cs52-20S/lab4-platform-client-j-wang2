// import { getServerPosts } from '../server-api';

import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=j_wang';

// keys for actiontypes
export const ActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
    DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
            }).catch((error) => {
                dispatch({ type: ActionTypes.ERROR_SET, error });
            });
    };
}

export function createPost(post, history) {
    console.log(post);
    return (dispatch) => {
        axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: ActionTypes.CREATE_POST, payload: post });
                history.push('/'); // FIX THIS
            }).catch((error) => {
                console.log(error);
                dispatch({ type: ActionTypes.ERROR_SET, error });
            });
    };
}

export function deletePost(id, history) {
    return (dispatch) => {
        axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
        .then((response) => {
            console.log(response);
            dispatch({ type: ActionTypes.DELETE_POST, payload: null });
            history.push('/');
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_SET, error });
        });
    };
}
