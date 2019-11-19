import { SET_INSTRUMENTS } from '../actionTypes/instruments';

const initialState = {
    instruments: {

    }
};

export default  (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case SET_INSTRUMENTS :
            return {
                ...state,
                instruments: {...payload}
            }
        default :
            return state;
    }
}