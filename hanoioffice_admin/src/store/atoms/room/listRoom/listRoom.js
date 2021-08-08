import { atom } from 'recoil';

// const today = new Date();
export const listRoomFilterParamsState = atom({
  key: 'listRoomFilterParamsState',
  default: {
    strSearch: '',
    nameRoom: '',
    numberPeople: '',
    kindOfRoom: [],
    branchRoom: []
  }
});

export const listRoomPageLimitState = atom({
  key: 'listRoomPageLimitState',
  default: 15
});

export const listRoomPageState = atom({
  key: 'listRoomPageState',
  default: 1
});

export const listRoomColumnTableState = atom({
  key: 'listRoomColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id', headerName: 'Mã phòng', width: 200, sortable: false, description: 'Mã phòng' },
    { field: 'nameRoom', headerName: 'Tên phòng', width: 250, sortable: false, description: 'Tên phòng' },
    { field: 'nameType', headerName: 'Loại phòng', width: 200, sortable: false, description: 'Loại phòng' },
    { field: 'nameBranch', headerName: 'Chi nhánh', width: 200, sortable: false, description: 'Chi nhánh' },
    { field: 'place', headerName: 'Vị trí phòng', width: 150, sortable: false, description: 'Vị trí phòng' },
    { field: 'peopleRoom', headerName: 'Phòng chứa tối đa', width: 150, sortable: false, description: 'Phòng chứa tối đa' },
    { field: 'data_start', headerName: 'Ngày tạo', width: 150, sortable: false, description: 'Thời gian bắt đầu sử dụng phòng' },
    { field: 'date_stop', headerName: 'Ngày ngừng', width: 150, sortable: false, description: 'Thời gian ngừng sử dụng phòng' },
    { field: 'note', headerName: 'Ghi chú', width: 300, sortable: false, description: 'Ghi chú' },
  ]
});