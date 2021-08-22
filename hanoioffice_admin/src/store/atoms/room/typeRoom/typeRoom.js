import {atom} from 'recoil';

const today = new Date();
export const typeRoomFilterParamsState = atom({
  key: 'typeRoomFilterParamsState',
  default: {
    idType: '',
    nameType: '',
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
    {
      field: 'detail',
      headerName: 'Chi tiết',
      width: 80,
      sortable: false,
      description: 'Chi tiết',
      cellClassName: 'cursor-pointer'
    },
    {
      field: 'codeTypeRoom',
      headerName: 'Mã loại phòng',
      width: 200,
      sortable: false,
      description: 'Mã loại phòng'
    },
    {field: 'name', headerName: 'Tên loại phòng', width: 300, sortable: false, description: 'Tên loại phòng'},
    {
      field: 'priceTypeRoom',
      headerName: 'Giá loại phòng',
      width: 150,
      sortable: false,
      description: 'Giá loại phòng'
    },
    {
      field: 'createDate',
      headerName: 'Ngày tạo',
      width: 250,
      sortable: false,
      description: 'Thời gian bắt đầu sử dụng loại phòng'
    },
    // { field: 'date_stop', headerName: 'Thời gian ngừng sử dụng', width: 200, sortable: false, description: 'Thời gian ngừng sử dụng loại phòng' },
    {field: 'status', headerName: 'Đang sử dụng', width: 200, sortable: false, description: 'Đang sử dụng'},
    {field: 'description', headerName: 'Ghi chú', width: 400, sortable: false, description: 'Ghi chú'},
  ]
});