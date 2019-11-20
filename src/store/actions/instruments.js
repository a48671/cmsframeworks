import { SET_INSTRUMENTS, SET_FAVORITES } from '../actionTypes/instruments';

export const setInstrument = instruments => ({
    type: SET_INSTRUMENTS,
    payload: instruments
});

export const setFavorites = favorites => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
    return({
        type: SET_FAVORITES,
        payload: favorites
    });
}