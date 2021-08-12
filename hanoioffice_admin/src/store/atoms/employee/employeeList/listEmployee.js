import { atom } from 'recoil';

const today = new Date();
export const listEmployeesFilterParamsState = atom({
  key: 'listEmployeesFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    // nameSearch: '',
    // orderType: 99,
    // branchSearch: [],
    // statusSearch: 99,
    // employeeSale: [],
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

export const listEmployeesPageLimitState = atom({
  key: 'listEmployeesPageLimitState',
  default: 15
});

export const listEmployeesPageState = atom({
  key: 'listEmployeesPageState',
  default: 1
});

export const listEmployeesColumnTableState = atom({
  key: 'listEmployeesColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'codeStaff', headerName: 'Mã nhân viên', width: 150, sortable: false, description: 'Mã nhân viên' },
    { field: 'image', headerName: 'Ảnh', width: 100, sortable: false, description: 'Ảnh' },
    { field: 'fullName', headerName: 'Họ tên', width: 150, sortable: false, description: 'Họ và tên' },
    { field: 'branchName', headerName: 'Chi nhánh', width: 200, sortable: false, description: 'Chi nhánh' },
    { field: 'roleName', headerName: 'Chức vụ', width: 150, sortable: false, description: 'Chức vụ' },
    { field: 'gender', headerName: 'Giới tính', width: 150, sortable: false, description: 'Giới tính' },
    { field: 'birthDay', headerName: 'Ngày sinh', width: 150, sortable: false, description: 'Ngày sinh' },
    { field: 'phoneNumber', headerName: 'Số điện thoại', width: 150, sortable: false, description: 'Số điện thoại nhân viên' },
    { field: 'email', headerName: 'Email', width: 150, sortable: false, description: 'Email nhân viên' },
    { field: 'address', headerName: 'Địa chỉ', width: 200, sortable: false, description: 'Địa chỉ' },
    { field: 'queQuan', headerName: 'Quê quán', width: 200, sortable: false, description: 'Quê quán' },
    { field: 'hktt', headerName: 'HKTT', width: 200, sortable: false, description: 'Hộ khẩu thường trú' },
    { field: 'createDate', headerName: 'Ngày vào', width: 150, sortable: false, description: 'Ngày vào' },
    { field: 'status', headerName: 'Trạng thái', width: 150, sortable: false, description: 'Trạng thái' },
    { field: 'description', headerName: 'Ghi chú', width: 150, sortable: false, description: 'Ghi chú' },
  ]
});