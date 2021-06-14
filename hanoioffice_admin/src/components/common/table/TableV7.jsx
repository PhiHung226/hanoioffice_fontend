import * as React from 'react';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton
} from '@material-ui/data-grid';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ReactPaginate from 'react-paginate';

import SelectInput from '../../../components/base/input/SelectInput';
import InputLabel from '../../../components/common/InputLabel';
import CustomNoRowsOverlay from './tableDetail/CustomNoRowsOverlay';

const getDemo = (params) => {
  if (params.field === 'detail') {
    console.log(params);
  }
};
const columns = [
  {
    field: 'detail',
    headerName: 'Chi tiết',
    width: 90,
    sortable: false,
    cellClassName: 'cursor-pointer',
  },
  { field: 'id', headerName: 'ID', width: 90, sortable: false },
  { field: 'firstName', headerName: 'First name', width: 150, sortable: false },
  { field: 'lastName', headerName: 'Last name', width: 150, sortable: false },
  {
    field: 'age',
    headerName: 'Age',
    // type: 'number',
    width: 80,
    description: 'Tuổi',
    // hide: false
    sortable: false
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName1',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName2',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName3',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName4',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName5',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
  {
    field: 'fullName6',
    headerName: 'Full name',
    description: 'Họ và tên',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
  },
];

const rows = [
  { detail: 'Xem', id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { detail: 'Xem', id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { detail: 'O', id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const pageDemo = (prams) => {
  console.log(prams);

};
const listPageLimit = [ { id: 15, name: '15' }, { id: 30, name: '30' }, { id: 60, name: '60' } ];
const CustomPagination = () => {
  return (
    <div className="mx-20 flex items-center py-0">
      <ReactPaginate
        containerClassName='flex'
        pageCount={ 10 }
        pageRangeDisplayed={ 3 }
        marginPagesDisplayed={ 1 }
        previousLabel={ <ArrowBackIos /> }
        nextLabel={ <ArrowForwardIos /> }
        initialPage={ 1 }
        pageClassName="px-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium "
        activeLinkClassName="px-3 bg-blue-700 text-white h-7 w-10 rounded-full flex items-center justify-center font-semibold"
        previousClassName="pl-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium"
        nextClassName='hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium ml-2 '
        onPageChange={ pageDemo }
      />
      <InputLabel label={ 'Giới hạn' } className="pl-24">
        <SelectInput value={ { id: 15, name: '15' } }
          dataArr={ listPageLimit } className="mr-2 -ml-10 w-1" classNameItem="w-full m-0 table-selectInput-MuiInput-formControl" />
      </InputLabel>
      <div className="flex items-center justify-center font-medium ml-10 text-base pl-48">
        <p>{ `${1} - ${15} trên ${100}` }</p>
      </div>
    </div>
  );
};
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <div className="px-4" />
    </GridToolbarContainer>
  );
};
const DataGridDemo = () => {
  return (
    <div style={ { height: 790, width: '100%' } }>
      <DataGrid
        checkboxSelection={ true }// hộp kiểm thử
        disableSelectionOnClick={ true }// click trên cả thanh
        components={ {
          NoRowsOverlay: CustomNoRowsOverlay,
          Toolbar: CustomToolbar,
          Pagination: CustomPagination,
        } }
        disableColumnMenu={ true }// menu từng cột (dấu 3 chấm)
        disableColumnFilter={ true }//  bộ lọc tổng
        rows={ rows }
        columns={ columns }
        pageSize={ 30 }// số lượng hàng trong bảng
        onCellClick={ getDemo }
      />
    </div>
  );
};
export default DataGridDemo;
