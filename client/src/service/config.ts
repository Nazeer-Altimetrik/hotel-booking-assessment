import axios from "axios";

export const BASEURL = 'http://localhost:3001/api'

export const axiosInstance = axios.create({
    baseURL: BASEURL,
});

axiosInstance.interceptors.response.use(
  response => {
    
    if (response.data && response.data.data) {
      response.data = response.data.data;
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

