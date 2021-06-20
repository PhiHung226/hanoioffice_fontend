import { axiosInstance } from '../../../config/axios';

export const getListBranchs = () => {
  const getList = async () => {
    const { data } = await axiosInstance.get('/branchs-branchs-branchs');
    return data;
  };
  const getDetail = async () => {
    const { data } = await axiosInstance.get('/branchs-branchs-branchs');
    return data;
  };
  return { getList, getDetail };
};
