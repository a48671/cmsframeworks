import axios from "axios";

export const getInstruments = async (page, sort, sort_direction) => {
    return axios.get(`https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms${sort ? '&sort=' + sort : ''}${sort_direction ? '&sort_direction=' + sort_direction : ''}&page=${page}`);
};
