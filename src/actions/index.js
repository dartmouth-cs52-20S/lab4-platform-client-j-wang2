// import { getServerPosts } from '../server-api';

import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=j_wang';

// keys for actiontypes
export const ActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    FETCH_POST: 'FETCH_POST',
    UPDATE_POST: 'UPDATE_POST',
    DELETE_POST: 'DELETE_POST',
    CREATE_POST: 'CREATE_POST',
};

export function fetchPosts() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
            }).catch((error) => {
                console.log(error);
            });
    };
}

export function createPost(post, history) {
    console.log(post);
    return (dispatch) => {
        axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: ActionTypes.CREATE_POST, payload: post })
                .then(history.push('/'));
            }).catch((error) => {
                console.log(error);
            });
    };
}

export function updatePost(post, history) {
    console.log(post);
    return (dispatch) => {
        axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: ActionTypes.CREATE_POST, payload: post })
            .then(history.push('/'));
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function fetchPost(id) {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
            }).catch((error) => {
                console.log(error);
            });
    };
}


export function deletePost(id, history) {
    console.log(history);
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
