import { atom } from 'recoil';

const today = new Date();
export const listCustomerFilterParamsState = atom({
  key: 'listCustomerFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    // nameSearch: '',
    // orderType: 99,
    // branchSearch: [],
    // statusSearch: 99,
    // Customerale: [],
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

export const listCustomerPageLimitState = atom({
  key: 'listCustomerPageLimitState',
  default: 15
});

export const listCustomerPageState = atom({
  key: 'listCustomerPageState',
  default: 1
});

export const listCustomerColumnTableState = atom({
  key: 'listCustomerColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 100, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_customer', headerName: 'Mã khách hàng', width: 150, sortable: false, description: 'Mã khách hàng' },
    { field: 'image_customer', headerName: 'Ảnh', width: 100, sortable: false, description: 'Ảnh' },
    { field: 'name_customer', headerName: 'Họ tên', width: 150, sortable: false, description: 'Họ và tên' },
    { field: 'branch', headerName: 'Chi nhánh', width: 250, sortable: false, description: 'Chi nhánh' },
    { field: 'completion_rate', headerName: 'Tỉ lệ hoàn thành', width: 160, sortable: false, description: 'Tỉ lệ hoàn thành' },
    { field: 'status', headerName: 'Trạng thái hoàng thành', width: 200, sortable: false, description: 'Trạng thái hoàng thành' },
    { field: 'sex_customer', headerName: 'Giới tính', width: 150, sortable: false, description: 'Giới tính' },
    { field: 'birthday', headerName: 'Ngày sinh', width: 150, sortable: false, description: 'Ngày sinh' },
    { field: 'phone', headerName: 'Số điện thoại', width: 150, sortable: false, description: 'Số điện thoại nhân viên' },
    { field: 'email', headerName: 'Email', width: 150, sortable: false, description: 'Email nhân viên' },
    { field: 'address', headerName: 'Địa chỉ', width: 150, sortable: false, description: 'Địa chỉ' },
    { field: 'home_town', headerName: 'Quê quán', width: 150, sortable: false, description: 'Quê quán' },
    { field: 'permanent_residence', headerName: 'HKTT', width: 150, sortable: false, description: 'Hộ khẩu thường trú' },
    { field: 'company_name', headerName: 'Tên công ty', width: 150, sortable: false, description: 'Tên công ty' },
    { field: 'company_address', headerName: 'Địa chỉ công ty', width: 150, sortable: false, description: 'Địa chỉ' },
    { field: 'company_phone', headerName: 'SĐT công ty', width: 150, sortable: false, description: 'SĐT công ty' },
    { field: 'company_email', headerName: 'Email', width: 150, sortable: false, description: 'Email' },
    { field: 'note', headerName: 'Ghi chú', width: 150, sortable: false, description: 'Ghi chú' },
  ]
});