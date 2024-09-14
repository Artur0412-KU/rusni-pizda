import axios from 'axios';

const url = 'https://russianwarship.rip/api/v2';

export const warInfo = async () => {
    const configObj = {
        method: 'get',
        url: `${url}/war-info`,
    };

    const response = await axios(configObj);
    return response.data;
};

export const statistics = async () => {
    const configObj = {
        method: 'get',
        url: `${url}/statistics/latest`,
    };

    const response = await axios(configObj);
    return response.data;
};

export const terms = async () => {
    const configObj = {
        method: 'get',
        url: `${url}/terms/ua`,
    };

    const response = await axios(configObj);
    return response.data;
};
