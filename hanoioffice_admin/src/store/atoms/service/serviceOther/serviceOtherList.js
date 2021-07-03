import { atom } from 'recoil';

const today = new Date();
export const serviceOtherListFilterParamsState = atom({
  key: 'serviceOtherListFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const serviceOtherListPageLimitState = atom({
  key: 'serviceOtherListPageLimitState',
  default: 15
});

export const serviceOtherListPageState = atom({
  key: 'serviceOtherListPageState',
  default: 1
});

export const serviceOtherListColumnTableState = atom({
  key: 'serviceOtherListColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_contract', headerName: 'Mã dịch vụ', width: 200, sortable: false, description: 'Mã dịch vụ' },
    { field: 'name_contract', headerName: 'Tên dịch vụ', width: 370, sortable: false, description: 'Tên dịch vụ' },
    { field: 'name_branch', headerName: 'Giá theo giờ', width: 200, sortable: false, description: 'Giá theo giờ' },
    { field: 'date_start', headerName: 'Ngày tạo', width: 200, sortable: false, description: 'Ngày tạo dịch vụ' },
    { field: 'note', headerName: 'Ghi chú', width: 400, sortable: false, description: 'Ghi chú' },
  ]
});