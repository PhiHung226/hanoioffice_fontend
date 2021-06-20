import { axiosInstance } from '../../../config/axios';

export const getListCustomer = () => {
  const getList = async () => {
    const { data } = await axiosInstance.get('/customers-customers-customers');
    return data;
  };
  const getDetail = async () => {
    const { data } = await axiosInstance.get('/customers-customers-customers');
    return data;
  };
  return { getList, getDetail };
};
