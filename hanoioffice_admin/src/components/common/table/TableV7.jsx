import * as React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import {
  DataGrid, GridOverlay,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  // GridToolbarDensitySelector,
  // GridToolbarExport,
  // GridToolbar 
} from '@material-ui/data-grid';
// import { GridCellParams } from '@material-ui/data-grid';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
// import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/styles';
import ReactPaginate from 'react-paginate';

import SelectInput from '../../../components/base/input/SelectInput';
import InputLabel from '../../../components/common/InputLabel';

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
    type: 'number',
    width: 180,
    description: 'Tuổi',
    hide: false
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

const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexDirection: 'column',
      '& .ant-empty-img-1': {
        fill: theme.palette.type === 'light' ? '#aeb8c2' : '#262626',
      },
      '& .ant-empty-img-2': {
        fill: theme.palette.type === 'light' ? '#f5f5f7' : '#595959',
      },
      '& .ant-empty-img-3': {
        fill: theme.palette.type === 'light' ? '#dce0e6' : '#434343',
      },
      '& .ant-empty-img-4': {
        fill: theme.palette.type === 'light' ? '#fff' : '#1c1c1c',
      },
      '& .ant-empty-img-5': {
        fillOpacity: theme.palette.type === 'light' ? '0.8' : '0.08',
        fill: theme.palette.type === 'light' ? '#f5f5f5' : '#fff',
      },
    },
    label: {
      marginTop: theme.spacing(1),
    },
  }),
  { defaultTheme },
);

const CustomNoRowsOverlay = () => {
  const classes = useStyles();

  return (
    <GridOverlay className={ classes.root }>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <div className={ classes.label }>Không có dữ liệu!</div>
    </GridOverlay>
  );
};
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
        marginPagesDisplayed={ 2 }
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
// const DemoFilter = () => {
//   return (
//     <h1>Lọc</h1>
//   );
// };
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      {/* <div className="px-4" /> */ }
      {/* <GridToolbarFilterButton /> */ }
      {/* <GridToolbarDensitySelector /> */ }
      {/* <div className="px-4" /> */ }
      {/* <GridToolbarExport /> */ }
      <div className="px-4" />
      {/* <DemoFilter /> */ }
    </GridToolbarContainer>
  );
};
const DataGridDemo = () => {
  return (
    <div style={ { height: 729, width: '100%' } }>
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
        // filterModel={ {
        //   items: [
        //     { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
        //   ],
        // } }
        // aria-label={ 'Công ty cổ phần HaNoiOffice' }
        // className="pt-24"
        // loading={ true }
        // page={ 2 }
        // rowsPerPageOptions={ [ 5, 10, 20 ] }
        // rowPerPageOptions={ [ 15, 30, 45 ] }
        onCellClick={ getDemo }
      />
    </div>
  );
};
export default DataGridDemo;
