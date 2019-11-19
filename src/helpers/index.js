import axios from "axios";

export const getInstruments = async (page) => {
    return axios.get(`https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page}`)
};
