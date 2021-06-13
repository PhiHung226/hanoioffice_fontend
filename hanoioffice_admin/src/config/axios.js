import axios from 'axios';

import getAuth from '../common/getAuth';
import { COOKIE_CS_OFFICE_ACCESS_TOKEN, removeCookie } from './cookies';

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'http://localhost:3000',
  timeout: 60000,
});

axiosInstance.interceptors.request.use(config => {
  const { csOfficeToken } = getAuth();
  if (csOfficeToken) {
    config.headers[ 'Authorization' ] = `Bearer ${csOfficeToken}`;
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
