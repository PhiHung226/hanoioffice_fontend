import {axiosInstance} from '../../../config/axios';
import {getYearMonthDay} from '../../../helpers/helper';

export const getListCustomer = () => {
  // const getList = async (value) => {
  //   const {page = '1', pageLimit = '15', strSearch ='', nameRoom='',
  //     numberPeople='', branchRoom=[], kindOfRoom=''}= value;
  //   const param = `page=${page}&pageLimit=${pageLimit}&strSearch=${strSearch}`+
  //     `&nameRoom=${nameRoom}&numberPeople=${numberPeople}&branchRoom=${branchRoom}&kindOfRoom=${kindOfRoom}`;
  //   const { data } = await axiosInstance.get('/customers-customers-customers?'+param);
  //   return data;
  // return dataProcesing(data, page, pageLimit, [strSearch, nameRoom, numberPeople, kindOfRoom], branchRoom);
  // };
  // const getDetail = async (id) => {
  //   const { data } = await axiosInstance.get('/customers-customers-customers?id='+id);
  //   return data;
  // };
  const getList = async (value) => {
    const {
      page = '1', pageLimit = '15', strSearch = '', nameRoom = '',
      numberPeople = '', branchRoom = [], kindOfRoom = []
    } = value;
    const {data} = await axiosInstance.get('/customer/find_all');
    return dataProcesing(setDataNew(data), page, pageLimit, [strSearch, nameRoom, numberPeople], kindOfRoom, branchRoom);
  };
  
  const addRoom = async (value) => {
    console.log(value);
    const {data} = await axiosInstance.get('/typeroom/insert', {...value});
    return data;
  };
  const updateRoom = async (id) => {
    const {data} = await axiosInstance.put('/customers-customers-customers?param=' + id);
    return data;
  };
  const deleteRoom = async (id) => {
    const {data} = await axiosInstance.delete('/customers-customers-customers?param=' + id);
    return data;
  };
  return {addRoom, updateRoom, deleteRoom, getList};
};

const dataProcesing = (data, page, limit, filter, kindOfRoom, branchRoom) => {
  if (data.length > 0) {
    const dataId = data.filter(i => (filter[0] !== '' ? i.codeRoom === filter[0] : true)
      && (filter[1] !== '' ? i.name === filter[1] : true)
      && (filter[2] !== '' ? i.soChoNgoi.toString() === filter[2] : true)
      && (branchRoom.length > 0 ? branchRoom.includes(i.idBranch) : true)
      && (kindOfRoom.length > 0 ? kindOfRoom.includes(i.typeRoom) : true));
    
    const startLimit = (page - 1) * limit;
    const endLimit = page * limit > data.length ? data.length : page * limit;
    const dataNew = dataId.slice(startLimit, endLimit);
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
      detail: 'Xem',
      gender: i.gender ? 'Nam' : 'Nữ',
      birthDay: getYearMonthDay(i.birthDay, 'dd-MM-yyyy'),
      createDate: getYearMonthDay(i.createDate, 'dd-MM-yyyy'),
      fullName: i.lastName + ' ' + i.firstName,
      status: i.status ? 'Đang sử dụng' : 'Chưa sử dụng',
    };
  });
};

// 1. Đang sử dụng
// 2. Ngừng sử dụng
// 3. Chưa sử dụng
// 4. Đã sử dụng xong