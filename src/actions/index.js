import {
    SET_STEP,
    SET_VALUE,
} from '../constants';

export const setValue = ({ name, value }) => ({
    type: SET_VALUE,
    payload: {
        name,
        value,
    },
});

export const setStep = (step) => ({
    type: SET_STEP,
    payload: step,
});
