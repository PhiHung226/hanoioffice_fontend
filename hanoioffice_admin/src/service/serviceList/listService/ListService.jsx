import {axiosInstance} from '../../../config/axios';
import {getYearMonthDay} from '../../../helpers/helper';

export const getListService = () => {
  // const getList = async (value) => {
  //   const {
  //     page = '1', pageLimit = '15', strSearch = '', codeSearch = ''
  //   } = value;
  //   const {data} = await axiosInstance.get('/service/find_all');
  //   return dataProcesing(setDataNew(data), page, pageLimit, [strSearch, codeSearch]);
  // };
  const getList = async (value) => {
    const {
      page = '1', pageLimit = '15', strSearch = '', nameRoom = '',
      numberPeople = '', branchRoom = [], kindOfRoom = []
    } = value;
    const {data} = await axiosInstance.get('/service/find_all');
    return dataProcesing(setDataNew(data), page, pageLimit, [strSearch, nameRoom, numberPeople], kindOfRoom, branchRoom);
  };
  const getDetail = async () => {
    const {data} = await axiosInstance.get('/employees-employees-employees');
    return data;
  };
  return {getList, getDetail};
};

const dataProcesing = (data, page, limit, filter) => {
  if (data.length > 0) {
    const dataId = data.filter(i => (filter[0] !== '' ? i.codeService === filter[0] : true)
      && (filter[1] !== '' ? i.name === filter[1] : true));
    const startLimit = (page - 1) * limit;
    const endLimit = page * limit > data.length ? data.length : page * limit;
    const dataNew = dataId.slice(startLimit, endLimit);
    return {
      data: data,
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
      createDate: getYearMonthDay(i.createDate, 'dd-MM-yyy'),
      statusService: i.status
    };
  });
};