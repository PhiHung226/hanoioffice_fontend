import {axiosInstance} from '../../config/axios';
// import {getYearMonthDay} from '../../../helpers/helper';

export const getListBook = () => {
  const getListBranch = async () => {
    const {data} = await axiosInstance.get('/branch/find_all');
    return data;
  };
  const getListTypeRoom = async () => {
    const {data} = await axiosInstance.get('/typeroom/find_all');
    return data;
  };
  const getListNumberPeoPle = async ({branch, typeRoom}) => {
    const {data} = await axiosInstance.get('/room/find_all');
    return dataProcesing(setDataNew(data), branch, typeRoom);
  };
  const getListTime = async () => {
    const {data} = await axiosInstance.get('/shift/find_all');
    return setDataTime(data);
  };
  const getListService = async () => {
    const {data} = await axiosInstance.get('/service/find_all');
    return setServiceList(data);
  };
  const getDetail = async () => {
    const {data} = await axiosInstance.get('/employees-employees-employees');
    return data;
  };
  const orderBookLT = async (value) => {
    const {data} = await axiosInstance.post('/book/bookroomlt', {...value});
    return data;
  };
  const orderBookKLT = async (value) => {
    const {data} = await axiosInstance.post('/book/bookroomklt', {...value});
    return data;
  };
  return {
    getListBranch,
    getDetail,
    getListTypeRoom,
    getListNumberPeoPle,
    getListTime,
    getListService,
    orderBookLT,
    orderBookKLT
  };
};

const dataProcesing = (data, branch, typeRoom) => {
  if (data.length > 0) {
    const dataNew = data.filter(i => (branch !== '' ? i.idBranch === branch : true)
      && (typeRoom !== '' ? i.idTypeRoom === typeRoom : true));
    
    // const dataUnilque = [];
    // dataUnilque.forEach(i => {
    //   const index = dataNew.findIndex(j => i.soChoNgoi === j.soChoNgoi);
    //   if (index === -1) {
    //     dataUnilque.push(dataNew[index]);
    //   }
    // });
    
    const dataUnilque = [];
    const map = new Map();
    for (const item of dataNew) {
      if (!map.has(item.soChoNgoi)) {
        map.set(item.soChoNgoi, true);    // set any value to Map
        dataUnilque.push({
          id: item.id,
          name: item.name,
          soChoNgoi: item.soChoNgoi
        });
      }
    }
    return dataUnilque.length === 0 ? [{id: '', name: 'Chưa có dữ liệu'}] : dataUnilque;
  } else {
    return [{id: '', name: 'Chưa có dữ liệu'}];
  }
};
const setDataNew = (data) => {
  return data.map(i => {
    return {
      id: i.id,
      name: i.soChoNgoi.toString(),
      idBranch: i.branch1.id,
      idTypeRoom: i.typeRoom.id,
      soChoNgoi: i.soChoNgoi
    };
  });
};

const setDataTime = (data) => {
  return data.map(i => ({
    ...i,
    checked: false,
    value: i.startTime + '-' + i.endTime
  }));
};
const setServiceList = (data) => {
  return data.map(i => ({
    ...i,
    checked: false,
    value: i.name,
  }));
};
// const array = [
//   { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
//   { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
//   { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
//   { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
// ];
// const result = [];
// const map = new Map();
// for (const item of array) {
//   if(!map.has(item.id)){
//     map.set(item.id, true);    // set any value to Map
//     result.push({
//       id: item.id,
//       name: item.name
//     });
//   }
// }
// console.log(result)