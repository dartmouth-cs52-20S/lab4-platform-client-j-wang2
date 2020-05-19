import { ActionTypes } from '../actions';

const PostReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload };
    case ActionTypes.FETCH_POST:
      return { current: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
