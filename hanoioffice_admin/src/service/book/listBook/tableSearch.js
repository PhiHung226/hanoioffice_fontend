// import {getYearMonthDay} from '../../../helpers/helper';

import {axiosInstance} from '../../../config/axios';

export const tableSearch = () => {
  const getListNumberPeoPle = async ({valueBranch = 0, valueType = 0}) => {
    const {data} = await axiosInstance.get('/room/find_all');
    return dataProcesing(setDataNew(data), valueBranch, valueType);
  };
  return {getListNumberPeoPle};
};

const setDataNew = (data) => {
  return data.map(i => {
    return {
      id: i.id,
      name: i.soChoNgoi.toString(),
      idBranch: i.branch1.id,
      idTypeRoom: i.typeRoom.id,
      soChoNgoi: i.soChoNgoi,
      nameRoom: i.name
    };
  });
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
        });
      }
    }
    const nameRoom = [];
    const room = new Map();
    for (const item of dataNew) {
      if (!room.has(item.soChoNgoi)) {
        room.set(item.soChoNgoi, false);    // set any value to Map
        nameRoom.push({
          id: item.id,
          name: item.nameRoom
        });
      }
    }
    return {
      numberPeople: dataUnilque.length === 0 ? [{id: '', name: 'Chưa có dữ liệu'}] : dataUnilque,
      nameRoom: nameRoom.length === 0 ? [{id: '', name: 'Chưa có dữ liệu'}] : nameRoom
    };
    // return dataUnilque.length === 0 ? {
    //   numberPeople: [{id: '', name: 'Chưa có dữ liệu'}],
    //   nameRoom: [{id: '', name: 'Chưa có dữ liệu'}]
    // } : dataReturn;
  } else {
    return {
      numberPeople: [{id: '', name: 'Chưa có dữ liệu'}],
      nameRoom: [{id: '', name: 'Chưa có dữ liệu'}]
    };
  }
};