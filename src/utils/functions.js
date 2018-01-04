import axios from 'axios'


export function get(endpoint) {

  return axios.get(endpoint)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log('-----error-------');
      console.log(error);
    })
}
