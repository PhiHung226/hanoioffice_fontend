import axios from 'axios';

import getAuth from '../common/getAuth';
import {COOKIE_CS_OFFICE_ACCESS_TOKEN, removeCookie} from './cookies';

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'http://localhost:8080',
  timeout: 60000,
});

axiosInstance.interceptors.request.use(config => {
  const {csOfficeToken} = getAuth();
  if (csOfficeToken) {
    config.headers['Authorization'] = `Bearer ${csOfficeToken}`;
    // config.headers('Access-Control-Allow-Origin', '*');
    // config.headers('Access-Control-Allow-Headers', 'X-Requested-With');
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response?.status === 401) {
    removeCookie(COOKIE_CS_OFFICE_ACCESS_TOKEN);
    window.location = '/auth/login';
  }
  return Promise.reject(error);
});
