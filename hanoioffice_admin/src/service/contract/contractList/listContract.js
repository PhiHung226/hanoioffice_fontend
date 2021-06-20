import { axiosInstance } from '../../../config/axios';

export const getListContract = () => {
  const getList = async () => {
    const { data } = await axiosInstance.get('/employees-employees-employees');
    return data;
  };
  const getDetail = async () => {
    const { data } = await axiosInstance.get('/employees-employees-employees');
    return data;
  };
  return { getList, getDetail };
};
