import {axiosInstance} from '../../../config/axios';
import {getYearMonthDay} from '../../../helpers/helper';

export const getListBranchs = () => {
  const getListArr = async () => {
    const {data} = await axiosInstance.get('/branch/find_all');
    return data;
  };

  const getList = async (value) => {
    const {page = '1', pageLimit = '15'} = value;
    const {data} = await axiosInstance.get('/branch/find_all');
    return dataProcesing(setDataNew(data), page, pageLimit);
  };

  const getListArray = async () => {
    const {data} = await axiosInstance.get('/branch/find_all');
    return data;
  };

  const getDetail = async () => {
    const {data} = await axiosInstance.get('/branchs-branchs-branchs');
    return data;
  };
  return {getListArr, getList, getDetail, getListArray};
};
const dataProcesing = (data, page, limit) => {
  if (data.length > 0) {
    const startLimit = (page - 1) * limit;
    const endLimit = page * limit > data.length ? data.length : page * limit;
    const dataNew = data.slice(startLimit, endLimit);
    return {
      data: dataNew,
      meta: {
        total_data: data.length,
        total_dataNew: dataNew.length,
        total_dataPage: data.length
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
      createDate: getYearMonthDay(i.createDate, 'dd-MM-yyyy'),
      statusBranch: i.status ? 'Hoạt động' : 'Ngừng hoạt động'
    };
  });
};