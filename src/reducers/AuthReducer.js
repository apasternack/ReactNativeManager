import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
 } from '../actions/types';

const INITITAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: ''
};

export default (state = INITITAL_STATE, action) => {
    // console.log(action); //helpful for debugging actions hitting this reducer

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '' };
        default:
            return state;
    }
};
