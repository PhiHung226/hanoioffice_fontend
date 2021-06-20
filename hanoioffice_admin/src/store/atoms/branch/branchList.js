import { atom } from 'recoil';

const today = new Date();
export const listBranchFilterParamsState = atom({
  key: 'listBranchFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    // nameSearch: '',
    // orderType: 99,
    // branchSearch: [],
    // statusSearch: 99,
    // Branchale: [],
    // employeePT: [],
    // tablePriceSearch: [],
    // promotionSearch: [],
    debitSearch: 99,
    from_date: today,
    to_date: today,
    // from_date_expire: '',
    // to_date_expire: '',
    // status_expire: 99
  }
});

export const listBranchPageLimitState = atom({
  key: 'listBranchPageLimitState',
  default: 15
});

export const listBranchPageState = atom({
  key: 'listBranchPageState',
  default: 1
});

export const listBranchColumnTableState = atom({
  key: 'listBranchColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 100, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_branch', headerName: 'Mã chi nhánh', width: 150, sortable: false, description: 'Mã chi nhánh' },
    { field: 'name_branch', headerName: 'Tên chi nhánh', width: 250, sortable: false, description: 'Tên chi nhánh' },
    { field: 'address_branch', headerName: 'Địa chỉ', width: 350, sortable: false, description: 'Địa chỉ' },
    { field: 'service_component', headerName: 'Thành phần dịch vụ', width: 200, sortable: false, description: 'Thành phần dịch vụ chi nhánh' },
    { field: 'number_employees', headerName: 'Số lượng nhân viên', width: 200, sortable: false, description: 'Số lượng nhân viên của chi nhánh' },
    { field: 'note', headerName: 'Ghi chú', width: 350, sortable: false, description: 'Ghi chú' },
  ]
});