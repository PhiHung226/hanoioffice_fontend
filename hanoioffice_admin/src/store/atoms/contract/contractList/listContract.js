import { atom } from 'recoil';

const today = new Date();
export const listContractFilterParamsState = atom({
  key: 'listContractFilterParamsState',
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

export const listContractPageLimitState = atom({
  key: 'listContractPageLimitState',
  default: 15
});

export const listContractPageState = atom({
  key: 'listContractPageState',
  default: 1
});

export const listContractColumnTableState = atom({
  key: 'listContractColumnTableState',
  default: [
    { field: 'detail', headerName: 'Chi tiết', width: 80, sortable: false, description: 'Chi tiết', cellClassName: 'cursor-pointer' },
    { field: 'id_contract', headerName: 'Mã hợp đồng', width: 120, sortable: false, description: 'Mã hợp đồng' },
    { field: 'name_contract', headerName: 'Tên hợp đồng', width: 150, sortable: false, description: 'Tên hợp đồng' },
    { field: 'name_branch', headerName: 'Tên chi nhánh', width: 150, sortable: false, description: 'Tên chi nhánh' },
    { field: 'name_room_type', headerName: 'Tên loại phòng', width: 150, sortable: false, description: 'Tên loại phòng' },
    { field: 'id_customer', headerName: 'Mã khách hàng', width: 150, sortable: false, description: 'Mã khách hàng' },
    { field: 'name_customer', headerName: 'Tên khách hàng', width: 150, sortable: false, description: 'Tên khách hàng' },
    { field: 'signing_time', headerName: 'Thời gian ký', width: 150, sortable: false, description: 'Thời gian ký' },
    { field: 'start_time', headerName: 'Thời gian bắt đầu', width: 150, sortable: false, description: 'Thời gian bắt đầu' },
    { field: 'end_time', headerName: 'Thời gian kết thúc', width: 150, sortable: false, description: 'Thời gian kết thúc' },
    { field: 'time_remaining', headerName: 'Thời gian còn lại', width: 150, sortable: false, description: 'Thời gian còn lại' },
    { field: 'number_of_equipment', headerName: 'Số lượng thiết bị', width: 150, sortable: false, description: 'Số lượng thiết bị' },
    { field: 'note', headerName: 'Ghi chú', width: 150, sortable: false, description: 'Ghi chú' },
  ]
});