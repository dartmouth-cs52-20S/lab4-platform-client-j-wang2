// keys for actiontypes
export const ActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    CREATE_POST: 'CREATE_POST',
};

export function fetchPosts(posts) {
    return {
        type: ActionTypes.FETCH_POSTS,
        payload: posts,
    };
}

export function createPost(post) {
    return {
        type: ActionTypes.CREATE_POST,
        payload: post,
    };
}

// export function deletePost(id, hsitory) {
//     return {
//         type: ActionTypes.DEL
//     }
// }
