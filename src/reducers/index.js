import { combineReducers } from 'redux';

import {
    SET_STEP,
    SET_VALUE,
} from '../constants';

const form = (state = {}, action) => {
    switch (action.type) {
        case SET_VALUE:
            const { name, value } = action.payload;
            
            return {
                ...state,
                [name]: value,
            };
            
        default:
            return state;
    }
};

const step = (state = 0, action) => {
    switch (action.type) {
        case SET_STEP:
            return action.payload;
            
        default:
            return state;
    }
};

export default combineReducers({
    form,
    step,
});