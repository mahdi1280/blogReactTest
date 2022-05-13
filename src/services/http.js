import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export function get(url,config={}) {
    return axios.get(url,config);
}

export function post(url,config={}) {
    return axios.post(url,config);
}

export function del(url,config={}) {
    return axios.delete(url,config);
}

export function put(url,config={}) {
    return axios.put(url,config);
}
