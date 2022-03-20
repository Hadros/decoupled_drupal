import axios from "axios";

const baseUrl = 'http://drupal9.home:8002/jsonapi';

const headers = {
  'Content-Type': 'application/vnd.api+json',
  'Authorization': 'Basic ' + btoa("admin:111")
}

const request = async ( type, url, requestData ) => {
  //const { type, url, requestData } = params;
  if (type === 'get') {
    return axios.get(
      baseUrl + url,
      { headers: headers }
    )
  }
  else if (type === 'post') {
    return axios.post(
      baseUrl + url,
      requestData,
      { headers: headers }
    )
  }
}

const API = {
  async get(url) {
    console.log(url);
    return request('get', url, {});
  }
}

export default API;