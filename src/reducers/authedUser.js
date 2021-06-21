import {LOGIN_USER, LOGOUT_USER} from "../actions/authedUser";

export default function auth(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        case LOGOUT_USER:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        default:
            return state;
    }
}