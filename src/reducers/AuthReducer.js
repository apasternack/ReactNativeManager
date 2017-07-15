import { EMAIL_CHANGED } from '../actions/types';

const INITITAL_STATE = { email: '' };

export default (state = INITITAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
        
        
        default:
            return state;
    }
};
