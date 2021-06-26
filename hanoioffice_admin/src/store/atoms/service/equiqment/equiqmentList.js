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
    { field: 'id_contract', headerName: 'Mã thiết bị', width: 120, sortable: false, description: 'Mã thiết bị' },
    { field: 'name_contract', headerName: 'Tên thiết bị', width: 150, sortable: false, description: 'Tên thiết bị' },
    { field: 'name_branch', headerName: 'Số lượng', width: 150, sortable: false, description: 'Số lượng' },
    { field: 'name_room_type', headerName: 'Thời gian lưu', width: 150, sortable: false, description: 'Thời gian bắt đầu lưu' },
    { field: 'note', headerName: 'Ghi chú', width: 150, sortable: false, description: 'Ghi chú' },
  ]
});