import {atom} from 'recoil';

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
    {
      field: 'detail',
      headerName: 'Chi tiết',
      width: 80,
      sortable: false,
      description: 'Chi tiết',
      cellClassName: 'cursor-pointer'
    },
    {field: 'codeBranch', headerName: 'Mã chi nhánh', width: 150, sortable: false, description: 'Mã chi nhánh'},
    {field: 'name', headerName: 'Tên chi nhánh', width: 200, sortable: false, description: 'Tên chi nhánh'},
    {field: 'address', headerName: 'Địa chỉ', width: 300, sortable: false, description: 'Địa chỉ'},
    {
      field: 'phoneNumber',
      headerName: 'SĐT chi nhánh',
      width: 150,
      sortable: false,
      description: 'Số điện thoại chi nhánh'
    },
    {
      field: 'branchManager',
      headerName: 'Tên quản lý',
      width: 150,
      sortable: false,
      description: 'Quản lý của chi nhánh'
    },
    {
      field: 'phoneNumberManager',
      headerName: 'SĐT của quản lý',
      width: 150,
      sortable: false,
      description: 'Số điện thoại của quản lý'
    },
    {field: 'createDate', headerName: 'Ngày tạo', width: 170, sortable: false, description: 'Ngày tạo chi nhánh'},
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 170,
      sortable: false,
      description: 'Trạng thái hoạt động của chi nhánh'
    },
    {field: 'description', headerName: 'Ghi chú', width: 290, sortable: false, description: 'Ghi chú'},
  ]
});