import { axiosInstance } from '../../../config/axios';

export const getListRoom = () => {
  const getList1 = async (value) => {
    const {page = '1', pageLimit = '15', strSearch ='', nameRoom='',
      numberPeople='', branchRoom=[], kindOfRoom=[]}= value;
    const { data } = await axiosInstance.get('/room/find_all');
    return dataProcesing(setDataNew(data), page, pageLimit, [strSearch, nameRoom, numberPeople],kindOfRoom, branchRoom);
  };
  
  const addRoom = async (param) => {
    const { data } = await axiosInstance.get('/customers-customers-customers?param=' + param);
    return data;
  };
  const updateRoom = async (id) => {
    const { data } = await axiosInstance.put('/customers-customers-customers?param=' + id);
    return data;
  };
  const deleteRoom = async (id) => {
    const { data } = await axiosInstance.delete('/customers-customers-customers?param=' + id);
    return data;
  };
  return { addRoom, updateRoom, deleteRoom, getList1 };
};

const dataProcesing = (data, page, limit, filter, kindOfRoom, branchRoom) => {
  if(data.length > 0) {
    
    const dataId = data.filter(i => (filter[0] !== '' ? i.codeRoom === filter[0] : true)
      && (filter[1] !== '' ? i.name === filter[1] : true)
      && (filter[2] !== '' ? i.soChoNgoi.toString() === filter[2] : true)
      && (branchRoom.length > 0 ? branchRoom.includes(i.idBranch) : true)
      && (kindOfRoom.length > 0 ? kindOfRoom.includes(i.idTypeRoom) : true));
    
    const startLimit = (page - 1)*limit;
    const endLimit = page*limit > data.length ? data.length : page*limit;
    const dataNew =  dataId.slice(startLimit, endLimit);
    return {
      data: dataNew,
      meta: {
        total_data: data.length,
        total_dataNew: dataNew.length,
        total_dataPage: dataId.length
      }
    };
  } else {
    return {
      data: [],
      meta: {
        total_data: 0
      }
    };
  }
};
const setDataNew = (data) => {
  return data.map(i => {
    return {
      ...i,
      id: i.id,
      detail: 'Xem',
      idTypeRoom: i.typeRoom.id,
      nameTypeRoom: i.typeRoom.name,
      idBranch: i.branch1.id,
      nameBranch: i.branch1.name,
      address: i.branch1.address,
    };
  });
};