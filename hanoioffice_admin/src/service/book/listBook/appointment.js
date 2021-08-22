import {axiosInstance} from '../../../config/axios';
import {getYearMonthDay} from '../../../helpers/helper';

export const getListAppointment = () => {
  const role = 2;
  const getList = async (value) => {
    const {page = '1', pageLimit = '15'} = value;
    const {data} = await axiosInstance.get('/book/listbookroom');
    return dataProcesing(setDataNew(data, role), page, pageLimit);
  };

  const getDetail = async (id) => {
    const {data} = await axiosInstance.get(`/book/roombookdetailsale?idOrderDetail=${id}`);
    return setDataDetailNew(data);
  };

  const getListTime = async () => {
    const {data} = await axiosInstance.get('/shift/find_all');
    return setDataTime(data);
  };
  return {getList, getDetail, getListTime};
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
        total_data: 0,
        total_dataNew: 0,
        total_dataPage: 0
      }
    };
  }
};
const setDataNew = (data, role) => {
  if (role !== 1) { // lễ tân
    return data.filter(j => j.statusOrder || j.statusPay).map(i => {
      return {
        ...i,
        id: i.idOrderDetail,
        detail: 'Xem',
        createDate: getYearMonthDay(i.createDate, 'dd-MM-yyyy'),
        statusOrder: i.statusOrder ? 'Đã tạo lịch' : 'Chưa tạo lịch',
        statusPay: i.statusPay ? 'Chưa thanh toán' : ''
      };
    });
  } else { // admin
    return data.filter(j => !j.statusOrder && !j.statusPay).map(i => {
      return {
        ...i,
        id: i.idOrderDetail,
        detail: 'Xem',
        createDate: getYearMonthDay(i.createDate, 'dd-MM-yyyy'),
        // statusOrder: i.statusOrder ? 'Chưa tạo lịch' : 'Đã tạo lịch',
        // statusPay: i.statusPay ? 'Chưa thanh toán' : ''
      };
    });
  }
};
const setDataDetailNew = (data) => {
  if (data) {
    return {
      ...data,
      branch: [{...data.branch}]
    };
  } else {
    return {};
  }
};
const setDataTime = (data) => {
  return data.map(i => ({
    ...i,
    checked: false,
    value: i.startTime + '-' + i.endTime
  }));
};