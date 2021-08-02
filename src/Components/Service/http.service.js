import axios from 'axios';

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export class HttpService {
    /**
     * Create a post request
     * @param url string
     * @param data json object
     * @param headers json object
     */
    post(url, data, headers) {
        return axios.post(url, data, {
            headers: { ...defaultHeaders, ...headers }
        })
    }

    get(url, headers) {
        return axios.get(url, {
            headers: { ...defaultHeaders, ...headers }
        })
    }
}