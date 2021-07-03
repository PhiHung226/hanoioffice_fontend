import { atom } from 'recoil';

const today = new Date();
export const equiqmentListFilterParamsState = atom({
  key: 'equiqmentListFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const equiqmentListPageLimitState = atom({
  key: 'equiqmentListPageLimitState',
  default: 15
});

export const equiqmentListPageState = atom({
  key: 'equiqmentListPageState',
  default: 1
});

export const equiqmentListColumnTableState = atom({
  key: 'equiqmentListColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_contract', headerName: 'Mã tiện ích', width: 200, sortable: false, description: 'Mã tiện ích' },
    { field: 'name_contract', headerName: 'Tên tiện ích', width: 350, sortable: false, description: 'Tên tiện ích' },
    { field: 'name_branch', headerName: 'Số lượng', width: 150, sortable: false, description: 'Số lượng' },
    { field: 'data_start', headerName: 'Thời gian bắt đầu', width: 200, sortable: false, description: 'Thời gian bắt đầu sử dụng tiện ích' },
    { field: 'date_stop', headerName: 'Thời gian kết thúc', width: 200, sortable: false, description: 'Thời gian kết thúc sử dụng tiên ích' },
    { field: 'note', headerName: 'Ghi chú', width: 270, sortable: false, description: 'Ghi chú' },
  ]
});