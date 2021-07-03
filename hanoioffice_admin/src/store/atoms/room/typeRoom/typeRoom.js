import { atom } from 'recoil';

const today = new Date();
export const typeRoomFilterParamsState = atom({
  key: 'typeRoomFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const typeRoomPageLimitState = atom({
  key: 'typeRoomPageLimitState',
  default: 15
});

export const typeRoomPageState = atom({
  key: 'typeRoomPageState',
  default: 1
});

export const typeRoomColumnTableState = atom({
  key: 'typeRoomColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_contract', headerName: 'Mã loại phòng', width: 200, sortable: false, description: 'Mã loại phòng' },
    { field: 'name_contract', headerName: 'Tên loại phòng', width: 350, sortable: false, description: 'Tên loại phòng' },
    { field: 'data_start', headerName: 'Ngày tạo', width: 200, sortable: false, description: 'Thời gian bắt đầu sử dụng loại phòng' },
    { field: 'date_stop', headerName: 'Thời gian ngừng sử dụng', width: 200, sortable: false, description: 'Thời gian ngừng sử dụng loại phòng' },
    { field: 'note', headerName: 'Ghi chú', width: 400, sortable: false, description: 'Ghi chú' },
  ]
});