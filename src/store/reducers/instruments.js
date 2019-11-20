import {SET_FAVORITES, SET_INSTRUMENTS} from '../actionTypes/instruments';

const initialState = {
    instruments: {},
    favorites: []
};

export default  (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case SET_INSTRUMENTS :
            return {
                ...state,
                instruments: {...payload}
            };
        case SET_FAVORITES :
            return {
                ...state,
                favorites: {...payload}
            };
        default :
            return state;
    }
}