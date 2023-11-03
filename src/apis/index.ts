import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/',
});

const Http = {
  get,
  post,
};

function get<Response = unknown, Params = unknown>(url: string, params?: Params) {
  return axios
    .get<Response>(url, {
      params,
    })
    .then(({ data }) => data);
}

function post<Response = unknown, Payload = unknown>(url: string, body?: Payload) {
  return axios.post<Response>(url, body).then(({ data }) => data);
}

export default Http;
