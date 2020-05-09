import { ActionTypes } from '../actions';

const PostReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { posts: action.payload };
    // case ActionTypes.CREATE_POST:
    default:
      return state;
  }
};

export default PostReducer;
