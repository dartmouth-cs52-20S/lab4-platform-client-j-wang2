// import { getServerPosts } from '../server-api';

import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = 'j_wang';

// keys for actiontypes
export const ActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
};

export function fetchPosts() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts?key=${API_KEY}`)
        // axios.get('https://platform.cs52.me/api/posts?key=j_wang')
            .then((response) => {
                console.log(response);
                dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
            }).catch((error) => {
                dispatch({ type: ActionTypes.ERROR_SET, error });
            });
    };
}

export function createPost(post, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, post)
            .then((response) => {
                console.log(response);
                dispatch({ type: ActionTypes.CREATE_POST, payload: post });
                history.push('/');
            }).catch((error) => {
                dispatch({ type: ActionTypes.ERROR_SET, error });
            });
    };
}

// export function deletePost(id, history) {
//     return {
//         type: ActionTypes.DEL
//     }
// }
