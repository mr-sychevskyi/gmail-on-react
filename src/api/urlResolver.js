// @flow

const apiKey = () => process.env.API_KEY;
const apiRoot = () => 'https://api.mlab.com/api/1/databases/messages/collections/';

export default (url: string, extraParams: {}) => {
    const params = {...extraParams, apiKey: apiKey()};
    return `${apiRoot()}${url}?${Object.entries(params).map(([key, value]) => `${key}=${String(value)}`).join('&')}`;
};
