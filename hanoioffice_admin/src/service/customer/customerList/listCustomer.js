import { axiosInstance } from '../../../config/axios';

export const getListCustomer = () => {
  const getList = async (value) => {
    const {page = '1', pageLimit = '15', strSearch ='', nameRoom='',
      numberPeople='', branchRoom='', kindOfRoom=''}= value;
    const param = `page=${page}&pageLimit=${pageLimit}&strSearch=${strSearch}`+
      `&nameRoom=${nameRoom}&numberPeople=${numberPeople}&branchRoom=${branchRoom}&kindOfRoom=${kindOfRoom}`;
    const { data } = await axiosInstance.get('/customers-customers-customers?'+param);
    return data;
  };
  // const getDetail = async (id) => {
  //   const { data } = await axiosInstance.get('/customers-customers-customers?id='+id);
  //   return data;
  // };
  const addRoom = async (param) => {
    const { data } = await axiosInstance.get('/customers-customers-customers?param='+param);
    return data;
  };
  const updateRoom = async (id) => {
    const { data } = await axiosInstance.put('/customers-customers-customers?param='+id);
    return data;
  };
  const deleteRoom = async (id) => {
    const { data } = await axiosInstance.delete('/customers-customers-customers?param='+id);
    return data;
  };
  return { getList, addRoom, updateRoom, deleteRoom };
};
