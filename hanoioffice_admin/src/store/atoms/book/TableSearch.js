import {atom} from 'recoil';

const today = new Date();
export const tableSearchFilterParamsState = atom({
  key: 'tableSearchFilterParamsState',
  default: {
    strSearch: '',
    codeSearch: '',
    debitSearch: 99,
    from_date: today,
    to_date: today,
  }
});

export const tableSearchColumnTableState = atom({
  key: 'tableSearchColumnTableState',
  default: [
    {
      field: 'detail',
      headerName: 'Chi tiết',
      width: 100,
      sortable: false,
      description: 'Chi tiết',
      cellClassName: 'cursor-pointer'
    },
    {
      field: 'nameCustomer',
      headerName: 'Tên khách hàng',
      width: 100,
      sortable: false,
      description: 'Tên khách hàng'
    },
    {field: 'numberPhone', headerName: 'Số điện thoại', width: 100, sortable: false, description: 'Số điện thoại'},
    {field: 'createDate', headerName: 'Ngày dặt lịch', width: 100, sortable: false, description: 'Ngày đặt lịch'},
    {
      field: 'statusOrder',
      headerName: 'Trạng thái  đặt lịch̉',
      width: 100,
      sortable: false,
      description: 'Trạng thái đặt lịch'
    },
    {
      field: 'statusPay',
      headerName: 'Trang thái thanh toán',
      width: 100,
      sortable: false,
      description: 'Trạng thái thanh toán'
    }
  ]
});