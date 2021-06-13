import { axiosInstance } from '../../config/axios';

export const getAccount = async () => {
  const { data } = await axiosInstance.get('/auth-login');
  return data;
};

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get('/user-me');
  return data;
};