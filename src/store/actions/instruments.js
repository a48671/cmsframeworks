import { SET_INSTRUMENTS } from '../actionTypes/instruments';

export const setInstrument = (instruments) => ({
    type: SET_INSTRUMENTS,
    payload: instruments
});