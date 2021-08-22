import {axiosInstance} from '../../../config/axios';
import {formatCurrency, getYearMonthDay} from '../../../helpers/helper';

export const getListTypeRoom = () => {
  const getListArr = async () => {
    const {data} = await axiosInstance.get('/typeroom/find_all');
    return data;
  };
  const getList = async (value) => {
    const {
      page = '1', pageLimit = '15', strSearch = '', nameRoom = '',
      numberPeople = '', branchRoom = [], kindOfRoom = []
    } = value;
    const {data} = await axiosInstance.get('/typeroom/find_all');
    console.log(data);
    return dataProcesing(setDataNew(data), page, pageLimit, [strSearch, nameRoom, numberPeople], kindOfRoom, branchRoom);
  };
  
  const getDetail = async (id) => {
    const {data} = await axiosInstance.get(`/typeroom/find_by_id/${id}`);
    return data;
  };
  const addRoom = async (value) => {
    const {data} = await axiosInstance.post('/typeroom/insert', {...value});
    return data;
  };
  const updateTypeRoom = async (params) => {
    const {id, value} = params;
    const {data} = await axiosInstance.get(`/typeroom/update/${id}`, {...value});
    return data;
  };
  const updateStatusTypeRoom = async (id, value) => {
    const {data} = await axiosInstance.get(`/typeroom/update/${id}`, {...value});
    return data;
  };
  const deleteTypeRoom = async (id) => {
    const {data} = await axiosInstance.get(`/typeroom/delete/${id}`);
    return data;
  };
  return {getListArr, getList, getDetail, addRoom, updateTypeRoom, deleteTypeRoom, updateStatusTypeRoom};
};

const dataProcesing = (data, page, limit, filter, kindOfRoom, branchRoom) => {
  if (data.length > 0) {
    const dataId = data.filter(i => (filter[0] !== '' ? i.codeRoom === filter[0] : true)
      && (filter[1] !== '' ? i.name === filter[1] : true)
      && (filter[2] !== '' ? i.soChoNgoi.toString() === filter[2] : true)
      && (branchRoom.length > 0 ? branchRoom.includes(i.idBranch) : true)
      && (kindOfRoom.length > 0 ? kindOfRoom.includes(i.idTypeRoom) : true));
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
      status: i.status ? 'Có' : 'Không',
      createDate: getYearMonthDay(i.createDate, 'dd-MM-yyyy'),
      priceTypeRoom: formatCurrency(i.priceTypeRoom)
    };
  });
};