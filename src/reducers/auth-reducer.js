import { ActionTypes } from '../actions';

const AuthReducer = (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_USER:
            return { authenticated: true };
        case ActionTypes.DEAUTH_USER:
            return { authenticated: false };
        case ActionTypes.AUTH_ERRRO:
            return { authenticated: false };
        default:
            return state;
    }
};

export default AuthReducer;
