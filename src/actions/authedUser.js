import {getUser} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        authenticated: true,
       	loggedInUser: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        authenticated: null,
        loggedInUser: null
    }
}

export function handleLoginUser(id) {
    return (dispatch) => {
        dispatch(showLoading());
        getUser(id).then((user) => {
            dispatch(loginUser(user));
            dispatch(hideLoading());
        });
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(logoutUser());
        dispatch(hideLoading());
    }
}