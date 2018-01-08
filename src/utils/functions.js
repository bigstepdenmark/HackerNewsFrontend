import axios from 'axios'

export function get(endpoint, config) {

  return axios.get(endpoint, config)
    .then(response => {
      return response.data;
    })
}

export function post(endpoint, data, config) {

  return axios.post(endpoint, data, config)
    .then(response => {
      return response.data;
    })
}
