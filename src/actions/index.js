// import { getServerPosts } from '../server-api';

import axios from 'axios';

// edited ROOT_URL and API_KEY for server development

const ROOT_URL = 'https://wang-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://platform.cs52.me/api'; // from lab4
const API_KEY = '';
// const API_KEY = '?key=j_wang'; // from lab4

// keys for actiontypes
export const ActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    FETCH_POST: 'FETCH_POST',
    UPDATE_POST: 'UPDATE_POST',
    DELETE_POST: 'DELETE_POST',
    CREATE_POST: 'CREATE_POST',
    AUTH_USER: 'AUTH_USER',
    DEAUTH_USER: 'DEAUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR',
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
        axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } })
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
        axios.put(`${ROOT_URL}/posts/${post.id}`, post, { headers: { authorization: localStorage.getItem('token') } })
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
        axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
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
        axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } })
        .then((response) => {
            console.log(response);
            dispatch({ type: ActionTypes.DELETE_POST, payload: null });
            history.push('/');
        }).catch((error) => {
            dispatch({ type: ActionTypes.ERROR_SET, error });
        });
    };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
    console.log('pre dispatch');
    return (dispatch) => {
        console.log('in dispatch');
        localStorage.removeItem('token');
        dispatch({ type: ActionTypes.DEAUTH_USER });
        history.push('/');
    };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
    return {
        type: ActionTypes.AUTH_ERROR,
        message: error,
    };
}


export function signinUser({ email, password }, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, { email, password })
        .then((response) => {
            dispatch({ type: ActionTypes.AUTH_USER });
            console.log('here in signInUser');
            localStorage.setItem('token', response.data.token);
            history.push('/');
        }).catch((error) => {
            // dispatch({ type: ActionTypes.AUTH_ERROR });
            dispatch(authError(`Sign In Failed: ${error.response.data}`));
        });
    };
}


export function signupUser({ email, username, password }, history) {
    console.log(email);
    console.log(username);
    console.log(password);
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, { email, username, password })
        .then((response) => {
            console.log(response);
            dispatch({ type: ActionTypes.AUTH_USER });
            console.log('signing me up');
            localStorage.setItem('token', response.data.token);
            history.push('/');
        }).catch((error) => {
            // dispatch({ type: ActionTypes.AUTH_ERROR });
            dispatch(authError(`Sign In Failed: ${error.response.data}`));
        });
    };
}
